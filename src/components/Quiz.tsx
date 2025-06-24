import React, { useState, useEffect } from 'react';
import QuizComponent from 'react-quiz-component';
import { quiz } from './quizData';
import {
    Box,
    Typography,
    Paper,
    Button,
} from '@mui/material';

const TIMER_SECONDS = 60;

const QuizWithTimer: React.FC = () => {
  const [timer, setTimer] = useState(TIMER_SECONDS);
  const [quizFinished, setQuizFinished] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (started && timer > 0 && !quizFinished) {
      const interval = setInterval(() => setTimer(t => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [started, timer, quizFinished]);

  const onComplete = () => {
    setQuizFinished(true);
  };

  useEffect(() => {
    if (timer === 0 && !quizFinished) {
      setQuizFinished(true);
    }
  }, [timer, quizFinished]);

  const handleStart = () => {
    setStarted(true);
    setTimer(TIMER_SECONDS);
    setQuizFinished(false);
  };

  return (
    <Box sx={{ maxWidth: 700, mx: 'auto', mt: 4 }}>
      <Paper elevation={6} sx={{ p: 3, bgcolor: 'rgba(255,255,255,0.95)', borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom>
          Quiz App
        </Typography>
        {started && (
          <Typography variant="h6" color={timer < 10 ? 'error' : 'primary'} sx={{ mb: 2 }}>
            Time Left: {timer}s
          </Typography>
        )}
        {!started ? (
          <Button variant="contained" color="primary" onClick={handleStart}>
            Start Quiz
          </Button>
        ) : !quizFinished ? (
          <QuizComponent quiz={quiz} shuffle={true} showInstantFeedback={true} onComplete={onComplete} />
        ) : (
          <Typography variant="h5" color="error" align="center" sx={{ mt: 4 }}>
            {timer === 0 ? 'Time is up!' : 'Quiz Finished!'}
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default QuizWithTimer;

/homepage": "https://your-username.github.io/your-repo"