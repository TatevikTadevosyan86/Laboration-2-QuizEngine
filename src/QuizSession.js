/**
 * Tracks one attempt at a quiz.
 */
export class QuizSession {
  #quiz
  #currentQuestionIndex = 0
  #score = 0
  #answers = []

  /**
   * Creates a session for a quiz.
   *
   * @param {import('./Quiz.js').Quiz} quiz - The quiz to attempt.
   */
  constructor(quiz) {
    this.#quiz = quiz
  }

  /**
   * Returns the current question.
   *
   * @returns {import('./Question.js').Question} The current question.
   */
  getCurrentQuestion() {
    return this.#quiz.getQuestion(this.#currentQuestionIndex)
  }

  /**
   * Returns the number of correct answers.
   *
   * @returns {number} The current score.
   */
  getScore() {
    return this.#score
  }
  /**
   * Checks whether all questions have been answered.
   *
   * @returns {boolean} Whether the session is complete.
   */
  isComplete() {
    return this.#currentQuestionIndex >= this.#quiz.getQuestionCount()
  }
  /**
   * Submits an answer and advances to the next question.
   *
   * @param {number} answerIndex - The selected option's index.
   * @returns {boolean} Whether the answer was correct.
   * @throws {Error} If the session is already complete.
   */
  submitAnswer(answerIndex) {
    if (this.isComplete()) {
      throw new Error('Cannot submit an answer after the quiz is complete.')
    }

    const question = this.getCurrentQuestion()
    const correct = question.isCorrect(answerIndex)
    this.#answers.push({
      questionIndex: this.#currentQuestionIndex,
      answer: answerIndex,
      correct,
    })

    if (correct) {
      this.#score += 1
    }

    this.#currentQuestionIndex += 1

    return correct
  }
  /**
   * Returns the final quiz results.
   *
   * @returns {{ score: number, totalQuestions: number }} The results.
   * @throws {Error} If the session is not complete.
   */
  getResults() {
    if (!this.isComplete()) {
      throw new Error('Complete the quiz before requesting results.')
    }

    return {
      score: this.#score,
      totalQuestions: this.#quiz.getQuestionCount(),
    }
  }
  /**
   * Returns copies of the recorded answers.
   *
   * @returns {Array<{questionIndex: number, answer: number, correct: boolean}>}
   *   The submitted answer history.
   */
  getAnswerHistory() {
    const history = []

    for (const answer of this.#answers) {
      history.push({ ...answer })
    }

    return history
  }
}
