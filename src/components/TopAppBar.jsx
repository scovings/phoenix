/**
 * @copyright 2025 scovings
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { Link, useNavigation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

/**
 * Components
 */
import { IconBtn } from './Button';
import Avatar from './Avatar';
import Menu from './Menu';
import MenuItem from './MenuItem';
import { LinearProgress } from './Progress';

/**
 * Assets
 */
import { logoLight, logoDark } from '../assets/assets';

const TopAppBar = () => {
  // - useNavigation: Provides navigation state (loading, idle, submitting, etc)
  const navigation = useNavigation();

  /**
   * Check if the currect navigation state is 'loading' and if there is no form data associated with the navigation.
   * This condition typically signifies a normal page load,
   * where the page is loading for the first time or is being reloaded without submitting a form
   */
  const isNormalLoad = navigation.state === 'loading' && !navigation.formData;

  return (
    <header className='relative flex justify-between items-center h-16 px-4'>
      <div className='flex items-center gap-3'>
        <IconBtn
          icon='menu'
          title='Menu'
          classes='lg:hidden'
        />

        <Link
          to='/'
          className='min-w-max max-w-max h-[24px] lg:hidden'
        >
          <img
            src={logoLight}
            width={133}
            height={24}
            alt='phoenix logo'
            className='dark:hidden'
          />

          <img
            src={logoDark}
            width={133}
            height={24}
            alt='phoenix logo'
            className='hidden dark:block'
          />
        </Link>
      </div>

      <div className='menu-wrapper'>
        <IconBtn>
          <Avatar />
        </IconBtn>

        <Menu classes=''>
          <MenuItem labelText='Log out'/>
        </Menu>
      </div>

      <AnimatePresence>{isNormalLoad && <LinearProgress />}</AnimatePresence>
    </header>
  );
};

export default TopAppBar;
