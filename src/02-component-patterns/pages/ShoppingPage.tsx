import { ProductButtons, ProductCard, ProductImg, ProductTitle } from '../components';
import '../style/custom-styles.css'

const product = {
    id:'1',
    title: 'Coffee Mug',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {

    return (
        <div >
            <h1>Shopping Page</h1>
            <hr/>
            <div 
                style={{
                        display: 'flex', 
                        flexDirection: 'row', 
                        flexWrap:'wrap'
                    }}>
                    <ProductCard product ={product} className='bg-dark text-white'>
                        <ProductCard.Img className = "custom-image" />
                        <ProductCard.Title className = " text-bold" activeClass = "active"/>
                        <ProductCard.Buttons className ="custom-button"/>
                    </ProductCard>


                    <ProductCard product ={product} className='bg-dark text-white'>
                        <ProductImg className = "custom-image"/>
                        <ProductTitle className = " text-bold" activeClass = "active"/>
                        <ProductButtons className ="custom-button"/>
                    </ProductCard>

                    <ProductCard 
                        product ={product} 
                        style={{
                            backgroundColor: '#70d1f8',
                        }}
                        >
                        <ProductImg style={{
                            boxShadow: '10px 10px 10px rgba(0,0,0,0.2)',
                        }}/>
                        <ProductTitle style={{
                            fontWeight: 'bold',
                        }}/>
                        <ProductButtons style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}/>
                    </ProductCard>
            </div>
        </div>
    )
}
