import Cookies from "js-cookie";

export const setAccessTokenCookie = (accessToken: string, expiresAt: string | Date) => {
  const expiryDate = new Date(expiresAt);

  Cookies.set("accessToken", accessToken, {
    expires: expiryDate,
    secure: true,
    sameSite: "Strict",
  });
};
