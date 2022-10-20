
import Item from "./Item";
const AppContainer = () => {

  //toda logica de peticion
    return   <div className='conteiner'>   
    
    
    <div className='products row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
    
    
    
        <div class="col">
            <Item imagen="https://d368r8jqz0fwvm.cloudfront.net/32857-product_lg/calza-de-mujer-joyce.jpg"
            nombre="Calzas camo RX23"
            description="W Tig es un nuevo producto para Mujer de adidas. Te invitamos a ver las imágenes para apreciar más detalles desde diferentes ángulos. Si ya conocés W Tig podés dejar una reseña abajo; siempre nos encanta conocer tu opinión."
            precio="$2300"
            boton="Comprar"  
            />  
        </div>

        

        <div className="col">
            <Item imagen="https://d368r8jqz0fwvm.cloudfront.net/17277-product_lg/calza-de-mujer-spy.jpg"
            nombre="Calzas camo RX23"
            description="W Tig es un nuevo producto para Mujer de adidas. Te invitamos a ver las imágenes para apreciar más detalles desde diferentes ángulos. Si ya conocés W Tig podés dejar una reseña abajo; siempre nos encanta conocer tu opinión."
            precio="$4300"
            boton="Comprar"  
        />     
        </div>


        <div className="col">
            <Item imagen="https://d368r8jqz0fwvm.cloudfront.net/24381-product_lg/calza-de-mujer-balance.jpg"
            nombre="Calzas camo RX23"
            description="W Tig es un nuevo producto para Mujer de adidas. Te invitamos a ver las imágenes para apreciar más detalles desde diferentes ángulos. Si ya conocés W Tig podés dejar una reseña abajo; siempre nos encanta conocer tu opinión."
            precio="$6300"
            boton="Comprar"  
        />

        </div>  
    </div>
</div>

} 

export default AppContainer;