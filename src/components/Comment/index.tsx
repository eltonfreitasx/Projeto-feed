import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "../Avatar";
import styles from "./Comment.module.css";
import { User, useAuth0 } from "@auth0/auth0-react";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string ) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)
  const { user } = useAuth0<User>()

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={user?.picture} alt=" "/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{user?.name}</strong>
              <time title="21 de Janeiro 12:59" dateTime="2023-01-21 12:59:00">
                Cerca de 1min atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              {" "}
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir<span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
