import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
const Todo = ({task,toggleComplete,deleteTodo,editTodo}) => {
  return (
    <div className='Todo'>
      <p 
      onClick={()=> toggleComplete(task.id)}
      className={`${task.completed ? 'completed':""}`}>{task.task}</p>
     < div>
     <FontAwesomeIcon style={{ 
    cursor: 'pointer', 
     
    
    ':hover': { color: 'blue' } 
  }} icon={faPenToSquare} onClick={()=>editTodo(task.id)}/>
     <FontAwesomeIcon style={{ 
    cursor: 'pointer', 
     
    
    ':hover': { color: 'blue' } 
  }} icon={faTrash} onClick={()=>deleteTodo(task.id)}/>
    
     </div>
    </div>
  );
};
export default Todo;