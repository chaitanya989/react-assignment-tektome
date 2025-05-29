import CommentCount from "@/components/CommentCount";
import { Post, setPosts } from "@/features/posts/postSlice";
import apiV2 from "@/lib/axiosV2";
import { RootState } from "@/store/store";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Posts() {
    const limit = 20;
    const dispatch = useDispatch();
    const posts = useSelector((state: RootState) => state.post.posts);


    useEffect(() => {
        apiV2.get(`/posts?limit=${limit}`).then(res => {  
            console.log('Posts:', res.data);
            dispatch(setPosts(res.data))
        }
        ).catch(err => {
            console.error('Error fetching posts:', err);
        }
        );
    }, [])


    return (
        <div>
            <table className="table-auto border-collapse border border-gray-400">
                <thead>
                    <tr>
                        <th className='border border-gray-300 p-2 text-start'>Title</th>
                        <th className='border border-gray-300 p-2 text-start'>Body</th>
                        <th className='border border-gray-300 p-2 text-start'>Tags</th>
                        <th className='border border-gray-300 p-2 text-start'>Reactions</th>
                        <th className='border border-gray-300 p-2 text-start'>View Counts</th>
                        <th className='border border-gray-300 p-2 text-start'>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map((post: Post) => (
                            <tr key={post.id}>
                                <td className='border border-gray-300 p-2'>{post.title}</td>
                                <td className='border border-gray-300 p-2'>{post.body}</td>
                                <td className='border border-gray-300 p-2'>{post.tags.map((tag) => (
                                    <span className="px-[3px] py-[1px] m-[3px] bg-red-50 text-[11px] rounded-xs">{tag}</span>
                                ))}
                                </td>
                                <td className='border border-gray-300 p-2'>
                                    <span> Likes {post.reactions.likes}</span>
                                    <span> Dislikes {post.reactions.likes}</span>
                                </td>
                                <td className='border border-gray-300 p-2'>{post.views}</td>
                                <td className='border border-gray-300 p-2'>
                                    <CommentCount postID={post.id}></CommentCount>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
// pbt- 1
// lr 3
// fs 11px
// 3px - round cord=ner
// spacing 3