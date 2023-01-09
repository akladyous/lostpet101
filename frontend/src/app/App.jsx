import { Routes, Route } from 'react-router-dom';
import Root from './pages/root/Root.jsx';
import ReportRoot from './freatures/reports/ReportsRoot.jsx';
import RequestsRoot from './freatures/requests/RequestsRoot.jsx';
import Home from './pages/home/Home.jsx';
import Users from './freatures/users/Users.jsx';
import SignIn from './freatures/users/SignIn.jsx';
import SignOut from './freatures/users/SignOut.jsx';
import SignUp from './freatures/users/SignUp.jsx';
import Profile from './freatures/users/Profile.jsx';
import ListingsRoot from './freatures/listings/ListingsRoot.jsx';

import ListingWizard from './freatures/listings/steps/ListingWizard.jsx';
import Listings from './freatures/listings/Listings.jsx';

import ReportDetail from './freatures/reports/ReportDetail.jsx';
import { withLocationProps } from '../hooks/withLocationProps.jsx';
const ReportInfo = withLocationProps(ReportDetail);
import ReportRequest from './freatures/requests/ReportRequest.jsx';

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Home />} />
          <Route path="feedback" element={<Home />} />
          <Route path="users" element={<Users />}>
            <Route path="signin" element={<SignIn />} />
            <Route path="signout" element={<SignOut />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="listings" element={<ListingsRoot />}>
            <Route index element={<Listings />} />
            <Route path="new" element={<ListingWizard />} />
            {/* <Route index path="report" element={<NewReport />} /> */}
            {/* <Route index path="pet" element={<NewPet />} /> */}
          </Route>
          <Route path="reports" element={<ReportRoot />}>
            <Route
              caseSensitive
              path=":name"
              element={
                <>
                  <ReportInfo resourceName="report" />
                  <ReportRequest />
                </>
              }
            />
          </Route>
          <Route path="requests" element={<RequestsRoot />}>
            {/* <Route index element={<></>} /> */}
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
