import styles from '../style/styles.module.css';
import { createContext, CSSProperties, ReactElement} from 'react';
import { useProduct } from '../hooks/useProduct';
import { Product, productContextProps } from '../interfaces/interfaces';



export const productContext = createContext({} as productContextProps);
const {Provider} = productContext;

export interface Props{
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
}

export const ProductCard = ({ product, children, className, style }:Props) => {

    const {counter, increaseBy} = useProduct()

    return (
        <Provider value={{
            counter,
            product,
            increaseBy,
            
        }}>
            <div 
                className={`${styles.productCard} ${className}`}
                style={style}
                >
                {children}
            </div>
        </Provider>
    )
}
