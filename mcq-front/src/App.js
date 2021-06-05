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
  const student = useSelector((state) => state.student);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const getQuestions = async (name) => {
    try {
      setLoading(true);
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
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

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
