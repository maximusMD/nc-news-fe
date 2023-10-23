export default function ArticleCard({ArticleName, ArticleAuthor, ArticleTopic, ArticleCreatedAt, ArticleVotes, ArticleImg, ArticleCommentCount, ArticleBody}) {
    return (
        <div className="ArticleCard">
        <h3 className="ArticleName">{ArticleName}</h3>
        <ul>
            <li>{ArticleAuthor}</li>
            <li>{ArticleTopic}</li>
            <li>{ArticleCreatedAt}</li>
            <li>{ArticleVotes}</li>
            <img src={ArticleImg}/> 
            <li>{ArticleCommentCount}</li>
            <p>{ArticleBody}</p>
        </ul>
    </div>
    )
}