import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react';
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment ({ content, onDeleteComment }:CommentProps) {
  const [likeCount, setLikeCount] = useState(0);


  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }


  return(
<div className={styles.comment}>
  <Avatar hasBorder={false} src="https://github.com/Lwozinho.png" alt="" />

  <div className={styles.commentBox}>
    <div className={styles.commentContent}>
    <header>
      <div className={styles.authorAndTime}>
        <strong>Leonardo Nascimento</strong>
        <time title='23 de maio ás 18:28h' dateTime="2024-23-05 18:28:45">Publicado há 1h </time>
      </div>

      <button onClick={handleDeleteComment} title="Deletar comentário">
        <Trash size={24}/>
      </button>
    </header>

    <p>{content}</p>
    </div>

    <footer>
      <button onClick={handleLikeComment}>
        <ThumbsUp/>
        Aplaudir <span>{likeCount}</span>
      </button>
    </footer>

  </div>
</div>
  )
}