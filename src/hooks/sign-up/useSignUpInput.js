import { useState } from "react";
import { validateSignUpInput } from "./SignUpInputValidator";
import {
  InternalServerError,
  NicknameDuplicationError,
  UsernameDuplicationError,
} from "../../exception/errors";

const useSignUpInput = () => {
  // value - input의 value
  // status - 유효성 검증 결과
  // description - 유효성 검증 결과에 따라 사용자에 전달할 피드백 내용
  // checkDuplication - 중복확인 여부
  const [inputs, setInputs] = useState({
    username: {
      value: "",
      status: "default",
      description: "",
      checkDuplication: false,
    },
    password: { value: "", status: "default", description: "" },
    passwordCheck: { value: "", status: "default", description: "" },
    name: { value: "", status: "default", description: "" },
    nickname: {
      value: "",
      status: "default",
      description: "",
      checkDuplication: false,
    },
    email: { value: "", status: "default", description: "" },
    college: { value: "", status: "default", description: "" },
    telephone: { value: "", status: "default", description: "" },
  });

  const formatPhoneNumber = (value) => {
    let numbersOnly = value.replace(/[^0-9]/g, "");
    numbersOnly = numbersOnly.slice(0, 11);

    return numbersOnly
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
      .replace(/(-{1,2})$/g, "");
  };

  const handleUsernameDuplicationCheckSuccess = () => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      username: {
        ...prevInputs.username,
        status: "success",
        description: "사용가능한 아이디 입니다.",
        checkDuplication: true,
      },
    }));
  };

  const handleUsernameDuplicationCheckError = (error) => {
    if (error instanceof UsernameDuplicationError) {
      setInputs((prevInputs) => ({
        ...prevInputs,
        username: {
          ...prevInputs.username,
          status: "warning",
          description: "중복된 아이디 입니다.",
        },
      }));
    }

    if (error instanceof InternalServerError) {
      setInputs((prevInputs) => ({
        ...prevInputs,
        username: {
          ...prevInputs.username,
          status: "warning",
          description: "일시적인 오류가 발생하였습니다.",
        },
      }));
    }
  };

  const handleNicknameDuplicationCheckSuccess = () => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      nickname: {
        ...prevInputs.nickname,
        status: "success",
        description: "사용가능한 닉네임 입니다.",
        checkDuplication: true,
      },
    }));
  };

  const handleNicknameDuplicationCheckError = (error) => {
    if (error instanceof NicknameDuplicationError) {
      setInputs((prevInputs) => ({
        ...prevInputs,
        nickname: {
          ...prevInputs.nickname,
          status: "warning",
          description: "중복된 닉네임 입니다.",
        },
      }));
    }

    if (error instanceof InternalServerError) {
      setInputs((prevInputs) => ({
        ...prevInputs,
        nickname: {
          ...prevInputs.nickname,
          status: "warning",
          description: "일시적인 오류가 발생하였습니다.",
        },
      }));
    }
  };

  const handleInputValueUpdate = (type, value) => {
    if (type === "telephone") {
      value = formatPhoneNumber(value);
    }

    // input의 value 업데이트
    setInputs((prevInputs) => ({
      ...prevInputs,
      [type]: {
        ...prevInputs[type],
        value,
      },
    }));

    if (type === "username") {
      setInputs((prevInputs) => ({
        ...prevInputs,
        username: {
          ...prevInputs.username,
          checkDuplication: false,
        },
      }));
    }

    if (type === "nickname") {
      setInputs((prevInputs) => ({
        ...prevInputs,
        nickname: {
          ...prevInputs.nickname,
          checkDuplication: false,
        },
      }));
    }

    // 업데이트된 value값 유효성 검증
    const results = validateSignUpInput(type, value, inputs);

    // 유효성 검증 결과 반영
    setInputs((prevInputs) => {
      results.forEach((result) => {
        prevInputs = {
          ...prevInputs,
          [result.type]: {
            ...prevInputs[result.type],
            status: result.status.status,
            description: result.status.description,
          },
        };
      });

      return prevInputs;
    });
  };

  return {
    inputs,
    handleInputValueUpdate,
    handleUsernameDuplicationCheckSuccess,
    handleUsernameDuplicationCheckError,
    handleNicknameDuplicationCheckSuccess,
    handleNicknameDuplicationCheckError,
  };
};

export default useSignUpInput;
