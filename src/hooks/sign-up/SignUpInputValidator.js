const isTextNotBlank = (value) => {
  if (value === null || value.trim() === "") {
    return false;
  }

  return true;
};

const validateUsername = (value) => {
  if (value === "") return { status: "default", description: "" };

  const regex = /^[A-Za-z0-9]+$/;
  if (!regex.test(value))
    return {
      status: "warning",
      description: "영어 소/대문자 혹은 숫자로 입력해주세요",
    };

  if (value.length < 4 || value.length > 20 || !isTextNotBlank(value))
    return {
      status: "warning",
      description: "4자 이상 20자 이하로 입력해주세요",
    };

  return { status: "info", description: "아이디가 중복인지 확인해주세요" };
};

const validatePassword = (value) => {
  if (value === "") return { status: "default", description: "" };

  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/;
  if (!regex.test(value))
    return {
      status: "warning",
      description:
        "알파벳, 숫자 및 특수 문자(@, $, !, %, *, #, ?, &)를 하나 이상 포함시켜주세요",
    };

  if (value.length < 8 || value.length > 20 || !isTextNotBlank(value))
    return {
      status: "warning",
      description: "8자 이상 20자 이하로 입력해주세요",
    };

  return { status: "success", description: "" };
};

const validatePasswordCheck = (passwordValue, passwordCheckValue) => {
  if (passwordCheckValue === "") return { status: "default", description: "" };

  if (passwordValue !== passwordCheckValue) {
    return { status: "warning", description: "비밀번호가 일치하지 않습니다." };
  }

  return { status: "success", description: "" };
};

const validateName = (value) => {
  if (value === "") return { status: "default", description: "" };

  if (/[^a-zA-Z가-힣 ]/.test(value))
    return {
      status: "warning",
      description: "이름은 영문자, 한글 음절, 공백만 포함할 수 있습니다.",
    };
  if (value.length < 2 || value.length > 20 || !isTextNotBlank(value))
    return {
      status: "warning",
      description: "2자 이상 20자 이하로 입력해주세요",
    };

  return { status: "success", description: "" };
};

const validateNickname = (value) => {
  if (value === "") return { status: "default", description: "" };

  if (value.length < 2 || value.length > 10 || !isTextNotBlank(value))
    return {
      status: "warning",
      description: "2자 이상 10자 이하로 입력해주세요",
    };
  return { status: "info", description: "닉네임이 중복인지 확인해주세요" };
};

const validateEmail = (value) => {
  if (value === "") return { status: "default", description: "" };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value))
    return {
      status: "warning",
      description: "유효한 이메일 주소를 입력해주세요",
    };

  return { status: "success", description: "" };
};

const validateCollege = () => {
  return { status: "success", description: "" };
};

const validateTelephone = (value) => {
  if (value === "") return { status: "default", description: "" };

  const onlyNumberValue = value.match(/\d/g);
  if (onlyNumberValue == null) return { status: "default", description: "" };
  if (onlyNumberValue.length < 11)
    return { status: "warning", description: "전화번호를 끝까지 입력해주세요" };

  const phoneNumberPattern = /^01[016789]-\d{3,4}-\d{4}$/;
  if (!phoneNumberPattern.test(value)) {
    return {
      status: "warning",
      description: "유효한 전화번호 형식이 아닙니다",
    };
  }

  return { status: "success", description: "" };
};

export const validateSignUpInput = (type, value, inputs) => {
  if (type === "username") {
    const result = validateUsername(value);
    return [{ type, status: result }];
  }
  if (type === "password") {
    const passwordResult = validatePassword(value);
    const passwordCheckResult = validatePasswordCheck(
      value,
      inputs.passwordCheck.value
    );

    return [
      { type: "password", status: passwordResult },
      { type: "passwordCheck", status: passwordCheckResult },
    ];
  }
  if (type === "passwordCheck") {
    const result = validatePasswordCheck(inputs.password.value, value);
    return [{ type, status: result }];
  }
  if (type === "name") {
    const result = validateName(value);
    return [{ type, status: result }];
  }
  if (type === "nickname") {
    const result = validateNickname(value);
    return [{ type, status: result }];
  }
  if (type === "email") {
    const result = validateEmail(value);
    return [{ type, status: result }];
  }
  if (type === "college") {
    const result = validateCollege(value);
    return [{ type, status: result }];
  }
  if (type === "telephone") {
    const result = validateTelephone(value);
    return [{ type, status: result }];
  }
};

export const validateSignUpForm = (inputs) => {
  if (inputs.username.status !== "success") return false;
  if (inputs.password.status !== "success") return false;
  if (inputs.passwordCheck.status !== "success") return false;
  if (inputs.name.status !== "success") return false;
  if (inputs.nickname.status !== "success") return false;
  if (inputs.email.status !== "success") return false;
  if (inputs.college.status !== "success") return false;
  if (inputs.telephone.status !== "success") return false;

  if (!inputs.username.checkDuplication) return false;
  if (!inputs.nickname.checkDuplication) return false;

  return true;
};
