import axios from "axios";
import PostCommentForm from "./PostCommentForm";
import { useState } from "react";

export default function PostCommentContainer({ article_id }) {
    const [isPosting, setPosting] = useState(false)
    const [postSuccess, setPostSuccess] = useState(false)
    const [postError, setPostError] = useState(null)
    const [comment, setComment] = useState(null)

    const handleCommentSubmit = async (comment) => {
        setPosting(true)
        try {
            const res = await axios.post(
            `https://nc-news-31tf.onrender.com/api/articles/${article_id}/comments`,
            comment, 
            {
            headers: {
                "Content-Type": "application/json",
                },
            }
        )
        setPostSuccess(true)
        setPostError(null)
        } 
        catch (error) {
        setPostError("Error - Please try again.")
        console.error("Error posting comment:", error)
        } 
        finally {
        setPosting(false)
        }
    }  
    return (
        <div className="PostCommentContainer">
        {isPosting ? <p>Posting your comment...</p> : null}
        {postSuccess ? <p>Comment posted successfully!</p> : null}
        {postError ? <p>Error posting comment: {postError}</p> : null}
        <PostCommentForm onCommentSubmit={handleCommentSubmit} setComment={setComment} />
        </div>
    )
}