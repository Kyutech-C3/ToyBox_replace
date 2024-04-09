import { assetPostHandler } from './asset';
import { tagGetHandler } from './tag';
import { workDetailGetHandler, workGetHandler } from './work';

export const handlers = [
  workGetHandler,
  tagGetHandler,
  workDetailGetHandler,
  assetPostHandler,
];
