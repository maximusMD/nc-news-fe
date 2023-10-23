import ExistingCommentCard from "./ExistingCommentCard";

export default function ExistingCommentContainer({comments}) {
    return (
        <div>
        <ul id="Existing Comments">
			{comments.map((comment) => {
				return (
					<ExistingCommentCard
						key={comment["comment_id"]}
                        CommentsVotes={comment["votes"]}
                        CommentsCreatedAt={comment["created_at"]}
                        CommentsAuthor={comment["author"]}
						CommentsBody={comment["body"]}
                        CommentsTopic={comment["topic"]}
					/>
				);
			})}
		</ul>
        </div>
    )
}