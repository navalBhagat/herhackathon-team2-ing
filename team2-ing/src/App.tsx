import { Wrapper } from "./components";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Calculator, Home } from "./pages";
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
                        </Routes>
                    </Router>
                </Wrapper>
            </div>
        </LoggedInProvider>
    );
}

export default App;
