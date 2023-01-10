import { Link } from 'react-router-dom';
export default function TeamArea() {
  return (
    <div className="bg-team-area bg-cover bg-center h-[25rem] flex flex-col justify-around mb-14">
      <div className="text-center text-white py-5">
        <h2 className="text-6xl mb-3">Pet Finder</h2>
      </div>
      <div className="text-center text-white w-3/4 mx-auto py-5">
        <p className="text-lg">
          If you are interested in listing your pets on our site, please click
          here . Once you send us the information we need, we will get you
          signed up in the system and let you know how to access the site and
          post your animals!
        </p>
      </div>
      <div className="text-center py-5">
        <Link
          to="users/signup"
          state={{ title: 'Contact Us' }}
          className="btn btn-secondary rounded-full px-9"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
