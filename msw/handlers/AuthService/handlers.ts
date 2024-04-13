/* eslint-disable */
/* This file is generated by protoc-gen-ts-msw-handlers */
/* Do not edit this file manually */
import { http, HttpResponse } from 'msw'
const ApiV1AuthDiscordCallbackGetHandler = http.get('/api/v1/auth/discord/callback',() => {
  return HttpResponse.json({
    value:'',
  })
})
const ApiV1AuthTokenPostHandler = http.post('/api/v1/auth/token',() => {
  return HttpResponse.json({
    expired_at:'',
    refresh_token:'~kisrg}{a|gfh',
    access_token:'~kisrg}{a|gfh',
  })
})
const ApiV1AuthDiscordGetHandler = http.get('/api/v1/auth/discord',() => {
  return HttpResponse.json({
    value:'',
  })
})
const ApiV1AuthSignUpPostHandler = http.post('/api/v1/auth/sign_up',() => {
  return HttpResponse.json({
    id:'74517e6a-4ee0-43aa-b82c-f6e8ccf73c1b',
    name:'Mr. Augustus Kihn V',
    display_name:'Mr. Augustus Kihn V',
    avatar_url:'http://www.fyu.net/oam-h',
    profile:'id sed adipisci accusamus et ut illo impedit eaque doloremque a deleniti illum officiis commodi ipsum magnam dolor possimus voluptas perferendis ab voluptas dolorem aut ut magni repellat magni est accusantium quia dignissimos sit ea mollitia inventore vitae velit et.',
    twitter_id:'10798924-01ba-4baf-b217-ae4bf047a1a9',
    github_id:'384a44a4-3955-4fa1-aedd-15be60032519',
    created_at:'2021-09-01T00:00:00Z',
    updated_at:'2021-09-01T00:00:00Z',
  })
})
export const authServiceHandlers = [
  ApiV1AuthDiscordCallbackGetHandler,
  ApiV1AuthTokenPostHandler,
  ApiV1AuthDiscordGetHandler,
  ApiV1AuthSignUpPostHandler,
]
