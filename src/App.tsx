import {useState} from 'react';
import './sass/app.sass';
import ToDoList from './components/ToDoList';
import InputField from './components/InputField';
import {useDispatch} from 'react-redux';
import {addTask} from './store/todoSlice';
function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const addTodo = () => {
    dispatch(addTask(text));
    setText('');
  };

  return (
    <div className="wrapper d-flex justify-content-center align-items-start">
      <div className="container mt-5">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <InputField
              text={text}
              handleInput={setText}
              handleSubmit={addTodo}
            />
          </div>
          <div className="col-3"></div>
        </div>
        <div className="row">
          <div className="col-3"></div>
          {<ToDoList />}
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
