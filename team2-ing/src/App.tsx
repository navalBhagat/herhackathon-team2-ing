import { Wrapper } from "./components";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Calculator, Home, Overview } from "./pages";
import { LoggedInProvider } from "./services/UserService";

function App() {
    return (
        <LoggedInProvider>
            <div className="App">
                <Wrapper>
                    <Router>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route
                                path="/calculator"
                                element={<Calculator />}
                            />
                            <Route path="/overview" element={<Overview />} />
                        </Routes>
                    </Router>
                </Wrapper>
            </div>
        </LoggedInProvider>
    );
}

export default App;
