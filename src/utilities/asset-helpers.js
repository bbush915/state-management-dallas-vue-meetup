const API_URL = "https://localhost:44386";

export function getAssetUrl(assetPath) {
  return `${API_URL}/images/${assetPath}`;
}
