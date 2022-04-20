import { useState } from "react"
import { Box, Container, Typography } from "@mui/material"
import ChoiceList from "../ChoiceList"
import Answer from "../answer"
import QuestionImg from "../questionImg"

const Quiz = ({ datum }) => {

  const id = datum.id
  const choices = datum.choices
  const answerIndex = datum.answerIndex

  const [answerIsShown, setAnswerIsShown] = useState(false)
  const [isRightAnswer, setIsRightAnswer] = useState(false)

  const defaultButtonStyle = [
    { variant: 'outlined', color: 'primary' },
    { variant: 'outlined', color: 'primary' },
    { variant: 'outlined', color: 'primary' },
  ]
  const [buttonStyle, setButtonStyle] = useState(defaultButtonStyle)

  const handleClick = (choiceIndex) => {
    if (answerIsShown) return
    setAnswerIsShown(true)
    judgeAnswer(choiceIndex)
  }

  const judgeAnswer = (choiceIndex) => {
    if (choiceIndex === answerIndex) {
      setIsRightAnswer(true)
    }
    const buttonStyle = defaultButtonStyle
    const buttonStyleUpdated = buttonStyle.map((style, index) => {
      if (index === answerIndex) return { variant: 'contained', color: 'primary' }
      if (index === choiceIndex) return { variant: 'contained', color: 'secondary' }
      return style
    })
    setButtonStyle(buttonStyleUpdated)
  }



  return (
    <Box sx={{mt: 6, mb: 6, mx:'auto', width:'70%'}}>
      <Typography sx={{mb: 2, fontWeight: 'bold', fontSize: "24px"}}>
        { id }. この地名はなんて読む?
      </Typography>
      <Box>
        <QuestionImg questionId={id} />
      </Box>
      <Box sx={{width: '100%'}}>
        <ChoiceList
          choices={choices}
          buttonStyle={buttonStyle}
          handleClick={handleClick}
        />
        {
          answerIsShown
          &&
          <Answer
            isRightAnswer={isRightAnswer}
            answer={choices[answerIndex]}
          />
        }
      </Box>
    </Box>
  )
}

export default Quiz