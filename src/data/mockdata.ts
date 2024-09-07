const questions = [
  {
    id: 'q1',
    question: 'Give me your finnish business ID',
    condition: '',
    tooltip: '',
    syntaxPlaceholder: 'Example: 1234567-8',
    answerType: 'directInput',
    answerOptions: '',
    targetAudience: 'Everyone',
    errorAnswer: 'Please provide a valid business ID',
  },
  {
    id: 'q2',
    question: 'Are you trying to get a loan?',
    condition: '',
    tooltip: '',
    syntaxPlaceholder: '',
    answerType: 'multiChoice',
    answerOptions: 'Yes, No',
    targetAudience: 'Everyone',
    errorAnswer: '',
  },
  {
    id: 'q3',
    question:
      "How much of the company's own free capital are you prepared to use for development and internationalization in the next 12 months?",
    condition: '',
    tooltip:
      "What is own free capital? Own free capital is capital that does not have a repayment obligation, such as accumulated profits and investments made in the company (so-called invested unrestricted equity fund - SVOP). For example, possible dividends are paid from the company's free capital.",
    syntaxPlaceholder: '',
    answerType: 'slider',
    answerOptions: '0, 1000000', // Min and Max values for the slider
    targetAudience: 'Everyone',
    errorAnswer: '',
  },
];

export default questions;
