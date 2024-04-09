import { HttpResponse, http } from 'msw';

export const assetPostHandler = http.post('/api/v1/assets', () => {
  return HttpResponse.json({
    asset_type: 'image',
    extension: 'png',
    url: 'https://placehold.jp/150x150.png',
    id: '90ebfd1e-9224-4022-a200-cf37e',
    user: {
      id: '0a7746d4-de46-42a3-b377-f64bcbc5959a',
      name: 'user',
      display_name: 'user',
      avatar_url:
        'https://cdn.discordapp.com/avatars/506014633665101825/18471b5cd8ba9d026382a9c9723fbb97.png',
      profile: null,
      twitter_id: null,
      github_id: null,
      created_at: '2024-04-02T15:44:52.091Z',
      updated_at: '2024-04-02T15:44:52.091Z',
    },
  });
});
