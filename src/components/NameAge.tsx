import React from 'react';
type NameAgeProps = {
    firstName: string;
    lastName: string;
    age:string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function NameAge({firstName, lastName, age, onChange}:NameAgeProps){
    return(
        <section className="NameAge">
            <h2>Personal details</h2>
            <div>
            <label>First name</label>
            <input name="firstName" value={firstName} onChange={onChange} />
            </div>

            <div>
            <label>Last name</label>
            <input name="lastName" value={lastName} onChange={onChange} />
            </div>

            <div>
            <label>Age</label>
            <input name="age" type="number" min="0" value={age} onChange={onChange} />
            </div>

        </section>
    )
}

export default NameAge;