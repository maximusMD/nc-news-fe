import axios from "axios";

export default function ExistingCommentCard({CommentsVotes, CommentsCreatedAt, CommentsAuthor, CommentsBody, CommentsTopic, comment_id, user, updateComments}) {
    const createdDate = new Date(CommentsCreatedAt)
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }
    const formattedDate = createdDate.toLocaleDateString(undefined, options)
    const handleDeleteComment = async () => {
        console.log("CommentsAuthor:", CommentsAuthor);
        console.log("user:", user)
        if (CommentsAuthor !== user) {
        alert("Na na na can't touch this!")
        return
        }

    try {
        await axios.delete(`https://nc-news-31tf.onrender.com/api/comments/${comment_id}`)
        updateComments(comment_id)
        alert("Comment deleted successfully!")
    } 
    catch (error) {
        console.error("Error deleting comment:", error)
    }
    }
    return (
    <div className="ExistingCommentCard">
        <p>{CommentsBody}</p>
        <p>{CommentsAuthor}</p>
        <p>{CommentsVotes}</p>
        <p>{formattedDate}</p>
        <p>{CommentsTopic}</p>
        {CommentsAuthor === user && (
        <div>
            <button onClick={handleDeleteComment}>Delete</button>
        </div>
        )}

    </div>
    );
}