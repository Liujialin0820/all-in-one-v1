import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "./router/index.tsx";
import { fetchChannelAPI } from "./apis/list.ts";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);

fetchChannelAPI().then((res) => {
  console.log(res.data.data.channels);
});
