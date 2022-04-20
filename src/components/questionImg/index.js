const QuestionImg = ({ questionId }) => {
  return (
      <img
        src={`/img/kuizy${('0' + questionId).slice(-2)}.png`}
        width="100%"
      />
  )
}

export default QuestionImg