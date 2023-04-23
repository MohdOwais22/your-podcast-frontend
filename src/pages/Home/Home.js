import React from 'react';
import { Container, Stack } from '@mui/material';
import Sidebar from '../../components/Sidebar/Sidebar';
import MainScreen from '../MainScreen/MainScreen.js';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';

const Home = () => {
  const loading = false;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container style={{ margin: '0', padding: '0' }}>
          <Stack direction={'row'}>
            <Sidebar />
            <Stack direction={'column'}>
              <MainScreen />
            </Stack>
          </Stack>
        </Container>
      )}
    </>
  );
};

export default Home;
