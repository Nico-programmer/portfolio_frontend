const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getMediaUrl = (
  path?: string | null
): string | undefined => {
  if (!path) {
    return undefined;
  }

  if (path.startsWith("http")) {
    return path;
  }

  return `${BACKEND_URL}${path}`;
};