import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:5000/messaging-app-6da4f/us-central1/api/dog").then(
      (res) => {
        console.log(res, "this is res");
      }
    );
  }, []);

  return (
    <div>
      <div id="message">
        <h2>Welcome</h2>
        <h1>Simple Firebase CRUD application</h1>
        <p>
          You're seeing this because you've successfully setup Firebase Hosting.
          Now it's time to go build something extraordinary!
        </p>
        <a href="https://ngozi.dev">Learning Firebase</a>
      </div>
    </div>
  );
}

export default App;
