export function convertGoogleDriveUrl(url?: string) {
  if (typeof url != "string") return;

  const driveRegex =
    /https?:\/\/drive\.google\.com\/file\/d\/([\w-]+)\/view\?.*/;
  const match = url.match(driveRegex);

  if (match) {
    const fileId = match[1];
    return `https://drive.usercontent.google.com/download?id=${fileId}`;
  }

  return;
}
