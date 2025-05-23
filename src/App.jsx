/**
 * @copyright 2025 scovings
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { motion } from 'framer-motion';

/**
 * Custom hooks
 */
import { useToggle } from './hooks/useToggle';

/**
 * Components
 */
import PageTitle from './components/PageTitle';
import TopAppBar from './components/TopAppBar';
import Sidebar from './components/Sidebar';
import Greetings from './pages/Greetings';
import PromptField from './components/PromptField';

const App = () => {
  /**
   * Use a custom hook to manage the sidebar's open state.
   * 'isSidebarOpen' hold the current state,
   * and 'toggleSidebar' is a function to toggle the sidebar.
   */
  const [isSidebarOpen, toggleSidebar] = useToggle();

  return (
    <>
      {/* Meta title */}
      <PageTitle title='Phoenix - chat to supercharge your ideas' />

      <div className='lg:grid lg:grid-cols-[320px,1fr]'>
        {/* Sidebar */}
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />

        <div className='h-dvh grid grid-rows-[max-content,minmax(0,1fr),max-content]'>
          {/* Top app bar */}
          <TopAppBar toggleSidebar={toggleSidebar} />

          {/* Main content */}
          <div className='px-5 pb-5 flex flex-col overflow-y-auto'>
            <div className='max-w-[480px] w-full mx-auto grow'>
              <Greetings />
            </div>
          </div>

          {/* Prompt field */}
          <div className='bg-light-background dark:bg-dark-background'>
            <div className='max-w-[870px] px-5 w-full mx-auto'>
              <PromptField />

              <motion.p
                initial={{ opacity: 0, translateY: '-4px' }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.2, delay: 0.8, ease: 'easeOut' }}
                className='text-bodySmall text-center text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant p-3'
              >
                Phoenix may display inaccurate info, especially about people, so
                double-check its responses.
                <a
                  href='https://support.google.com/gemini?p=privacy_notice'
                  target='_blank'
                  className='inline underline ms-1'
                >
                  Your privacy & Gemini Apps
                </a>
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
