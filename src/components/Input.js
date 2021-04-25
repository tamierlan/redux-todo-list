import React, { useState } from 'react';

const Input = () => {
  const [ input, setInput ] = useState('');

  const addTodo = () => {

  }

  return (
    <div>
      <input type='text' value={input} onChange={e => setInput(e.target.value)} placeholder='Type . . .' />
      <button onClick={addTodo}>Add</button>
    </div>
  )
}

export default Input;
