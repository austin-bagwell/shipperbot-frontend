import { Main } from "../components/wrappers/MainContentWrapper";
import { BackgroundImage } from "../components/BackgroundImage";
import { AuthForm } from "../components/AuthForm";
import { LabeledInput } from "../components/elements/Input/LabeledInput";

export default function Login() {
  return (
    <BackgroundImage>
      <Main>
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
      </Main>
    </BackgroundImage>
  );
}
