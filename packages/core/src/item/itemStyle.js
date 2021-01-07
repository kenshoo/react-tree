export const css = props => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
  height: props.searchTerm !== "" ? "50px" : "30px",
  marginTop: "3px",
  padding: "0 6px",
  fontSize: "14px",

  "&:hover": {
    backgroundColor: "#ECEEF3"
  },

  "&:active": {
    backgroundColor: "#E1E4EB"
  }
});

export const forwardIconCss = () => ({});

export const selectedItem = props => ({
  fontWeight: props.isSelected ? 600 : 400
});
