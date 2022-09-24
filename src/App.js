import './index.scss';

const title = 'Blog'

function App() {
    return (
        <>
            <h1>{title}</h1>
            <p>Hi</p>
            { Math.random() * 5 + 5 }
        </>
    )
}

export default App