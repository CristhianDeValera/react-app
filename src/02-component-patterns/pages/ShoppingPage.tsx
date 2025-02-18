import { ProductButtons, ProductCard, ProductImg, ProductTitle } from "../components/ProductCard"


const product = {
    id:'1',
    title: 'Coffee Mug',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {



    return (
        <div>
            <h1>Shopping Page</h1>
            <hr/>
            <div 
                style={{display: 'flex', flexDirection: 'row', flexWrap:'wrap'}}>
                    <ProductCard product ={product}>
                        <ProductImg/>
                        <ProductTitle title={''}/>
                        <ProductButtons counter={0}/>
                    </ProductCard>
            </div>
        </div>
    )
}
 