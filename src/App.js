import './index.scss';

function App() {

const title = 'Blog';
const comments = [
    { id: 1, title: 'Awesome'},
    { id: 2, title: 'Great'},
    { id: 3, title: 'Amazing'},
    { id: 4, title: 'Ridiculous'},
    { id: 5, title: 'Nice'},
];

const loading = false;
const showComments = true;

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
            <h1>{title}</h1>
            {showComments ? commentBlock : "no comments"}
        </>
    )
}

export default App