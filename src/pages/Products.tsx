import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { productsData } from "@/data/products";

const productPdfs = [
  { name: "Anti-Rodent Pipe", file: "anti-rodent pipe.pdf", category: "Specialty Pipes", image: "/ashirvad-pipes.png" },
  { name: "CPVC Plumbing Solutions", file: "cpvc plumbing solutions.pdf", category: "Plumbing", image: "/ashirvad-pipes.png" },
  { name: "Rainwater Harvesting System", file: "rainwater harvesting system.pdf", category: "Rainwater Systems", image: "/ashirvad-pipes.png" },
  { name: "Silent/Silent Plus SWR System", file: "silent:silent plus SWR system.pdf", category: "SWR Systems", image: "/ashirvad-pipes.png" },
  { name: "Solid-Waste and Rainwater System", file: "soli-waster and rainwater system.pdf", category: "Rainwater Systems", image: "/ashirvad-pipes.png" },
  { name: "Underground Drainage", file: "underground drainage.pdf", category: "Drainage", image: "/ashirvad-pipes.png" },
  { name: "UPVC Casing Pipes for Borewell Protection", file: "upvc casing pipes for borewell protection.pdf", category: "Borewell Protection", image: "/ashirvad-pipes.png" },
  { name: "UPVC Column Pipes for Submersible Pumps", file: "upvc column pipes for submersible pumps.pdf", category: "Submersible Pumps", image: "/ashirvad-pipes.png" },
  { name: "UPVC Pipes for Agriculture", file: "upvc pipes for agriculture.pdf", category: "Agriculture", image: "/ashirvad-pipes.png" },
  { name: "UPVC Plumbing Solutions", file: "upvc plumbing solutions.pdf", category: "Plumbing", image: "/ashirvad-pipes.png" },
];

const categories = [...new Set(productPdfs.map(p => p.category))];

const Products = () => (
  <div className="container mx-auto py-12">
    <h1 className="text-4xl font-bold mb-8">Our Product Range</h1>
    {categories.map(category => (
      <div key={category} className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">{category}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productPdfs.filter(p => p.category === category).map(product => (
            <div key={product.file} className="bg-white rounded-lg shadow p-6 flex flex-col items-start">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <a
                href={`/pricelists/${product.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-primary text-blue px-4 py-2 rounded hover:bg-primary/80 transition"
              >
                View Pricelist (PDF)
              </a>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default Products;
