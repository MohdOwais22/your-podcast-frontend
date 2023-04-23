import axios from 'axios';

const server = 'https://your-podcast-api.onrender.com';

export const uploadPodcast = async (podcastData) => {
  try {
    dispatchEvent({ type: 'UPLOAD_PODCAST_REQUEST' });
    const { data } = await axios.post(
      `${server}/api/v1/podcast/upload`,
      podcastData
    );
    dispatchEvent({ type: 'UPLOAD_PODCAST_SUCCESS', payload: data });
  } catch (error) {
    dispatchEvent({
      type: 'UPLOAD_PODCAST_FAIL',
      payload: error.response.data.message,
    });
  }
};

export const getPodcasts = async () => {
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
