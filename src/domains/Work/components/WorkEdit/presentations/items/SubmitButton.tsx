'use client';

import { useState } from 'react';
import type { FC } from 'react';

import { ChevronDown, Send } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import type { WorkDetail } from '@/domains/Work/types';

import { Horizontal } from '@/components/Layout/Horizontal';
import { Vertical } from '@/components/Layout/Vertical';
import { Center } from '@/components/ui/Center';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/Tooltip';
import { Typography } from '@/components/ui/Typography';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from '@/components/ui/alert-dialog';
import {
  AlertDialogHeader,
  AlertDialogFooter,
} from '@/components/ui/alert-dialog';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';

type Props = {
  handlePublish: () => Promise<WorkDetail>;
  disabled: boolean;
  notSatisfiedValue: RequiredValue[];
};

export type RequiredValue = 'タイトル' | 'サムネイル' | 'アセット' | '本文';

type UploadState = 'YET' | 'UPLOADING' | 'UPLOADED' | 'ERROR';

export const SubmitButton: FC<Props> = ({
  handlePublish,
  disabled,
  notSatisfiedValue,
}) => {
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [uploadState, setUploadState] = useState<UploadState>('YET');
  const [uploadWorkId, setUploadWorkId] = useState<string | null>(null);
  const handleClickPublish = async (): Promise<void> => {
    setUploadState('UPLOADING');
    try {
      const res = await handlePublish();
      console.log(res);
      setUploadWorkId(res.id);
      setUploadState('UPLOADED');
    } catch (e) {
      console.log(e);
      setUploadState('ERROR');
    }
  };

  return (
    <>
      <AlertDialog open={alertModalOpen}>
        <AlertDialogContent className="rounded-md">
          <AlertDialogHeader>
            <AlertDialogTitle>
              {uploadState === 'UPLOADING' ? '投稿中...' : '作品投稿'}
            </AlertDialogTitle>
            {uploadState === 'YET' && (
              <AlertDialogDescription>
                作品を投稿しますか？
              </AlertDialogDescription>
            )}
          </AlertDialogHeader>
          <AlertDialogFooter>
            {uploadState === 'UPLOADING' && (
              <Center>
                <Image
                  src="/loading.webp"
                  alt="loading"
                  width={128}
                  height={128}
                />
              </Center>
            )}
            {uploadState === 'YET' && (
              <Vertical className="items-center justify-center">
                <AlertDialogCancel onClick={() => setAlertModalOpen(false)}>
                  やっぱやめる
                </AlertDialogCancel>
                <AlertDialogAction onClick={handleClickPublish}>
                  投稿する
                </AlertDialogAction>
              </Vertical>
            )}
            {uploadState === 'UPLOADED' && (
              <Horizontal className="items-center justify-center">
                <Typography>投稿しました！</Typography>
                <Vertical>
                  <Link
                    href="/"
                    className="bg-pale-red rounded-sm px-4 py-2 text-white"
                  >
                    トップに戻る
                  </Link>
                  <Link
                    href={`/works/${uploadWorkId}`}
                    className="bg-orange-pop hover:bg-orange-sub rounded-sm px-4 py-2 text-white"
                  >
                    作品を見に行く
                  </Link>
                </Vertical>
              </Horizontal>
            )}
            {uploadState === 'ERROR' && (
              <Vertical className="items-center justify-center">
                <Typography>投稿に失敗しました</Typography>
                <AlertDialogAction onClick={handleClickPublish}>
                  再度投稿する
                </AlertDialogAction>
              </Vertical>
            )}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <DropdownMenu>
            <DropdownMenuTrigger
              disabled={disabled}
              asChild
              className="w-32 h-10 px-1 py--0 bg-orange-pop hover:bg-orange-light border-l-orange-light rounded-lg"
            >
              <TooltipTrigger>
                <Vertical className="gap-1">
                  <Typography className="px-2 text-white">投稿設定</Typography>
                  <Separator orientation="vertical" className="h-auto" />
                  <ChevronDown className="text-white" />
                </Vertical>
              </TooltipTrigger>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-orange-pop">
              <DropdownMenuItem
                onClick={() => setAlertModalOpen(true)}
                className="focus:bg-orange-sub group relative overflow-hidden"
              >
                公開する！
                <Send className="absolute right-8 -bottom-8 transition-transform duration-500 group-focus:translate-x-6 group-focus:-translate-y-9 text-white" />
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setAlertModalOpen(true)}
                className="focus:bg-orange-sub"
              >
                下書き保存
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {notSatisfiedValue.length > 0 && (
            <TooltipContent>
              <Horizontal className="gap-1">
                <Typography className="text-red-500">未入力項目</Typography>
                <Horizontal className="gap-1">
                  {notSatisfiedValue.map((value) => (
                    <Typography key={value} variant="body2">
                      {value}
                    </Typography>
                  ))}
                </Horizontal>
              </Horizontal>
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    </>
  );
};
