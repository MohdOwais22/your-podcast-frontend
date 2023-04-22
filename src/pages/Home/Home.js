import React from 'react';
// import Loader from '../../components/Loader/Loader';
import { Container, Stack } from '@mui/material';
import Option from '../../components/Option/Option';
import Navbar from '../../components/Navbar/Navbar';
import DisplayScreen from '../DisplayScreen/MainScreen';

const Home = () => {
  // const loading = true;
  // return <>{loading ? <Loader /> : <div>Home</div>}</>;
  return (
    <Container style={{ margin: '0' }}>
      <Stack direction={'row'}>
        <Option />
        <Stack direction={'column'}>
          <Navbar />
          <DisplayScreen />
        </Stack>
      </Stack>
    </Container>
  );
};

export default Home;
