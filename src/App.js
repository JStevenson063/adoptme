import ReactDOM from "react-dom";
import SearchParams from "./SearchParams.jsx";

// think of this part like creating a new TYPE of car. like honda making the civic

const App = () => {
  return (
    <div id="my-app">
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

// think of this part as the factory creating 1 single honda civic
/* ReactDOM.render() takes what's inside it and puts it on the DOM. 
The React.createElement is what the ReactDOM.render() will send to the DOM
*/
ReactDOM.render(<App />, document.getElementById("root"));
