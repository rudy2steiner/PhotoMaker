/**
 * Loads example images from URLs and converts them to File objects
 * @param urls Array of image URLs to load
 * @returns Promise resolving to array of File objects
 */
export async function loadExampleImages(urls: string[]): Promise<File[]> {
  const imagePromises = urls.map(async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch image from ${url}`);
      }
      const blob = await response.blob();
      const filename = url.split('/').pop()?.split('?')[0] || 'image.jpg';
      return new File([blob], filename, { type: blob.type });
    } catch (error) {
      console.error(`Failed to load image from ${url}:`, error);
      throw error;
    }
  });

  return Promise.all(imagePromises);
}

/**
 * Validates if an image URL is accessible
 * @param url Image URL to validate
 * @returns Promise resolving to boolean indicating if image is accessible
 */
export async function validateImageUrl(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok && response.headers.get('content-type')?.startsWith('image/');
  } catch {
    return false;
  }
}