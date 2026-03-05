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

export { remote__loadShare___mf_0_tanstack_mf_1_react_mf_2_query__loadShare__ as r };
