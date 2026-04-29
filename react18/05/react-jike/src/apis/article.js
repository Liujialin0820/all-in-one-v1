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
