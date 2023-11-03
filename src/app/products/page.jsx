"use client";
import Card from "@/components/Card/Card";
import useSWR from "swr";


const fetcher = (url) => fetch(url).then((res) => res.json());


function Products() {

  const url = process.env.NEXT_PUBLIC_URL
  const { data, error, isLoading } = useSWR(url, fetcher);
  
  if (error) return "An error ocurred.";
  if (isLoading) return "Loading...";
  return (
    <div>
      <h1>Lista de Productos</h1>
      {data.map((data) => (
        <div key={data.pro_id}>
        <Card items={data} />
        </div>
      ))}
    </div>
  );
}
export default Products;
