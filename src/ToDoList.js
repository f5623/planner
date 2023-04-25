import React, { useState } from 'react';
import './App.css'

function ToDoList() {
    const [items, setItems] = useState([]);
    const [newItemText, setNewItemText] = useState('');


    const handleTextChange = (event) => {setNewItemText(event.target.value);}
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {const trimmedText = newItemText.trim();
            if (trimmedText) {setItems([...items, trimmedText]);setNewItemText('');}}
        }
        const handleRemoveItem = (index) => {
            setItems(items.filter((item, i) => i !== index));
        }
        
        return (

        <div>
                <p className='text-center fs-6 font-monospace text-body-secondary'>Things TO DO</p>

                <input type="text" value={newItemText} onChange={handleTextChange} onKeyDown={handleKeyPress} className="form-control mb-2" placeholder="Write and then 'Enter' " />
                <ul className="toDoList list-group  list-group-flush">
                    {items.map((item, index) => (
                    <li className="bg-transparent d-flex justify-content-between list-group-item" key={index}>
                        
                        <input className=' form-check-input ' type="checkbox" id='completeCheck'/>
                        <span className='mx-3' >{item}</span>
                        <button className='btn btn-info btn-sm ms-1' onClick={() => handleRemoveItem(index)}>–</button>
                    </li>))}
                </ul>
                
                </div>);}
                
export default ToDoList;


