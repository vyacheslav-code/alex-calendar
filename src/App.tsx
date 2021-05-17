import { BrowserRouter as Router } from "react-router-dom";
import { Layout, ContentRoutes, SiderMenu, Header, Footer } from "./components";

function App() {
  return (
    <Router>
      <Layout
        SiderComp={SiderMenu}
        HeaderComp={Header}
        FooterComp={Footer}
        ContentComp={ContentRoutes}
      />
    </Router>
  );
}

export default App;

// weather module
// rozklad module
// send to calendar
//
