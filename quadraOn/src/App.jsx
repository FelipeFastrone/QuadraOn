import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

import Main from "./components/layout/Main";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Main />
      <Footer className="footer" />
    </div>
  );
}

export default App;
