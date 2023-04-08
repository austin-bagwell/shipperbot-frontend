import { BackgroundImageMain } from "../components/wrappers/MainContentWrapper";
import { AuthForm } from "../components/AuthForm";
import { LabeledInput } from "../components/elements/Input/LabeledInput";

export default function Signup() {
  return (
    <BackgroundImageMain>
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
    </BackgroundImageMain>
  );
}
