import { r as remote__mf_v__runtimeInit__mf_v__, a as index_cjs } from './remote__mf_v__runtimeInit__mf_v__-DOo_uYy-.js';
import { r as remote__loadShare__react__loadShare__ } from './remote__loadShare__react__loadShare__-BCX567UT.js';
import { r as remote__loadShare___mf_0_tanstack_mf_1_react_mf_2_query__loadShare__ } from './remote__loadShare___mf_0_tanstack_mf_1_react_mf_2_query__loadShare__-DQ2XyYjM.js';
import { j as jsxRuntimeExports } from './jsx-runtime-DtXR568w.js';
import './_commonjsHelpers-B85MJLTf.js';

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = remote__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("@tanstack/query-persist-client-core", {
    customShareInfo: {shareConfig:{
      singleton: false,
      strictVersion: undefined,
      requiredVersion: "^5.92.1"
    }}}));
    const exportModule = await res.then(factory => factory());
    var remote__loadShare___mf_0_tanstack_mf_1_query_mf_2_persist_mf_2_client_mf_2_core__loadShare__ = exportModule;

var PersistQueryClientProvider = ({
  children,
  persistOptions,
  onSuccess,
  onError,
  ...props
}) => {
  const [isRestoring, setIsRestoring] = remote__loadShare__react__loadShare__.useState(true);
  const refs = remote__loadShare__react__loadShare__.useRef({ persistOptions, onSuccess, onError });
  const didRestore = remote__loadShare__react__loadShare__.useRef(false);
  remote__loadShare__react__loadShare__.useEffect(() => {
    refs.current = { persistOptions, onSuccess, onError };
  });
  remote__loadShare__react__loadShare__.useEffect(() => {
    const options = {
      ...refs.current.persistOptions,
      queryClient: props.client
    };
    if (!didRestore.current) {
      didRestore.current = true;
      remote__loadShare___mf_0_tanstack_mf_1_query_mf_2_persist_mf_2_client_mf_2_core__loadShare__.persistQueryClientRestore(options).then(() => refs.current.onSuccess?.()).catch(() => refs.current.onError?.()).finally(() => {
        setIsRestoring(false);
      });
    }
    return isRestoring ? void 0 : remote__loadShare___mf_0_tanstack_mf_1_query_mf_2_persist_mf_2_client_mf_2_core__loadShare__.persistQueryClientSubscribe(options);
  }, [props.client, isRestoring]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(remote__loadShare___mf_0_tanstack_mf_1_react_mf_2_query__loadShare__.QueryClientProvider, { ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx(remote__loadShare___mf_0_tanstack_mf_1_react_mf_2_query__loadShare__.IsRestoringProvider, { value: isRestoring, children }) });
};

export { PersistQueryClientProvider };
