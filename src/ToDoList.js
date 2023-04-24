import React, { useState } from 'react';
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
                <h2>TO DO LIST</h2>

                <input type="text" value={newItemText} onChange={handleTextChange} onKeyDown={handleKeyPress} class="tdl-new" placeholder="Write new item and hit 'Enter'..." />
                <ul>
                    {items.map((item, index) => (<li key={index}><label><input type="checkbox" /><span>{item}</span><button onClick={() => handleRemoveItem(index)}>–</button></label></li>))}
                </ul>
                
                </div>);}
                
export default ToDoList;


