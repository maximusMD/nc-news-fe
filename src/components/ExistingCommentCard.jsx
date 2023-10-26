export default function ExistingCommentCard({CommentsVotes, CommentsCreatedAt, CommentsAuthor, CommentsBody, CommentsTopic}) {
    return (
        <div className="ExistingCommentCard">
            <p>{CommentsBody}</p>
            <p>{CommentsAuthor}</p>
            <p>{CommentsVotes}</p>
            <p>{CommentsCreatedAt}</p>
            <p>{CommentsTopic}</p>
        </div>
    )
}