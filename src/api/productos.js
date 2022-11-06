const product = [
    {
        nombre:"Calzas camo RX23",
        description:"Tig es un nuevo producto para Mujer de adidas. Te invitamos a ver las imágenes para apreciar más detalles desde diferentes ángulos. Si ya conocés W Tig podés dejar una reseña abajo; siempre nos encanta conocer tu opinión.",    
        precio: "$2300",
        boton:"comprar",
        imagen:"https://d368r8jqz0fwvm.cloudfront.net/32857-product_lg/calza-de-mujer-joyce.jpg",
        id:0
    },
    {
        nombre:"Calzas Evo I",
        description:"Tig es un nuevo producto para Mujer de adidas. Te invitamos a ver las imágenes para apreciar más detalles desde diferentes ángulos. Si ya conocés W Tig podés dejar una reseña abajo; siempre nos encanta conocer tu opinión.",    
        precio: "$2300",
        boton:"comprar",
        imagen:"https://d368r8jqz0fwvm.cloudfront.net/32857-product_lg/calza-de-mujer-joyce.jpg",
        id:1
    },

    {
        nombre:"Calzas Evo I",
        description:"Tig es un nuevo producto para Mujer de adidas. Te invitamos a ver las imágenes para apreciar más detalles desde diferentes ángulos. Si ya conocés W Tig podés dejar una reseña abajo; siempre nos encanta conocer tu opinión.",    
        precio: "$2300",
        boton:"comprar",
        imagen:"https://d368r8jqz0fwvm.cloudfront.net/32857-product_lg/calza-de-mujer-joyce.jpg",
        id:2
    },


];

export const getProduct = () =>
    new Promise ((res, rej) => {
        setTimeout(() => {
            res(product);
        },3000);
    });