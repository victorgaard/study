import FormWrapper from './form-wrapper';
import Input from './input';

type AccountDetails = {
  email: string;
  password: string;
};

type AccountDetailsData = AccountDetails & {
  updateData: (newData: Partial<AccountDetails>) => void;
};

function AccountDetails({ email, password, updateData }: AccountDetailsData) {
  return (
    <FormWrapper title="Account details">
      <Input
        type="email"
        name="email"
        label="Email"
        error="Please enter your email."
        value={email}
        updateData={updateData}
        required={true}
        autofocus={true}
      />
      <Input
        type="password"
        name="password"
        label="Password"
        error="Please enter your password."
        value={password}
        updateData={updateData}
        required={true}
      />
    </FormWrapper>
  );
}

export default AccountDetails;
