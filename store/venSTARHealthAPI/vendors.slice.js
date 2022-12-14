import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_vendors_partial_update = createAsyncThunk(
  "vendors/api_v1_vendors_partial_update",
  async payload => {
    const response = await apiService.api_v1_vendors_partial_update(payload)
    return response.data
  }
)
export const api_v1_vendors_read = createAsyncThunk(
  "vendors/api_v1_vendors_read",
  async payload => {
    const response = await apiService.api_v1_vendors_read(payload)
    return response.data
  }
)
export const api_v1_vendors_delete = createAsyncThunk(
  "vendors/api_v1_vendors_delete",
  async payload => {
    const response = await apiService.api_v1_vendors_delete(payload)
    return response.data
  }
)
export const api_v1_vendors_update = createAsyncThunk(
  "vendors/api_v1_vendors_update",
  async payload => {
    const response = await apiService.api_v1_vendors_update(payload)
    return response.data
  }
)
export const api_v1_vendors_create = createAsyncThunk(
  "vendors/api_v1_vendors_create",
  async payload => {
    const response = await apiService.api_v1_vendors_create(payload)
    return response.data
  }
)
export const api_v1_vendors_list = createAsyncThunk(
  "vendors/api_v1_vendors_list",
  async payload => {
    const response = await apiService.api_v1_vendors_list(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const vendorsSlice = createSlice({
  name: "vendors",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_vendors_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vendors_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vendors_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vendors_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vendors_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_vendors_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vendors_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vendors_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vendors_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vendors_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vendors_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vendors_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vendors_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vendors_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_vendors_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vendors_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vendors_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_vendors_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_vendors_partial_update,
  api_v1_vendors_read,
  api_v1_vendors_delete,
  api_v1_vendors_update,
  api_v1_vendors_create,
  api_v1_vendors_list,
  slice: vendorsSlice
}
