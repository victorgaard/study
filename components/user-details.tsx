import FormWrapper from './form-wrapper';
import Input from './input';

type PersonalDetails = {
  firstName: string;
  lastName: string;
};

type PersonalDetailsData = PersonalDetails & {
  updateData: (newData: Partial<PersonalDetails>) => void;
};

function PersonalDetails({
  firstName,
  lastName,
  updateData
}: PersonalDetailsData) {
  return (
    <FormWrapper title="Personal details">
      <Input
        type="text"
        name="firstName"
        label="First name"
        error="Please enter your first name."
        value={firstName}
        updateData={updateData}
        required={true}
      />
      <Input
        type="text"
        name="lastName"
        label="Last name"
        error="Please enter your last name."
        value={lastName}
        updateData={updateData}
        required={true}
      />
    </FormWrapper>
  );
}

export default PersonalDetails;
