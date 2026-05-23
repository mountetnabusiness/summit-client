"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var index_exports = {};
__export(index_exports, {
  AppNav: () => AppNav,
  portals: () => portals
});
module.exports = __toCommonJS(index_exports);

// src/portals.config.ts
var portals = [
  { key: "scheduler", label: "Scheduler", url: "https://summitscheduler.app" },
  { key: "clinician", label: "Clinician Portal", url: "https://clinician.summitclient.app" },
  { key: "employee", label: "Employee Portal", url: "https://employee.summitclient.app" },
  { key: "family", label: "Family Portal", url: "https://family.summitclient.app" }
];

// src/AppNav.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function AppNav({ activeKey }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", { style: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px 20px",
    background: "#1A3F5C",
    borderBottom: "1px solid #28B4A6"
  }, children: portals.map((p) => {
    const isActive = p.key === activeKey;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "a",
      {
        href: p.url,
        style: {
          fontSize: "13.5px",
          fontWeight: isActive ? 600 : 400,
          color: isActive ? "#28B4A6" : "#ffffffaa",
          textDecoration: "none",
          padding: "4px 12px",
          borderRadius: "999px",
          background: isActive ? "rgba(40,180,166,0.15)" : "transparent",
          transition: "all 0.15s"
        },
        children: p.label
      },
      p.key
    );
  }) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppNav,
  portals
});
