import { createSlice } from '@reduxjs/toolkit';
import { get } from 'http';

export interface PostList {
  posts: Post[]
  total: number
  skip: number
  limit: number
}

export interface Post {
  id: number
  title: string
  body: string
  tags: string[]
  reactions: Reactions
  views: number
  userId: number
}

export interface Reactions {
  likes: number
  dislikes: number
}


const initialState: PostList = {
  posts: [],
  total: 0,
  skip: 0,
  limit: 0,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
        state.total = action.payload.total;
        state.skip = action.payload.skip;
        state.limit = action.payload.limit;
    }
  }
});

export const { setPosts } = postSlice.actions;
export default postSlice.reducer;
