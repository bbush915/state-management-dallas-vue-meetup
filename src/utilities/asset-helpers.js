const API_URL = process.env.VUE_APP_API_URL;

export function getAssetUrl(assetPath) {
  return `${API_URL}/images/${assetPath}`;
}
