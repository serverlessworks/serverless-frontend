import * as React from "react"
import ReactDOM from "react-dom/client";

// App Component
const App = () => (<div>
    <h1>Hello, ESBUILD!</h1>
    <Panel />
    <Panel />
</div>)

// Panel Component
const Panel = () => <h2>I'm a Panel 5</h2>

// Mount component 
const root = ReactDOM.createRoot(
    document.getElementById("root") as Element
);

root.render(<App />);