import axios from 'axios';

const server = 'https://your-podcast-api.onrender.com';

export const register = async (name, email, password) => {
  try {
    dispatchEvent({ type: 'USER_REGISTER_REQUEST' });
    const { data } = await axios.post(
      `${server}/api/v1/user/register`,
      {
        name,
        email,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    dispatchEvent({ type: 'USER_REGISTER_SUCCESS', payload: data });
  } catch (error) {
    dispatchEvent({
      type: 'USER_REGISTER_FAIL',
      payload: error.response.data.message,
    });
  }
};

export const login = async (email, password) => {
  try {
    dispatchEvent({ type: 'USER_LOGIN_REQUEST' });
    const { data } = await axios.post(
      `${server}/api/v1/user/login`,
      {
        email,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    dispatchEvent({ type: 'USER_LOGIN_SUCCESS', payload: data });
  } catch (error) {
    dispatchEvent({
      type: 'USER_LOGIN_FAIL',
      payload: error.response.data.message,
    });
  }
};

export const loadUser = async () => {
  try {
    dispatchEvent({ type: 'USER_LOAD_REQUEST' });
    const { data } = await axios.get(`${server}/api/v1/user/me`);
    dispatchEvent({ type: 'USER_LOAD_SUCCESS', payload: data });
  } catch (error) {
    dispatchEvent({
      type: 'USER_LOAD_FAIL',
      payload: error.response.data.message,
    });
  }
};
