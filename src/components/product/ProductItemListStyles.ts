import { style } from "typestyle";

export const cardStyle = style({
  width: "200px",
  height: "270px",
  border: "1px solid red"
});

export const imgStyle = style({
  width: "100%",
  height: "150px"
});

export const captionStyle = style({
  fontSize: "12px",
  lineHeight: 1.34
});

export const priceStyle = style({
  color: "#f27935",
  fontSize: "15px",
  fontWeight: "bold"
});

export const wishListBtnStyle = style({
  width: "30px",
  // height: "20px",
  padding: "5px",
  textAlign: "center",
  display: "block",
  position: "relative",
  left: "50%",
  transform: "translateX(-50%)"
});

export const available = style({
  background: "#D1ECF1",
  color: "#0c5460"
});

export const notAvailable = style({
  opacity: 0.5,
  background: "#f8d7da",
  color: "#721c24",
  $nest: {
    "&:hover": {
      cursor: "not-allowed"
    }
  }
});
