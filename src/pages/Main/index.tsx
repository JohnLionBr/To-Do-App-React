import React, { useState } from 'react';
import './styles.css';

const Main = () => {
    const [inputValue, setInputValue] = useState("");
    const [todoList, setTodoList] = useState<string[]>([]);

    const handleAddClick = () => {
    setTodoList([ ... todoList, inputValue]);
    setInputValue('');
    };


    return (
        <div className="container">
            <h1 className="title">App de lembretes</h1>
            <div className="form-group">
                <input className="input-tarefa" onChange={(event) => setInputValue(event.target.value)} 
                    value={inputValue} type="text" placeholder="Adicione sua tarefa" /> 
                <button className="add-button" onClick={handleAddClick}>
                    +
                    </button>
                
                  
            
            </div>
            <div className="todo-list">
                <ul>
                    { todoList.map((todo) => 
                        <li className="list-item">{todo}</li>) }
                </ul>    

                </div>
        </div>
    );
}

export default Main;