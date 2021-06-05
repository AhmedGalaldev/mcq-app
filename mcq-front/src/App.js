import { Container, Grid } from "@material-ui/core";
import Question from "./components/Question/Question";
import Student from "./components/Student/Student";
import Result from "./components/Result/Result";
import axios from "./axios";
import { useSelector, useDispatch } from "react-redux";
import * as examActions from "./store/actions/action";
import { Route, Switch } from "react-router";

const app = () => {
  const questions = useSelector((state) => state.questions);
  const student = useSelector((state) => state.student);
  const dispatch = useDispatch();

  const getQuestions = async (name) => {
    try {
      await axios
        .get("./questions", {
          params: {
            name: name,
          },
        })
        .then((data) => {
          dispatch(examActions.setQuestions(data.data));
          history.push("/0");
        })
        .catch((err) => {});
    } catch (e) {}
  };

  const qst = questions.map((q, index) => {
    const ansersArr = q.answers.sort(() => 0.5 - Math.random());

    return (
      <Route path={`/${index}`} key={q._id}>
        <Question
          question={q.question.name}
          answers={ansersArr}
          index={index}
        />
      </Route>
    );
  });

  return (
    <Container maxWidth="sm">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Switch>
          <Route path="/" exact>
            <Student getQuestions={getQuestions} />
          </Route>
          {qst}
        </Switch>
        <Route path="/results">
          <Result student={student} />
        </Route>
      </Grid>
    </Container>
  );
};

export default app;
