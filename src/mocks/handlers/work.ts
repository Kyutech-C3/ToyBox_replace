import { http, HttpResponse } from 'msw';

export const workGetHandler = http.get('/api/v1/works', () =>
  HttpResponse.json({
    works: [
      {
        id: 'fce1b40e-3394-4721-a5d5-b23a99dd4ed0',
        title: 'test work',
        description: 'test',
        description_html: '<p>test</p>',
        user: {
          id: '1afaa0e0-ff8f-4348-a635-df06f7af76e8',
          name: 'test user',
          display_name: 'test user',
          avatar_url:
            'https://cdn.discordapp.com/avatars/680053127893876764/9cb4bd664cfe7e74da22dfef519908ac.png',
          profile: 'test user',
          twitter_id: 'OrdinaryJuka',
          github_id: '',
          created_at: '2022-10-31T15:10:34.467799',
          updated_at: '2023-12-02T18:55:44.659377',
        },
        assets: [
          {
            work_id: 'fce1b40e-3394-4721-a5d5-b23a99dd4ed0',
            asset_type: 'music',
            extension: 'mp3',
            created_at: '2024-03-31T17:04:35.877083',
            id: 'bdc1cc8d-d7db-4515-b1b5-42f4dcd03385',
            user_id: '1afaa0e0-ff8f-4348-a635-df06f7af76e8',
            url: 'https://github.com/SergLam/Audio-Sample-files/raw/master/sample.mp3',
            updated_at: '2024-03-31T17:08:19.981602',
          },
        ],
        urls: [],
        visibility: 'public',
        tags: [
          {
            name: 'Hack',
            color: '#ffffff',
            id: 'cbb17eb5-9127-45c0-8fca-d6cbf5f0cec3',
          },
        ],
        thumbnail: {
          work_id: null,
          asset_type: 'image',
          extension: 'png',
          created_at: '2024-03-31T17:02:19.917523',
          id: 'd079f7d7-0c5d-4f9b-bdce-5abaa323c3b1',
          user_id: '1afaa0e0-ff8f-4348-a635-df06f7af76e8',
          url: 'https://placehold.jp/150x150.png',
          updated_at: '2024-03-31T17:02:19.924430',
        },
        favorite_count: 1,
        is_favorite: false,
        created_at: '2024-03-31T17:04:56.366855',
        updated_at: '2024-03-31T17:08:19.964812',
      },
      {
        id: '90ebfd1e-9224-4022-a200-cf37e8cf1049',
        title: 'test',
        description: 'test',
        description_html: '<p>test</p>',
        user: {
          id: '0a7746d4-de46-42a3-b377-f64bcbc5959a',
          name: 'rikuto',
          display_name: 'rikuto',
          avatar_url:
            'https://cdn.discordapp.com/avatars/506014633665101825/18471b5cd8ba9d026382a9c9723fbb97.png',
          profile: null,
          twitter_id: null,
          github_id: null,
          created_at: '2023-01-14T06:22:20.583551',
          updated_at: '2023-01-14T06:22:20.583551',
        },
        assets: [
          {
            work_id: '90ebfd1e-9224-4022-a200-cf37e8cf1049',
            asset_type: 'image',
            extension: 'jpeg',
            created_at: '2024-03-06T06:50:06.329448',
            id: '5a3ef2c8-bfb2-4c99-a233-93a2e232d997',
            user_id: '0a7746d4-de46-42a3-b377-f64bcbc5959a',
            url: 'https://placehold.jp/150x150.png',
            updated_at: '2024-03-06T06:52:41.659639',
          },
        ],
        urls: [],
        visibility: 'public',
        tags: [
          {
            name: '2DCG',
            color: '#ffffff',
            id: '2ab69d0f-a000-4bd1-82c2-50d78abfde58',
          },
        ],
        thumbnail: {
          work_id: null,
          asset_type: 'image',
          extension: 'jpeg',
          created_at: '2024-03-06T06:50:02.995839',
          id: '71f4d8c5-f6e0-4192-9b88-522934f750f2',
          user_id: '0a7746d4-de46-42a3-b377-f64bcbc5959a',
          url: 'https://placehold.jp/150x150.png',
          updated_at: '2024-03-06T06:50:03.007105',
        },
        favorite_count: 4,
        is_favorite: false,
        created_at: '2024-03-06T06:52:41.598540',
        updated_at: '2024-03-06T06:52:41.598540',
      },
    ],
    works_total_count: 313,
  })
);

export const workDetailGetHandler = http.get('/api/v1/works/:id', () =>
  HttpResponse.json({
    id: '134b5ea7-922b-465d-83cb-3c5f06f627ac',
    title: 'test投稿',
    description:
      '# test\n## test\n### test\n#### test\n##### test\n###### test\n\n- list\n- list\n- - list\n\n1. list\n2. list\n3. list\n\n```\ncode block\n```\n`test`\n\n*italic*\n**bold**\n~打ち消し線~\n[google](https://google.com)\n> 引用',
    description_html:
      '<h1>test</h1>\n<h2>test</h2>\n<h3>test</h3>\n<h4>test</h4>\n<h5>test</h5>\n<h6>test</h6>\n<ul>\n<li>list</li>\n<li>list</li>\n<li>\n<ul>\n<li>list</li>\n</ul>\n</li>\n<li>\n<p>list</p>\n</li>\n<li>list</li>\n<li>list</li>\n</ul>\n<p><code>code block</code>\n<code>test</code></p>\n<p><em>italic</em>\n<strong>bold</strong>\n~打ち消し線~\n<a href="https://google.com">google</a></p>\n<blockquote>\n<p>引用</p>\n</blockquote>',
    user: {
      id: 'e41601a1-9efe-4b7e-a946-55f7a1df6ef7',
      name: '土佐犬',
      display_name: '土佐犬',
      avatar_url:
        'https://cdn.discordapp.com/avatars/506014633665101825/18471b5cd8ba9d026382a9c9723fbb97.png',
      profile: null,
      twitter_id: null,
      github_id: null,
      created_at: '2023-05-03T17:44:49.962784',
      updated_at: '2023-10-20T14:40:16.493972',
    },
    assets: [
      {
        work_id: '134b5ea7-922b-465d-83cb-3c5f06f627ac',
        asset_type: 'model',
        extension: 'gltf',
        created_at: '2023-05-13T21:41:03.099676',
        id: '622e943b-abbf-42a9-8486-ef1ee31a31bc',
        user_id: 'e41601a1-9efe-4b7e-a946-55f7a1df6ef7',
        url: '/mocks/mock.glb',
        updated_at: '2023-05-13T22:03:25.935932',
      },
      {
        work_id: '134b5ea7-922b-465d-83cb-3c5f06f627ac',
        asset_type: 'image',
        extension: 'png',
        created_at: '2023-05-13T21:46:47.589205',
        id: '6661ca35-2009-4b6e-b8ba-b924a3de2a0b',
        user_id: 'e41601a1-9efe-4b7e-a946-55f7a1df6ef7',
        url: 'http://placehold.jp/150x150.png',
        updated_at: '2023-05-13T22:03:25.935932',
      },
      {
        work_id: '134b5ea7-922b-465d-83cb-3c5f06f627ac',
        asset_type: 'zip',
        extension: 'zip',
        created_at: '2023-05-13T21:53:00.769839',
        id: 'ae580057-5fd3-423a-9052-7c7bc80456e0',
        user_id: 'e41601a1-9efe-4b7e-a946-55f7a1df6ef7',
        url: '/mocks/mock.zip',
        updated_at: '2023-05-13T22:03:25.935932',
      },
      {
        work_id: '134b5ea7-922b-465d-83cb-3c5f06f627ac',
        asset_type: 'video',
        extension: 'mp4',
        created_at: '2023-05-13T21:59:17.093113',
        id: 'd70b0ab4-6606-4212-a3cc-958cf619c1c1',
        user_id: 'e41601a1-9efe-4b7e-a946-55f7a1df6ef7',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        updated_at: '2023-05-13T22:03:25.935932',
      },
    ],
    urls: [],
    visibility: 'public',
    tags: [
      {
        name: 'Test',
        color: '#ffffff',
        id: 'bf984e83-f01e-49ae-9554-91a4a17a79ce',
      },
    ],
    thumbnail: {
      work_id: null,
      asset_type: 'image',
      extension: 'png',
      created_at: '2023-05-13T21:38:23.265808',
      id: 'ee6739e3-67f2-4de9-9414-4200570241c6',
      user_id: 'e41601a1-9efe-4b7e-a946-55f7a1df6ef7',
      url: 'http://placehold.jp/150x150.png',
      updated_at: '2023-05-13T21:38:23.275370',
    },
    favorite_count: 2,
    is_favorite: false,
    created_at: '2023-05-13T22:03:25.907240',
    updated_at: '2023-05-13T22:03:25.907240',
  })
);
