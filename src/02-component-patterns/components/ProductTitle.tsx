import { CSSProperties, useContext } from "react";
import styles from '../style/styles.module.css';
import { productContext } from "./ProductCard";


export interface Props{
    className?: string;
    title?: string;
    activeClass?: string;
    style?: CSSProperties;
}

export const ProductTitle = ({title, className, style}: Props) => {

    const {product} = useContext(productContext);

    return(
        <span 
            className={`${styles.productTitle} ${className}`}
            style={style}
            >
            {title? title : product.title}
        </span>
    )
} 