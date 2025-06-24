export interface QuizQuestion {
    id: number;
    question: string;
    options: string[];
    correctAnswer: string;
}

export interface QuizResult {
    score: number;
    totalQuestions: number;
    correctAnswers: number;
}