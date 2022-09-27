import axios from "axios";
const articlesApi = axios.create({
  baseURL: "https://alice-nc-news.herokuapp.com/api",
});

export const getArticles = (topicName) => {
  let queryString = "/articles";
  if (topicName) {
    queryString += `?topic=${topicName}`;
  }
  return articlesApi.get(queryString).then((res) => {
    return res.data;
  });
};

export const getTopics = () => {
  return articlesApi.get("/topics").then((res) => {
    return res.data;
  });
};
