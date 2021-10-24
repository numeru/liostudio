const withFonts = require("next-fonts")

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

module.exports = withBundleAnalyzer(() =>
  withFonts({
    enableSvg: true,
    compress: true,
    images: {
      domains: [],
    },
    webpack(config, { webpack }) {
      const prod = process.env.NEXT_PUBLIC_MODE === "production"
      return {
        ...config,
        mode: prod ? "production" : "development",
        devtool: prod ? "hidden-source-map" : "eval",
        plugins: [...config.plugins],
      }
    },
  }),
)
