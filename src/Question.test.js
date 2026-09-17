import { describe, it, expect } from 'vitest'
import { Question } from './Question.js'

describe('Question', () => {
  it('recognizes the correct answer', () => {
    const question = new Question(
      'What is the capital of Sweden?',
      ['Stockholm', 'Oslo', 'Helsinki'],
      0
    )

    expect(question.isCorrect(0)).toBe(true)
  })
  it('recognizes the correct answer', () => {
    const question = new Question(
      'What is the capital of Sweden?',
      ['Stockholm', 'Oslo', 'Helsinki'],
      0
    )

    expect(question.isCorrect(2)).toBe(false)
  })
})
it('rejects empty question text', () => {
  expect(() => {
    new Question('', ['Stockholm', 'Oslo'], 0)
  }).toThrow()
})