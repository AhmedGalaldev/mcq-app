import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";

const question = ({ question, answers }) => {
  console.log(question);
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{question}</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        // value={value}
        // onChange={}
      >
        {answers.map((answer) => {
          return (
            <FormControlLabel
              key={answer._id}
              value={answer._id}
              control={<Radio />}
              label={answer.name}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default question;
