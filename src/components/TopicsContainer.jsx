import axios from "axios"
import { useEffect, useState } from "react";
import TopicsCard from "./TopicsCard";

export default function TopicsContainer() {
    const [topics, setTopics] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const res = await axios.get('https://nc-news-31tf.onrender.com/api/topics')
                setTopics(res.data.topics)
                setIsLoading(false)
            }
            catch (error) {
                console.error(error)
            }
        }
        fetchTopics()
    }, [])

    if (isLoading) {
        return <p> Loading...</p>;
    }

    return (
        <div className="TopicsContainer">
        <h1>Topics</h1>
	        {topics.map((topic) => {
                return (
                    <TopicsCard
                    key={topic["slug"]}
                    topicName={topic["slug"]}
                    topicDesc={topic["description"]}
                    />
                );
            })}
        </div>
	)
}