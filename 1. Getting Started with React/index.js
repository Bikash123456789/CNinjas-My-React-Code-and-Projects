const div = document.createElement("div");

const heading = document.createElement("h1");
heading.textContent = "Hello"
heading.className = "header"

const para = document.createElement("p");
para.textContent = "Welcome to the Session"
para.className = "para"

const btn = document.createElement("button")
btn.textContent = "Click Me"
btn.className = "btn"

div.append(heading)
div.append(para)
div.append(btn)

document.getElementById("root").append(div)