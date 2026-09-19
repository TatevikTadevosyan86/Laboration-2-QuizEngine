import { describe, it, expect } from 'vitest'
import { Quiz } from './Quiz.js'
import { Question } from './Question.js'

describe('Quiz', () => {
  it('starts with no questions', () => {
    const quiz = new Quiz()

    expect(quiz.getQuestionCount()).toBe(0)
  })

  it('counts an added question', () => {
    const quiz = new Quiz()
    const question = new Question('What is the capital of Sweden?', ['Stockholm', 'Oslo'], 0)

    quiz.addQuestion(question)

    expect(quiz.getQuestionCount()).toBe(1)
  })
  it('retrieves an added question', () => {
    const quiz = new Quiz()
    const question = new Question('What is the capital of Sweden?', ['Stockholm', 'Oslo'], 0)

    quiz.addQuestion(question)

    expect(quiz.getQuestion(0)).toBe(question)
  })
})
