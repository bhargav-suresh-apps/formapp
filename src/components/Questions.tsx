import React from 'react'
import type {Question} from '../App';

type QuestionProps = {
    questions: Question[];
    answers: Record<string, string>;
    onChange: (questionId: number, value: string) => void;
}

const Questions = ({ questions, answers, onChange }: QuestionProps) => {
  return (
    <section className="Questions">
        <h2>Questions about react</h2>
        {questions.map((question) => (
          <label key={question.id}>
            {question.question}
            <textarea
              value={answers[question.id] ?? ''}
              onChange={(e) => onChange(question.id, e.target.value)}
            />
          </label>
        ))}
    </section>
  )
}

export default Questions
