/**
 * @param {string} path
 * @returns {Boolean}
 */
export function getApiUrl() {
  let apiUrl;
  const environment = import.meta.env.NODE_ENV;

  if (environment === 'production') {
    apiUrl = window.location.origin;
  } else {
    apiUrl = import.meta.env.VITE_BASE_API; // 开发环境的 API 地址
  }
  return apiUrl;
}
