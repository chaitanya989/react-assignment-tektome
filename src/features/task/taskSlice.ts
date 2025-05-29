import { createSlice } from '@reduxjs/toolkit';



export interface Task {
  userId: number
  id: number
  title: string
  completed: boolean
}

export interface TaskList {
  list: Task[]
}

const initialState: TaskList = {
  list: []
};
const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setTasks } = taskSlice.actions;
export default taskSlice.reducer;
