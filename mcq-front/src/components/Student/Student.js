import {
  FormControl,
  InputLabel,
  Input,
  Button,
  // FormHelperText,
} from "@material-ui/core";

const student = () => {
  return (
    <form>
      <FormControl fullWidth>
        <InputLabel htmlFor="name">Enter Your Name</InputLabel>
        <Input id="student-name" aria-describedby="my-helper-text" />

        {/* <FormHelperText id="my-helper-text">
        We'll never share your email.
      </FormHelperText> */}
      </FormControl>
      <Button variant="contained" color="primary" style={{ marginTop: "10px" }}>
        Save
      </Button>
    </form>
  );
};

export default student;
