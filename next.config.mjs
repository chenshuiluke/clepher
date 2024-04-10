/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/capture-tools/post-engagements",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
