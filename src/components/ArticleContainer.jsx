import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import CommentsContainer from "./CommentsContainer";

export default function ArticleContainer({params}) {
    const [article, setArticle] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const { article_id } = useParams()

    useEffect(() => {
        const fetchArticle = async (params) => {
            try {
                const res = await axios.get(`https://nc-news-31tf.onrender.com/api/articles/${article_id}`)

                setArticle(res.data.article)
                setIsLoading(false)
            } 
            catch (error) {
                console.error(error)
        }
        }
        fetchArticle();
    }, [article_id])

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
        <ArticleCard
        ArticleAuthor={article["author"]}
        ArticleName={article["title"]}
        ArticleTopic={article["topic"]}
        ArticleCreatedAt={article["created_at"]}
        ArticleVotes={article["votes"]}
        ArticleImg={article["article_img_url"]}
        ArticleCommentCount={article["comment_count"]}
        ArticleBody={article["body"]}
        />
        <CommentsContainer
        />
        </div>
    )
}