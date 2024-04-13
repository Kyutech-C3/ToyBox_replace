/* eslint-disable */
/* This file is generated by protoc-gen-ts-msw-handlers */
/* Do not edit this file manually */
import { http, HttpResponse } from 'msw'
const ApiV1AssetsPostHandler = http.post('/api/v1/assets',() => {
  return HttpResponse.json({
    id:'fc4754ba-7998-440c-bf25-cf9edac81cb8',
  })
})
const ApiV1AssetsIdDeleteHandler = http.delete('/api/v1/assets/{id}',() => {
  return HttpResponse.json({
    status:'ok',
  })
})
export const assetsServiceHandlers = [
  ApiV1AssetsPostHandler,
  ApiV1AssetsIdDeleteHandler,
]
