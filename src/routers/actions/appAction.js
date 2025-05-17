/**
 * @copyright 2025 scovings
 * @license Apache-2.0
 */

/**
 * Custom modules
 */
import { account } from "../../lib/appwrite";

const userPromptAction = async (formData) => {
  const userPrompt = formData.get('user_prompt');

  // Get current user info
  const user = await account.get();

  return null;
}

/**
 * Handles incoming requests based on the `request_type` form data.
 * 
 * @async
 * @function appAction
 * @param {Object} request - The incoming request object containing the form data.
 * @returns {Promise<*>} - Returs the result of the action based on the `request_type` (e.g., `userPromptAction` or `conversationAction`).
 **/
const appAction = async ({ request }) => {
  const formData = await request.formData();
  const requestType = formData.get('request_type');

  if (requestType === 'user_prompt') {
    return await userPromptAction(formData);
  }
};

export default appAction;
