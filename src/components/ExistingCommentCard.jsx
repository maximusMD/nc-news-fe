export default function ExistingCommentCard({CommentsVotes, CommentsCreatedAt, CommentsAuthor, CommentsBody, CommentsTopic}) {
    return (
        <div className="ExistingCommentCard">
        <h3 className="CommentName">Comment</h3>
        <ul>
            <li>{CommentsVotes}</li>
            <li>{CommentsCreatedAt}</li>
            <li>{CommentsAuthor}</li>
            <p>{CommentsBody}</p>
            <li>{CommentsTopic}</li>
        </ul>
        </div>
    )
}