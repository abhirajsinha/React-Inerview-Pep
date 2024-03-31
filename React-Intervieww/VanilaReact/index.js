// createElement(type, props, ...children)

// 2
function Counter() {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "hello world: count"), //child 1 of div
    React.createElement("h2", {}, "React") //child 2 of div
  );
}

// 1
const root = ReactDOM.createRoot(document.getElementById("root"));
// 3
root.render(React.createElement(Counter));

// Steps
// Declare a div with id root in html
// then create root with ReactDOM.createRoot()
// Create a component with React.createElement()
// then render the component with root.render()
