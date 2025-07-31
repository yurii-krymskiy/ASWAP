export const parseRefreshTokenExpiry = (refreshToken: string): Date | null => {
  try {
    const parts = refreshToken.split(".");
    if (parts.length !== 2) return null;

    const dateStr = parts[1];
    const expiryDate = new Date(dateStr);

    return isNaN(expiryDate.getTime()) ? null : expiryDate;
  } catch {
    return null;
  }
};