/**
 * @copyright 2025 scovings
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { motion } from 'framer-motion';

/**
 * Components
 */
import { IconBtn } from './Button';

const PromptField = () => {

  // Defines a Framer Motion variant for the prompt field, controling its animation based on its visibility state.
  const prompFieldVaraint = {}



  return (
    <motion.div className='prompt-field-container'>
      <motion.div
        className='prompt-field'
        contentEditable={true}
        role='textbox'
        aria-multiline={true}
        aria-label='Enter a prompt here'
        data-placeholder='Ask anything...'
      />

      <IconBtn
        icon='send'
        title='Submit'
        size='large'
        classes='ms-auto'
      />

      <div className='state-layer'></div>
    </motion.div>
  );
};

export default PromptField;
