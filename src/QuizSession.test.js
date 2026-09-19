import { describe, it, expect } from 'vitest'
import { Question } from './Question.js'
import { Quiz } from './Quiz.js'
import { QuizSession } from './QuizSession.js'

describe('QuizSession', () => {
  it('starts at the first question with a score of zero', () => {
    const question = new Question('What is the capital of Sweden?', ['Stockholm', 'Oslo'], 0)
    const quiz = new Quiz()
    quiz.addQuestion(question)

    const session = new QuizSession(quiz)

    expect(session.getCurrentQuestion()).toBe(question)
    expect(session.getScore()).toBe(0)
  })
})
