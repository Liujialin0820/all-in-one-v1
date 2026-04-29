import { http } from "@/utils";

export function loginAPI(formData) {
  return http({
    url: "/authorizations",
    method: "POST",
    data: formData,
  });
}

export function getProfileAPI() {
  return http({
    url: "/user/profile",
    method: "GET",
  });
}

