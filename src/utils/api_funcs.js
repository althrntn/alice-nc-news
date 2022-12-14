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

export const incVotes = (article_id, hasVoted) => {
  let body = { inc_votes: 1 };
  if (hasVoted) {
    body.inc_votes = -1;
  }
  return articlesApi.patch(`articles/${article_id}`, body).then((res) => {
    return res.data;
  });
};

export const getCommentsForArticle = (article_id) => {
  return articlesApi.get(`articles/${article_id}/comments`).then((res) => {
    return res.data;
  });
};

export const postCommentForArticle = (article_id, comment) => {
  return articlesApi
    .post(`articles/${article_id}/comments`, comment)
    .then((res) => {
      return res.data;
    });
};

export const deleteComment = (comment_id) => {
  return articlesApi.delete(`comments/${comment_id}`).then((res) => {
    return res.data;
  });
};
export const getUsers = () => {
  return articlesApi.get("/users").then((res) => {
    return res.data;
  });
};
