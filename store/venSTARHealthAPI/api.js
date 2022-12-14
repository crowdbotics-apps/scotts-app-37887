import axios from "axios"
const venSTARHealthAPI = axios.create({
  baseURL: "https://venstar-health-37887.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_reviews_create(payload) {
  return venSTARHealthAPI.post(`/api/v1/reviews/`, payload.data)
}
function api_v1_reviews_list(payload) {
  return venSTARHealthAPI.get(`/api/v1/reviews/`)
}
function api_v1_reviews_partial_update(payload) {
  return venSTARHealthAPI.patch(`/api/v1/reviews/${payload.id}/`, payload.data)
}
function api_v1_reviews_read(payload) {
  return venSTARHealthAPI.get(`/api/v1/reviews/${payload.id}/`)
}
function api_v1_reviews_delete(payload) {
  return venSTARHealthAPI.delete(`/api/v1/reviews/${payload.id}/`)
}
function api_v1_reviews_update(payload) {
  return venSTARHealthAPI.put(`/api/v1/reviews/${payload.id}/`, payload.data)
}
function rest_auth_login_create(payload) {
  return venSTARHealthAPI.post(`/rest-auth/login/`, payload.data)
}
function api_v1_users_create(payload) {
  return venSTARHealthAPI.post(`/api/v1/users/`, payload.data)
}
function api_v1_users_list(payload) {
  return venSTARHealthAPI.get(`/api/v1/users/`)
}
function api_v1_signup_create(payload) {
  return venSTARHealthAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return venSTARHealthAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_registration_create(payload) {
  return venSTARHealthAPI.post(`/rest-auth/registration/`, payload.data)
}
function api_v1_vendors_partial_update(payload) {
  return venSTARHealthAPI.patch(`/api/v1/vendors/${payload.id}/`, payload.data)
}
function api_v1_vendors_read(payload) {
  return venSTARHealthAPI.get(`/api/v1/vendors/${payload.id}/`)
}
function api_v1_vendors_delete(payload) {
  return venSTARHealthAPI.delete(`/api/v1/vendors/${payload.id}/`)
}
function api_v1_vendors_update(payload) {
  return venSTARHealthAPI.put(`/api/v1/vendors/${payload.id}/`, payload.data)
}
function api_v1_service_category_partial_update(payload) {
  return venSTARHealthAPI.patch(
    `/api/v1/service_category/${payload.id}/`,
    payload.data
  )
}
function api_v1_service_category_read(payload) {
  return venSTARHealthAPI.get(`/api/v1/service_category/${payload.id}/`)
}
function api_v1_service_category_delete(payload) {
  return venSTARHealthAPI.delete(`/api/v1/service_category/${payload.id}/`)
}
function api_v1_service_category_update(payload) {
  return venSTARHealthAPI.put(
    `/api/v1/service_category/${payload.id}/`,
    payload.data
  )
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
function api_v1_service_category_create(payload) {
  return venSTARHealthAPI.post(`/api/v1/service_category/`, payload.data)
}
function api_v1_service_category_list(payload) {
  return venSTARHealthAPI.get(`/api/v1/service_category/`)
}
function api_v1_vendors_create(payload) {
  return venSTARHealthAPI.post(`/api/v1/vendors/`, payload.data)
}
function api_v1_vendors_list(payload) {
  return venSTARHealthAPI.get(`/api/v1/vendors/`)
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
function api_v1_users_partial_update(payload) {
  return venSTARHealthAPI.patch(`/api/v1/users/${payload.id}/`, payload.data)
}
function api_v1_users_read(payload) {
  return venSTARHealthAPI.get(`/api/v1/users/${payload.id}/`)
}
function api_v1_users_delete(payload) {
  return venSTARHealthAPI.delete(`/api/v1/users/${payload.id}/`)
}
function api_v1_users_update(payload) {
  return venSTARHealthAPI.put(`/api/v1/users/${payload.id}/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return venSTARHealthAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
export const apiService = {
  api_v1_reviews_create,
  api_v1_reviews_list,
  api_v1_reviews_partial_update,
  api_v1_reviews_read,
  api_v1_reviews_delete,
  api_v1_reviews_update,
  rest_auth_login_create,
  api_v1_users_create,
  api_v1_users_list,
  api_v1_signup_create,
  rest_auth_password_reset_create,
  rest_auth_registration_create,
  api_v1_vendors_partial_update,
  api_v1_vendors_read,
  api_v1_vendors_delete,
  api_v1_vendors_update,
  api_v1_service_category_partial_update,
  api_v1_service_category_read,
  api_v1_service_category_delete,
  api_v1_service_category_update,
  rest_auth_password_change_create,
  rest_auth_logout_create,
  rest_auth_logout_list,
  rest_auth_password_reset_confirm_create,
  api_v1_login_create,
  api_v1_service_category_create,
  api_v1_service_category_list,
  api_v1_vendors_create,
  api_v1_vendors_list,
  rest_auth_user_partial_update,
  rest_auth_user_read,
  rest_auth_user_update,
  api_v1_providers_create,
  api_v1_providers_list,
  api_v1_providers_partial_update,
  api_v1_providers_read,
  api_v1_providers_delete,
  api_v1_providers_update,
  api_v1_users_partial_update,
  api_v1_users_read,
  api_v1_users_delete,
  api_v1_users_update,
  rest_auth_registration_verify_email_create
}
