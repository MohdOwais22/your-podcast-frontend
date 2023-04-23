import axios from 'axios';

const server = 'http://localhost:5000/api/v1/user';
// const server = 'https://your-podcast-api.onrender.com/api/v1/user';

export const register = (cred) => async (dispatch) => {
  try {
    dispatch({ type: 'USER_REGISTER_REQUEST' });
    const { data } = await axios.post(
      `${server}/new`,
      {
        name: cred.name,
        email: cred.email,
        password: cred.password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    dispatch({ type: 'USER_REGISTER_SUCCESS', payload: data });
  } catch (error) {
    dispatch({
      type: 'USER_REGISTER_FAIL',
      payload: error.response.data.message,
    });
  }
};

export const login = (cred) => async (dispatch) => {
  console.log(cred);
  try {
    dispatch({ type: 'USER_LOGIN_REQUEST' });
    const { data } = await axios.post(
      `${server}/login`,
      {
        email: cred.email,
        password: cred.password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    dispatch({ type: 'USER_LOGIN_SUCCESS', payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: 'USER_LOGIN_FAIL',
      payload: error.response.data.message,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: 'USER_LOAD_REQUEST',
    });
    const { data } = await axios.get(`${server}/me`, {
      withCredentials: true,
    });

    dispatch({
      type: 'USER_LOAD_SUCCESS',
      payload: data.user,
    });
    console.log(data.user);
  } catch (error) {
    console.log(error);
    dispatch({
      type: 'USER_LOAD_FAIL',
      payload: error.response,
    });
  }
};
