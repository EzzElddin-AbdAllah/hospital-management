module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
				port: "",
				pathname: "/dmkoec84b/**",
			},
		],
	},
	async redirects() {
		return [
			{
				source: "/auth/:path*",
				destination: "/404",
				permanent: false,
			},
			{
				source: "/old-home/:path*",
				destination: "/404",
				permanent: false,
			},
		];
	},
};
