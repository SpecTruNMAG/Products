"use client";
import Card from "@/components/Card/Card";
import { Url } from "@/app/globals";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Product({ params }) {
  
  const { data, error, isLoading } = useSWR(`${Url}${params.id}`, fetcher);

  if (error) return "error";
  if (isLoading) return "Loading...";
  
  return (
    <div>
      <Card items={data} />
    </div>
  );
}

export default Product;
