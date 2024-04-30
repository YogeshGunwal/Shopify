/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */

import {Outlet} from "react-router-dom";
import Header from '../pages/Header/Header';

export default function RootLayout() {   


  return (
    <>
      <Header />    

      <main>
        <Outlet />
      </main>
    </>
  )
}