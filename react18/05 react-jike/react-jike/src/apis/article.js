import { http } from "@/utils";

export function getChannelAPI() {
  return http({
    url: "/channels",
    method: "GET",
  });
}

export function createArticleAPI(data) {
  return http({
    url: "/mp/articles?draft=false",
    method: "POST",
    data: data,
  });
}

export function getArticleListAPI(data) {
  return http({
    url: "/mp/articles",
    method: "GET",
    params: data,
  });
}

export function delArticleAPI(id) {
  return http({
    url: `/mp/articles/${id}`,
    method: "DELETE",
  });
}

export function getArticleByIdAPI(id) {
  return http({
    url: `/mp/articles/${id}`,
    method: "GET",
  });
}

