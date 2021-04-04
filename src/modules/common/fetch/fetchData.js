const fetchData = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    if (response.status > 199 && response.status < 300) {
      return response.json();
    }

    const { status, statusText } = response;
    throw new Error(`status: ${status} statusText: ${statusText}`);
  } catch(err) {
    throw err;
  }
};

export default fetchData;
