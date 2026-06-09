// Custom next/image loader -> Netlify Image CDN (/.netlify/images).
// Bypasses the @netlify/plugin-nextjs v4 IPX/sharp optimizer, which 500s on
// rasters because its native libvips is missing in the deployed function.
// Next strips `config` for custom loaders, so SVG passthrough is handled here.
module.exports = function netlifyImageLoader({ src, width, quality }) {
  // `next dev` has no /.netlify/images endpoint -> serve the raw asset.
  if (process.env.NODE_ENV === "development") return src;
  // Serve SVGs as-is; the Image CDN would rasterize them.
  if (src.endsWith(".svg")) return src;
  return `/.netlify/images?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
};
