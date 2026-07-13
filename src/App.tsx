import React, { useState } from 'react';
import logo from './logo.svg';
// @ts-ignore: allow importing CSS in TypeScript project without module declarations
import './App.css';
import NameAge from './components/NameAge';
import QuestionsList from './components/Questions';
import Summary from './components/Summary'


export type Page = 1 | 2 | 3;

export type Question = {
  id:number;
  question:string;
}

export type FormState = {
  firstName: string;
  lastName: string;
  age: string;
  answers: Record<string, string>
}

const questionList: Question[] = [
  {
    id:1,
    question:'What is the difference between a component and a prop in React?'
  },
  {
    id:2,
    question:'When would you use state instead of props in React?'
  }
]

const returnQuestions = () => {
  const questions = [questionList];
  return questions;
}

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(1);
  const [questions] = useState<Question[]>(questionList);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formValues, setFormValues] = useState<FormState>({
    firstName: '',
    lastName: '',
    age: '',
    answers: {},
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleFinalSubmit = () => {
    setIsSubmitted(true);
  };
  const handlePageChange = (page: Page) => {
    if (page < 1) return;
    setCurrentPage(page);
  };
  const updateField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((current) => ({
      ...current,
      [name]: value,
    }));
  };
  const updateAnswer = (questionId: number, value: string) => {
    setFormValues((current) => ({
      ...current,
      answers: {
        ...current.answers,
        [questionId]: value,
      },
    }));
  };

  return (
    <div className="container">
		<section id="contact" className="section-content-contacts">
        <form className="contact-form" onSubmit={handleSubmit}>
            {currentPage === 1 && (
            <NameAge
              firstName={formValues.firstName}
              lastName={formValues.lastName}
              age={formValues.age}
              onChange={updateField}
            />
            )}
            {currentPage === 2 && (
              <QuestionsList
                questions={questions}
                answers={formValues.answers}
                onChange={updateAnswer}
              />
            )}
            {currentPage === 3 && (
              <Summary
              firstName={formValues.firstName} 
              lastName={formValues.lastName} 
              age={formValues.age} 
              questions={questions} 
              answers={formValues.answers}
              isSubmitted={isSubmitted} />
            )}

            <div className="button-wrapper">
              <div className="previous">
                {currentPage > 1 ? (
                  <button onClick={() => handlePageChange((currentPage-1) as Page)}>Previous</button>) : (
                    <span></span>
                )}
              </div>
              <div className="next-submit">
                {currentPage < 3 ? (
                  <button onClick={() => handlePageChange((currentPage + 1) as Page)}>
                    Next
                  </button>
                ) : (
                  <button onClick={handleFinalSubmit}>Submit</button>
                )}
              </div>
            </div>
        </form>
      </section>
    </div>
  );
}

export default App;
