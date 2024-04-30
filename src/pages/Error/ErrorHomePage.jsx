import { Link, useRouteError } from "react-router-dom";
import '../../styles/ErrorHomePage.scss';

export default function ErrorHomePage(){

  // const error = useRouteError();

  return(
    <div className="error-page">
      <h2>Error: </h2>
      <p>Sorry, Something Went Wrong. </p>
    </div>
  )
}