import { createReducer } from '@reduxjs/toolkit';

export const podcastReducer = createReducer({}, (builder) => {
  builder
    .addCase('USER_LOGIN_REQUEST', (state) => {
      state.loading = true;
    })
    .addCase('USER_LOAD_REQUEST', (state) => {
      state.loading = true;
    })
    .addCase('logoutRequest', (state) => {
      state.loading = true;
    })
    .addCase('UPLOAD_PODCAST_REQUEST', (state) => {
      state.loading = true;
    });
  builder
    .addCase('USER_LOGIN_SUCCESS', (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.message = action.payload;
    })
    .addCase('USER_LOAD_SUCCESS', (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    })
    .addCase('logoutSuccess', (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.message = action.payload;
      state.user = null;
    })
    .addCase('UPLOAD_PODCAST_SUCCESS', (state, action) => {
      state.loading = false;
      state.podcast = action.payload;
      state.message = action.payload;
    });
  builder
    .addCase('USER_LOGIN_FAIL', (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    .addCase('USER_LOAD_FAIL', (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    .addCase('logoutFail', (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.error = action.payload;
    })
    .addCase('UPLOAD_PODCAST_FAIL', (state, action) => {
      state.loading = false;
      state.podcast = null;
      state.error = action.payload;
    });

  builder.addCase('clearError', (state) => {
    state.error = null;
  });
  builder.addCase('clearMessage', (state) => {
    state.message = null;
  });
});
