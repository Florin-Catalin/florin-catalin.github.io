import React, { useState, useEffect } from 'react';
import QuizComponent from 'react-quiz-component';
import { quizCivilReale, quizCivilRealeShort } from './quizCivilReale';
import { quizContracteSpeciale, quizContracteSpecialeShort } from './quizContracteSpeciale';
import { quizSuccesiuni, quizSuccesiuniShort } from './quizSuccesiuni';
import { quizObligatii, quizObligatiiShort } from './quizObligatii';
import { quizToate, quizToateShort } from './quizToate';
import { quizCivilGenerala, quizCivilGeneralaShort } from './quizCivilGenerala';
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
  const [selectedQuiz, setSelectedQuiz] = useState<
    'generala' | 'generalaShort' |
    'reale' | 'realeShort' |
    'contracte' | 'contracteShort' |
    'succesiuni' | 'succesiuniShort' |
    'obligatii' | 'obligatiiShort' |
    'toate' | 'toateShort'
  >('generala');
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
    newQuiz: 'generala' | 'generalaShort' | 'reale' | 'realeShort' | 'contracte' | 'contracteShort' | 'succesiuni' | 'succesiuniShort' | 'obligatii' | 'obligatiiShort' | 'toate' | 'toateShort' | null
  ) => {
    if (newQuiz) {
      setSelectedQuiz(newQuiz);
      setStarted(false);
      setQuizFinished(false);
      setTimer(TIMER_SECONDS);
    }
  };

  let currentQuiz;
  switch (selectedQuiz) {
    case 'obligatii':
      currentQuiz = quizObligatii;
      break;
    case 'obligatiiShort':
      currentQuiz = quizObligatiiShort;
      break;
    case 'reale':
      currentQuiz = quizCivilReale;
      break;
    case 'realeShort':
      currentQuiz = quizCivilRealeShort;
      break;
    case 'contracte':
      currentQuiz = quizContracteSpeciale;
      break;
    case 'contracteShort':
      currentQuiz = quizContracteSpecialeShort;
      break;
    case 'succesiuni':
      currentQuiz = quizSuccesiuni;
      break;
    case 'succesiuniShort':
      currentQuiz = quizSuccesiuniShort;
      break;
    case 'generala':
      currentQuiz = quizCivilGenerala;
      break;
    case 'generalaShort':
      currentQuiz = quizCivilGeneralaShort;
      break;
    case 'toate':
      currentQuiz = quizToate;
      break;
    case 'toateShort':
      currentQuiz = quizToateShort;
      break;
    default:
      currentQuiz = quizCivilGenerala;
  }

  let quizTitle = '';
  if (selectedQuiz === 'generala' || selectedQuiz === 'generalaShort') {
    quizTitle = 'DREPT CIVIL - PARTEA GENERALĂ';
  } else if (selectedQuiz === 'reale' || selectedQuiz === 'realeShort') {
    quizTitle = 'DREPT CIVIL DREPTURI REALE';
  } else if (selectedQuiz === 'contracte' || selectedQuiz === 'contracteShort') {
    quizTitle = 'DREPT CIVIL CONTRACTE SPECIALE';
  } else if (selectedQuiz === 'succesiuni' || selectedQuiz === 'succesiuniShort') {
    quizTitle = 'DREPT CIVIL SUCCESIUNI';
  } else if (selectedQuiz === 'obligatii' || selectedQuiz === 'obligatiiShort') {
    quizTitle = 'DREPT CIVIL OBLIGAȚII';
  } else if (selectedQuiz === 'toate' || selectedQuiz === 'toateShort') {
    quizTitle = 'TOATE ÎNTREBĂRILE';
  }

  return (
    <Box sx={{ maxWidth: 700, mx: 'auto', mt: 4 }}>
      <Paper elevation={6} sx={{ p: 3, bgcolor: 'rgba(255,255,255,0.95)', borderRadius: 3 }}>
        {!started && (
          <>
            <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 700, letterSpacing: 1, mb: 4 }}>
              {quizTitle}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                mb: 4,
              }}
            >
              {/* One row per category */}
              {[
                { full: 'obligatii', short: 'obligatiiShort', label: 'Obligații' },
                { full: 'reale', short: 'realeShort', label: 'Drepturi Reale' },
                { full: 'contracte', short: 'contracteShort', label: 'Contracte Speciale' },
                { full: 'succesiuni', short: 'succesiuniShort', label: 'Succesiuni' },
                { full: 'generala', short: 'generalaShort', label: 'Partea Generală' },
                { full: 'toate', short: 'toateShort', label: 'TOATE ÎNTREBĂRILE' },
              ].map(cat => (
                <Box key={cat.full} sx={{ display: 'flex', gap: 2 }}>
                  <ToggleButtonGroup
                    color="primary"
                    value={selectedQuiz}
                    exclusive
                    onChange={handleQuizChange}
                    sx={{ background: 'transparent', boxShadow: 'none', border: 'none' }}
                  >
                    <ToggleButton
                      value={cat.full}
                      sx={{
                        minWidth: 180,
                        minHeight: 60,
                        fontSize: 18,
                        fontWeight: 600,
                        borderRadius: 3,
                        boxShadow: 2,
                        background: selectedQuiz === cat.full
                          ? 'linear-gradient(135deg, #6a5acd 0%, #ff69b4 100%)'
                          : '#fff',
                        color: selectedQuiz === cat.full ? '#fff' : '#6a5acd',
                        border: selectedQuiz === cat.full ? '2px solid #6a5acd' : '2px solid #e0e0e0',
                        transition: 'all 0.2s',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #6a5acd 0%, #ff69b4 100%)',
                          color: '#fff',
                          border: '2px solid #6a5acd',
                        },
                      }}
                    >
                      {cat.label}
                    </ToggleButton>
                    <ToggleButton
                      value={cat.short}
                      sx={{
                        minWidth: 180,
                        minHeight: 60,
                        fontSize: 18,
                        fontWeight: 600,
                        borderRadius: 3,
                        boxShadow: 2,
                        background: selectedQuiz === cat.short
                          ? 'linear-gradient(135deg, #ff69b4 0%, #6a5acd 100%)'
                          : '#fff',
                        color: selectedQuiz === cat.short ? '#fff' : '#6a5acd',
                        border: selectedQuiz === cat.short ? '2px solid #ff69b4' : '2px solid #e0e0e0',
                        transition: 'all 0.2s',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #ff69b4 0%, #6a5acd 100%)',
                          color: '#fff',
                          border: '2px solid #ff69b4',
                        },
                      }}
                    >
                      {cat.label} (20 întrebări)
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Box>
              ))}
            </Box>
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
                showInstantFeedback={true} 
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