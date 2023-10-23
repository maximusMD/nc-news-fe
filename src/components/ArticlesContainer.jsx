import axios from "axios"
import { useEffect, useState } from "react";
import ArticlesCard from "./ArticlesCard";

export default function ArticlesContainer() {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const res = await axios.get('https://nc-news-31tf.onrender.com/api/articles')
                setArticles(res.data.articles)
                setIsLoading(false)
            }
            catch (error) {
                console.error
            }
        }
        fetchArticles()
    }, [])

    if (isLoading) {
        return <p> Loading...</p>;
    }

    return (
        <div>
        <h1>List of Articles</h1>
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
						
					/>
				);
			})}
		</ul>
        </div>
    )
}

