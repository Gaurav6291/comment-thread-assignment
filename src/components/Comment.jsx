import React, { useState } from "react"
import styles from "./comment.module.css";

const Comment = ({ author, body, points }) => {

    const [showThread, setShowThread] = useState(false)
    const [thread, setThread] = useState([])
    const [replyInput, setReplyInput] = useState(false)
    const [input, setInput] = useState("")

    const handleReply = () => {
        if (replyInput !== "") {
          let reply = {
            author,
            points,
            body: input,
          }
          setThread([...thread, reply])
        }
      }
    return (
        <div className={styles.outer}>
        <div className={styles.firstInner}>
          {thread.length && !showThread ? (
            <h3 onClick={() => setShowThread(true)}>+</h3>
          ) : (
            ""
          )}
          <p onClick={() => setShowThread(false)}>{author}</p>
          <p>{points} points</p>
          <p>2 days ago</p>
        </div>
        <h3>{body}</h3>
        <div className={styles.commentNav}>
          <p onClick={() => setReplyInput(!replyInput)}>Reply</p>
          <p>Give Award</p>
          <p>Share</p>
          <p>Report</p>
          <p>Save</p>
        </div>
        {replyInput && (
          <div className={styles.replyBox}>
            <input
              type="text"
              name=""
              id=""
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleReply}>add comment</button>
          </div>
        )}
  
        {showThread && thread && thread.map((item) => <Comment {...item} />)}
      </div>
    )
}

export default Comment
