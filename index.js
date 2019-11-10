class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Slot Machines!</h1>
                <h2>The power of random number generator</h2>
                <Machine />
                <Machine />
                <Machine />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))