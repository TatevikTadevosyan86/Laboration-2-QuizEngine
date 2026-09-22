# Quiz Engine

A reusable JavaScript module for creating practice quizzes.

It supports single-answer, multiple-answer, and typed questions,
question categories, weighted scoring, answer history, and retrying
incorrectly answered questions.

The module handles quiz logic. The application using it provides the
user interface and collects answers.

## 🚀 Features

- Single-answer questions: select one correct option.
- Multiple-answer questions: select all correct options for full points.
- Typed answers: match accepted answers regardless of capitalization
  and surrounding spaces.
- Categories: create a quiz containing questions from one topic.
- Weighted scoring: assign different point values to questions.
- Answer history: review submitted answers and whether they were correct.
- Retry mistakes: create a new quiz from incorrectly answered questions.
- Final results: retrieve earned points, maximum points, and question count.

---

## Getting started

### Requirements

- Node.js 24.12.0 or later.
- npm.
- Git.

### Setup

Clone this repository using its GitHub clone URL, then open a terminal
in the cloned project directory.

Install the development dependencies:

```bash
npm install
```

Run the quiz example:

```bash
npm start
```

Run the automated tests:

```bash
npm run test:run
```

The module has no external runtime dependencies. Its development
dependencies provide testing, linting, and formatting tools.

### Running the example

Run the example to see how the module creates a quiz, checks answers,
and returns results:

```bash
npm start
```

This runs `examples/basic-quiz.js`. The answers are supplied in code;
the example does not prompt for user input.

## Basic usage

Create a file inside the `examples` directory:

```javascript
import { Question, Quiz, QuizSession } from '../src/index.js'

const quiz = new Quiz()

quiz.addQuestion(
  new Question(
    'What is the capital of Sweden?',
    ['Stockholm', 'Oslo'],
    0,
    'Geography',
    3
  )
)

const session = new QuizSession(quiz)

console.log(session.getCurrentQuestion().getText())

session.submitAnswer(0)

console.log(session.getResults())
// { score: 3, totalQuestions: 1, maxScore: 3 }
```

Option indexes start at zero, so `0` selects Stockholm.

The question belongs to the Geography category and awards 3 points
for a correct answer. Results are available after all questions
have been answered.