import React, {useState, useEffect} from "react";

function Comment({ quote, thisUser, selected }) {

const [comments, setComments] = useState([])
const [newComment, setNewComment] = useState("")
const [generateComments, setGenerateComments] = useState(false)

function handleAddComment(comment) {
    setComments([...comments, comment])
}

useEffect(() => {
    setGenerateComments(false)
}, [selected])

function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/comments`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            comment: newComment,
            quote_id: quote.id,
            user: thisUser,
        }),
    })
    .then(r => r.json())
    .then((data) => {
        handleAddComment(data)
        setNewComment("")
    })
} 


function handleClick() {
    setGenerateComments(current => !current)
    fetch(`http://localhost:9292/comments/${quote.id}`)
    .then(r => r.json())
    .then((data) => setComments(data))
    }




const displayComments = comments.map((comment) => {
    return (
        <div>
            {comment.user}:

            {comment.comment}
        <button value={comment.id} onClick={(e) => {
              fetch(`http://localhost:9292/comments/${e.target.value}`, {
                method: "DELETE",
            });
            comment.user = null
            comment.comment = null
            e.target = null
            const updatedComments = comments.filter((comment2) => comment2.id !== comment.id)
            setComments(updatedComments)
                
        }}>DELETE COMMENT</button>
           </div>
    )})


      

    return (
        <div>   
            <button onClick={handleClick}>{generateComments ? "Close Comments" : "Generate Comments"}</button>
            <div>{generateComments ? [displayComments] : null}</div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="newComment"
                    autoComplete="off"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button type="submit">SEND</button>
            </form>
        </div>
    )

}

export default Comment;