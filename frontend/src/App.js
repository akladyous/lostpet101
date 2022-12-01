import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Home from "./components/home/Home.jsx";
import Users from './components/users/Users.jsx'
import SignIn from './components/users/SignIn.jsx'
import SignOut from './components/users/SignOut.jsx'
import SignUp from './components/users/SignUp.jsx'
import Profile from './components/users/Profile.jsx'

function App() {
    return (
        <div className="main">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<Home />} />
                    <Route path="feedback" element={<Home />} />
                    <Route path="users" element={<Users />}>
                        <Route index path="signin" element={<SignIn />} />
                        <Route index path="signout" element={<SignOut />} />
                        <Route index path="signup" element={<SignUp />} />
                        <Route index path="profile" element={<Profile />} />
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
