import React from 'react';

function TodoButton(props) {

  function addActivity(event) {
    event.preventDefault(); //prevent submit from reloading page

    //initialise task properties
    props.onSubmit({
      id: "ID" + Date.now(),
      text: document.getElementById("taskbar").value,
      complete: "false"
    });

    document.getElementById("taskbar").value = ""; //clear textfield
  }

  return (
    <form className='todo-form' onSubmit={addActivity}>
      <input type='text' id='taskbar' name='activity' placeholder='Add a task here!' /> 
      <button className='addButton'>add task</button>
    </form>
  );
}

export default TodoButton;
