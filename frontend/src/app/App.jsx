import { Routes, Route } from 'react-router-dom';
import Root from './pages/root/Root.jsx';
import Home from './pages/home/Home.jsx';
import Users from './freatures/users/Users.jsx';
import SignIn from './freatures/users/SignIn.jsx';
import SignOut from './freatures/users/SignOut.jsx';
import SignUp from './freatures/users/SignUp.jsx';
import Profile from './freatures/users/Profile.jsx';
import ListingsRoot from './freatures/listings/ListingsRoot.jsx';

import ListingWizard from './freatures/listings/steps/ListingWizard.jsx';
import Listings from './freatures/listings/Listings.jsx';
import ReportRoot from './freatures/reports/ReportsRoot.jsx';
import ReportCard from './freatures/reports/ReportCard.jsx';
import { withLocationProps } from '../hooks/withLocationProps.jsx';
const ReportInfo = withLocationProps(ReportCard);

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Home />} />
          <Route path="feedback" element={<Home />} />
          <Route path="users" element={<Users />}>
            <Route index path="signin" element={<SignIn />} />
            <Route index path="signout" element={<SignOut />} />
            <Route index path="signup" element={<SignUp />} />
            <Route index path="profile" element={<Profile />} />
          </Route>
          <Route path="listings" element={<ListingsRoot />}>
            <Route index element={<Listings />} />
            <Route index path="new" element={<ListingWizard />} />
            <Route
              caseSensitive
              path=":petName"
              element={<ReportInfo resourceName="report" />}
            />
            {/* <Route index path="report" element={<NewReport />} /> */}
            {/* <Route index path="pet" element={<NewPet />} /> */}
          </Route>
          <Route path="reports" element={<ReportRoot />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
