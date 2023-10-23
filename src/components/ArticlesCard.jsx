export default function ArticlesCard({ArticlesName, ArticlesAuthor, ArticlesTopic, ArticlesCreatedAt, ArticlesVotes, ArticlesImg, ArticlesCommentCount}) {
    return (
        <div className="ArticlesCard">
        <h3 className="ArticlesName">{ArticlesName}</h3>
        <ul>
            <li>{ArticlesAuthor}</li>
            <li>{ArticlesTopic}</li>
            <li>{ArticlesCreatedAt}</li>
            <li>{ArticlesVotes}</li>
            <img src={ArticlesImg}/> 
            <li>{ArticlesCommentCount}</li>
        </ul>
    </div>
    )
}