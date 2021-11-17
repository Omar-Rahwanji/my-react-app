import React from 'react';
import PropTypes from 'prop-types';


function Todo({todo}){
  return ( 
    <div>
      <label>
        <input type="checkbox" checked={todo.complete} />
        {todo.name}
      </label>
    </div>
);
}

export default Todo;
