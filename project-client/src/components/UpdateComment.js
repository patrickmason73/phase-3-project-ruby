import React, {useState} from "react";

const textBoxStyle = {
    width: "200%",
    height: "2em",
    display: "grid",
    placeItems: "center",
}

const saveButtonStyle = {
    margin: ".5em"
}


function UpdateComment({ comment, handleEditedComments }) {

const [commentText, setCommentText] = useState(comment.comment)

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/comments/${comment.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                comment: commentText,
            }),
        })
        .then((r) => r.json())
        .then((data) => handleEditedComments(data))
    }

    return (
        <form onSubmit={handleSubmit}>
        <input
        style={textBoxStyle}
        type="text"
        name="body"
        autoComplete="off"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        />
        <button style={saveButtonStyle} type="submit">SAVE</button>
        </form>
    )
}

export default UpdateComment;