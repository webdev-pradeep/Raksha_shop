export const baseURL = "https://api.store.inflection.org.in";

// fetch client is a wrapper around the fetch API that adds default headers and options to the request.
export const fetchClient = async (url, options = {}) => {
  const defaultHeaders = {
    "Content-Type": "application/json",
  };

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  return await fetch(url, config);
};

// authenticated fetch client is a wrapper around the fetch API that adds default headers and options to the request.
// It also adds the authorization token to the request headers.
export const apiClient = async (url, method, body = null, tokenName = "") => {
  const accessToken = getCookie("access_token");

  const defaultHeaders = {
    "Content-Type": "application/json",
  };

  if (tokenName) {
    defaultHeaders["Authorization"] = `Bearer ${getCookie(tokenName)}`;
  } else {
    defaultHeaders["Authorization"] = `Bearer ${accessToken}`;
  }

  let config;

  if (!body || body === null) {
    config = {
      method: method,
      headers: {
        ...defaultHeaders,
      },
    };
  } else {
    config = {
      method: method,
      headers: {
        ...defaultHeaders,
      },
      body: JSON.stringify(body),
    };
  }

  const response = await fetch(`${baseURL}${url}`, config);
  return await response.json();
};

// Auth APIs
apiClient.login = (payload) => apiClient("/users/login", "POST", payload);
apiClient.signup = (payload) => apiClient("/users/signup", "POST", payload);
apiClient.resetPassword = (token, payload) =>
  apiClient(`/users/reset_password/${token}`, "PATCH", payload);
apiClient.forgotPassword = (payload) =>
  apiClient("/users/forgot_password", "POST", payload);

apiClient.refreshAccessToken = () =>
  apiClient("/users/renew_token", "GET", null, "refresh_token");

// User APIs
apiClient.fetchMyProfile = () => apiClient("/users/profiles/my", "GET");

// Product APIs
apiClient.getProducts = (filter = "limit=20&page=1") =>
  apiClient(`/products/public?${filter}`, "GET");

apiClient.getProductBySlug = (slug) =>
  apiClient(`/products/public/s/${slug}`, "GET");

// Category APIs
apiClient.fetchCategories = () => apiClient("/categories/list", "GET");

apiClient.getCategoryBySlug = (slug) =>
  apiClient(`/categories/s/${slug}`, "GET");

apiClient.getCategoryProductsBySlug = (slug) =>
  apiClient(`/products/public/cat/${slug}`, "GET");

apiClient.getAttributesByCategory = (id) =>
  apiClient(`/attributes/${id}`, "GET");
// Cart APIs
apiClient.fetchMyCart = () => apiClient("/carts/my", "GET");

apiClient.addToCart = (payload) => apiClient("/carts", "POST", payload);
