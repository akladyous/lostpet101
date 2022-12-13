import { Routes, Route } from 'react-router-dom';
import Root from './pages/root/Root.jsx';
import Home from './pages/home/Home.jsx';
import Users from './freatures/users/Users.jsx';
import SignIn from './freatures/users/SignIn.jsx';
import SignOut from './freatures/users/SignOut.jsx';
import SignUp from './freatures/users/SignUp.jsx';
import Profile from './freatures/users/Profile.jsx';
import Listings from './freatures/listings/Listings.jsx';

import ListingWizard from './freatures/listings/ListingWizard.jsx';
import NewPet from '../app/freatures/pets/NewPet.jsx';
import NewReport from '../app/freatures/reports/NewReport.jsx';

function App() {
    return (
        <div className="main">
            <Routes>
                <Route path="/" element={<Root />}>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<Home />} />
                    <Route path="feedback" element={<Home />} />
                    <Route path="users" element={<Users />}>
                        <Route index path="signin" element={<SignIn />} />
                        <Route index path="signout" element={<SignOut />} />
                        <Route index path="signup" element={<SignUp />} />
                        <Route index path="profile" element={<Profile />} />
                    </Route>
                    <Route path="listings" element={<Listings />}>
                        <Route index path="new" element={<ListingWizard />} />
                        {/* <Route index path="report" element={<NewReport />} /> */}
                        {/* <Route index path="pet" element={<NewPet />} /> */}
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
