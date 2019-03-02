const endpoints = {
  baseURI: "http://localhost:3333",
  baseAPI: "http://localhost:3333"
};

const fetchAPI = (path, method = "GET", body = undefined, headers = {}) => {
  return fetch(`${endpoints.baseAPI}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers
    },
    body
  })
    .then(handleError)
    .then(handleResponse)
    .catch(handleErrorElse);
};

const handleResponse = async response => {
  const toJson = await response.json();
  return toJson;
};

const handleError = response => {
  if (!response.ok) {
    const message = response.message;
    throw new ReqError(message, response.status);
  }
  return response;
};

const handleErrorElse = async err => {
  if (!err.hasOwnProperty("response")) {
    throw new ReqError(err, err.stack);
  }
};

function ReqError(message, status) {
  this.response = {
    error: {
      message,
      status
    }
  };

  return this;
}

export default { fetchAPI };
