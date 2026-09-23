import { Question, Quiz, QuizSession } from '../src/index.js'
const quiz = new Quiz()
quiz.addQuestion(new Question('What is the capital of Sweden?', ['Stockholm', 'Oslo'], 0))
quiz.addQuestion(new Question('What is the capital of Norway?', ['Stockholm', 'Oslo'], 1))

const session = new QuizSession(quiz)
console.log(session.getCurrentQuestion().getText())
console.log(session.getCurrentQuestion().getOptions())
console.log('Correct answer:', session.submitAnswer(0))

console.log(session.getCurrentQuestion().getText())
console.log(session.getCurrentQuestion().getOptions())
console.log('Correct answer:', session.submitAnswer(0))

console.log('Final results:', session.getResults())
const retryQuiz = session.createRetryQuiz()

console.log('Questions to retry:', retryQuiz.getQuestionCount())

if (retryQuiz.getQuestionCount() > 0) {
  const retrySession = new QuizSession(retryQuiz)

  console.log('Retry question:', retrySession.getCurrentQuestion().getText())
  console.log(retrySession.getCurrentQuestion().getOptions())

  console.log('Correct answer:', retrySession.submitAnswer(1))
  console.log('Retry results:', retrySession.getResults())
}
