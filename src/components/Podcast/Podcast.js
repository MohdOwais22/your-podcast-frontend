import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import PodcastScreen from '../../pages/DisplayScreen/PodcastScreen';

const Podcast = ({ completePodcast }) => {
  const myObj = JSON.stringify(completePodcast);
  return (
    <Link to={<PodcastScreen completePodcast={myObj} />}>
      <Box>
        <h4>{completePodcast.name}</h4>
        <p>{completePodcast.category}</p>
        <p>{completePodcast.type}</p>
        <p>{completePodcast.speaker}</p>
      </Box>
    </Link>
  );
};

export default Podcast;
