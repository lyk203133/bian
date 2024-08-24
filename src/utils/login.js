/**
 * @param {string} path
 * @returns {Boolean}
 */
export function getToken() {
  return localStorage.getItem("jwt-token")
}
