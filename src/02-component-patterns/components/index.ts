import { ProductCardHOCProps } from "../interfaces/interfaces";
import { ProductButtons } from "./ProductButtons";
import { ProductCard as ProductCarHOC } from "./ProductCard";
import { ProductImg } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";

export { ProductButtons } from "./ProductButtons";
export { ProductImg } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

export const ProductCard:ProductCardHOCProps = Object.assign(ProductCarHOC, {
    Img: ProductImg,
    Title: ProductTitle,
    Buttons: ProductButtons

})

export default ProductCard;

