
const Navbar =()=>{
    return  <header className="navbar bg-black">
    <img src={"./logo_positivo.svg"}className="header__logo" width={250} alt="logo"/>
    <div className='header__nav'></div><h3>Deportivo</h3><h3>Casual</h3>
    <div className='btn btn-warning'><a>carrito</a></div>
</header>
}

export default Navbar;