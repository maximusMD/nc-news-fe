import { useState } from "react"
import axios from "axios"

export default function ArticleCard({ArticleName, ArticleAuthor, ArticleTopic, ArticleCreatedAt, ArticleVotes, ArticleImg, ArticleCommentCount, ArticleBody, article_id}) {
    const [votes, setVotes] = useState(ArticleVotes)
    const [isLoading, setIsLoading] = useState(false)

    const handleVote = async (voteType) => {
        if (isLoading) {
            return <p>Loading...</p>
        }

        const updatedVotes = voteType === "up" ? votes + 1 : voteType === "down" ? votes - 1 : votes

        setVotes(updatedVotes)

        setIsLoading(true)

        try {
            await axios.patch(`https://nc-news-31tf.onrender.com/api/articles/${article_id}`, {
                inc_votes: voteType === "up" ? 1 : voteType === "down" ? -1 : 0
        })

        } 
        catch (error) {
            console.error(error)
            setVotes(votes)
            
        }
        finally {
            setIsLoading(false)
        }
    }
    return (
        <div className="ArticleCard">
        <h3 className="ArticleName">{ArticleName}</h3>
            <p>{ArticleAuthor}</p>
            <p>{ArticleTopic}</p>
            <p>{ArticleCreatedAt}</p>
            <p>
                <button onClick={() => handleVote("up")} disabled={isLoading}>+1</button>
                {votes}   
                <button onClick={() => handleVote("down")} disabled={isLoading}>-1</button>
            </p>
            <img src={ArticleImg}/> 
            <p>{ArticleCommentCount}</p>
            <p>{ArticleBody}</p>
    </div>
    )
}