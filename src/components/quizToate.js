import { quizCivilReale } from './quizCivilReale';
import { quizContracteSpeciale } from './quizContracteSpeciale';
import { quizSuccesiuni } from './quizSuccesiuni';
import { quizObligatii } from './quizObligatii';

const allQuestions = [
  ...quizCivilReale.questions,
  ...quizContracteSpeciale.questions,
  ...quizSuccesiuni.questions,
  ...quizObligatii.questions,
];

export const quizToate = {
  quizTitle: "TOATE ÎNTREBĂRILE",
  quizSynopsis: "Toate întrebările din toate categoriile.",
  nrOfQuestions: allQuestions.length,
  questions: allQuestions,
};