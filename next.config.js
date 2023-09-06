/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  experimental: {
    appDir: true,
  },
  output: 'export',
  
    images: {
      unoptimized:true,
        domains: ['fakestoreapi.com', 'anotherwebsite.com'],
      },
}

module.exports = nextConfig
