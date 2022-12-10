import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { usersSignOut } from '../../../state/thunks/users/usersSignOut.js';

export default function SignOut() {
    const state = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (state.isAuthenticated) {
            dispatch(usersSignOut())
                .then((res) => {
                    console.log(res);
                    setTimeout(() => {
                        navigate('/', { replace: true });
                    }, 2000);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [dispatch, navigate, state.isAuthenticated]);

    return;
}
