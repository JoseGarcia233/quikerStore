import { Products } from "@/app/interfaces";
import Image from "next/image";

interface Props {
  params: {id: string; }
}

export async function generateStaticParams() {

  const staticItems = Array.from({length: 20}).map((v, i) => `${i + 1}`);

  return staticItems.map( id => ({
    id: id,
  }))
}

const getItemsDetail = async ( id: string) : Promise<Products> =>{
  
  const products = await fetch(`https://fakestoreapi.com/products/${id}`,{
    // cache: 'force-cache'
  }).then(res => res.json());
      
  return products;
}


export default async function ItemDPage({params}: Props) {

   const Itdata = await getItemsDetail(params.id)
    // console.log('params data: ', Itdata);

  return (

<div className="min-h-screen bg-gradient-to-tr from-red-300 to-yellow-200 flex justify-center items-center py-20">
  
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <h3 className="mb-3 text-xl font-bold text-indigo-600">{Itdata.category}</h3>
      <div className="relative">
        <Image
         className="w-full rounded-xl"
          src={Itdata.image} 
          width={100}
          height={100}
          alt="items Image" />
        <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">${Itdata.price}</p>
      </div>
      <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">{Itdata.title}</h1>
      <div className="my-4">
        <div className="flex space-x-1 items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <p>Rating: {Itdata.rating.rate}</p>
        </div>
        <div className="flex space-x-1 items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </span>
          <p>Count: {Itdata.rating.count} </p>
        </div>
        <div className="flex space-x-1 items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </span>
          <p>Category: {Itdata.category}</p>
        </div>
        <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">Buy Item</button>
      </div>
    </div>
  </div>

  );
}