import { HttpResponse, http } from 'msw';

import type { GetTag } from '@/api/@types';

export const tagGetHandler = http.get<GetTag>('/api/v1/tags', () =>
  HttpResponse.json([
    {
      name: '2DCG',
      color: '#ffffff',
      id: '2ab69d0f-a000-4bd1-82c2-50d78abfde58',
    },
    {
      name: '2DCGマラソン',
      color: '#ffffff',
      id: 'e56e55b9-673c-46a2-8e3d-83006ac84ff9',
    },
    {
      name: '2Dゲーム',
      color: '#ffffff',
      id: 'cdd1a5eb-d25d-4fb4-9fcb-d7e526f72e5d',
    },
    {
      name: '3DCG',
      color: '#ffffff',
      id: 'f05796e6-e2e2-4f63-9b53-98ce12e778c7',
    },
    {
      name: '3Dアニメーション',
      color: '#ffffff',
      id: '78741021-ddf2-4301-96f3-770a7a60369e',
    },
    {
      name: '3Dゲーム',
      color: '#ffffff',
      id: 'e33535af-e675-4d98-883b-915800040465',
    },
    {
      name: '3Dプリンター',
      color: '#ffffff',
      id: 'ed3a8ab8-ced9-48cc-9325-7e26266c3fac',
    },
    {
      name: '3Dモデル',
      color: '#ffffff',
      id: 'ef414270-2278-438a-b5f4-6f0005041fcf',
    },
    {
      name: "<script>alert('hoge')</script>",
      color: '#ffffff',
      id: '01d403b3-eede-4648-bf86-283e2a272483',
    },
    {
      name: 'AIきりたん',
      color: '#ffffff',
      id: '4f2a7b19-c7ef-4c7f-8fc3-f7ad900be154',
    },
    {
      name: 'Astro',
      color: '#ffffff',
      id: '9082305e-df91-4035-bd75-a5b0e702f1a6',
    },
    {
      name: 'AviUtl',
      color: '#ffffff',
      id: '6bc6bb72-3523-4fb9-8db4-6b92eab9a292',
    },
    {
      name: 'Azure',
      color: '#ffffff',
      id: 'bc40e23e-b525-4d01-8e0e-2f051d11b2f2',
    },
    {
      name: 'Blender',
      color: '#ffffff',
      id: 'e90f88bb-50d3-4668-9613-966c132bcd84',
    },
    {
      name: 'Bot',
      color: '#ffffff',
      id: '596f59be-d1b2-40f6-9760-feb7bbf64536',
    },
    {
      name: 'C#',
      color: '#ffffff',
      id: '82fce7ae-325a-409f-96d9-6b1d83d7abc2',
    },
    {
      name: 'C++',
      color: '#ffffff',
      id: '7483c1db-bed7-401c-9ce5-5ba272186b52',
    },
    {
      name: 'C3 Logo',
      color: '#ffffff',
      id: '2f1d7379-66f0-40cd-86a3-f0438c975f68',
    },
    {
      name: 'C3ちゃん',
      color: '#ffffff',
      id: 'f3674f05-4350-4a8d-a565-37a8d0cd7e67',
    },
    {
      name: 'C3カレンダー2024',
      color: '#ffffff',
      id: '27bfa1d3-15aa-45f6-9e7c-5a42f61a045b',
    },
    {
      name: 'C3クリエイタソン',
      color: '#ffffff',
      id: '50e16daf-27e0-408b-b53b-54ab24fcf25e',
    },
    {
      name: 'C3クリエイタソンネッシーカップ',
      color: '#ffffff',
      id: '5111c593-503d-4c05-89a7-73a86fa4368f',
    },
    {
      name: 'C3公式グッズ',
      color: '#ffffff',
      id: '597b081c-444c-49f6-9228-4e36f8065168',
    },
    {
      name: 'C3公式グッズデザイン案',
      color: '#ffffff',
      id: '3be16c69-6405-4332-a165-246cc4c46f20',
    },
    {
      name: 'C3公式グッズ案',
      color: '#ffffff',
      id: '026de644-d4e8-4bd4-9b03-6f7ee0e2a284',
    },
    {
      name: 'C3公式デザイン',
      color: '#ffffff',
      id: '1b9a6f8e-3488-4a2c-9a44-400936c07fc2',
    },
    {
      name: 'CG',
      color: '#ffffff',
      id: 'e7aa0434-64ea-4d8b-b6f4-5c00e7e89464',
    },
    {
      name: 'CGマラソン',
      color: '#ffffff',
      id: '5c929751-4776-476e-8ba6-47f7540625c6',
    },
    {
      name: 'CSS',
      color: '#ffffff',
      id: '07034310-ae9e-425f-b284-edc156f3bc77',
    },
    {
      name: 'CTF',
      color: '#ffffff',
      id: 'e1812018-370a-4319-bebd-a3dcc56146ae',
    },
    {
      name: 'Cakewalk',
      color: '#ffffff',
      id: 'a38196ec-2988-49f9-b86e-9baec32e792c',
    },
    {
      name: 'Colour Bass',
      color: '#ffffff',
      id: '3c8eb8a7-2dc2-4f54-865a-a03f2a06e65d',
    },
    {
      name: 'Cubase',
      color: '#ffffff',
      id: '5019db89-e70f-43e7-ae7f-af7d588ff0f6',
    },
    {
      name: 'DTM',
      color: '#ffffff',
      id: 'cbb17eb5-9127-45c0-8fca-d6cbf5f0cec3',
    },
    {
      name: 'Desmos',
      color: '#ffffff',
      id: '2d2b9d2b-2404-49b9-88c6-ec799928283c',
    },
    {
      name: 'Domino',
      color: '#ffffff',
      id: '960b1558-caf2-4ed0-a1f0-b86a73eba81e',
    },
    {
      name: 'EDM',
      color: '#ffffff',
      id: 'dac52013-a843-4467-8363-5433efebf691',
    },
    {
      name: 'Editor',
      color: '#ffffff',
      id: 'a7a74929-636e-4f2c-b3db-596a0fca73b1',
    },
    {
      name: 'Electron',
      color: '#ffffff',
      id: '0140bbf4-db2c-4995-9b74-8b26f6f1b481',
    },
    {
      name: 'FPS',
      color: '#ffffff',
      id: 'b3e98dcc-058e-4f39-8ce0-2f0b6ad34f8f',
    },
    {
      name: 'FallGuys',
      color: '#ffffff',
      id: 'f7dd6c28-2f07-4f77-9a7f-779657a84880',
    },
    {
      name: 'FastAPI',
      color: '#ffffff',
      id: '25abafe3-874f-4794-bea2-5d123e8970cf',
    },
    {
      name: 'Flutter',
      color: '#ffffff',
      id: '8802b9dc-9ec6-4f19-aa5a-705be8cb2c20',
    },
    {
      name: 'Fusion360',
      color: '#ffffff',
      id: '3a7389eb-275e-4727-9b81-93873264325e',
    },
    {
      name: 'FutureCore',
      color: '#ffffff',
      id: '4b86cc98-b1b5-4c5d-83ab-a224df0ae959',
    },
    {
      name: 'GAME',
      color: '#ffffff',
      id: 'ab0f8ae6-5ab2-4e76-86d2-d704a5ac9697',
    },
    {
      name: 'GWクリエイタソン2023',
      color: '#ffffff',
      id: '1d71c976-3ed3-4086-8df4-8c413e86a64f',
    },
    {
      name: 'Game',
      color: '#ffffff',
      id: '5931b986-e78f-45a6-8985-2b2488ef4b3b',
    },
    {
      name: 'Github',
      color: '#ffffff',
      id: 'dccb11b1-25af-45ef-ac14-d6cd5a314c61',
    },
    {
      name: 'Github Actions',
      color: '#ffffff',
      id: '5dc229ec-d2d1-4492-8a39-c5817e69e837',
    },
    {
      name: 'HACK',
      color: '#ffffff',
      id: '92c5fcb9-7a93-4293-83c8-2117a8fe3993',
    },
    {
      name: 'HTML',
      color: '#ffffff',
      id: '2c72296a-97b1-4ffc-955f-4f83dd850f7d',
    },
    {
      name: 'Hack',
      color: '#ffffff',
      id: '5561ba4f-4410-4755-8849-aa8e297a9f44',
    },
    {
      name: 'Hack U',
      color: '#ffffff',
      id: 'd2711dec-bc74-4a3c-98db-029fb43f96f2',
    },
    {
      name: 'JavaScript',
      color: '#ffffff',
      id: '587f2e33-1d8b-4402-b1b5-364a38aca86e',
    },
    {
      name: 'LABS',
      color: '#ffffff',
      id: 'bf322ecb-a972-4998-9415-d2efa20ad24d',
    },
    {
      name: 'LMMS',
      color: '#ffffff',
      id: 'ae5beac1-c40b-4eee-b417-5d359e5095f3',
    },
    {
      name: "Let'sGoMeme ",
      color: '#ffffff',
      id: '41a0c51e-bafa-481e-a5fc-1db759b52aee',
    },
    {
      name: 'Linux Kernel',
      color: '#ffffff',
      id: '93dd51e5-66af-4f23-a3c6-ae8197619256',
    },
    {
      name: 'Live2D',
      color: '#ffffff',
      id: 'e1483ea5-ed1b-495b-9140-d839e19a551d',
    },
    {
      name: 'M3春2022',
      color: '#ffffff',
      id: '6e8bd997-ebc1-411b-b9d8-b01bd5db3ab8',
    },
    {
      name: 'M3春2023',
      color: '#ffffff',
      id: 'db8dbc07-2c4c-4206-9893-51c6b066822c',
    },
    {
      name: 'MAD',
      color: '#ffffff',
      id: '815cb7fb-626c-49ce-9de4-15e4c4a3e1fe',
    },
    {
      name: 'MUSIC',
      color: '#ffffff',
      id: '7807a42f-2ce2-490b-8a39-10b48374a64a',
    },
    {
      name: 'MV',
      color: '#ffffff',
      id: '652d1bfa-192f-4e79-b742-854c8f3a8b83',
    },
    {
      name: 'Mastodon',
      color: '#ffffff',
      id: '6e2768df-7f62-41e5-8bb6-8ab37e2b42d9',
    },
    {
      name: 'Minecraft',
      color: '#ffffff',
      id: '9d84689f-b221-4bd2-9ef0-0a6392f837d8',
    },
    {
      name: 'Mobile',
      color: '#ffffff',
      id: 'd923bab4-f493-43ba-b354-a667818a274d',
    },
    {
      name: 'Music',
      color: '#ffffff',
      id: '06906d53-5d70-4764-b28e-ea7933d43125',
    },
    {
      name: 'Next.js',
      color: '#ffffff',
      id: 'dd93032f-525c-478d-bd21-37ec6d3f25c1',
    },
    {
      name: 'Note Block Studio',
      color: '#ffffff',
      id: 'c05ad9ca-1220-4995-bb24-3cbac024471e',
    },
    {
      name: 'Nuxt',
      color: '#ffffff',
      id: '252daa47-80e9-4a16-a663-8d6b2a1264fb',
    },
    {
      name: 'Nuxt.js',
      color: '#ffffff',
      id: '6bdbd32f-837f-47e7-bddc-ad5897e6876a',
    },
    {
      name: 'OC2020',
      color: '#ffffff',
      id: '6c52b29e-46fd-489a-a03e-1399064be6ae',
    },
    {
      name: 'OC2021',
      color: '#ffffff',
      id: '1e457f8d-5731-4df6-b7c7-9b01764b0576',
    },
    {
      name: 'OC2022',
      color: '#ffffff',
      id: '285a0ac4-1cd4-48a2-8d91-60b0eaaddd9e',
    },
    {
      name: 'OC2023',
      color: '#ffffff',
      id: '13322612-8c5d-4dc6-ae33-0ad72e36effe',
    },
    {
      name: 'Piet',
      color: '#ffffff',
      id: 'c451adee-0980-492a-824e-536b06671537',
    },
    {
      name: 'Portal',
      color: '#ffffff',
      id: '2852ad8e-72bd-494d-8d58-8e64e5a5299e',
    },
    {
      name: 'Python',
      color: '#ffffff',
      id: 'd6ad1990-d72f-4c9f-bb90-7983e73671c9',
    },
    {
      name: 'REAPER',
      color: '#ffffff',
      id: 'ce754d9d-d21f-4959-9fb7-2936da2fcba2',
    },
    {
      name: 'React',
      color: '#ffffff',
      id: 'f2f657d8-6e63-444b-b393-671ba52a784d',
    },
    {
      name: 'Rust',
      color: '#ffffff',
      id: 'a087b402-c688-45cb-b915-795347c1ab36',
    },
    {
      name: 'SCP',
      color: '#ffffff',
      id: 'd8231023-dbc2-4015-9821-253abbbff6ad',
    },
    {
      name: 'SCP-963',
      color: '#ffffff',
      id: 'dfaf14a3-9208-449d-9dd9-77db00ed356e',
    },
    {
      name: 'SCP963',
      color: '#ffffff',
      id: 'd37cdcc2-007b-4e2a-9be3-f9ed0623308d',
    },
    {
      name: 'Seccon',
      color: '#ffffff',
      id: '9fd3096d-89f1-441f-b2b7-a1d136c428e5',
    },
    {
      name: 'Siv3D',
      color: '#ffffff',
      id: '2098a114-f9bb-4132-a4b4-5fa547b496d6',
    },
    {
      name: 'Source',
      color: '#ffffff',
      id: '8ffb61ab-e5b1-493e-a801-4f4a0acab57a',
    },
    {
      name: 'Spitfire Audio',
      color: '#ffffff',
      id: '25e96768-e687-4d21-8333-7ad284c44beb',
    },
    {
      name: 'Studio One',
      color: '#ffffff',
      id: '26cf23a0-5217-4081-9396-78420507ba30',
    },
    {
      name: 'TailwindCSS',
      color: '#ffffff',
      id: 'ffc19f15-9e2a-4d91-8eca-d5c739489e79',
    },
    {
      name: 'Test',
      color: '#ffffff',
      id: 'bf984e83-f01e-49ae-9554-91a4a17a79ce',
    },
    {
      name: 'ToyBox',
      color: '#ffffff',
      id: 'dcbfa1aa-a0a3-4955-bd99-7f6a4babbb35',
    },
    {
      name: 'TypeScript',
      color: '#ffffff',
      id: 'b8bb6a17-1e9a-4bf5-889d-82edc6a82306',
    },
    {
      name: 'UE4',
      color: '#ffffff',
      id: '5fba6b64-be0c-4996-a9d7-4871227c5892',
    },
    {
      name: 'UE5',
      color: '#ffffff',
      id: '3432035b-4b36-4f4a-bde0-85af15aa6491',
    },
    {
      name: 'Unity',
      color: '#ffffff',
      id: 'ac0fa015-a223-4854-a0ac-9044ed515edd',
    },
    {
      name: 'VOICEPEAK',
      color: '#ffffff',
      id: '9e207c2c-8bcd-4b1b-9788-b95739f4d52f',
    },
    {
      name: 'VocalShifter',
      color: '#ffffff',
      id: '3974f8ec-5d69-476d-abe2-3e25aa70b440',
    },
  ])
);
