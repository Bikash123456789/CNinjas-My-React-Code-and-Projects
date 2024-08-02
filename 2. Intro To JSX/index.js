const App = () =>{
    const a = 6
    const b = 8
    const list = ["apple","banana","orange"]
    const sum = (a,b) => a+b
    
    return (<>
       
        <h2>The sum of {a} and {b} is {sum(a,b)} </h2>
        <h3>{list}</h3>
        {list.map((item,index)=>{
            return <p key={index}>{item}</p>
        })}
    </>)
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)