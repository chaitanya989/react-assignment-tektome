import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import taskReducer from '../features/task/taskSlice';
import postReducer from '../features/posts/postSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    task: taskReducer,
    post: postReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
