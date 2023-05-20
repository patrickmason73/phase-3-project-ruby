import React, {useEffect, useState} from "react";

function Quote({ quote }) {

const [comments, setComments] = useState([])
const [newComment, setNewComment] = useState("")

useEffect(() => {
    fetch("http://localhost:9292/quote/comments")
    .then((r) => r.json())
    .then((comments) => setComments(comments))
}, [])

function addComment() {
    fetch("http://localhost:9292/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment: newComment,
        }),
      })

}

}

export default Quote;