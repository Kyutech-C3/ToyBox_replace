import type { Asset } from '../../types';
import type { AssetType, Asset as ModelAsset } from '@/api/@types';

import { userConverter } from '@/domains/User';

export const AssetConverter = (asset: ModelAsset): Asset => ({
  id: asset.id,
  url: asset.url,
  assetType: asset.asset_type as AssetType,
  user: userConverter(asset.user),
  extension: asset.extension,
  createdAt: asset.created_at,
  updatedAt: asset.updated_at,
});

export const AssetsConverter = (assets: ModelAsset[]): Asset[] =>
  assets
    .filter((asset) =>
      ['video', 'image', 'music', 'model', 'zip'].includes(asset.asset_type)
    )
    .map(AssetConverter);
