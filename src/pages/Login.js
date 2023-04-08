import { MainContentWrapper } from "../components/wrappers/flexWrappers";
import { AuthForm } from "../components/AuthForm";
import { LabeledInput } from "../components/elements/Input/LabeledInput";
import BackgroundImage from "../components/BackgroundImg";
export default function Login() {
  return (
    <BackgroundImage>
      <MainContentWrapper>
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
    </BackgroundImage>
  );
}
