import { Product } from "../../app/models/Product";

interface Props {
  products: Product[];
  addProduct: () => void;
}

export default function Catalog({ products, addProduct }: Props) {
  return (
    <>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              {product.name} -- {product.price} monies{" "}
            </li>
          );
        })}
      </ul>
      <button onClick={addProduct}>ADD ProDUCKt</button>
    </>
  );
}
