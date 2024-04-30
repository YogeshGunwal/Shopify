import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import RootLayout from './layouts/RootLayout';
import {getCategoriesLoader} from './loaders';
import { fetchProducts } from './features/products/productsSlice';

import Home from './pages/Home/Home';
import Category from './pages/Category/Category';
import ErrorHomePage from './pages/Error/ErrorHomePage';
import DisplayProductDetails from './pages/Display/DisplayProductDetails';
import Profile from './pages/Profile/Profile';
import ProfileSurveyJs from './pages/Profile/ProfileSurveyJs';
import ProfileFinalForm from './pages/Profile/ProfileFinalForm';
import Wishlist from './pages/Wishlist/Wishlist';
import Cart from './pages/Cart/Cart';
import Contact from './pages/Contact/Contact';
import FeedBack from './pages/Contact/FeedBack';
import Cities from './pages/Cities/Cities';


const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} loader={getCategoriesLoader} errorElement={<ErrorHomePage />} >

      <Route path="/" element={<Home />} />

      <Route path='/category' >
        <Route path=':category' element = {<Category />} />
      </Route>

      <Route path='/products'>
        <Route path=':productId' element={<DisplayProductDetails />} />
      </Route>

      <Route path='/profile' element={<ProfileFinalForm />} />

      <Route path='/wishlist' element={<Wishlist />} />

      <Route path='/cart' element={<Cart />} />

      <Route path='/contact' element={<Contact />} />
         
      <Route path='/feedback' element={<FeedBack />} />

      <Route path='/cities' element={<Cities />} />
    </Route>
  )
)

export default function App() { 

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchProducts());
  },[dispatch])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}