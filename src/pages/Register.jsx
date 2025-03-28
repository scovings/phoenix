/**
 * @copyright 2025 scovings
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { Link, Form, useNavigation, useActionData } from 'react-router-dom';
import { useEffect } from 'react';

/**
 * Assets
 */
import { logoLight, logoDark, banner } from '../assets/assets';

/**
 * Custom hooks
 */
import { useSnackbar } from '../hooks/useSnackbar';

/**
 * Components
 */
import PageTitle from '../components/PageTitle';
import TextField from '../components/TextField';
import { Button } from '../components/Button';
import { CircularProgress } from '../components/Progress';

const Register = () => {
  // Get error data from form submission using useActionData (likely from React Router.)
  const error = useActionData();

  // Get navigation state e.g loading/submitting etc...
  const navigation = useNavigation();

  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    // Show snackbar with the provided error message
    if (error?.message) {
      showSnackbar({
        message: error.message,
        type: 'error',
        timeOut: 500000000000,
      });
    }
  }, [error, showSnackbar]);

  return (
    <>
      <PageTitle title='Create an account' />

      <div className=' relative w-screen h-dvh p-2 grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] lg:gap-2 flex-col'>
        <div className='flex flex-col p-4'>
          <Link
            to='/'
            className='max-w-max mx-auto lg:mx-0'
          >
            <img
              src={logoLight}
              alt='phoenix logo'
              width={133}
              height={24}
              className='dark:hidden'
            />

            <img
              src={logoDark}
              alt='phoenix logo'
              width={133}
              height={24}
              className='hidden dark:block'
            />
          </Link>

          <div className='flex flex-col gap-2 max-w-[480px] w-full mx-auto'>
            <h2 className='text-displaySmall font-semibold text-light-onBackground dark:text-dark-onBackground text-center'>
              Create an account
            </h2>

            <p className='text-bodyLarge text-light-onSurface dark:text-dark-onSurfaceVariant mt-1 mb-5 text-center px-2'>
              Register today and gain access to powerful tools that will
              supercharge your ideas.
            </p>

            <Form
              method='POST'
              className='grid grid-cols-1 gap-4'
            >
              <TextField
                type='text'
                name='name'
                label='Full name'
                placeholder='Enter your Full Name'
                required={true}
                autoFocus={true}
                helperText='Including your Middle Name...'
              />

              <TextField
                type='email'
                name='email'
                label='Email'
                placeholder='Enter your Email'
                required={true}
              />

              <TextField
                type='password'
                name='password'
                label='Password'
                placeholder='Enter your Password'
                required={true}
              />

              <Button
                type='submit'
                disabled={navigation.state === 'submitting'}
              >
                {navigation.state === 'submitting' ? (
                  <CircularProgress size='small' />
                ) : (
                  'Create account'
                )}
              </Button>
            </Form>

            <p className='text-bodyMedium text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant text-center mt-4'>
              Already have an account?&nbsp;
              <Link
                to='/login'
                className='link inline-block text-light-onSurface dark:text-dark-onSurface'
              >
                Sign in
              </Link>
            </p>
          </div>

          <p className='absolute bottom-0 left-0 w-full text-center mt-auto mx-auto text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant text-bodyMedium lg:mx-0'>
            &copy; 2025 scovings & seqyu - All rights reserved.
          </p>
        </div>

        <div className='hidden img-box lg:block lg:relative lg:rounded-large'>
          <img
            src={banner}
            alt=''
            className='img-cover'
          />

          <p className='absolute bottom-10 left-12 right-12 z-10 text-displayLarge font-semibold leading-tight text-right text-light-onSurface drop-shadow-sm 2xl:text-[72px]'>
            Chat with Phoenix to supercharge your ideas.
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
