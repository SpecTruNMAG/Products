"use client";
import Card from "@/components/Card/Card";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const url = "http://localhost:3000/api/products";

function Products() {
  const { data, error, isLoading } = useSWR(url, fetcher);
  if (error) return "An error ocurred.";
  if (isLoading) return "Loading...";
  return (
    <div>
      <h1>Lista de Productos</h1>
      {data.map((data) => (
        <Card items={data} />
      ))}
    </div>
  );
}
export default Products;
