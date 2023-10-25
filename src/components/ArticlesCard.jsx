import { Link } from "react-router-dom"

export default function ArticlesCard({ArticlesName, ArticlesAuthor, ArticlesTopic, ArticlesCreatedAt, ArticlesVotes, ArticlesImg, ArticlesCommentCount, article_id}) {
    return (
        <div className="ArticlesCard">
        <Link to={`/articles/${article_id}`}>
        <h3 className="ArticlesName">{ArticlesName}</h3>
        </Link>
        <ul>
            <li>{ArticlesAuthor}</li>
            <li>{ArticlesTopic}</li>
            <li>{ArticlesCreatedAt}</li>
            <li>Votes{ArticlesVotes}</li>
            <img src={ArticlesImg}/> 
            <li>CommentCount{ArticlesCommentCount}</li>
        </ul>
    </div>
    )
}