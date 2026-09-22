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

## Question types

Import the question classes from the module's entry file.
This path assumes your file is inside the `examples` directory.

```javascript
import {
  Question,
  MultipleChoiceQuestion,
  TextQuestion
} from '../src/index.js'
```

### Single correct answer

Provide the options and the index of the correct option.
Indexes start at zero.

```javascript
const question = new Question(
  'What is the capital of Sweden?',
  ['Stockholm', 'Oslo'],
  0,
  'Geography',
  2
)

question.isCorrect(0) // true
question.isCorrect(1) // false
```

### Multiple correct answers

Provide an array of correct option indexes.

```javascript
const question = new MultipleChoiceQuestion(
  'Which numbers are even?',
  ['2', '3', '4'],
  [0, 2],
  'Mathematics',
  3
)

question.isCorrect([0, 2]) // true
question.isCorrect([2, 0]) // true: order does not matter
question.isCorrect([0]) // false: incomplete selection
question.isCorrect([0, 1, 2]) // false: includes an incorrect option
```

All correct options must be selected, with no extra options.
Duplicate or out-of-range indexes throw an error. There is no partial credit.

### Typed answer

Provide an array of accepted answers.

```javascript
const question = new TextQuestion(
  'What is the common abbreviation for JavaScript?',
  ['JS', 'JavaScript'],
  'Programming',
  2
)

question.isCorrect('js') // true
question.isCorrect('  JAVASCRIPT  ') // true
question.isCorrect('Java') // false
```

Matching ignores capitalization and surrounding spaces.
Spelling mistakes are not automatically corrected.

### Categories, points, and sessions

For all question types, category defaults to `'General'` and points
default to `1` when omitted. Points must be a positive integer.

Calling `isCorrect()` only checks an answer. To record the answer,
award points, and advance through a quiz, call
`session.submitAnswer(answer)` instead.

Pass a number for a single-answer question, an array of numbers for
a multiple-answer question, or a string for a typed-answer question.
## Categories, history, and retries

### Select a category

Create a new quiz containing only questions from one category:

```javascript
const geographyQuiz = quiz.filterByCategory('Geography')
const session = new QuizSession(geographyQuiz)
```

The original quiz is unchanged. Category matching is case-sensitive.
If no questions match, the returned quiz is empty.

### Read answer history

After submitting answers, retrieve their history:

```javascript
const history = session.getAnswerHistory()
console.log(history)
```

Each record contains:

```javascript
{
  questionIndex: 0,
  answer: 1,
  correct: false
}
```

`questionIndex` is the question's position in the session.
`answer` contains the submitted number, array of numbers, or text.

History is available during and after a session. Returned records
and selection arrays are copies, so editing them does not change
the session's stored history.

### Retry mistakes

After completing a session, create a quiz containing only the
incorrectly answered questions:

```javascript
const retryQuiz = session.createRetryQuiz()

if (retryQuiz.getQuestionCount() > 0) {
  const retrySession = new QuizSession(retryQuiz)
  console.log(retrySession.getCurrentQuestion().getText())
}
```

The retry session starts with zero points and an empty answer history.
Questions retain their categories and point values.

If every answer was correct, the retry quiz is empty.
Requesting a retry quiz before the session is complete throws an error. 
## Project structure

```text
├── src/
│   ├── index.js                       # Public exports
│   ├── Question.js                    # Single-answer questions
│   ├── MultipleChoiceQuestion.js      # Multiple-answer questions
│   ├── TextQuestion.js                # Typed-answer questions
│   ├── Quiz.js                        # Question collection and filtering
│   ├── QuizSession.js                 # Progress, scoring, history, retries
│   └── *.test.js                      # Automated tests for each class
├── examples/
│   └── basic-quiz.js                  # Runnable usage example
├── test/
│   └── README.md                      # Testing notes from the template
├── package.json                       # Package settings and scripts
├── README.md                          # Usage documentation
└── LICENSE                            # License terms
```

Import the public classes through `src/index.js`.
The example is separate from the reusable module.

## License

This project uses the Unlicense. See [LICENSE](./LICENSE) for details.