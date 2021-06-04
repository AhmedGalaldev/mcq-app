import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";

const question = () => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        // value={value}
        // onChange={}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel value="dsdsf" control={<Radio />} label="dsdsf" />
      </RadioGroup>
    </FormControl>
  );
};

export default question;
