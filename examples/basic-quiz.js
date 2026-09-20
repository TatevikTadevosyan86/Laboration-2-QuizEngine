import { Quiz } from '../src/Quiz'
import { Question } from '../src/Question'
import { QuizSession } from '../src/QuizSession'

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
