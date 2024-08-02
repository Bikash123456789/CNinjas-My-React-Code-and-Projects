const App = () =>{
    const name = "Bikash"
    
    return (<>
       
        <h3>Hello {name}</h3>
        <p>{false}</p>
        <p>{true}</p>
        <p>{undefined}</p>
        <p>{null}</p>
    </>)
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)