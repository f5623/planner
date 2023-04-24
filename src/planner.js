import React from 'react';
import ToDoList from './ToDoList';


export default function Planner(props){
    const { daysNumber, startDate } = props;
    console.log(startDate)
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
        divs.push(<div key={i} > 
        <i>Day {i + 1}</i> 
         {daysDate[i].toString()}
                   < ToDoList />
           </div> );}


    return (
        <div className='d-flex '>
            <div className='list w-20'>
                your plans for next {daysNumber} goes here
            </div>
            <div className='daysView mx-2 border d-flex flex-wrap'>
            {divs}
            </div>

        </div>

    )
}