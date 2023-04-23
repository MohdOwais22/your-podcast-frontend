import { Box } from '@mui/material';
import React from 'react';

const Podcast = ({ completePodcast }) => {
  return (
    <Box>
      <h4>{completePodcast.name}</h4>
      <p>{completePodcast.category}</p>
      <p>{completePodcast.type}</p>
      <p>{completePodcast.speaker}</p>
    </Box>
  );
};

export default Podcast;
