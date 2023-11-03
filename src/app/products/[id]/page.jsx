"use client";
import Card from "@/components/Card/Card";

import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Product({ params }) {
  const url = process.env.NEXT_PUBLIC_URL
  const { data, error, isLoading } = useSWR(`${url}${params.id}`, fetcher);

  if (error) return "error";
  if (isLoading) return "Loading...";
  
  return (
    <div>
      <Card items={data} />
    </div>
  );
}

export default Product;
