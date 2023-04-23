import { Box, Button, Modal, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Podcast.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { updatePodcastViews } from '../../actions/podcast';
import { addPodcastToFavorite } from '../../actions/user';
import { toast } from 'react-hot-toast';

const Podcast = ({ completePodcast }) => {
  const [open, setOpen] = useState(false);

  const { error, message } = useSelector((state) => state.podcast);

  useEffect(() => {
    if (error) {
      toast.success(error);
    }
    dispatch({ type: 'clearError' });
  }, [error, message]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updatePodcastViews(completePodcast._id));
  }, [dispatch]);

  const addToFavourite = async () => {
    try {
      await dispatch(addPodcastToFavorite(completePodcast._id));
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      <Box className="podcast-box" onClick={handleOpen}>
        <div className="box-container">
          <Typography variant="h4">{completePodcast.name}</Typography>
          <Typography variant="body1">{completePodcast.category}</Typography>
          <Typography variant="body1">{completePodcast.type}</Typography>
          <Typography variant="body1">{completePodcast.speaker}</Typography>
          <Typography variant="body1">{completePodcast.views}</Typography>
        </div>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            borderRadius: '16px',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h5">{completePodcast.name}</Typography>
          <Typography variant="body1">By {completePodcast.speaker}</Typography>
          <video
            autoPlay
            style={{ width: '100%', height: 'auto' }}
            controls
            controlsList="nodownload noremoteplayback nofullscreen"
            disablePictureInPicture
            disableRemotePlayback
            src={completePodcast.file.url}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: '16px',
            }}
          >
            {/* <Button
              variant="outlined"
              style={{
                marginBottom: '5px',
                backgroundColor: '#fff',
                color: '#000',
              }}
            >
              Play
            </Button> */}
            <Button
              variant="outlined"
              style={{
                marginBottom: '5px',
                backgroundColor: '#fff',
                color: '#000',
              }}
              startIcon={<FavoriteIcon />}
              onClick={addToFavourite}
            >
              Add to Favourites
            </Button>
          </div>
          <Typography variant="body1" style={{ marginTop: '16px' }}>
            {completePodcast.description}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Podcast;
