import Movies from "./components/movies";
import "./App.css";

function App() {
  return (
    <main className="container">
      <div className="col-md-10 offset-1">
        <Movies />
      </div>
    </main>
  );
}

export default App;
