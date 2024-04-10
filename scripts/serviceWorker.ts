import { createMiddleware } from '@mswjs/http-middleware';
import cors from 'cors';
import express from 'express';

import { handlers } from '../msw/handlers';

const app = express();
app.use(cors());
app.use(createMiddleware(...handlers));
app.listen(8080);
