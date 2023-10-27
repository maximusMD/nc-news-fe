import axios from "axios";
import { useEffect, useState } from "react";
import ArticlesCard from "./ArticlesCard";
import { useSearchParams } from "react-router-dom";

export default function ArticlesContainer() {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const topicName = searchParams.get("topic") || ""
    const sort = searchParams.get("sort_by") || "created_at"
    const order = searchParams.get("order") || "desc"

    useEffect(() => {
        const fetchArticles = async () => {
            let queryStr = `https://nc-news-31tf.onrender.com/api/articles?sort_by=${sort}&order=${order}`

        if (topicName) {
            queryStr = `${queryStr}&topic=${topicName}`
        }

    try {
        const res = await axios.get(queryStr)
        let sortedArticles = res.data.articles

    if (sort === "comment_count") {
        sortedArticles.sort((a, b) => {
            if (order === "asc") {return a.comment_count - b.comment_count} 
            else {return b.comment_count - a.comment_count}
        })
    } 
    else if (sort === "votes") {
        sortedArticles.sort((a, b) => {
            if (order === "asc") {return a.votes - b.votes} 
            else {return b.votes - a.votes}
        })
    } 
    else {
        sortedArticles.sort((a, b) => {
            if (order === "asc") {return a.created_at.localeCompare(b.created_at)} 
            else {return b.created_at.localeCompare(a.created_at)}
        })
    }

        setArticles(sortedArticles)
        setIsLoading(false)
    } 
    catch (error) {
        console.error(error)
        setIsError(true)
        setIsLoading(false)
    }
}
    fetchArticles()
}, [topicName, sort, order])

    const handleSorting = (newSort) => {
        setSearchParams({ topic: topicName, sort_by: newSort, order })
    }

    const handleOrder = (newOrder) => {
        setSearchParams({ topic: topicName, sort_by: sort, order: newOrder })
    }

    if (isError) {
        return <p>Not found</p>
    }
    
    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
    <div className="ArticlesContainer">
        <div className="SortOrder">
        <label>Sort by:</label>
        <select onChange={(e) => handleSorting(e.target.value)} value={sort}>
            <option value="created_at">Date</option>
            <option value="comment_count">Comment Count</option>
            <option value="votes">Votes</option>
        </select>
        <label>Order:</label>
        <select onChange={(e) => handleOrder(e.target.value)} value={order}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
        </select>
        <h2 className="ArticlesHeader">Articles</h2>
        </div>
            {articles.map((article) => {
                return (
                    <ArticlesCard
                        key={article["article_id"]}
                        ArticlesAuthor={article["author"]}
                        ArticlesName={article["title"]}
                        ArticlesTopic={article["topic"]}
                        ArticlesCreatedAt={article["created_at"]}
                        ArticlesVotes={article["votes"]}
                        ArticlesImg={article["article_img_url"]}
                        ArticlesCommentCount={article["comment_count"]}
                        article_id={article["article_id"]}
                    />
                )
            })}
        </div>
    )
}