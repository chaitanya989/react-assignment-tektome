import apiV2 from "@/lib/axiosV2";
import React, { use, useEffect } from "react";


export default function CommentCount(props: { postID: number }) {
    const [count, setCount] = React.useState(0);

    useEffect(() => {
        apiV2.get(`/comments/post/${props.postID}`).then(res => {  
            console.log('Posts:', res.data);
            setCount(res.data.total);
        }
        ).catch(err => {
            console.error('Error fetching posts:', err);
            setCount(0);
        }
        );

    }, [props.postID]);
    
    return(
        <span>{count}</span>
    )
}