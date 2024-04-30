import { useSelector } from "react-redux"
import DisplayProducts from "../Display/DisplayProducts";
import Loading from "../Loading";
import ErrorFetching from "../ErrorFetching";


export default function Home() {

  const {loading,products,error} = useSelector(state => state.products);

  const customersChoice = products.toSorted((a,b) => b.rating.rate - a.rating.rate).slice(0,5);

  // console.log('customersChoice:', customersChoice);

  const editorsChoice= products.toSorted((a,b) => b.price - a.price).slice(0,5);

  // console.log('editorsChoice',editorsChoice);

  if (loading) {
    return (
      <Loading />
    )
  }

  if (error) {
    return (
      <ErrorFetching error={error} />
    )
  }  

  return (
    <>
      <DisplayProducts products={customersChoice} productType = "Customer's Choice"/>
      <DisplayProducts products={editorsChoice} productType = "Editor's Choice" />
      <DisplayProducts products={products} />
    </>
  )
}
