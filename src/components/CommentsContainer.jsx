import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ExistingCommentContainer from './ExistingCommentContainer'
import PostCommentContainer from './PostCommentContainer'

export default function CommentsContainer() {
    const [comments, setComments] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const { article_id } = useParams()
    
    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await axios.get(`https://nc-news-31tf.onrender.com/api/articles/${article_id}/comments`)
                setComments(res.data.comments)
                setIsLoading(false)
            } 
            catch (error) {
                console.error(error)
        }
        }
        fetchComments();
    }, [article_id])

    if (isLoading) {
        return <p> Loading...</p>;
    }

    return (
        <div>
            <h1>Comments</h1>
            <ExistingCommentContainer comments={comments}/>
            <PostCommentContainer article_id={article_id}/>
        </div>
    )
}