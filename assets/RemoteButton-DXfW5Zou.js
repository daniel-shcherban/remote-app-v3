import { j as jsxRuntimeExports } from './jsx-runtime-DtXR568w.js';
import { r as remote__loadShare__react__loadShare__ } from './remote__loadShare__react__loadShare__-DvOLxNJD.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './remote__mf_v__runtimeInit__mf_v__-DOo_uYy-.js';

function RemoteButton() {
  const [count, setCount] = remote__loadShare__react__loadShare__.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setCount(count + 1), children: [
    "Remote Button - ",
    count
  ] });
}

export { RemoteButton as default };
