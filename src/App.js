import './index.scss';

const title = 'Blog'
const comments = [
    { id: 1, title: 'Awesome'},
    { id: 2, title: 'Great'},
    { id: 3, title: 'Amazing'},
    { id: 4, title: 'Ridiculous'},
    { id: 5, title: 'Nice'},
]

function App() {
    return (
        <>
            <h1>{title}</h1>
            <p>Comments ({comments.length})</p>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>{comment.title}</li>
                ))}
            </ul>
        </>
    )
}

export default App