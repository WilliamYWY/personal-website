/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/bio',
            permanent: true,
          },
        ]
      },    
}

module.exports = nextConfig
