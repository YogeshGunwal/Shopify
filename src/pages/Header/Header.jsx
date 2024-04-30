/* eslint-disable react/prop-types */

// import { getCategoriesLoader } from "../loaders";
// import Logo from '../../assets/logo.png';
import { NavLink,Link, useLoaderData } from "react-router-dom";
import { Home, Favorite, ShoppingCart, Mail, AccountCircle } from "@mui/icons-material";


import '../../styles/Header.scss';
import { useSelector } from "react-redux";

export default function Header() {
  const categories = useLoaderData();

  const {wishlistProducts, cartProducts} = useSelector(state => state.products);
  
  return (
    <header>
      
      <div>
        {/* <Link to='/' >
          <img src={Logo} alt="Logo" className='logo-image' />
        </Link> */}
        <Link to='/'>
          <Home fontSize="large" />
        </Link>
      </div>

      <div>
        {categories.map(category => (
          <li key={category}>
            <NavLink to={`/category/${category}`}>{category.toUpperCase()}</NavLink>
          </li>
        ))}
      </div>

      <div>        
        <input type="text"  placeholder="Search Items.."/>
      </div>

      <div className='header-icons' >
        <span>
          <AccountCircle fontSize="small"/>
          <NavLink to='/profile'>Profile</NavLink>
        </span>
        <span>
          <div>
            <Favorite fontSize="small" style={{marginRight: '5px'}} />  
            {wishlistProducts.length? wishlistProducts.length : ''}
          </div>
          <NavLink to='/wishlist'>Wishlist</NavLink>
        </span>
        <span>
          <div>
            <ShoppingCart fontSize="small" style={{marginRight: '5px'}} />
            {cartProducts.length? cartProducts.length : ''}
          </div>
          <NavLink to='/cart'>Cart</NavLink>
        </span>
        <span>
          <Mail fontSize="small" />
          <NavLink to='/contact'>Contact</NavLink>
        </span>     
        
      </div>
    </header>      
  )
}