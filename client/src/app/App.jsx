import { Routes, Route } from 'react-router-dom';
import Root from './pages/root/Root.jsx';
import StoriesRoot from './freatures/stories/StoriesRoot.jsx';
import ReportRoot from './freatures/reports/ReportsRoot.jsx';
import RequestsRoot from './freatures/requests/RequestsRoot.jsx';
import Home from './pages/home/Home.jsx';
import Feedback from './pages/feedback/Feedback.jsx';
import About from './pages/about/About.jsx';
import Users from './freatures/users/Users.jsx';
import SignIn from './freatures/users/SignIn.jsx';
import SignOut from './freatures/users/SignOut.jsx';
import SignUp from './freatures/users/SignUp.jsx';
import Profile from './freatures/users/Profile.jsx';
import ListingsRoot from './freatures/listings/ListingsRoot.jsx';

import ListingWizard from './freatures/listings/steps/ListingWizard.jsx';
import Listings from './freatures/listings/Listings.jsx';
import Stories from './freatures/stories/Stories.jsx';

import { withLocationProps } from '../hooks/withLocationProps.jsx';
import ReportDetail from './freatures/reports/ReportDetail.jsx';
const ReportInfoWrapper = withLocationProps(ReportDetail);
import ReportRequest from './freatures/requests/ReportRequest.jsx';
const ReportRequestWrapper = withLocationProps(ReportRequest);

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="about" element={<About />} />
          <Route path="users" element={<Users />}>
            <Route path="signin" element={<SignIn />} />
            <Route path="signout" element={<SignOut />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="listings" element={<ListingsRoot />}>
            <Route index element={<Listings />} />
            <Route path="new" element={<ListingWizard />} />
          </Route>
          <Route path="reports" element={<ReportRoot />}>
            <Route
              caseSensitive
              path=":name"
              element={
                <>
                  <ReportInfoWrapper resourceName="report" />
                  <ReportRequestWrapper resourceName="report" />
                </>
              }
            />
          </Route>
          <Route path="requests" element={<RequestsRoot />}></Route>
          <Route path="stories" element={<StoriesRoot />}>
            <Route index element={<Stories />} />
          </Route>
          <Route path="pets" element={<StoriesRoot />}>
            <Route path=":pet_id" element={<ReportInfoWrapper />} />
            <Route index element={<Stories />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
