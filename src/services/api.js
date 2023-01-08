import axios from "axios";

const BASE_URL = "https://linkr-api-hhbp.onrender.com";
// const BASE_URL = "http://localhost:4000"; 

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function signInUser(body) {
  const promisse = axios.post(`${BASE_URL}/signin`, body);
  return promisse;
}

function signUpUser(body) {
  const promisse = axios.post(`${BASE_URL}/signup`, body);
  return promisse;
}

function getHashtags() {
  const promise = axios.get(`${BASE_URL}/hashtags`);
  return promise;
}

function getPostsByHashtag(name) {
  const promise = axios.get(`${BASE_URL}/posts/${name}`);
  return promise;
}

function getPosts(token) {
  const config = createConfig(token)
  const promise = axios.get(`${BASE_URL}/posts`, config);
  return promise;
}

function publishForm(postInfo, token) {
  const config = createConfig(token)
  const promisse = axios.post(`${BASE_URL}/posts`, postInfo, config);
  return promisse;
}

function delelePostById(id, token) {
  const config = createConfig(token);
  return axios.delete(`${BASE_URL}/posts/delete/${id}`, config);
}

function getUsersByName(queryString) {
  return axios.get(`${BASE_URL}/users${queryString}`)
}

function editPatchPost(id, body, token) {
  const config = createConfig(token);
  const promisse = axios.patch(`${BASE_URL}/posts/update/${id}`, body, config);
  return promisse;
}

function getPostsByUserId(id) {
  return axios.get(`${BASE_URL}/user/${id}`)
}

function likePost(id,token){
  const config =  createConfig(token)
  const promise =  axios.post(`${BASE_URL}/like/${id}`,{}, config);
  return promise;
}
const api = {
  getHashtags,
  getPostsByHashtag,
  signInUser,
  signUpUser,
  getPosts,
  publishForm,
  editPatchPost,
  delelePostById,
  getUsersByName,
  getPostsByUserId,
  likePost
};

export default api;
