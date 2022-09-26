import { useRoutes } from "react-router-dom";
import routes from "./router";

function App() {
  return (
    <div className="app">
      <header className="header">
        header
      </header>
      <header className="page">
        {
          useRoutes(routes)
        }
      </header>
      <header className="footer">
        footer
      </header>
    </div>
  );
}

export default App;
