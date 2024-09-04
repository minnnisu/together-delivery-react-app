import axios from "axios";
import {
  NoAccessTokenError,
  NoRefreshTokenError,
  TokenReissueError,
} from "../exception/errors";

/**
 * AccessToken을 가져오는 함수
 *
 * @throws {NoAccessTokenError} accessToken이 존재하지 않음
 */
export const getAccessToken = () => {
  const accessToken = localStorage.getItem("at");

  if (accessToken === null) {
    throw new NoAccessTokenError();
  }

  return accessToken;
};

/**
 * RefreshToken을 가져오는 함수
 *
 * @throws {NoAccessTokenError} accessToken이 존재하지 않음
 */
export const getRefreshToken = () => {
  const refreshToken = localStorage.getItem("rt");

  if (refreshToken === null) {
    throw new NoRefreshTokenError();
  }

  return refreshToken;
};

const setAccessToken = (accessToken) => {
  localStorage.setItem("at", accessToken);
};

/**
 * 토큰 재발행 함수
 *
 * @throws {TokenReissueError} 토근 재발행 과정에세 오류가 발생함
 */
export const tokenRefresh = async () => {
  const baseURL = import.meta.env.VITE_BASE_URL;

  try {
    const accessToken = getAccessToken();
    const refreshToken = getRefreshToken();

    const response = await axios.post(`${baseURL}/auth/refreshToken`, null, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Authorization-refresh": `Bearer ${refreshToken}`,
      },
    });

    setAccessToken(response.data.accessToken);
  } catch (error) {
    throw new TokenReissueError();
  }
};
