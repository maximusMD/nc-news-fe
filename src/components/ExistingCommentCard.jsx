export default function ExistingCommentCard({CommentsVotes, CommentsCreatedAt, CommentsAuthor, CommentsBody, CommentsTopic}) {
    return (
        <div className="ExistingCommentCard">
        <h3 className="CommentName">Comment</h3>
            <p>{CommentsVotes}</p>
            <p>{CommentsCreatedAt}</p>
            <p>{CommentsAuthor}</p>
            <p>{CommentsBody}</p>
            <p>{CommentsTopic}</p>
        </div>
    )
}