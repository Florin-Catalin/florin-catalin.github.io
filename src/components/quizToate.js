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

export const quizToateShort = {
  ...quizToate,
  nrOfQuestions: 20,
  questions: quizToate.questions.slice(0, 20),
};