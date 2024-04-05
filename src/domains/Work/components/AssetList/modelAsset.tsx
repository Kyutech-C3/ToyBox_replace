import { Suspense } from 'react';
import type { FC } from 'react';

import { Gltf, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import type { Asset } from '../../types';
type ItemProps = {
  asset: Asset;
};
const Model: FC<{ url: string }> = ({ url }) => <Gltf src={url} />;

export const ModelAsset: FC<ItemProps> = ({ asset }) => (
  <div className="w-full h-full">
    <Suspense fallback={<p>...loading</p>}>
      <Canvas>
        <OrbitControls />
        <Model url={asset.url} />
      </Canvas>
    </Suspense>
  </div>
);
