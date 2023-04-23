import { Button, Container, Input, Stack } from '@mui/material';
import React, { useState } from 'react';
import Option from '../../components/Option/Option';
import Navbar from '../../components/Navbar/Navbar';

const Search = () => {
  const [nameSearch, setNameSearch] = useState('');
  const [catSearch, setCatSearch] = useState('');
  return (
    <Container style={{ margin: '0' }}>
      <Stack direction={'row'}>
        <Option />
        <Stack direction={'column'}>
          <Navbar />

          <Input
            className="inputSearchName"
            onChange={(e) => setNameSearch(e.target.value)}
          />
          <Button className="buttonSearchName">Search By Name</Button>
          <Input
            className="inputSearchCategory"
            onChange={(e) => setCatSearch(e.target.value)}
          />
          <Button className="buttonSearchCategory">Search by Category</Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Search;
