import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { MAIN_SLICE_INITIAL_STATE } from './initialState';
import { IMainState } from './types';
import { IReply, ISystemMessageData, Nullable } from 'types/types';
import {
  createOneReplyAsync,
  deleteOneReplyAsync,
  getAllRepliesAsync,
  updateOneReplyAsync,
} from 'redux/thunks/mainThunks';
import { updateState } from './utils';

export const mainSlice = createSlice({
  name: 'main',
  initialState: MAIN_SLICE_INITIAL_STATE,
  reducers: {
    setReplies(state: IMainState, { payload }: PayloadAction<Array<IReply>>) {
      state.replies = payload;
    },
    setSystemMessage(state: IMainState, { payload }: PayloadAction<ISystemMessageData>) {
      state.systemMessage = payload;
    },
    setIsModalWindowOpenedForCreation(state: IMainState, { payload }: PayloadAction<boolean>) {
      state.isModalWindowOpenedForCreation = payload;
    },
    setCurrentlyEditingReply(state: IMainState, { payload }: PayloadAction<Nullable<IReply>>) {
      state.currentlyEditingReply = payload;
    },
    setNewReplyData(state: IMainState, { payload }: PayloadAction<Nullable<IReply>>) {
      state.newReplyData = payload;
    },
    setIsNewReplyStatusSelected(state: IMainState, { payload }: PayloadAction<boolean>) {
      state.isNewReplyStatusSelected = payload;
    },
    setValidationErrorMessage(state: IMainState, { payload }: PayloadAction<string>) {
      state.validationErrorMessage = payload;
    },
  },
  extraReducers(builder) {
    builder
      // get all replies data
      .addCase(getAllRepliesAsync.pending, (state) => {
        state.requestStatus = 'loading';
      })
      .addCase(getAllRepliesAsync.fulfilled, (state, { payload }) => {
        state.requestStatus = 'idle';
        payload && updateState(state, payload);
      })
      .addCase(getAllRepliesAsync.rejected, (state, { error }) => {
        state.requestStatus = 'failed';
        console.error('\x1b[40m\x1b[31m\x1b[1m', error.message);
      })
      // create one reply
      .addCase(createOneReplyAsync.pending, (state) => {
        state.requestStatus = 'loading';
      })
      .addCase(createOneReplyAsync.fulfilled, (state, { payload }) => {
        state.requestStatus = 'idle';
        payload && updateState(state, payload);
      })
      .addCase(createOneReplyAsync.rejected, (state, { error }) => {
        state.requestStatus = 'failed';
        console.error('\x1b[40m\x1b[31m\x1b[1m', error.message);
      })
      // update one reply
      .addCase(updateOneReplyAsync.pending, (state) => {
        state.requestStatus = 'loading';
      })
      .addCase(updateOneReplyAsync.fulfilled, (state, { payload }) => {
        state.requestStatus = 'idle';
        payload && updateState(state, payload);
      })
      .addCase(updateOneReplyAsync.rejected, (state, { error }) => {
        state.requestStatus = 'failed';
        console.error('\x1b[40m\x1b[31m\x1b[1m', error.message);
      })
      // delete one reply
      .addCase(deleteOneReplyAsync.pending, (state) => {
        state.requestStatus = 'loading';
      })
      .addCase(deleteOneReplyAsync.fulfilled, (state, { payload }) => {
        state.requestStatus = 'idle';
        payload && updateState(state, payload);
      })
      .addCase(deleteOneReplyAsync.rejected, (state, { error }) => {
        state.requestStatus = 'failed';
        console.error('\x1b[40m\x1b[31m\x1b[1m', error.message);
      });
  },
});

export const { reducer } = mainSlice;
