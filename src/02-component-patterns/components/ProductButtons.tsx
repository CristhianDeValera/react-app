import { CSSProperties, useContext } from "react";
import styles from '../style/styles.module.css';
import { productContext } from "./ProductCard";

export interface Props{
    className?: string;
    style?: CSSProperties;
}


export const ProductButtons = ({className, style}: Props) => {

    const {increaseBy, counter} = useContext(productContext);
    return(
        <div 
            className={`${styles.productButtons} ${className}`}
            style={style}
            >
            <button 
                className={styles.buttonMinus}
                onClick={() => increaseBy(-1)}>-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button 
                className={styles.buttonAdd}
                onClick={() => increaseBy(1)}
                >+
            </button>
        </div>
    )
}