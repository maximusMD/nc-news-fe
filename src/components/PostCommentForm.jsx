import { useState } from "react";

export default function PostCommentForm({ onCommentSubmit, setComment }) {
    const [username, setUsername] = useState("")
    const [body, setBody] = useState("")
    const fixedVotes = 0

    const handleSubmit = (e) => {
        console.log(username)
        console.log(body)
        e.preventDefault()

        if (username && body) {
            const newComment = {
            // comment_id: 500,
            // created_at: new Date().toISOString(),
            // votes: fixedVotes,
            username: username,
            body: body,
        };
        // console.log("New Comment:", newComment);
        setComment(newComment)
        onCommentSubmit(newComment)
        // console.log("After Submit:", newComment)
        setUsername("")
        setBody("")
        }
    }

return (
    <form onSubmit={handleSubmit}>
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