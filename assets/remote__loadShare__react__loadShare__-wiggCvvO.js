import { r as remote__mf_v__runtimeInit__mf_v__, a as index_cjs } from './remote__mf_v__runtimeInit__mf_v__-DOo_uYy-.js';

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = remote__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("react", {
    customShareInfo: {shareConfig:{
      singleton: false,
      strictVersion: undefined,
      requiredVersion: "^19.2.0"
    }}}));
    const exportModule = await res.then(factory => factory());
    var remote__loadShare__react__loadShare__ = exportModule;

export { remote__loadShare__react__loadShare__ as r };
