
import { CardCounter } from "@/app/shopping-cart";


export const metadata = {
  title: 'Counter',
  description: 'Store Counter',
}

export default function CounterPage() {
 
  return (
    <div className=" flex flex-col items-center justify-center w-full h-full">
      <span>Product Added at the car</span>
        < CardCounter value={1} / >

    </div>
  );
}