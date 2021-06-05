import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Button,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../../axios";
import * as examActions from "../../store/actions/action";

const question = ({ question, answers, index }) => {
  const [answer, setAnswer] = useState("");
  const history = useHistory();
  const student = useSelector((state) => state.student);
  const questions = useSelector((state) => state.questions);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  const handleClickAnswer = async (evt) => {
    evt.preventDefault();

    try {
      await axios
        .put(`./students/${student._id}`, { answerId: answer })
        .then((data) => {
          if (index < questions.length - 1) {
            dispatch(examActions.setStudent(data.data));
            history.push(`/${index + 1}`);
          } else {
            dispatch(examActions.setStudent(data.data));
            history.push("/results");
          }
        });
    } catch (error) {
      setErrorMessage(error.response.data.error);
    }
  };
  return (
    <form onSubmit={handleClickAnswer}>
      {errorMessage && <p style={{ color: "red" }}> {errorMessage} </p>}

      <FormControl component="fieldset" fullWidth>
        <FormLabel component="legend">{question}</FormLabel>
        <RadioGroup
          onChange={(e) => setAnswer(e.target.value)}
          value={answer._id}
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
      <Button
        variant="contained"
        color="primary"
        type="submit"
        style={{ marginTop: "10px" }}
      >
        Next
      </Button>
    </form>
  );
};

export default question;
