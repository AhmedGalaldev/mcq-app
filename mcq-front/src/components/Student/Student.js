import {
  FormControl,
  InputLabel,
  Input,
  Button,
  // FormHelperText,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as examActions from "../../store/actions/action";
import axios from "../../axios";

const student = (props) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const handleStudentName = async (evt) => {
    evt.preventDefault();

    try {
      setLoading(true);

      await axios
        .post("./students", { name })
        .then((data) => {
          dispatch(examActions.setStudent(data.data.data));
          props.getQuestions(name);
          history.push("/0");
        })
        .catch((error) => {
          setErrorMessage(error.response.data.error);
        });
    } catch (e) {
      // console.log(e.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleStudentName}>
      {errorMessage && <p style={{ color: "red" }}> {errorMessage} </p>}
      <FormControl fullWidth>
        <InputLabel htmlFor="name">Enter Your Name</InputLabel>
        <Input
          id="student-name"
          aria-describedby="my-helper-text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        style={{ marginTop: "10px" }}
      >
        Save
      </Button>
    </form>
  );
};

export default student;
