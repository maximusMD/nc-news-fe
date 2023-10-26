import { Link } from "react-router-dom"

export default function TopicsCard({topicName}) {
    return (
            <div className="TopicsCard">
                <h3 className="TopicsName">
                    <Link to={`/articles?topic=${topicName}`}> {topicName} </Link>
                </h3>
            </div>
    )
}