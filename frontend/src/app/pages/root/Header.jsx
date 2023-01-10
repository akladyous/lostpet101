import { useLocation } from 'react-router-dom';

export default function Header(params) {
  const { pathname, state } = useLocation();
  // if (window.location.pathname === '/') return null;
  return pathname !== '/' ? (
    <div className="w-full bg-header-image bg-cover bg-bottom bg-no-repeat h-24 md:h-60">
      <div className="flex h-full justify-center align-middle">
        <h1 className="text-2xl md:text-5xl text-slate-50 font-medium m-auto">
          {state?.title || 'Lost & Found Pets'}
        </h1>
      </div>
    </div>
  ) : null;
}
