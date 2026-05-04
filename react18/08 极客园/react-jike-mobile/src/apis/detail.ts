import { http } from '@/utils'

// 1. 定义泛型
type ResType<T> = {
  message: string;
  data: T;
};


export type DetailRes = {
  art_id: string
  title: string
  pubdate: string
  content: string
}

export function fetchDetailAPI(article_id: string) {
  return http.request<ResType<DetailRes>>({
    url: `/articles/${article_id}`,
  })
}