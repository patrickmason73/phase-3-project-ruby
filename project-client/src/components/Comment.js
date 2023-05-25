import React, {useState, useEffect} from "react";
import UpdateComment from "./UpdateComment";

function Comment({ quote, thisUser, selected }) {

const [comments, setComments] = useState([])
const [newComment, setNewComment] = useState("")
const [generateComments, setGenerateComments] = useState(false)
const [editComment, setEditComment] = useState(false)


const quoteStyle = {
    padding: "1em",
    display: "grid",
    placeItems: "center",
    backgroundColor: "#D3D3D3"
}

const commentStyle = {
    padding: "1em",
    display: "grid",
   
}


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


function handleEditComment(updatedComment) {
    const editedComments = comments.map((comment) => {
        if (comment.id === updatedComment.id) {
            return updatedComment;
        } else {
            return comment;
        }
        })
        setComments(editedComments)
}

function handleEditedComments(updatedComment) {
    setEditComment(false);
    handleEditComment(updatedComment);
}

const displayComments = comments.map((comment) => {
    const currentUser = thisUser === comment.user
    
    return (
        <div>
        <span style={commentStyle}>
          <p><strong>{comment.user}</strong>:  {comment.comment}</p>
        </span>
        <>
        {editComment && currentUser ? (<UpdateComment comment={comment} handleEditedComments={handleEditedComments} />) 
        : null}
        </>
        {currentUser ? (
            <div>
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
        <button onClick={() => setEditComment(current => !current)}>{editComment ? "CANCEL" : "EDIT"}</button>
      
        </div>
        ) : null}
        </div>
    )})


      

    return (
        <div style={quoteStyle}>   
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