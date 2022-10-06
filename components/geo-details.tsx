import FormWrapper from './form-wrapper';
import Input from './input';

type GeoDetails = {
  city: string;
  state: string;
};

type GeoDetailsData = GeoDetails & {
  updateData: (newData: Partial<GeoDetails>) => void;
};

function GeoDetails({ city, state, updateData }: GeoDetailsData) {
  return (
    <FormWrapper title="Location details">
      <Input
        type="text"
        name="city"
        label="City"
        error="Please enter your city name."
        value={city}
        updateData={updateData}
        required={true}
        autofocus={true}
      />
      <Input
        type="text"
        name="state"
        label="State"
        error="Please enter your state."
        value={state}
        updateData={updateData}
        required={true}
      />
    </FormWrapper>
  );
}

export default GeoDetails;
