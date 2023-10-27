import { Link } from "react-router-dom"

export default function ArticlesCard({ArticlesName, ArticlesAuthor, ArticlesTopic, ArticlesCreatedAt, ArticlesVotes, ArticlesImg, ArticlesCommentCount, article_id}) {
    const createdDate = new Date(ArticlesCreatedAt)
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }
    const formattedDate = createdDate.toLocaleDateString(undefined, options)

    return (
        <div className="ArticlesCard">
        <Link to={`/articles/${article_id}`}>
        <h3 className="ArticlesName">{ArticlesName}</h3>
        </Link>
            <h4>{ArticlesAuthor}</h4>
            <p>{ArticlesTopic}</p>
            <p>{formattedDate}</p>
            <p>Votes: {ArticlesVotes}</p>
            <p>Comments: {ArticlesCommentCount}</p>
            <img src={ArticlesImg}/> 
    </div>
    )
}