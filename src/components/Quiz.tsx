import React, { useState, useEffect } from 'react';
import QuizComponent from 'react-quiz-component';
import { quizCivilReale } from './quizCivilReale';
import { quizContracteSpeciale } from './quizContracteSpeciale';
import { quizSuccesiuni } from './quizSuccesiuni';
import { quizObligatii } from './quizObligatii';
import {
    Box,
    Typography,
    Paper,
    Button,
    ToggleButton,
    ToggleButtonGroup,
} from '@mui/material';

const TIMER_SECONDS = 60 * 60; // 60 minutes
const PASS_PERCENTAGE = 60;

const QuizWithTimer: React.FC = () => {
  const [timer, setTimer] = useState(TIMER_SECONDS);
  const [quizFinished, setQuizFinished] = useState(false);
  const [started, setStarted] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState<'civil' | 'contracte' | 'succesiuni' | 'obligatii'>('civil');
  const [score, setScore] = useState(0);
  const [passed, setPassed] = useState<boolean | null>(null);

  useEffect(() => {
    if (started && timer > 0 && !quizFinished) {
      const interval = setInterval(() => setTimer(t => t - 1), 1000);
      return () => clearInterval(interval);
    }
    return () => {};
  }, [started, timer, quizFinished]);

  const onComplete = (obj: any) => {
    setQuizFinished(true);
    setScore(obj.correctPoints);
    const percent = (obj.correctPoints / obj.totalPoints) * 100;
    setPassed(percent >= PASS_PERCENTAGE);
  };

  useEffect(() => {
    if (timer === 0 && !quizFinished && started) {
      setQuizFinished(true);
    }
  }, [timer, quizFinished, started]);

  const handleStart = () => {
    setStarted(true);
    setTimer(TIMER_SECONDS);
    setQuizFinished(false);
  };

  const handleQuizChange = (
    event: React.MouseEvent<HTMLElement>,
    newQuiz: 'civil' | 'contracte' | 'succesiuni' | 'obligatii' | null
  ) => {
    if (newQuiz) {
      setSelectedQuiz(newQuiz);
      setStarted(false);
      setQuizFinished(false);
      setTimer(TIMER_SECONDS);
    }
  };

  let currentQuiz;
  let quizTitle = '';
  if (selectedQuiz === 'civil') {
    currentQuiz = quizCivilReale;
    quizTitle = 'DREPT CIVIL DREPTURI REALE';
  } else if (selectedQuiz === 'contracte') {
    currentQuiz = quizContracteSpeciale;
    quizTitle = 'DREPT CIVIL CONTRACTE SPECIALE';
  } else if (selectedQuiz === 'succesiuni') {
    currentQuiz = quizSuccesiuni;
    quizTitle = 'DREPT CIVIL SUCCESIUNI';
  } else if (selectedQuiz === 'obligatii') {
    currentQuiz = quizObligatii;
    quizTitle = 'DREPT CIVIL OBLIGAȚII';
  }

  return (
    <Box sx={{ maxWidth: 700, mx: 'auto', mt: 4 }}>
      <Paper elevation={6} sx={{ p: 3, bgcolor: 'rgba(255,255,255,0.95)', borderRadius: 3 }}>
        {!started && (
          <>
            <Typography variant="h4" gutterBottom>
              {quizTitle}
            </Typography>
            <ToggleButtonGroup
              color="primary"
              value={selectedQuiz}
              exclusive
              onChange={handleQuizChange}
              sx={{ mb: 2, flexWrap: 'wrap' }}
            >
              <ToggleButton value="civil">Drept Civil Drepturi Reale</ToggleButton>
              <ToggleButton value="contracte">Drept Civil Contracte Speciale</ToggleButton>
              <ToggleButton value="succesiuni">Drept Civil Succesiuni</ToggleButton>
              <ToggleButton value="obligatii">Drept Civil Obligații</ToggleButton>
            </ToggleButtonGroup>
            <Box sx={{ mt: 3, mb: 2, display: 'flex', justifyContent: 'center' }}>
              <Button
                variant="contained"
                onClick={handleStart}
                sx={{
                  background: 'linear-gradient(135deg, #ff69b4 0%, #6a5acd 100%)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 22,
                  px: 6,
                  py: 1.5,
                  borderRadius: 3,
                  letterSpacing: 2,
                  boxShadow: 4,
                  fontFamily: 'Montserrat, Arial, sans-serif',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #6a5acd 0%, #ff69b4 100%)',
                    boxShadow: 6,
                  },
                }}
              >
                ÎNCEPE
              </Button>
            </Box>
          </>
        )}
        {started && (
          <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" color={timer < 10 ? 'error' : 'primary'}>
                Time Left: {timer}s
              </Typography>
              <Button
                variant="outlined"
                color="error"
                onClick={() => {
                  setStarted(false);
                  setQuizFinished(false);
                  setTimer(TIMER_SECONDS);
                  setPassed(null);
                  setScore(0);
                }}
                sx={{
                  ml: 2,
                  fontWeight: 700,
                  fontFamily: 'Montserrat, Arial, sans-serif',
                  borderRadius: 2,
                  borderWidth: 2,
                  letterSpacing: 1,
                  px: 3,
                  py: 1,
                }}
              >
                OPREȘTE
              </Button>
            </Box>
            {!quizFinished ? (
              <QuizComponent
                quiz={currentQuiz}
                shuffle={true}
                showInstantFeedback={false}
                showDefaultResult={true}
                onComplete={onComplete}
              />
            ) : (
              <>
                <Typography variant="h5" color="error" align="center" sx={{ mt: 4 }}>
                  {timer === 0 ? 'Time is up!' : 'Quiz Finished!'}
                </Typography>
                {passed !== null && (
                  <Typography
                    variant="h5"
                    align="center"
                    sx={{ mt: 2 }}
                    color={passed ? 'success.main' : 'error.main'}
                  >
                    {passed ? 'Testul a fost promovat!' : 'Testul nu a fost promovat.'}
                  </Typography>
                )}
              </>
            )}
          </>
        )}
      </Paper>
    </Box>
  );
};

export default QuizWithTimer;