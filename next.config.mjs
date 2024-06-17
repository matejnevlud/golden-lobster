/** @type {import('next').NextConfig} */
const nextConfig = {
    //output: "standalone",
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    typescript: {
        ignoreBuildErrors: true,
    },
    reactStrictMode: false,
};

export default nextConfig;
