import { BackgroundImage } from "../components/BackgroundImage";
import { AuthForm } from "../components/AuthForm";
import { LabeledInput } from "../components/elements/Input/LabeledInput";
import { Main } from "../components/wrappers/MainContentWrapper";

export default function Signup() {
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
            <LabeledInput
              type="password"
              name="confirm-password"
              label="confirm password: "
            ></LabeledInput>
          </div>
        </AuthForm>
      </Main>
    </BackgroundImage>
  );
}
