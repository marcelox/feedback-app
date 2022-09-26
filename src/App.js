import { useState } from 'react';
import './index.scss';

function App() {

  const title = 'Blog';
  const comments = [
    { id: 1, title: 'Awesome' },
    { id: 2, title: 'Great' },
    { id: 3, title: 'Amazing' },
    { id: 4, title: 'Ridiculous' },
    { id: 5, title: 'Nice' },
  ];

  const loading = false;

  const [comment, setComment] = useState(false);

  const commentBlock = (
    <>
      <p>Comments ({comments.length})</p>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.title}</li>
        ))}
      </ul>
    </>
  )

  if (loading) return <h1>Loading</h1>

  return (
    <>
      {title && <h1>{title}</h1>}
      <button onClick={() => setComment(!comment)}>{comment ? 'Hide' : 'Show'} Comment</button>
      <div>
        {comment ? commentBlock : "no comments"}
      </div>
    </>
  )
}

export default App