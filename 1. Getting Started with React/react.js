const heading = React.createElement(
    "h1",
    { className: "heading" },
    "Hello Bikash"
  );

const para = React.createElement('p',{className:"para"},"Welcome to the session")
const btn = React.createElement("button",{className:"btn"},"Click Me Now")
const div = React.createElement('div',{className:"App",children:[heading,para,btn]}) 
ReactDOM.createRoot(document.getElementById("root")).render(div);