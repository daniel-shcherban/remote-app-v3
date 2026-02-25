import { j as jsxRuntimeExports } from './jsx-runtime-DtXR568w.js';
import { r as remote__mf_v__runtimeInit__mf_v__, a as index_cjs } from './remote__mf_v__runtimeInit__mf_v__-DOo_uYy-.js';

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = remote__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("@tanstack/react-query", {
    customShareInfo: {shareConfig:{
      singleton: false,
      strictVersion: undefined,
      requiredVersion: "^5.90.21"
    }}}));
    const exportModule = await res.then(factory => factory());
    var remote__loadShare___mf_0_tanstack_mf_1_react_mf_2_query__loadShare__ = exportModule;

async function fetchTodos() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  );
  if (!res.ok) throw new Error("Failed to fetch todos");
  return res.json();
}
function Todos() {
  const { data, isLoading, isError } = remote__loadShare___mf_0_tanstack_mf_1_react_mf_2_query__loadShare__.useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    staleTime: Infinity,
    // serve from cache until manually invalidated
    gcTime: 1e3 * 60 * 60
    // keep in memory for 1 hour
  });
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Loading..." });
  if (isError) return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Something went wrong." });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Todos" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: data?.map((todo) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "li",
      {
        style: { textDecoration: todo.completed ? "line-through" : "none" },
        children: todo.title
      },
      todo.id
    )) })
  ] });
}

const todos = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: Todos
}, Symbol.toStringTag, { value: 'Module' }));

export { Todos as T, remote__loadShare___mf_0_tanstack_mf_1_react_mf_2_query__loadShare__ as r, todos as t };
