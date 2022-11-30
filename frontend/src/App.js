import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Home from "./components/home/Home.jsx";
import Users from './components/users/Users.jsx'

function App() {
    return (
        <div className="main">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<Home />} />
                    <Route path="feedback" element={<Home />} />
                    <Route path="users" element={<Users />}>
                        <Route path="login" element={<></>} />
                        <Route path="logout" element={<></>} />
                        <Route path="signup" element={<></>} />
                        <Route path="account" element={<></>} />
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
