const App = () =>{
    const a = 6
    const b = 8
    const sum = (a,b) => a+b
    
    return (<>
       
        <h2>The sum of {a} and {b} is {sum(a,b)} </h2>
    </>)
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)