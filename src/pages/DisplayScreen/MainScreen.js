import { Container, Stack } from '@mui/material';
import React from 'react';
import Podcast from '../../components/Podcast/Podcast';

const DisplayScreen = () => {
  const trendingPodcasts = [
    {
      _id: {
        $oid: '64441c0aa3614bbf85407e56',
      },
      name: 'testing',
      description: 'sample description2',
      category: 'mental',
      type: 'video',
      speaker: 'menot',
      file: {
        public_id: 'podcast/WIN_20210422_23_56_37_Pro',
        url: 'https://res.cloudinary.com/dyi3njhwr/video/upload/v1682105539/podcast/WIN_20210422_23_56_37_Pro.mp4',
      },
      views: 0,
      createdAt: {
        $date: '2023-04-22T17:40:26.885Z',
      },
      updatedAt: {
        $date: '2023-04-22T17:40:26.885Z',
      },
      __v: 0,
    },
    {
      _id: {
        $oid: '64441c0aa3614bbf85407e57',
      },
      name: 'testing2',
      description: 'sample description22',
      category: 'mental2',
      type: 'video2',
      speaker: 'menot2',
      file: {
        public_id: 'podcast/WIN_20210422_23_56_37_Pro',
        url: 'https://res.cloudinary.com/dyi3njhwr/video/upload/v1682105539/podcast/WIN_20210422_23_56_37_Pro.mp4',
      },
      views: 0,
      createdAt: {
        $date: '2023-04-22T17:40:26.885Z',
      },
      updatedAt: {
        $date: '2023-04-22T17:40:26.885Z',
      },
      __v: 0,
    },
  ];
  return (
    <Container>
      <Stack direction={'column'}>
        <h1>Top 3 Trending</h1>
        <Stack direction={'row'}>
          {trendingPodcasts.map((item) => (
            <Podcast completePodcast={item} />
          ))}
        </Stack>
        <h1>All Podcasts</h1>
        <Stack direction={'row'}></Stack>
      </Stack>
    </Container>
  );
};

export default DisplayScreen;
