import { MainContentWrapper } from "../components/wrappers/flexWrappers";
import { AuthForm } from "../components/AuthForm";
import { LabeledInput } from "../components/elements/Input/LabeledInput";
import Background from "../assets/background_1.jpg";

export default function Login() {
  return (
    <MainContentWrapper
      style={{
        backgroundImage: `url(${Background}`,
        backgroundPosition: "center",
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <AuthForm>
        <div>
          <LabeledInput
            type="text"
            name="username"
            label="username: "
          ></LabeledInput>
          <LabeledInput
            type="password"
            name="password"
            label="password: "
          ></LabeledInput>
        </div>
      </AuthForm>
    </MainContentWrapper>
  );
}
