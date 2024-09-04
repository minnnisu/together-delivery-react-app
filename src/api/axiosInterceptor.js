import axios from "axios";
import { NoAccessTokenError, TokenReissueError } from "../exception/errors";
import { getAccessToken, tokenRefresh } from "./token";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

instance.interceptors.request.use(
  (config) => {
    try {
      const accessToken = getAccessToken();

      config.headers["Authorization"] = `Bearer ${accessToken}`;
      return config;
    } catch (error) {
      if (error instanceof NoAccessTokenError) {
        throw new TokenReissueError();
      }
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // 토큰이 만료된 경우 재발행 시도 및 원래 요청하고자 했던 API 재요청
    if (error.response?.data.errorCode === "ExpiredAccessTokenError") {
      try {
        await tokenRefresh();

        const accessToken = getAccessToken();

        error.config.headers = {
          Authorization: `Bearer ${accessToken}`,
        };

        const response = await axios.request(error.config); // 원래 요청하고자 했던 API 재요청

        return response;
      } catch (error) {
        return Promise.reject(new TokenReissueError());
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
