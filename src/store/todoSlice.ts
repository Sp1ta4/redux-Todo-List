import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ToDosType} from '../types/ToDosType';

type TodosState = {
  list: ToDosType[];
};

const initialState: TodosState = {
  list: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    addTask(state, action: PayloadAction<string>) {
      state.list.push({
        id: new Date().toISOString(),
        title: action.payload,
        completed: false,
      });
    },
    removeTask(state, action: PayloadAction<string>) {
      state.list = state.list.filter(task => task.id !== action.payload);
    },
    toggleTodoComplete(state, action) {
      const toggleTodo = state.list.find(task => task.id === action.payload);
      if (toggleTodo) {
        toggleTodo.completed = !toggleTodo.completed;
      }
    },
  },
});

export const {addTask, removeTask, toggleTodoComplete} = todoSlice.actions;

export default todoSlice.reducer;
