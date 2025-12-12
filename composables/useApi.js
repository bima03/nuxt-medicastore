/**
 * useApi composables
 * @returns : json
 */

export const useApi = () => {
  const BASE = "/api/fetch?path=";

  const get = (path, params = {}) => {
    return $fetch(BASE + path, {
      method: "GET",
      query: params,
    });
  };

  const post = (path, body = {}) => {
    return $fetch(BASE + path, {
      method: "POST",
      body,
    });
  };

  return { get, post };
};
