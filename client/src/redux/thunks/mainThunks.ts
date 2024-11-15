import { createAsyncThunk } from '@reduxjs/toolkit';

import { Nullable, Undefinable } from 'types/types';
import {
  CreateReplyDto,
  IGeneralUpdateAndDeleteRequest,
  IRepliesResponseData,
  IUpdateOneReplyRequestData,
} from './types';
import { universalFetch } from 'redux/utils';
import { RequestRESTMethodsEnum } from 'redux/types';
import {
  GET_ALL_REPLIES_URL,
  CREATE_ONE_REPLY_URL,
  UPDATE_ONE_REPLY_URL,
  DELETE_ONE_REPLY_URL,
} from './constants';

export const getAllRepliesAsync = createAsyncThunk(
  'main/replies/get-all',
  async (): Promise<Nullable<IRepliesResponseData>> => {
    const getAllRepliesResponse: Undefinable<Response> = await universalFetch(
      `${GET_ALL_REPLIES_URL}`,
      RequestRESTMethodsEnum.GET,
    );
    if (getAllRepliesResponse) {
      return (await getAllRepliesResponse.json()) as IRepliesResponseData;
    }
    return null;
  },
);

export const createOneReplyAsync = createAsyncThunk(
  'main/replies/create-one',
  async (createOneReplyDto: CreateReplyDto): Promise<Nullable<IRepliesResponseData>> => {
    const createOneReplyResponse: Undefinable<Response> = await universalFetch(
      `${CREATE_ONE_REPLY_URL}`,
      RequestRESTMethodsEnum.POST,
      JSON.stringify(createOneReplyDto),
    );
    if (createOneReplyResponse) {
      return (await createOneReplyResponse.json()) as IRepliesResponseData;
    }
    return null;
  },
);

export const updateOneReplyAsync = createAsyncThunk(
  'main/replies/update-one',
  async (requestData: IUpdateOneReplyRequestData): Promise<Nullable<IRepliesResponseData>> => {
    const { _id, dto: updateOneReplyDto } = requestData;
    const updateOneReplyResponse: Undefinable<Response> = await universalFetch(
      `${UPDATE_ONE_REPLY_URL(_id)}`,
      RequestRESTMethodsEnum.PUT,
      JSON.stringify(updateOneReplyDto),
    );
    if (updateOneReplyResponse) {
      return (await updateOneReplyResponse.json()) as IRepliesResponseData;
    }
    return null;
  },
);

export const deleteOneReplyAsync = createAsyncThunk(
  'main/replies/delete-one',
  async (requestData: IGeneralUpdateAndDeleteRequest): Promise<Nullable<IRepliesResponseData>> => {
    const { _id } = requestData;
    const updateOneReplyResponse: Undefinable<Response> = await universalFetch(
      `${DELETE_ONE_REPLY_URL(_id)}`,
      RequestRESTMethodsEnum.DELETE,
    );
    if (updateOneReplyResponse) {
      return (await updateOneReplyResponse.json()) as IRepliesResponseData;
    }
    return null;
  },
);
