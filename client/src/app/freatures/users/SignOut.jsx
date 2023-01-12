import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { usersSignOut } from '../../../state/thunks/users/usersSignOut.jsx';

export default function SignOut() {
  const state = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (state.isAuthenticated) {
      dispatch(usersSignOut())
        .then((res) => {
          navigate('/', { replace: true });
        })
        .catch((err) => {
          return;
        });
    }
  }, [dispatch, navigate, state.isAuthenticated]);

  return;
}
