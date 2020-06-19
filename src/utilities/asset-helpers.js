const ASSET_URL = process.env.VUE_APP_ASSET_URL;

export function getAssetUrl(assetPath) {
  return `${ASSET_URL}/images/${assetPath}`;
}
