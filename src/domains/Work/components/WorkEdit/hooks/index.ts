import { useState } from 'react';

import { useForm } from 'react-hook-form';

import type { DefaultWork } from '..';
import type { AssetType } from '@/api/@types';
import type { Tag } from '@/domains/Tag';
import type { User } from '@/domains/User';
import type { Asset, WorkDetail } from '@/domains/Work/types';
import type { FieldErrors, UseFormRegisterReturn } from 'react-hook-form';

import { worksRepository } from '@/domains/Work/repository';

export type PreviewWork = {
  title: string;
  description: string;
  thumbnailUrl: string;
  createdAt: string;
  tags: Tag[];
  creator: User;
  isPublic: boolean;
};

type IUseWorkEdit = {
  registers: {
    title: UseFormRegisterReturn<'title'>;
    description: UseFormRegisterReturn<'description'>;
  };
  postDiscord: boolean;
  description: string;
  previewWork: PreviewWork;
  errors: FieldErrors<{
    title: string;
    description: string;
  }>;
  links: string[];
  assets: Asset[];
  handleSetTag: (tag: Tag) => void;
  handleEditDescription: (description: string) => void;
  handleSetLinks: (newLinks: string[]) => void;
  handleUploadAssets: (files: FileList) => Promise<void>;
  handleUploadThumbnail: (file: File) => Promise<void>;
  handleChangeCursor: (cursor: number) => void;
  handleChangeVisibility: (value: 'public' | 'private') => void;
  handlePublish: () => Promise<WorkDetail>;
  handleChangePostDiscord: (value: boolean) => void;
};

const getAssetType = (file: File): AssetType => {
  if (file.type.includes('image')) {
    return 'image';
  }
  if (file.type.includes('video')) {
    return 'video';
  }
  if (file.type.includes('audio')) {
    return 'music';
  }
  return 'zip';
};

const handleUploadFile = async (file: File): Promise<Asset> => {
  const res = await worksRepository.uploadAsset({
    file,
    assetType: getAssetType(file),
  });
  return res;
};

export const useWorkEdit = (
  defaultWork: DefaultWork = {
    title: '',
    description: '',
    thumbnail: { id: '', url: '' },
    urls: [],
    tags: [],
    assets: [],
    isPublic: true,
  }
): IUseWorkEdit => {
  const {
    watch,
    register,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: defaultWork.title,
      description: defaultWork.description,
      isPublic: defaultWork.isPublic,
      thumbnail: defaultWork.thumbnail,
      assets: defaultWork.assets,
      tags: defaultWork.tags,
      urls: defaultWork.urls,
    },
    mode: 'onBlur',
  });

  const [links, setLinks] = useState<string[]>(
    defaultWork.urls.map((url) => url.url) || []
  );

  const [postDiscord, setPostDiscord] = useState<boolean>(false);

  const handleChangePostDiscord = (value: boolean): void => {
    setPostDiscord(value);
  };

  const registers = {
    title: register('title', {
      required: 'タイトルは必須です',
    }),
    description: register('description', {
      required: '本文は必須です',
    }),
  };

  const handleChangeVisibility = (value: 'public' | 'private'): void => {
    setValue('isPublic', value === 'public');
  };

  const previewWork = {
    title: watch('title'),
    description: watch('description'),
    thumbnailUrl: watch('thumbnail').url,
    createdAt: '2021-09-01T00:00:00Z',
    tags: watch('tags'),
    isPublic: watch('isPublic'),
    creator: {
      id: '1',
      name: 'test',
      displayName: 'test',
      avatarUrl: 'https://avatars.githubusercontent.com/u/1?v=4',
    },
  };

  const handleSetLinks = (newLinks: string[]): void => {
    setLinks(newLinks);
  };

  const handleSetTag = (tag: Tag): void => {
    console.log(tag);
    if (watch('tags').some((t) => t.id === tag.id)) {
      setValue(
        'tags',
        watch('tags').filter((t) => t.id !== tag.id)
      );
    } else {
      setValue('tags', [...watch('tags'), tag]);
    }
  };

  const handleUploadThumbnail = async (file: File): Promise<void> => {
    const asset = await handleUploadFile(file);
    setValue('thumbnail', { url: asset.url, id: asset.id });
  };

  const handleUploadAssets = async (files: FileList): Promise<void> => {
    const assets = await Promise.all(
      Array.from(files).map((file) => handleUploadFile(file))
    );
    setValue('assets', [...watch('assets'), ...assets]);
  };

  const handleChangeCursor = (cursor: number): void => {
    setFocus('description');
    const textarea = document.getElementById(
      'description'
    ) as HTMLTextAreaElement;
    if (textarea) {
      textarea.setSelectionRange(cursor, cursor);
    }
  };

  const handlePublishWork = async (): Promise<WorkDetail> => {
    const data: DefaultWork = {
      title: watch('title'),
      description: watch('description'),
      thumbnail: watch('thumbnail'),
      urls: links.map((url) => ({ url, urlType: 'other' })),
      tags: [],
      assets: watch('assets'),
      isPublic: watch('isPublic'),
    };

    return await worksRepository.createWork({
      work: data,
      postDiscord: postDiscord,
    });
  };

  return {
    registers,
    postDiscord,
    description: watch('description'),
    links,
    assets: watch('assets'),
    previewWork,
    errors,
    handleSetTag,
    handleSetLinks,
    handleUploadAssets,
    handlePublish: handlePublishWork,
    handleChangeVisibility,
    handleEditDescription: (text: string) =>
      setValue('description', `${watch('description')}${text}`),
    handleChangeCursor,
    handleUploadThumbnail,
    handleChangePostDiscord,
  };
};
