import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_providers_create = createAsyncThunk(
  "providers/api_v1_providers_create",
  async payload => {
    const response = await apiService.api_v1_providers_create(payload)
    return response.data
  }
)
export const api_v1_providers_list = createAsyncThunk(
  "providers/api_v1_providers_list",
  async payload => {
    const response = await apiService.api_v1_providers_list(payload)
    return response.data
  }
)
export const api_v1_providers_partial_update = createAsyncThunk(
  "providers/api_v1_providers_partial_update",
  async payload => {
    const response = await apiService.api_v1_providers_partial_update(payload)
    return response.data
  }
)
export const api_v1_providers_read = createAsyncThunk(
  "providers/api_v1_providers_read",
  async payload => {
    const response = await apiService.api_v1_providers_read(payload)
    return response.data
  }
)
export const api_v1_providers_delete = createAsyncThunk(
  "providers/api_v1_providers_delete",
  async payload => {
    const response = await apiService.api_v1_providers_delete(payload)
    return response.data
  }
)
export const api_v1_providers_update = createAsyncThunk(
  "providers/api_v1_providers_update",
  async payload => {
    const response = await apiService.api_v1_providers_update(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const providersSlice = createSlice({
  name: "providers",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_providers_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_providers_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_providers_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_providers_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_providers_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_providers_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_providers_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_providers_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_providers_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_providers_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_providers_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_providers_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_providers_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_providers_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_providers_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_providers_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_providers_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_providers_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_providers_create,
  api_v1_providers_list,
  api_v1_providers_partial_update,
  api_v1_providers_read,
  api_v1_providers_delete,
  api_v1_providers_update,
  slice: providersSlice
}
