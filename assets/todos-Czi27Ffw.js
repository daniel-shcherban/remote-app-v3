import { j as jsxRuntimeExports } from './jsx-runtime-DtXR568w.js';
import { r as remote__loadShare___mf_0_tanstack_mf_1_react_mf_2_query__loadShare__ } from './remote__loadShare___mf_0_tanstack_mf_1_react_mf_2_query__loadShare__-DQ2XyYjM.js';
import { r as remote__loadShare__react__loadShare__ } from './remote__loadShare__react__loadShare__-BCX567UT.js';
import './remote__mf_v__runtimeInit__mf_v__-DOo_uYy-.js';
import './_commonjsHelpers-B85MJLTf.js';

const BASE = "https://jsonplaceholder.typicode.com";
async function fetchTodos() {
  const res = await fetch(`${BASE}/todos?_limit=10`);
  if (!res.ok) throw new Error("Failed to fetch todos");
  return res.json();
}
async function fetchPosts() {
  const res = await fetch(`${BASE}/posts?_limit=5`);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}
function Todos() {
  const [onlineStatus, setOnlineStatus] = remote__loadShare__react__loadShare__.useState(navigator.onLine);
  console.log("onlineStatus", onlineStatus);
  remote__loadShare__react__loadShare__.useEffect(() => {
    window.addEventListener("offline", () => {
      console.log("offline");
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      console.log("online");
      setOnlineStatus(true);
    });
    return () => {
      window.removeEventListener("offline", () => {
        setOnlineStatus(false);
      });
      window.removeEventListener("online", () => {
        setOnlineStatus(true);
      });
    };
  }, []);
  const todos = remote__loadShare___mf_0_tanstack_mf_1_react_mf_2_query__loadShare__.useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    enabled: onlineStatus
  });
  const posts = remote__loadShare___mf_0_tanstack_mf_1_react_mf_2_query__loadShare__.useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    enabled: onlineStatus
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Todos" }),
    todos.isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Loading todos..." }),
    todos.isError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Failed to load todos." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: todos.data?.map((todo) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "li",
      {
        style: { textDecoration: todo.completed ? "line-through" : "none" },
        children: todo.title
      },
      todo.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Posts" }),
    posts.isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Loading posts..." }),
    posts.isError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Failed to load posts." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: posts.data?.map((post) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: post.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: post.body })
    ] }, post.id)) })
  ] });
}

export { Todos as default };
