import React from 'react';
import ToDoList from './ToDoList';


export default function Planner(props){
    const { daysNumber, startDate } = props;
    const divs = [];

//
    const daysDate = []
    function getNextDate(startDate, daysNumber) {
        let result = new Date(startDate);
            result.setDate(result.getDate() + daysNumber);
        return result;
    }

        for (let i=0 ; i <daysNumber ; i++){
            daysDate.push(getNextDate(startDate, i+1).toLocaleString('en-GB', {day: 'numeric',
            month: 'short',}) + "")  
        }  
        console.log(daysDate)

///
    for (let i = 0; i < daysNumber; i++) {
        divs.push(<div className='m-1 px-1 border border-success-subtle bg-success-subtle' key={i} > 
        <i>Day {i + 1} : <br/></i> 
         {daysDate[i].toString()}
                   < ToDoList />
           </div> );}


    return (
        <div className=' row justify-content-around mt-3'>
            <div className='list col-3 ms-1 bg-success-subtle p-1'>
                <p className='p-3 text-center fs-2'> Your plans for next <span className='fst-italic  fw-semibold'>{daysNumber}Days</span> goes here </p>
                <ToDoList/>
            </div>
            <div className=' mx-1 p-1 border col-8 border-success d-flex flex-wrap justify-content-evenly bg-success'>
            {divs}
            </div>

        </div>

    )
}