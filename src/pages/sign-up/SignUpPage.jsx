import SignUpLayout from "./layout/SignUpLayout";
import LogoTitle from "../../components/LogoTitle/LogoTitle";
import CheckButton from "./components/CheckButton/CheckButton";
import SignUpInput from "./components/SignUpInput/SignUpInput";
import BlindBigButton from "../../components/BlindBigButton/BlindBigButton";
import useSignUpInput from "../../hooks/sign-up/useSignUpInput";
import useUsernameDuplicationCheck from "../../hooks/sign-up/useUserNameDuplicationCheck";
import useNicknameDuplicationCheck from "../../hooks/sign-up/useNicknameDuplicationCheck";
import useSignUpFormSubmit from "../../hooks/sign-up/useSignUpFormSubmit";
import { useNavigate } from "react-router-dom";
import BlindBigLoadingButton from "../../components/BlindBigLoadingButton/BlindBigLoadingButton";

const SignUpPage = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/signIn");
  };

  const {
    inputs,
    handleInputValueUpdate,
    handleUsernameDuplicationCheckSuccess,
    handleUsernameDuplicationCheckError,
    handleNicknameDuplicationCheckSuccess,
    handleNicknameDuplicationCheckError,
  } = useSignUpInput();

  const { handleUsernameDuplicationCheck } = useUsernameDuplicationCheck(
    handleUsernameDuplicationCheckSuccess,
    handleUsernameDuplicationCheckError
  );

  const { handleNicknameDuplicationCheck } = useNicknameDuplicationCheck(
    handleNicknameDuplicationCheckSuccess,
    handleNicknameDuplicationCheckError
  );

  const { signUpMutation, handleSignUpFormSubmit } =
    useSignUpFormSubmit(navigateHome);

  return (
    <SignUpLayout>
      <LogoTitle />
      <SignUpInput
        label={"아이디"}
        statusDescription={inputs.username.description}
        status={inputs.username.status}
        placeholder={"아이디"}
        onChange={(event) =>
          handleInputValueUpdate("username", event.target.value)
        }
        value={inputs.username.value}
      />
      <CheckButton
        onClick={() => handleUsernameDuplicationCheck(inputs.username.value)}
      >
        {"중복 확인"}
      </CheckButton>
      <SignUpInput
        label={"비밀번호"}
        statusDescription={inputs.password.description}
        status={inputs.password.status}
        type="password"
        placeholder={"비밀번호"}
        onChange={(event) =>
          handleInputValueUpdate("password", event.target.value)
        }
        value={inputs.password.value}
      />
      <SignUpInput
        label={"비밀번호 확인"}
        statusDescription={inputs.passwordCheck.description}
        status={inputs.passwordCheck.status}
        type="password"
        placeholder={"비밀번호 확인"}
        onChange={(event) =>
          handleInputValueUpdate("passwordCheck", event.target.value)
        }
        value={inputs.passwordCheck.value}
      />
      <SignUpInput
        label={"이름"}
        statusDescription={inputs.name.description}
        status={inputs.name.status}
        placeholder={"홍길동"}
        onChange={(event) => handleInputValueUpdate("name", event.target.value)}
        value={inputs.name.value}
      />
      <SignUpInput
        label={"닉네임"}
        statusDescription={inputs.nickname.description}
        status={inputs.nickname.status}
        placeholder={"코린이"}
        onChange={(event) =>
          handleInputValueUpdate("nickname", event.target.value)
        }
        value={inputs.nickname.value}
      />
      <CheckButton
        onClick={() => handleNicknameDuplicationCheck(inputs.nickname.value)}
      >
        {"중복 확인"}
      </CheckButton>
      <SignUpInput
        label={"이메일"}
        statusDescription={inputs.email.description}
        status={inputs.email.status}
        placeholder={"hanggi@naver.com"}
        onChange={(event) =>
          handleInputValueUpdate("email", event.target.value)
        }
        value={inputs.email.value}
      />
      <SignUpInput
        label={"대학교"}
        statusDescription={inputs.college.description}
        status={inputs.college.status}
        placeholder={"한끼 대학교"}
        onChange={(event) =>
          handleInputValueUpdate("college", event.target.value)
        }
        value={inputs.college.value}
      />
      <SignUpInput
        label={"전화번호"}
        statusDescription={inputs.telephone.description}
        status={inputs.telephone.status}
        placeholder={"010 1234 5678"}
        onChange={(event) =>
          handleInputValueUpdate("telephone", event.target.value)
        }
        value={inputs.telephone.value}
      />
      {!signUpMutation.isLoading ? (
        <BlindBigButton onClick={() => handleSignUpFormSubmit(inputs)}>
          {"회원가입"}
        </BlindBigButton>
      ) : (
        <BlindBigLoadingButton />
      )}
      <BlindBigLoadingButton />
    </SignUpLayout>
  );
};

export default SignUpPage;
