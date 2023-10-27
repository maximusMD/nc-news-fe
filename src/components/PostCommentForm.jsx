import { useState } from "react";

export default function PostCommentForm({ onCommentSubmit, setComment }) {
    const [username, setUsername] = useState("")
    const [body, setBody] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if (username && body) {
            const newComment = {
            username: username,
            body: body,
        };
        setComment(newComment)
        onCommentSubmit(newComment)
        setUsername("")
        setBody("")
        }
    }

return (
    <form className="PostCommentForm" onSubmit={handleSubmit}>
    <label>
        Username:
        <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
    </label>
    <label>
        Comment:
        <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        ></textarea>
    </label>
    <button type="submit">Submit</button>
    </form>
    )
}