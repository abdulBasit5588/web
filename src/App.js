import "./App.css";

import MainPage from "./main-page";
import Header from "./components/header";
import { Routes, Route } from "react-router-dom";
import Privacy from "./components/privacy";
import Terms from "./components/terms";

function App() {
  return (
    <main className="App">
      <div>
        <div id="header">
          <Header />
        </div>

        <div id="pageView">
          <Routes>
            
            <Route path='/terms' element={<Terms />} />
            <Route path='/privacy' element={<Privacy />} />

          </Routes>
        </div>
      </div>
      <MainPage />

      {/* <Routes>
        <Route path="./privacy" element={<Privacy />} />
        <Route path="./terms" element={<Terms />} />
      </Routes> */}
    </main>
  );
}

export default App;
