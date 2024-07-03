import React, { useState } from 'react';
// import  img from '../images/img.png';
import './AgeCalculator.css'

const AgeCalculator = () => {
    const [birthdate, setBirthdate] = useState('');
    const [ageDetails, setAgeDetails] = useState('');

    const calculateAge = () => {
        const today = new Date();
        const birthdateDate = new Date(birthdate);

        let years = today.getFullYear() - birthdateDate.getFullYear();
        let months = today.getMonth() - birthdateDate.getMonth();
        let days = today.getDate() - birthdateDate.getDate();

        if (days < 0) {
            months--;
            days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        const weeks = Math.floor(days / 7);
        days = days % 7;

        const totalHours = Math.floor((today - birthdateDate) / (1000 * 60 * 60));
        const totalMinutes = Math.floor((today - birthdateDate) / (1000 * 60));
        const totalSeconds = Math.floor((today - birthdateDate) / 1000);

        const ageString = `${years} years, ${months} months, ${weeks} weeks, ${days} days \n${totalHours} hours, ${totalMinutes} minutes, ${totalSeconds} seconds`;
        setAgeDetails(ageString.split(", ").map((item, idx) => <div key={idx}>{item}</div>));
    };

    const resetCalculator = () => {
        setBirthdate('');
        setAgeDetails('');
    };

    return (
        <div className='Container'>
         <div>
         <img src="images/img.png" alt="" height= "100px"  width="200px"/>
         </div>
            {/* <h2 className='heading'>Age Calculator</h2> */}
            <p className='para'>The Age Calculator can determine the age or interval between two dates. The calculated age will be displayed in years, months, days, weeks, hours, minutes, and seconds.</p>
            <div className='Container_middle'>
                <div className='right'>
                    <h4>Date of Birth</h4>
                    <input className='date' type="date" value={birthdate} onChange={e => setBirthdate(e.target.value)} />
                    <div className='button_div'>
                        <button className='button' onClick={calculateAge}>Calculate Age</button>
                        <button className="button" onClick={resetCalculator}>Reset</button>
                    </div>  
                </div>
                <div className='left'>
                    <div className='Container_middle_para'>
                        <h1>Your Age is</h1>
                        <div className='age_details'>{ageDetails ? ageDetails : 'Please enter your birthdate.'}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgeCalculator;
