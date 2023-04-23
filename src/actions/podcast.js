import axios from 'axios';

const server = 'http://localhost:5000/api/v1/podcast';
// const server = 'https://your-podcast-api.onrender.com/api/v1/user';

export const uploadPodcast = (myForm) => async (dispatch) => {
  console.log(myForm);
  try {
    dispatch({ type: 'UPLOAD_PODCAST_REQUEST' });
    const { data } = await axios.post(`${server}/upload`, myForm, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });
    dispatch({ type: 'UPLOAD_PODCAST_SUCCESS', payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: 'UPLOAD_PODCAST_FAIL',
      payload: error.response.data.message,
    });
  }
};

export const getPodcasts = () => async (dispatch) => {
  try {
    dispatchEvent({ type: 'GET_PODCASTS_REQUEST' });
    const { data } = await axios.get(`${server}/api/v1/podcast/getPodcasts`);
    dispatchEvent({ type: 'GET_PODCASTS_SUCCESS', payload: data });
  } catch (error) {
    dispatchEvent({
      type: 'GET_PODCASTS_FAIL',
      payload: error.response.data.message,
    });
  }
};
