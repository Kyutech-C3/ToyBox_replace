import type { Asset } from '../../types';
import type { AssetType, Asset as ModelAsset } from '@/api/@types';

export const AssetConverter = (asset: ModelAsset): Asset => ({
  id: asset.id,
  url: asset.url,
  assetType: asset.asset_type as AssetType,
  extension: asset.extension,
});

export const AssetsConverter = (assets: ModelAsset[]): Asset[] =>
  assets
    .filter((asset) =>
      ['video', 'image', 'music', 'model', 'zip'].includes(asset.asset_type)
    )
    .map(AssetConverter);
