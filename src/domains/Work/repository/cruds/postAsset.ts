import type { Asset, AssetType } from '@/api/@types';

import { apiClient } from '@/libs/apiClient';

export const postAsset = async (
  assetType: AssetType,
  file: File
): Promise<Asset> =>
  await apiClient.api.v1.assets.$post({
    body: {
      file: file,
      asset_type: assetType,
    },
  });
