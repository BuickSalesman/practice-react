export const sideMenu = [
  { label: "Home", to: "/" },
  {
    label: "Profile",
    to: "/profile",
    children: [{ label: "Details", to: "details", children: [{ label: "Location", to: "location" }] }],
  },
];
