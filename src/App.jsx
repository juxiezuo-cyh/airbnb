import { useRoutes } from "react-router-dom";
import routes from "./router";
import AppHeader from './components/app-header/c-cpns/index.tsx';
import AppFooter from "./components/app-footer/index.tsx";

function App() {
  return (
    <div className="app">
      <AppHeader />
      <header className="page">
        {
          useRoutes(routes)
        }
      </header>
      <AppFooter />
    </div>
  );
}

export default App;
