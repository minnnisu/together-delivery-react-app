import instance from "../../api/axiosInterceptor";
import { useQuery } from "react-query";

const fetchUserInfo = async () => {
  return instance.get("/api/user");
};

const useUserInfoGet = () => {
  return useQuery(["get-user-info"], () => fetchUserInfo(), {
    retry: false,
  });
};

export default useUserInfoGet;
