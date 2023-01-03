import ListingsSearch from './lost-found/ListingsSearch.jsx';
import ListingsList from './lost-found/ListingsList.jsx';

export default function Listings() {
  return (
    <>
      <div className="w-11/12 md:w-3/4 max-w-7xl mx-auto mt-8 md:mt-16">
        <ListingsSearch />
        <ListingsList />
      </div>
    </>
  );
}
