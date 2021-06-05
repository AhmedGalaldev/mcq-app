import { Container, Grid } from "@material-ui/core";
import Question from "./components/Question/Question";
import Student from "./components/Student/Student";
import Result from "./components/Result/Result";
import axios from "./axios";
import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import * as examActions from "./store/actions/action";
import { Route, Switch } from "react-router";

const app = () => {
  const questions = useSelector((state) => state.questions);

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const getQuestions = async () => {
    try {
      setLoading(true);
      await axios.get("./questions").then((data) => {
        dispatch(examActions.setQuestions(data.data));
      });
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  const qst = questions.map((q, index) => {
    return (
      <Route path={`/${index}`} key={q._id}>
        <Question
          question={q.question.name}
          answers={q.answers}
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
        {/* <Student /> */}
        <Switch>{qst}</Switch>
        {/* <Result /> */}
      </Grid>
    </Container>
  );
};

export default app;
