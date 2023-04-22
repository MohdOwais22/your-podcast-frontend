import React from 'react';
import Loader from '../../components/Loader/Loader';

const Home = () => {
  const loading = true;
  return <>{loading ? <Loader /> : <div>Home</div>}</>;
};

export default Home;
