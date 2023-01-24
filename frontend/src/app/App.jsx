import { Routes, Route } from 'react-router-dom';

import HomeRoot from './pages/root/HomeRoot.jsx';
import PetsRoot from './freatures/pets/PetsRoot.jsx';
import ReportRoot from './freatures/reports/ReportsRoot.jsx';

import Home from './pages/home/Home.jsx';
import Feedback from './pages/feedback/Feedback.jsx';
import About from './pages/about/About.jsx';
import Users from './freatures/users/Users.jsx';
import SignIn from './freatures/users/SignIn.jsx';
import SignOut from './freatures/users/SignOut.jsx';
import SignUp from './freatures/users/SignUp.jsx';
import Profile from './freatures/users/Profile.jsx';

import FormWizard from './freatures/listings/steps/FormWizard.jsx';
import ReportsHome from './freatures/reports/ReportsHome.jsx';
import PetsHome from './freatures/pets/PetsHome.jsx';

import { withLocationProps } from '../hooks/withLocationProps.jsx';
import ReportDetail from './freatures/reports/ReportDetail.jsx';
import ReportRequest from './freatures/reports/ReportRequest.jsx';
const ReportInfoWrapper = withLocationProps(ReportDetail);
const ReportRequestWrapper = withLocationProps(ReportRequest);

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<HomeRoot />}>
          <Route index element={<Home />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="about" element={<About />} />

          <Route path="users" element={<Users />}>
            <Route path="signin" element={<SignIn />} />
            <Route path="signout" element={<SignOut />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          <Route path="reports" element={<ReportRoot />}>
            <Route index element={<ReportsHome />} />
            <Route path="new" element={<FormWizard />} />
            <Route path="pet" element={<PetsRoot />}>
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
          </Route>

          <Route path="pets" element={<PetsRoot />}>
            <Route index element={<PetsHome />} />
            <Route path=":pet_id" element={<ReportInfoWrapper />} />
            <Route index element={<PetsHome />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
