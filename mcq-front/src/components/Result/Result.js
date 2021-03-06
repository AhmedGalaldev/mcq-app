import Alert from "@material-ui/lab/Alert";

const result = ({ student }) => {
  return (
    student && (
      <Alert severity="info">
        {student.name} Your Score is: {student.score}
      </Alert>
    )
  );
};

export default result;
