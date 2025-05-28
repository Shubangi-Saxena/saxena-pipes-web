
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { productsData } from "@/data/products";

const productPdfs = [
  { name: "CPVC Plumbing Solutions", file: "cpvc plumbing solutions.pdf", category: "Plumbing", image: "/ashirvad-pipes.png" },
  { name: "Rainwater Harvesting System", file: "rainwater harvesting system.pdf", category: "Rainwater Systems", image: "/ashirvad-pipes.png" },
  { name: "Silent/Silent Plus SWR System", file: "silent:silent plus SWR system.pdf", category: "SWR Systems", image: "/ashirvad-pipes.png" },
  { name: "Solid-Waste and Rainwater System", file: "soli-waster and rainwater system.pdf", category: "Rainwater Systems", image: "/ashirvad-pipes.png" },
  { name: "Underground Drainage", file: "underground drainage.pdf", category: "Drainage", image: "/ashirvad-pipes.png" },
  { name: "UPVC Pipes for Agriculture", file: "upvc pipes for agriculture.pdf", category: "Agriculture", image: "/ashirvad-pipes.png" },
  { name: "UPVC Plumbing Solutions", file: "upvc plumbing solutions.pdf", category: "Plumbing", image: "/ashirvad-pipes.png" },
  { name: "O-PVC Pipes", file: "o-pvc pipes.pdf", category: "Specialty Pipes", image: "/ashirvad-pipes.png" },
  { name: "FRP Chamber Covers", file: "frp chamber covers.pdf", category: "Chamber Covers", image: "/ashirvad-pipes.png" },
  { name: "Industrial Pipes", file: "industrial pipes.pdf", category: "Industrial", image: "/ashirvad-pipes.png" },
];

const categories = [...new Set(productPdfs.map(p => p.category))];

const Products = () => (
  <div className="container mx-auto py-12">
    <h1 className="text-4xl font-bold mb-4">Our Product Range</h1>
    
    <div className="bg-yellow-100 dark:bg-yellow-900 border border-yellow-300 dark:border-yellow-700 rounded-lg p-6 mb-8">
      <p className="text-lg font-bold text-yellow-800 dark:text-yellow-200 text-center">
        ⚠️ Please note: Prices may vary and are subject to change. <Link to="/contact" className="underline hover:text-yellow-600 dark:hover:text-yellow-300 transition-colors">Contact us directly</Link> for current pricing and availability.
      </p>
    </div>

    {categories.map(category => (
      <div key={category} className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">{category}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productPdfs.filter(p => p.category === category).map(product => (
            <div key={product.file} className="bg-card text-card-foreground rounded-lg shadow p-6 flex flex-col items-start">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <a
                href={`/pricelists/${product.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/80 transition"
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
