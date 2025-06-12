'use client';

import { useProduct } from '@/shared/hooks/productsave';
import { Button } from '@/shared/ui/button';
import { useRouter } from 'next/navigation';

const Formalization = () => {
  const { product } = useProduct();
  // const [price, setPrice] = useState<number>(0);
  const navigation = useRouter();

  // useEffect(() => {
  //   const totalPrice = product.reduce((sum, item) => {
  //     const cleanPrice = Number(String(item.price).replace(/[\s.]/g, '')); // Handle "3 250 000" or "3.250.000"
  //     return sum + cleanPrice * item.count;
  //   }, 0);
  //   setPrice(totalPrice);
  // }, [product]);

  return (
    <div className="w-[30%] bg-white shadow text-center p-4 max-md:w-full">
      <h1 className="font-semibold">Yetkazib berish mutloqo bepul</h1>
      {/* <ScrollArea className="h-[600px] mt-10">
        <ScrollArea className="h-[600px]">
          {product.length === 0 ? (
            <p className="text-center text-muted-foreground">
              Savatchada mahsulot yo‘q
            </p>
          ) : (
            product.map((pro) => (
              <div className="bg-white shadow w-full mt-10 p-2" key={pro.id}>
                <h1 className="text-sm font-semibold">{pro.title}</h1>
                <h1 className="text-md font-semibold mt-4">
                  {pro.price} {"so'm"} x {pro.count} ={' '}
                  {(
                    Number(pro.price.replace(/[\s.]/g, '')) * pro.count
                  ).toLocaleString()}{' '}
                  {"so'm"}
                </h1>
              </div>
            ))
          )}
        </ScrollArea>
      </ScrollArea> */}
      <div className="mt-4 font-semibold">
        Umumiy summa:
        {/* {price.toLocaleString()} {"so'm"} */}
      </div>
      <Button
        className="mt-5 w-full cursor-pointer"
        disabled={product.length === 0 ? true : false}
        onClick={() => navigation.push('/saved-products/formalization')}
      >
        Rasmiylashtirish
      </Button>
    </div>
  );
};

export default Formalization;
