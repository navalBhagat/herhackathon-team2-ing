import { Wrapper } from "./components";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Calculator, Home } from "./pages";

function App() {
    return (
        <div className="App">
            <Wrapper>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/calculator" element={<Calculator />} />
                    </Routes>
                </Router>
            </Wrapper>
        </div>
    );
}

export default App;
