import { Button, Container, Grid, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPodcast } from '../../actions/podcast';
import Podcast from '../Podcast/Podcast';

const Search = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { filteredPodcasts = [], error } =
    useSelector((state) => state.podcast) || {};

  console.log(filteredPodcasts);

  useEffect(() => {
    if (error) {
      dispatch({ type: 'clearErrors' });
    }

    dispatch(getPodcast(keyword, category));
  }, [dispatch, keyword, category, error]);

  const searchSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Container style={{ margin: '0' }}>
      {/* <Stack direction={'row'}> */}
      <Stack direction={'column'}>
        <Button className="buttonSearchName">Search By category</Button>
        <form className="searchBox" onSubmit={searchSubmitHandler}>
          <input
            type="text"
            placeholder="Search a Podcast ..."
            onChange={(e) => setCategory(e.target.value)}
          />
          <input type="submit" value="Search" />
        </form>
        {Array.isArray(filteredPodcasts) &&
          filteredPodcasts.map((podcast, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              {/* <Podcast completePodcast={podcast} />
               */}
              <h1>hello</h1>
            </Grid>
          ))}
      </Stack>
      {/* </Stack> */}
    </Container>
  );
};

export default Search;
