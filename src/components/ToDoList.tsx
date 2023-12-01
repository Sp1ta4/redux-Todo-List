import Task from './Task';
import {useAppSelector} from '../hook';

const ToDoList: React.FC = () => {
  const todos = useAppSelector(state => state.todos.list);
  return (
    <>
      <div className="col-6 d-flex justify-content-center align-items-center flex-column mt-4">
        {todos.map(todo => (
          <Task
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        ))}
      </div>
    </>
  );
};

export default ToDoList;
