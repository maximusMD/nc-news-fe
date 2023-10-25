import axios from "axios"
import { useEffect, useState } from "react";
import ArticlesCard from "./ArticlesCard";
import { useSearchParams } from "react-router-dom";

export default function ArticlesContainer() {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchParams, setSearchParams] = useSearchParams()
    const topicName = searchParams.get("topic")
    const sort = searchParams.get("sort") || "created_at"
    const order = searchParams.get("order") || "desc"

    useEffect(() => {
        const fetchArticles = async () => {
            let queryStr = `https://nc-news-31tf.onrender.com/api/articles?topic=${topicName}&sort_by=${sort}&order=${order}`

            if (!topicName){
                queryStr = `https://nc-news-31tf.onrender.com/api/articles?sort_by=${sort}&order=${order}`
            }
            
            try {
                const res = await axios.get(queryStr)
                setArticles(res.data.articles)
                setIsLoading(false)
            }
            catch (error) {
                console.error(error)
            }
        }
        fetchArticles()
    }, [topicName, sort, order])

    const handleSorting = (newSort) => {
        setSearchParams({ sort: newSort })
    };
    
    const handleOrder = () => {
        const newOrder = order === "asc" ? "desc" : "asc"
        setSearchParams({ sort, order: newOrder })
    }

    if (isLoading) {
        return <p> Loading...</p>
    }

    return (
        <div>
        <h1>List of Articles</h1>
        <div>
        <label>Sort by:</label>
        <select
            onChange={(e) => handleSorting(e.target.value)}
            value={sort}
        >
            <option value="created_at">Date</option>
            <option value="comment_count">Comment Count</option>
            <option value="votes">Votes</option>
        </select>
        <label>Order:</label>
        <select
            onChange={(e) => handleOrder(e.target.value)}
            value={order}
        >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
        </select>
        </div>
        <ul id="Articles List">
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
				);
			})}
		</ul>
        </div>
    )
}

