## Summary

The Quiz Engine is tested using automated tests written with Vitest.
The tests check individual classes and how questions, quizzes, and
sessions work together.

Automated tests were chosen because they can be repeated after code
changes and compare actual behavior with expected results.

The tests cover answer checking, input validation, question categories,
weighted scoring, session progress, answer history, and retry quizzes.

To run the tests:

1. Install Node.js 24.12.0 or later.
2. Open a terminal in the repository root.
3. Run `npm install` to install the development dependencies.
4. Run `npm run test:run`.

Test files are stored beside the module classes in `src/`, with names
ending in `.test.js`. Vitest prints the results and a summary of passed
and failed tests.

## Test Results


## Test Results

The latest recorded run used Vitest 5.0.0:
35 tests passed across 5 test files, with no failures.

All tests below were automated using Vitest.

| What was tested | How it was tested | Result |
| --- | --- | --- |
| Single correct answer | Selected the correct option and expected true. | Passed |
| Single incorrect answer | Selected a valid but incorrect option and expected false. | Passed |
| Empty question text | Constructed a question with empty text and expected an error. | Passed |
| Too few options | Supplied one option and expected an error. | Passed |
| Empty options array | Supplied no options and expected an error. | Passed |
| Correct index outside the options | Supplied an out-of-range correct index and expected an error. | Passed |
| Empty answer option | Included an empty option and expected an error. | Passed |
| Negative correct index | Supplied -1 as the correct index and expected an error. | Passed |
| Decimal correct index | Supplied 0.5 as the correct index and expected an error. | Passed |
| Invalid submitted index | Submitted an out-of-range index and expected RangeError. | Passed |
| Custom category | Created a question with a category and checked getCategory(). | Passed |
| Default category | Omitted the category and checked that it was General. | Passed |
| Custom points | Created a question with a custom weight and checked getPoints(). | Passed |
| Default points | Omitted the weight and checked that it was 1. | Passed |
| Multiple correct selections | Selected all correct options in both orders and expected true. | Passed |
| Incomplete or extra selections | Omitted a correct option or included a wrong option and expected false. | Passed |
| Text normalization | Submitted accepted text with different capitalization and surrounding spaces. | Passed |
| Alternative text answers | Submitted accepted alternatives and an incorrect answer. | Passed |
| Empty quiz | Created a quiz and checked that its question count was zero. | Passed |
| Adding a question | Added a question and checked that the count increased to one. | Passed |
| Retrieving a question | Retrieved index zero and checked that it was the added object. | Passed |
| Category filtering | Filtered a mixed quiz and checked matching questions and the unchanged original count. | Passed |
| Initial session state | Checked that a session started at the first question with zero points. | Passed |
| One-question completion | Submitted a correct answer and checked the score and completion state. | Passed |
| Progress and final results | Answered two questions, one correctly, and checked progression and final results. | Passed |
| Results requested too early | Requested results before completion and expected an error. | Passed |
| History order | Submitted two answers and compared the history with the expected records. | Passed |
| Retrying mistakes | Checked that only the incorrect question appeared in a new retry quiz. | Passed |
| Weighted scoring | Answered questions worth 3 and 5 points and checked earned and maximum points. | Passed |
| History protection | Modified the submitted selection and returned history and checked that stored history stayed unchanged. | Passed |
| Text answers in sessions | Checked text-answer scoring, history, and a successful retry. | Passed |
| Stable session questions | Added a question to the original quiz and checked that the existing session was unchanged. | Passed |
| Submission after completion | Submitted another answer and checked that it threw without changing score or history. | Passed |
| Invalid answer preserves state | Submitted an invalid index, checked unchanged state, then submitted a valid answer. | Passed |
| Retry after a perfect attempt | Answered correctly and checked that the retry quiz had zero questions and points. | Passed |

## Additional Checks

- `npm run lint`: completed without reported errors or warnings.
- `npm run format:check`: all matched source files used Prettier formatting.
- The basic example produced the expected final result:
  `{ score: 1, totalQuestions: 2, maxScore: 2 }`.

## Issues Found During Development

The text-question test suite initially could not load because
TextQuestion.js had not yet been implemented. It passed after the
class was added.

A session test initially failed because its TextQuestion import was
missing. Adding the import to the test file resolved the failure.

ESLint also identified an unused import and malformed JSDoc comments.
These were corrected, and the later lint check completed successfully.

## Limitations

Passing these tests does not demonstrate complete coverage.
Some validation branches and edge cases remain untested, including
duplicate multiple-choice selections, invalid point values, and
requesting a retry before completion.