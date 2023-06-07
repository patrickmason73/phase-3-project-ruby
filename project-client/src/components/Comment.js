import React, {useState, useEffect} from "react";
import UpdateComment from "./UpdateComment";


const quoteStyle = {
    paddingTop: ".5em",
    paddingBottom: "2em",
    display: "grid",
    placeItems: "center",
    backgroundColor: "#D3D3D3"
}

const commentStyle = {
    display: "grid",
    placeItems: "center",
}

const buttonStyle = {
    padding: "20px",
    display: "grid",
    placeItems: "center",
}

const listingStyle = {
    fontSize: "150%",
    listStyle: "url(https://www.freepnglogos.com/uploads/divider-png/divider-professional-development-23.png)",

}

const deleteButtonStyle = {
    background: "#e62143",
    borderRadius: "4px",
    boxSizing: "border-box",
    color: "#fff",
    cursor: "pointer",
    display: "flex",
    fontSize: "50%",
    fontWeight: "700",
    justifyContent: "center",
    lineHeight: "33.4929px",
    padding:".5em .7em",
    textAlign: "center",
    textDecoration: "none",
    textDecorationSkipInk: "auto",
    textShadow: "rgba(0, 0, 0, .3) 1px 1px 1px",
    textUnderlineOffset: "1px",
    width: "100%",
    wordBreak: "break-word",
    border: "0",
    margin: ".5em",
}

const editButtonStyle = {
    backgroundImage: "linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%)",
    borderRadius: "3px",
    borderStyle: "none",
    boxSizing: "border-box",
    color: "#FFFFFF",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    fontSize: "70%",
    fontWeight: "700",
    lineHeight: "33.4929px",
    padding:".4em .5em",
    textAlign: "center",
    textShadow: "rgba(0, 0, 0, 0.25) 0 3px 8px",
    width: "98%",
    margin: ".5em",
}

const generateCommentsButtonStyle = {
  alignItems: "center",
  appearance: "button",
  backgroundColor: "#0276FF",
  borderRadius: "8px",
  borderStyle: "none",
  boxShadow: "rgba(255, 255, 255, 0.26) 0 1px 2px inset",
  boxSizing: "border-box",
  color: "#fff",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  flexShrink: "0",
  fontFamily: "RM Neue,sans-serif",
  fontSize: "100%",
  lineHeight: "1.15",
  margin: ".3em",
  padding: "10px 21px",
  textAlign: "center", 
}

const postCommentStyle = {
    width: "150%",
    height: "1.5em",
    display: "grid",
    placeItems: "center",
}

const saveButtonStyle = {
    margin: ".5em",
    display: "grid",
    placeItems: "center",
}

function Comment({ quote, thisUser, selected }) {


const [comments, setComments] = useState(quote.comments)
const [newComment, setNewComment] = useState("")
const [generateComments, setGenerateComments] = useState(false)
const [editComment, setEditComment] = useState(false)

// useEffect(() => {
// setComments(quote.comments)
// }, [generateComments])





function handleAddComment(comment) {
    setComments([...comments, comment])
}

useEffect(() => {
    setGenerateComments(false)
}, [selected])

function handleSubmit(e) {
    e.preventDefault();
    setGenerateComments(true)
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
        <div key={comment.id}>
        <li style={listingStyle}>
        <span style={commentStyle}>
          <p><strong>{comment.user}</strong>:  {comment.comment}</p>
        </span>
        <div style={buttonStyle}>
        <>
        {editComment && currentUser ? (<UpdateComment comment={comment} handleEditedComments={handleEditedComments} />) 
        : null}
        </>
        {currentUser ? (
            <div>
        <button style={deleteButtonStyle} value={comment.id} onClick={(e) => {
              fetch(`http://localhost:9292/comments/${e.target.value}`, {
                method: "DELETE",
            });
            comment.user = null
            comment.comment = null
            e.target = null
             const updatedComments = comments.filter((comment2) => comment2.id !== comment.id)
             setComments(updatedComments)
                
        }}>DELETE COMMENT</button>
        <button style={editButtonStyle} onClick={() => setEditComment(current => !current)}>{editComment ? "CANCEL" : "EDIT"}</button>
      
        </div>
        ) : null}
        </div>
        </li>
        </div>
    )})


      

    return (
        <div style={quoteStyle}>   
            <button style={generateCommentsButtonStyle} onClick={handleClick}>{generateComments ? "Close Comments" : "Generate Comments"}</button>
            <div>{generateComments ? [displayComments] : null}</div>
            <form onSubmit={handleSubmit}>
                <input
                    maxLength={72}
                    style={postCommentStyle}
                    type="text"
                    name="newComment"
                    autoComplete="off"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button type="submit" style={saveButtonStyle}>SEND</button>
            </form>
        </div>
    )

}

export default Comment;