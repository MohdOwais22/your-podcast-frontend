import { Box, Button, Stack } from '@mui/material';
import React from 'react';

const Option = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      style={{ minHeight: '100vh' }}
      bgcolor={'red'}
    >
      <Stack
        flexGrow={1}
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}
      >
        <h1>YOUR PODCAST</h1>
        <Button style={{ margin: '4px' }} variant='outline' color='primary'>Home</Button>
        <Button style={{ margin: '4px' }} variant='outline' color='primary'>Search</Button>
        <Button style={{ margin: '4px' }} variant='outline' color='primary'>Favourites</Button>
      </Stack>
      <Box style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button style={{ margin: 'auto', marginBottom: '8px' }} variant='contained'>Logout</Button>
      </Box>
    </Box>

  )
};

export default Option;