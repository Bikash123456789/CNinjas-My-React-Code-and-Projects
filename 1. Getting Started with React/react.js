const heading = <h1>Hello JSX</h1>
const para = <p>Welcome to the JSX Session</p>
const btn = <button>Click Me JSX</button>

const div = <div>
    {heading}
    {para}
    {btn}
</div>

ReactDOM.createRoot(document.getElementById("root")).render(div)