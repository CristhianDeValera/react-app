import { ProductButtons, ProductCard, ProductImg, ProductTitle } from '../components';


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
                style={{
                        display: 'flex', 
                        flexDirection: 'row', 
                        flexWrap:'wrap'
                    }}>
                    {/* <ProductCard product ={product}>
                        <ProductCard.Img/>
                        <ProductCard.Title title = {''}/>
                        <ProductCard.Buttons counter={0} increaseBy={function (value: number): void {
                        throw new Error("Function not implemented. ")
                    } }/>
                    </ProductCard> */}
                    <ProductCard product ={product}>
                        <ProductCard.Img/>
                        <ProductCard.Title title = {''}/>
                        <ProductCard.Buttons />
                    </ProductCard>


                    <ProductCard product ={product}>
                        <ProductImg/>
                        <ProductTitle title = {''}/>
                        <ProductButtons/>
                    </ProductCard>
            </div>
        </div>
    )
}
 