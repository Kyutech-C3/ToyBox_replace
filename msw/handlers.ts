import { assetsServiceHandlers } from './handlers/AssetsService/handlers'
import { authServiceHandlers } from './handlers/AuthService/handlers'
import { tagsServiceHandlers } from './handlers/TagsService/handlers'
import { usersServiceHandlers } from './handlers/UsersService/handlers'
import { worksServiceHandlers } from './handlers/WorksService/handlers'
export const handlers = [
  ...assetsServiceHandlers,
  ...authServiceHandlers,
  ...tagsServiceHandlers,
  ...usersServiceHandlers,
  ...worksServiceHandlers,
]
