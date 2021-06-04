import { Container, Grid } from "@material-ui/core";
import Question from "./components/Question/Question";
import Student from "./components/Student/Student";
import Result from "./components/Result/Result";

const app = () => {
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
        {/* <Question /> */}
        <Result />
      </Grid>
    </Container>
  );
};

export default app;
