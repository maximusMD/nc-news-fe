import ExistingCommentCard from "./ExistingCommentCard";
import { useState } from "react";

export default function ExistingCommentContainer({ comments }) {
    const [user] = useState({
        username: "jessjelly",
    })

    const [updatedComments, setUpdatedComments] = useState(comments);

    const updateComments = (deletedCommentId) => {
        const updated = updatedComments.filter(
        (comment) => comment.comment_id !== deletedCommentId
        )
        setUpdatedComments(updated)
    }

    return (
    <div className="ExistingCommentContainer">
    {updatedComments.map((comment) => (
        <ExistingCommentCard
            key={comment.comment_id}
            CommentsVotes={comment.votes}
            CommentsCreatedAt={comment.created_at}
            CommentsAuthor={comment.author}
            CommentsBody={comment.body}
            CommentsTopic={comment.topic}
            comment_id={comment.comment_id}
            user={user.username}
            updateComments={updateComments}
        />
    ))}
    </div>
    )
}