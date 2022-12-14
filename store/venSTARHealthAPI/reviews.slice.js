import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_reviews_create = createAsyncThunk(
  "reviews/api_v1_reviews_create",
  async payload => {
    const response = await apiService.api_v1_reviews_create(payload)
    return response.data
  }
)
export const api_v1_reviews_list = createAsyncThunk(
  "reviews/api_v1_reviews_list",
  async payload => {
    const response = await apiService.api_v1_reviews_list(payload)
    return response.data
  }
)
export const api_v1_reviews_partial_update = createAsyncThunk(
  "reviews/api_v1_reviews_partial_update",
  async payload => {
    const response = await apiService.api_v1_reviews_partial_update(payload)
    return response.data
  }
)
export const api_v1_reviews_read = createAsyncThunk(
  "reviews/api_v1_reviews_read",
  async payload => {
    const response = await apiService.api_v1_reviews_read(payload)
    return response.data
  }
)
export const api_v1_reviews_delete = createAsyncThunk(
  "reviews/api_v1_reviews_delete",
  async payload => {
    const response = await apiService.api_v1_reviews_delete(payload)
    return response.data
  }
)
export const api_v1_reviews_update = createAsyncThunk(
  "reviews/api_v1_reviews_update",
  async payload => {
    const response = await apiService.api_v1_reviews_update(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_reviews_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_reviews_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_reviews_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_reviews_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_reviews_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_reviews_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_reviews_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_reviews_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_reviews_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_reviews_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_reviews_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_reviews_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_reviews_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_reviews_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_reviews_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_reviews_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_reviews_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_reviews_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_reviews_create,
  api_v1_reviews_list,
  api_v1_reviews_partial_update,
  api_v1_reviews_read,
  api_v1_reviews_delete,
  api_v1_reviews_update,
  slice: reviewsSlice
}
