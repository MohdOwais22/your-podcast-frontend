import { createReducer } from '@reduxjs/toolkit';

export const registerReducer = createReducer({}, (builder) => {
  builder
    .addCase('USER_REGISTER_REQUEST', (state, action) => {
      state.loading = true;
    })
    .addCase('USER_REGISTER_SUCCESS', (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    })
    .addCase('USER_REGISTER_FAIL', (state, action) => {
      state.loading = false;
      state.user = null;
      state.error = action.payload;
    })
    .addCase('REGISTRATION_ERROR', (state, error) => {
      state.user = null;
      state.error = null;
    });
});

export const loginReducer = createReducer({}, (builder) => {
  builder
    .addCase('USER_LOGIN_REQUEST', (state, action) => {
      state.loading = true;
    })
    .addCase('USER_LOGIN_SUCCESS', (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    })
    .addCase('USER_LOGIN_FAIL', (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    })
    .addCase('LOGIN_ERROR', (state, error) => {
      state.error = null;
      state.user = null;
    });
});

export const loadUserReducer = createReducer({}, (builder) => {
  builder
    .addCase('USER_LOAD_REQUEST', (state, action) => {
      state.loading = true;
    })
    .addCase('USER_LOAD_SUCCESS', (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    })
    .addCase('USER_LOAD_FAIL', (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    })
    .addCase('LOAD_USER_ERROR', (state, error) => {
      state.error = null;
      state.user = null;
    });
});
