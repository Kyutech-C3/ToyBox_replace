import { assetsServiceHandlers } from './handlers/AssetsService/handlers.ts'
import { authServiceHandlers } from './handlers/AuthService/handlers.ts'
import { tagsServiceHandlers } from './handlers/TagsService/handlers.ts'
import { usersServiceHandlers } from './handlers/UsersService/handlers.ts'
import { worksServiceHandlers } from './handlers/WorksService/handlers.ts'
export const handlers = [
  ...assetsServiceHandlers,
  ...authServiceHandlers,
  ...tagsServiceHandlers,
  ...usersServiceHandlers,
  ...worksServiceHandlers,
]
