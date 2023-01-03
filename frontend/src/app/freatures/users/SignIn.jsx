import { useCallback, useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { signInSchema as schema } from './form/signInSchema.jsx';
import { TextField } from '../../../components/form/TextField.jsx';
import { ErrorField } from '../../../components/form/ErrorField.jsx';

import { usersSignIn } from '../../../state/thunks/users/usersSignIn.jsx';
import AuthenticateWithProvider from './form/AuthenticateWithProvider.jsx';
import RememberMe from './form/RememberMe.jsx';
import Button from '../../../components/ui/Button.jsx';
import { Image } from '../../../components/ui/Image.jsx';
import avatarPlaceholder from '../../../assets/images/icons/avatarPlaceholder.png';

export default function SignIn() {
  const state = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMounted = useRef(false);
  const [error, setError] = useState('');

  const {
    handleSubmit,
    reset,
    getValues,
    control,
    formState: { isSubmitting, isSubmitSuccessful, isValid },
  } = useForm({
    defaultValues: schema.initialValues,
    resolver: schema.validation,
  });

  const onSubmit = useCallback(
    async (values, event) => {
      const response = await dispatch(usersSignIn({ user: values }));
      return new Promise((resolve, reject) => {
        if (usersSignIn.fulfilled.match(response)) {
          setError('account successfully created');
          setTimeout(() => {
            reset();
            navigate('/', { replace: true });
          }, 2000);
          return resolve(true);
        } else {
          switch (true) {
            case response.payload.hasOwnProperty('message'):
              setError(response.payload.message);
              break;
            case response.payload.hasOwnProperty('validation'):
              setError(response.payload.validation);
              break;
            case response.payload.hasOwnProperty('error'):
              setError(response.payload.message);
              response.payload.message;
              break;
            default:
              setError('network error');
              break;
          }
          return reject(false);
        }
      });
    },
    [dispatch, navigate]
  );

  const onError = (errors, e) => {
    // console.log('onErrors  :', errors, 'onErrors event: ', e);
    // console.log('getValues :', getValues());
  };

  useEffect(() => {
    isMounted.current = true;

    // console.log('signup update');
    return function () {
      isMounted.current = false;
    };
  }, []);
  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="block mx-auto w-20 h-20 border border-solid border-orange-400 rounded-full hover:bg-slate-50  shadow-md  focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
            <Image
              sourceImage={state?.user?.photo_url}
              fallBackImage={avatarPlaceholder}
              alt="user-avatar"
              className="mx-auto h-full w-full object-cover rounded-full"
            />
          </div>

          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign up a new account
          </h2>
        </div>

        <div className="mx-3 mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-slate py-8 px-4 shadow-xl brightness-100 sm:rounded-lg sm:px-10">
            <form
              name={schema.name}
              className="space-y-6"
              onSubmit={handleSubmit(onSubmit, onError)}
            >
              {Object.keys(schema.fields).map((field, idx) => {
                return (
                  <div key={idx}>
                    <TextField
                      control={control}
                      input={schema.fields[field].attributes}
                      label={schema.fields[field].label}
                      classes={schema.classes}
                    />
                  </div>
                );
              })}
              <ErrorField error={error} />
              <div className="flex items-center justify-between">
                <RememberMe />
                <div className="text-sm">
                  <Link
                    to="/users/signin"
                    state={'User SignUp'}
                    className="font-medium text-orange-600 hover:text-orange-500"
                  >
                    have account already?
                  </Link>
                </div>
              </div>

              <div>
                <Button
                  type="submit"
                  isLoading={isSubmitting}
                  isValid={isValid}
                  isSubmitSuccessful={isSubmitSuccessful}
                  value="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white shadow-md transition-all duration-300 ease-linear hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-75 disabled:hover:bg-orange-600"
                ></Button>
              </div>
            </form>
            <AuthenticateWithProvider />
          </div>
        </div>
      </div>
    </>
  );
}
