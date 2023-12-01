import React from 'react';
import {ToDosType} from '../types/ToDosType';
import {useAppDispatch} from '../hook';
import {removeTask, toggleTodoComplete} from '../store/todoSlice';

const Task: React.FC<ToDosType> = ({id, title, completed}: ToDosType) => {
  const dispatch = useAppDispatch();
  return (
    <div className="task mt-2" key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoComplete(id))}
        className="me-3"
      />
      <span
        className={completed ? 'text-decoration-line-through me-3' : 'me-3'}
      >
        {title}
      </span>
      <span className="btn" onClick={() => dispatch(removeTask(id))}>
        &times;
      </span>
    </div>
  );
};

export default Task;
