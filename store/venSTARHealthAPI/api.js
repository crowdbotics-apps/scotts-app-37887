import axios from "axios"
const venSTARHealthAPI = axios.create({
  baseURL: "https://scotts-app-37887.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function rest_auth_login_create(payload) {
  return venSTARHealthAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return venSTARHealthAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_logout_create(payload) {
  return venSTARHealthAPI.post(`/rest-auth/logout/`)
}
function rest_auth_logout_list(payload) {
  return venSTARHealthAPI.get(`/rest-auth/logout/`)
}
function rest_auth_password_reset_confirm_create(payload) {
  return venSTARHealthAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload.data
  )
}
function api_v1_login_create(payload) {
  return venSTARHealthAPI.post(`/api/v1/login/`)
}
function api_v1_signup_create(payload) {
  return venSTARHealthAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return venSTARHealthAPI.patch(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_read(payload) {
  return venSTARHealthAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return venSTARHealthAPI.put(`/rest-auth/user/`, payload.data)
}
function api_v1_providers_create(payload) {
  return venSTARHealthAPI.post(`/api/v1/providers/`, payload.data)
}
function api_v1_providers_list(payload) {
  return venSTARHealthAPI.get(`/api/v1/providers/`)
}
function api_v1_providers_partial_update(payload) {
  return venSTARHealthAPI.patch(
    `/api/v1/providers/${payload.id}/`,
    payload.data
  )
}
function api_v1_providers_read(payload) {
  return venSTARHealthAPI.get(`/api/v1/providers/${payload.id}/`)
}
function api_v1_providers_delete(payload) {
  return venSTARHealthAPI.delete(`/api/v1/providers/${payload.id}/`)
}
function api_v1_providers_update(payload) {
  return venSTARHealthAPI.put(`/api/v1/providers/${payload.id}/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return venSTARHealthAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
function rest_auth_password_reset_create(payload) {
  return venSTARHealthAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_registration_create(payload) {
  return venSTARHealthAPI.post(`/rest-auth/registration/`, payload.data)
}
export const apiService = {
  rest_auth_login_create,
  rest_auth_password_change_create,
  rest_auth_logout_create,
  rest_auth_logout_list,
  rest_auth_password_reset_confirm_create,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_user_partial_update,
  rest_auth_user_read,
  rest_auth_user_update,
  api_v1_providers_create,
  api_v1_providers_list,
  api_v1_providers_partial_update,
  api_v1_providers_read,
  api_v1_providers_delete,
  api_v1_providers_update,
  rest_auth_registration_verify_email_create,
  rest_auth_password_reset_create,
  rest_auth_registration_create
}
