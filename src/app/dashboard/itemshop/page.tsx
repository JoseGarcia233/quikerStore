import { Products } from "@/app/interfaces";
import { apiProducts } from "@/app/api";
import { CardGrind } from "./components";




const getItems = async (): Promise<Products> => {

  const products = await fetch(`https://fakestoreapi.com/products`, {
    cache: 'force-cache'
  }).then(res => res.json());

  return products;
}


export default async function ItemShopPage() {
  // const { data } = await apiProducts.get<Products>('/products')
  const data = await getItems();

  // console.log('klk',data);



  return (

    <div className=" grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
      {
        data.map((_productdata: any) => (


          <CardGrind
            key={_productdata.id}
            id={_productdata.id}
            title={_productdata.title}
            price={_productdata.price}
            description={_productdata.description}
            category={_productdata.category}
            image={_productdata.image}
            rating={_productdata.rating}
          />

        ))}

    </div>

  )
}