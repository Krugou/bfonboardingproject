import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import QuestionInput from '@/components/MainContent/QuestionsNavigator/QuestionInput';
import { QuestionItem } from '@/app/types';
import { UserContext } from '@/context/UserContext';

const mockSetAnswer = jest.fn();
const mockSetCurrentStep = jest.fn();

const mockQuestion: QuestionItem = {
  id: 'q1',
  question: { en: 'What is your name?', fi: 'Mikä on nimesi?' },
  condition: '',
  tooltip: { en: 'Please enter your full name.', fi: 'Anna koko nimesi.' },
  syntaxPlaceholder: { en: 'Full Name', fi: 'Koko nimi' },
  answerType: 'directInput',
  answerOptions: { en: '', fi: '' },
  targetAudience: '',
  errorAnswer: { en: 'Invalid input', fi: 'Virheellinen syöte' },
  optionalStepAnswer: { en: '', fi: '' },
  unit: '',
  maxLength: 50,
  validationRegex: { en: '^[a-zA-Z ]+$', fi: '^[a-zA-Z ]+$' },
};

const mockUserContext = {
  userInfo: {
    questionAnswers: {},
  },
  setAnswer: mockSetAnswer,
  language: 'en',
};

describe('QuestionInput Component', () => {
  it('renders direct input question', () => {
    const { getByPlaceholderText } = render(
      <UserContext.Provider value={mockUserContext}>
        <QuestionInput
          question={mockQuestion}
          listeningMode={false}
          setCurrentStep={mockSetCurrentStep}
          currentStep={1}
        />
      </UserContext.Provider>
    );

    const inputElement = getByPlaceholderText('Full Name');
    expect(inputElement).toBeInTheDocument();
  });

  it('handles direct input change', () => {
    const { getByPlaceholderText } = render(
      <UserContext.Provider value={mockUserContext}>
        <QuestionInput
          question={mockQuestion}
          listeningMode={false}
          setCurrentStep={mockSetCurrentStep}
          currentStep={1}
        />
      </UserContext.Provider>
    );

    const inputElement = getByPlaceholderText('Full Name');
    fireEvent.change(inputElement, { target: { value: 'John Doe' } });

    expect(mockSetAnswer).toHaveBeenCalledWith('q1', 'John Doe');
  });

  it('renders single choice question', () => {
    const singleChoiceQuestion: QuestionItem = {
      ...mockQuestion,
      answerType: 'singleChoice',
      answerOptions: { en: 'Option 1#Option 2#Option 3', fi: 'Vaihtoehto 1#Vaihtoehto 2#Vaihtoehto 3' },
    };

    const { getByText } = render(
      <UserContext.Provider value={mockUserContext}>
        <QuestionInput
          question={singleChoiceQuestion}
          listeningMode={false}
          setCurrentStep={mockSetCurrentStep}
          currentStep={1}
        />
      </UserContext.Provider>
    );

    const optionElement = getByText('Option 1');
    expect(optionElement).toBeInTheDocument();
  });

  it('handles single choice selection', () => {
    const singleChoiceQuestion: QuestionItem = {
      ...mockQuestion,
      answerType: 'singleChoice',
      answerOptions: { en: 'Option 1#Option 2#Option 3', fi: 'Vaihtoehto 1#Vaihtoehto 2#Vaihtoehto 3' },
    };

    const { getByText } = render(
      <UserContext.Provider value={mockUserContext}>
        <QuestionInput
          question={singleChoiceQuestion}
          listeningMode={false}
          setCurrentStep={mockSetCurrentStep}
          currentStep={1}
        />
      </UserContext.Provider>
    );

    const optionElement = getByText('Option 1');
    fireEvent.click(optionElement);

    expect(mockSetAnswer).toHaveBeenCalledWith('q1', 'Option 1');
  });

  it('renders multi choice question', () => {
    const multiChoiceQuestion: QuestionItem = {
      ...mockQuestion,
      answerType: 'multiChoice',
      answerOptions: { en: 'Option 1#Option 2#Option 3', fi: 'Vaihtoehto 1#Vaihtoehto 2#Vaihtoehto 3' },
    };

    const { getByText } = render(
      <UserContext.Provider value={mockUserContext}>
        <QuestionInput
          question={multiChoiceQuestion}
          listeningMode={false}
          setCurrentStep={mockSetCurrentStep}
          currentStep={1}
        />
      </UserContext.Provider>
    );

    const optionElement = getByText('Option 1');
    expect(optionElement).toBeInTheDocument();
  });

  it('handles multi choice selection', () => {
    const multiChoiceQuestion: QuestionItem = {
      ...mockQuestion,
      answerType: 'multiChoice',
      answerOptions: { en: 'Option 1#Option 2#Option 3', fi: 'Vaihtoehto 1#Vaihtoehto 2#Vaihtoehto 3' },
    };

    const { getByText } = render(
      <UserContext.Provider value={mockUserContext}>
        <QuestionInput
          question={multiChoiceQuestion}
          listeningMode={false}
          setCurrentStep={mockSetCurrentStep}
          currentStep={1}
        />
      </UserContext.Provider>
    );

    const optionElement = getByText('Option 1');
    fireEvent.click(optionElement);

    expect(mockSetAnswer).toHaveBeenCalledWith('q1', ['Option 1']);
  });

  it('renders slider question', () => {
    const sliderQuestion: QuestionItem = {
      ...mockQuestion,
      answerType: 'slider',
      answerOptions: { en: '0#100#1#%', fi: '0#100#1#%' },
    };

    const { getByTitle } = render(
      <UserContext.Provider value={mockUserContext}>
        <QuestionInput
          question={sliderQuestion}
          listeningMode={false}
          setCurrentStep={mockSetCurrentStep}
          currentStep={1}
        />
      </UserContext.Provider>
    );

    const sliderElement = getByTitle('slider');
    expect(sliderElement).toBeInTheDocument();
  });

  it('handles slider change', () => {
    const sliderQuestion: QuestionItem = {
      ...mockQuestion,
      answerType: 'slider',
      answerOptions: { en: '0#100#1#%', fi: '0#100#1#%' },
    };

    const { getByTitle } = render(
      <UserContext.Provider value={mockUserContext}>
        <QuestionInput
          question={sliderQuestion}
          listeningMode={false}
          setCurrentStep={mockSetCurrentStep}
          currentStep={1}
        />
      </UserContext.Provider>
    );

    const sliderElement = getByTitle('slider');
    fireEvent.change(sliderElement, { target: { value: 50 } });

    expect(mockSetAnswer).toHaveBeenCalledWith('q1', 50);
  });
});
