import { Link } from "react-router-dom"

export default function TopicsCard({topicName}) {
    return (
            <div className="CategoriesCard">
                <h3 className="CategoryName">
                    <Link to={`/articles?topic=${topicName}`}> {topicName} </Link>
                </h3>
            </div>
    )
}