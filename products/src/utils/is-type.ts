/* eslint-disable import/prefer-default-export */

/**
 * If the NODE_ENV environment variable is set to 'development', then return true, otherwise return
 * false.
 * @returns A boolean value.
 */
export function isDev(): boolean {
  return process.env.NODE_ENV === 'development';
}
