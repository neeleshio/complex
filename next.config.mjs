/** @type {import('next').NextConfig} */
import nextMdx from '@next/mdx';

const withMdx = nextMdx({
    // By default only the `.mdx` extension is supported.
    extension: /\.mdx?$/,
    options: {
        /* otherOptions… */
    }
});

const nextConfig = withMdx({
    images: {
        domains: ['static.vecteezy.com']
    },
    pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true
    }
});

export default nextConfig;
