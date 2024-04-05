const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env['ANALYZE'] === 'true',
});
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'placehold.jp' },
      {
        hostname: 's3.ap-northeast-2.wasabisys.com',
      },
      {
        hostname: 's3.ap-northeast-1.wasabisys.com',
      },
    ],
  },
  modularizeImports: {
    qs: {
      transform: 'qs/lib/{{member}}',
    },
  },
};

module.exports = withBundleAnalyzer(nextConfig);
