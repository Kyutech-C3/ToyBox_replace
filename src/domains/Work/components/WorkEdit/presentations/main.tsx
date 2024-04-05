import type { FC } from 'react';

import { EditToolBar } from '../../EditToolBar';
import { URLInput } from '../../URLInput';
import { WorkCard } from '../../WorkCard';

import { AssetUpload } from './items/AssetUpload';
import { ShareDiscordCheckBox } from './items/ShareDiscordCheckBox';
import { SubmitButton } from './items/SubmitButton';
import { ThumbnailUpload } from './items/ThumbnailUpload';
import { TitleInput } from './items/TitleInput';
import { VisibilitySelect } from './items/VisibilitySelect';

import type { RequiredValue } from './items/SubmitButton';
import type { DefaultWork } from '..';
import type { Tag } from '@/domains/Tag';
import type { User } from '@/domains/User';
import type { Asset, WorkDetail } from '@/domains/Work/types';
import type { FieldErrors, UseFormRegisterReturn } from 'react-hook-form';

import { Horizontal } from '@/components/Layout/Horizontal';
import { Vertical } from '@/components/Layout/Vertical';
import { Typography } from '@/components/ui/Typography';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';

type Props = {
  defaultWork: DefaultWork | undefined;
  previewWork: {
    title: string;
    thumbnailUrl: string;
    tags: Tag[];
    creator: User;
    createdAt: string;
    isPublic: boolean;
  };

  description: string;
  assets: Asset[];
  registers: {
    title: UseFormRegisterReturn<'title'>;
    description: UseFormRegisterReturn<'description'>;
  };
  postDiscord: boolean;
  links: string[];
  errors: FieldErrors<{
    title: string;
    description: string;
  }>;
  handleChangePostDiscord: (value: boolean) => void;
  handlePublish: () => Promise<WorkDetail>;
  handleSetLinks: (links: string[]) => void;
  handleUploadAssets: (files: FileList) => Promise<void>;
  handleUploadThumbnail: (file: File) => Promise<void>;
  handleEditDescription: (description: string) => void;
  handleChangeCursor: (cursor: number) => void;
  handleChangeVisibility: (value: 'public' | 'private') => void;
};

export const WorkEditPresentation: FC<Props> = ({
  defaultWork,
  previewWork,
  description,
  assets,
  links,
  registers,
  errors,
  postDiscord,
  handleSetLinks,
  handleChangePostDiscord,
  handlePublish,
  handleChangeCursor,
  handleUploadAssets,
  handleUploadThumbnail,
  handleEditDescription,
  handleChangeVisibility,
}) => (
  <Horizontal>
    <Vertical className="gap-24">
      <Horizontal className="flex-grow">
        <TitleInput
          titleErrorMessage={errors.title?.message ?? ''}
          titleRegister={registers.title}
          defaultTitle={defaultWork?.title ?? ''}
        />
        <ThumbnailUpload
          thumbnailUrl={previewWork.thumbnailUrl}
          handleUploadThumbnail={handleUploadThumbnail}
        />
        <AssetUpload handleUploadAssets={handleUploadAssets} assets={assets} />
        <URLInput links={links} maxAmount={5} setLinks={handleSetLinks} />
      </Horizontal>
      <Horizontal>
        <Typography variant="h2">プレビュー</Typography>
        <WorkCard work={{ ...previewWork, id: '' }} />
      </Horizontal>
    </Vertical>
    <Vertical className="items-center">
      <Typography className="text-lg font-bold">本文</Typography>
      <Typography className="text-red-500" variant="body2">
        必須
      </Typography>
      <Typography className="text-red-600">
        {errors.description?.message ?? ''}
      </Typography>
    </Vertical>
    <Horizontal className="rounded-md relative w-full h-[500px] text-xl border-2 border-orange-pop gap-0">
      <EditToolBar
        handleEdit={handleEditDescription}
        handleChangeCursor={handleChangeCursor}
        description={description}
      />
      <Separator orientation="horizontal" decorative={false} />
      <Textarea
        {...registers.description}
        className="h-full focus-visible:outline-none p-2"
        defaultValue={defaultWork?.description}
      />
    </Horizontal>

    <Vertical>
      <Horizontal className="flex-grow">
        <ShareDiscordCheckBox
          postDiscord={postDiscord}
          handleChangePostDiscord={handleChangePostDiscord}
        />
        <VisibilitySelect handleChangeVisibility={handleChangeVisibility} />
      </Horizontal>
      <SubmitButton
        handlePublish={handlePublish}
        disabled={
          previewWork.title == '' ||
          previewWork.thumbnailUrl == '' ||
          assets.length == 0 ||
          description == ''
        }
        notSatisfiedValue={
          [
            previewWork.title == '' ? 'タイトル' : '',
            previewWork.thumbnailUrl == '' ? 'サムネイル' : '',
            assets.length == 0 ? 'アセット' : '',
            description == '' ? '本文' : '',
          ].filter((value) => value != '') as RequiredValue[]
        }
      />
    </Vertical>
  </Horizontal>
);
