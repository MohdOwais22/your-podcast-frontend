import { Box, Button, Container, Modal, Stack } from '@mui/material';
import React, { useState } from 'react';
import Podcast from '../../components/Podcast/Podcast';

const MainScreen = () => {
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
      type: 'video',
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
    {
      _id: {
        $oid: '6444d27e6057e42bd9bb1511',
      },
      name: 'testing2',
      description: 'sample description3',
      category: 'mp3',
      type: 'audio',
      speaker: 'me',
      file: {
        public_id: 'podcast/WIN_20210423_00_01_48_Pro',
        url: 'https://res.cloudinary.com/dyi3njhwr/video/upload/v1682097405/podcast/WIN_20210423_00_01_48_Pro.mp4',
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
  const [open, setOpen] = useState(false);
  const [curPodcast, setCurPodcast] = useState();
  const handleOpen = (item) => {
    setOpen(true);
    setCurPodcast(item);
  };
  const handleClose = () => {
    setOpen(false);
    setCurPodcast(undefined);
  };
  return (
    <Container>
      <Stack direction={'column'}>
        <h1>Top 3 Trending</h1>
        <Stack direction={'row'}>
          {trendingPodcasts.map((item) => (
            <Button onClick={() => handleOpen(item)}>
              <Podcast completePodcast={item} />
            </Button>
          ))}
          {curPodcast !== undefined && (
            <Modal open={open} onClose={handleClose}>
              <Box>
                <h1>{curPodcast.name}</h1>
                <p>By {curPodcast.speaker}</p>
                <video
                  autoPlay={true}
                  style={{ width: '10%', height: '10%' }}
                  controls
                  controlsList="nodownload noremoteplayback nofullscreen"
                  disablePictureInPicture
                  disableRemotePlayback
                  src={curPodcast.file.url}
                />
                <Button>Play</Button>
                <Button>Add to Favourites</Button>
                <p>{curPodcast.description}</p>
              </Box>
            </Modal>
          )}
        </Stack>
        <h1>All Podcasts</h1>
        <Stack direction={'row'}></Stack>
      </Stack>
    </Container>
  );
};

export default MainScreen;
