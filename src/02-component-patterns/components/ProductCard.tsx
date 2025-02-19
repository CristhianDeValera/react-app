import styles from '../style/styles.module.css';
import { createContext, useContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ProductCardProps, productContextProps } from '../interfaces/interfaces';



export const productContext = createContext({} as productContextProps);
const {Provider} = productContext;




// interface ProductButtonsProps{
//     increaseBy: (value: number) => void;
//     counter: number;
// }



// export const ProductButtons = ({increaseBy, counter}:ProductButtonsProps) => {


export const ProductCard = ({ product, children }:ProductCardProps) => {

    const {counter, increaseBy} = useProduct()

    return (
        <Provider value={{
            counter,
            product,
            increaseBy,
            
        }}>
            <div className={styles.productCard}>
                {/* <ProductImg img={product.img}/>
                <ProductTitle title={product.title}/>
                <ProductButtons increaseBy={increaseBy} counter={counter}/> */}
                {children}
            </div>
        </Provider>
    )
}
