const App = () =>{
    const header = <h1>Welcome</h1>
    const name = "Bikash"
    const course = "React"

    return (<>
        {header}
        <h3>Hello {name}</h3>
        <h3>This is introduction to {course} course</h3>
    </>)
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)