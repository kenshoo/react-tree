export const css = () => ({
  width: "100%",
  height: "35px",
  paddingLeft: "35px",
  border: "1px solid #cfd1d2",
  borderRight: "none",
  borderLeft: "none",
  backgroundColor: "#F8F9FA",

  "&:focus": {
    outline: "none !important"
  },

  "&:active": {
    outline: "none !important"
  }
});

export const searchIconCss = () => ({
  position: "absolute",
  top: "8px",
  left: "8px"
});

export const wrapperCss = () => ({
  position: "relative"
});
