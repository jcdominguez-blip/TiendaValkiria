const Item =({nombre,description,precio,boton,imagen}) => {

    return (
<div className="col">
    <div className="card">
    <img src={imagen}className="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{description}</p>
        <h2>{precio}</h2>
        <a className="btn btn-warning envio_gratis" href="#" role="button">{boton}</a>
    </div>
    </div>  
</div>
    )
}

export default Item