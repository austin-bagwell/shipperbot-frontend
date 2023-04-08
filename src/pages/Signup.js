import { MainContentWrapper } from "../components/wrappers/flexWrappers";
import { AuthForm } from "../components/AuthForm";
import { LabeledInput } from "../components/elements/Input/LabeledInput";

export default function Signup() {
  return (
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
          <LabeledInput
            type="password"
            name="confirm-password"
            label="confirm password: "
          ></LabeledInput>
        </div>
      </AuthForm>
    </MainContentWrapper>
  );
}
