/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  future: { webpack5: true },
    images: {
        domains: ['fakestoreapi.com', 'anotherwebsite.com'],
      },
}

module.exports = nextConfig
