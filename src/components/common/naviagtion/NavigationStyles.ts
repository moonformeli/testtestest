import { style } from "typestyle";

export const containerStyle = style({
  width: "100%",
  height: "50px"
});

export const navigationStyle = style({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "space-evenly",
  $nest: {
    "& li": {
      listStyle: "none",
      textDecoration: "none"
    }
  }
});
