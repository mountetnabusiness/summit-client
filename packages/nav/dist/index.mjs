// src/portals.config.ts
var portals = [
  { key: "scheduler", label: "Scheduler", url: "https://summitscheduler.app" },
  { key: "clinician", label: "Clinician Portal", url: "https://clinician.summitclient.app" },
  { key: "employee", label: "Employee Portal", url: "https://employee.summitclient.app" },
  { key: "family", label: "Family Portal", url: "https://family.summitclient.app" }
];

// src/AppNav.tsx
import { jsx } from "react/jsx-runtime";
function AppNav({ activeKey }) {
  return /* @__PURE__ */ jsx("nav", { style: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px 20px",
    background: "#1A3F5C",
    borderBottom: "1px solid #28B4A6"
  }, children: portals.map((p) => {
    const isActive = p.key === activeKey;
    return /* @__PURE__ */ jsx(
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
export {
  AppNav,
  portals
};
