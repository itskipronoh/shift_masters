export const BaseURI = 'https://8q36q111-5000.euw.devtunnels.ms';

export const apiCall = async (url, method, data, token) => {
  try {
    const response = await fetch(`${BaseURI}${url}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : '',
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    console.error('Error:', error);
  }
};

// sign in as customer

export const signInAsCustomer = async (email, password) => {
  try {
    const response = await fetch(`${BaseURI}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};

//make order

export const makeOrder = async (orderData, token) => {
  return await apiCall(`/placeOrder`, 'POST', orderData, token);
};
