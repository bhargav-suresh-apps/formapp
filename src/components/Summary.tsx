import React from 'react';
import type {Question} from '../App';


type SummaryProps = {
  firstName: string;
  lastName: string;
  age: string;
  questions: Question[];
  answers: Record<string, string>;
  isSubmitted: boolean;
};

function Summary(
    {firstName, lastName, age, questions, answers, isSubmitted,}: SummaryProps)
{
    return(
        <section className="Summary">
            <h2>Summary</h2>
            <div className="Summarydiv">
                <h3>Personal details</h3>
                    <p>
                        <strong>First name:</strong> {firstName || 'Not provided'}
                    </p>
                    <p>
                        <strong>Last name:</strong> {lastName || 'Not provided'}
                    </p>
                    <p>
                        <strong>Age:</strong> {age || 'Not provided'}
                    </p>
            </div>
            <div className="Summarydiv">
                <h2>Questions</h2>
                {questions.map((question) => (
                    <div key={question.id} className="summaryQuestion">
                        <p className="question"><strong>{question.question}</strong></p>
                        <p>{answers[question.id] || 'Not provided'}</p>
                    </div>
                ))}
            </div>

            {isSubmitted && <p className="submission-note">Form submitted successfully.</p>}
        </section>
    )
}

export default Summary;