export const ASSET_EXTENSIONS = [
  {
    category: '画像',
    exts: ['png', 'jpg', 'jpeg', 'bmp', 'gif'],
  },
  {
    category: '動画',
    exts: ['mp4', 'mov'],
  },
  {
    category: '音源',
    exts: ['mp3', 'wav', 'm4a'],
  },
  {
    category: 'モデル',
    exts: ['gltf', 'fbx'],
  },
  {
    category: 'zip',
    exts: ['zip'],
  },
];

const categoryToPrefixMap: { [key: string]: string } = {
  画像: 'image',
  動画: 'video',
  音源: 'audio',
  モデル: 'model',
  zip: 'application',
};

export const ASSET_ACCEPT_EXTENSIONS = ASSET_EXTENSIONS.flatMap((category) =>
  category.exts.map((ext) => {
    const prefix = categoryToPrefixMap[category.category];
    return `${prefix}/${ext}`;
  })
).join(', ');
