import axios from "axios";
const articlesApi = axios.create({
  baseURL: "https://alice-nc-news.herokuapp.com/api",
});

export const getArticles = (searchParams) => {
  let queryString = "/articles";

  return articlesApi.get(queryString, { params: searchParams }).then((res) => {
    return res.data;
  });
};

export const getTopics = () => {
  return articlesApi.get("/topics").then((res) => {
    return res.data;
  });
};

export const getArticlebyId = (article_id) => {
  return articlesApi.get(`articles/${article_id}`).then((res) => {
    return res.data;
  });
};
