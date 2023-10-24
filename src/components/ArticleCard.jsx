import { useState } from "react"
import axios from "axios"

export default function ArticleCard({ArticleName, ArticleAuthor, ArticleTopic, ArticleCreatedAt, ArticleVotes, ArticleImg, ArticleCommentCount, ArticleBody, article_id}) {
    const [votes, setVotes] = useState(ArticleVotes)
    const [isLoading, setIsLoading] = useState(false)

    const handleVote = async (voteType) => {
        if (isLoading) {
            return <p>Loading...</p>
        }
        setIsLoading(true)

        try {
            const res = await axios.patch(`https://nc-news-31tf.onrender.com/api/articles/${article_id}`, {
            inc_votes: voteType === "up" ? 1 : -1
        })
        setVotes(res.data.article.votes)
        } 
        catch (error) {
            console.error(error)
            
        }
        finally {
            setIsLoading(false)
        }
    }
    return (
        <div className="ArticleCard">
        <h3 className="ArticleName">{ArticleName}</h3>
        <ul>
            <li>{ArticleAuthor}</li>
            <li>{ArticleTopic}</li>
            <li>{ArticleCreatedAt}</li>
            <li>
                <button onClick={() => handleVote("up")} disabled={isLoading}>+1</button>
                {votes}
                <button onClick={() => handleVote("down")} disabled={isLoading}>-1</button>
            </li>
            <img src={ArticleImg}/> 
            <li>{ArticleCommentCount}</li>
            <p>{ArticleBody}</p>
        </ul>
    </div>
    )
}