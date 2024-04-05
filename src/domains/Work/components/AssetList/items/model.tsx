import { Suspense, lazy } from 'react';
import type { FC } from 'react';

const Canvas = lazy(() =>
  import('@react-three/fiber').then((mod) => ({ default: mod.Canvas }))
);

const Gltf = lazy(() =>
  import('@react-three/drei').then((mod) => ({ default: mod.Gltf }))
);

const OrbitControls = lazy(() =>
  import('@react-three/drei').then((mod) => ({ default: mod.OrbitControls }))
);

import type { Asset } from '@/domains/Work/types';

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
