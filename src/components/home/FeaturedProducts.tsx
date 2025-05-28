
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { productsData } from "@/data/products";

const productPdfs = [
  { name: "Anti-Rodent Pipe", file: "anti-rodent pipe.pdf" },
  { name: "CPVC Plumbing Solutions", file: "cpvc plumbing solutions.pdf" },
  { name: "Rainwater Harvesting System", file: "rainwater harvesting system.pdf" },
  { name: "Silent/Silent Plus SWR System", file: "silent:silent plus SWR system.pdf" },
  { name: "Solid-Waste and Rainwater System", file: "soli-waster and rainwater system.pdf" },
  { name: "Underground Drainage", file: "underground drainage.pdf" },
  { name: "UPVC Casing Pipes for Borewell Protection", file: "upvc casing pipes for borewell protection.pdf" },
  { name: "UPVC Column Pipes for Submersible Pumps", file: "upvc column pipes for submersible pumps.pdf" },
  { name: "UPVC Pipes for Agriculture", file: "upvc pipes for agriculture.pdf" },
  { name: "UPVC Plumbing Solutions", file: "upvc plumbing solutions.pdf" },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Product Range</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of high-quality pipes and fittings for all your construction and plumbing needs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productPdfs.slice(0, 3).map((product) => (
            <div key={product.file} className="bg-card rounded-lg shadow p-6 flex flex-col items-start">
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">{product.name}</h3>
              <a
                href={`/pricelists/${product.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-primary text-primary-foreground px-3 py-1 rounded hover:bg-primary/80 transition"
              >
                View PDF
              </a>
            </div>
          ))}
        </div>
        <a href="/products" className="block mt-10 text-primary underline text-center text-lg font-medium">See All Products</a>
      </div>
    </section>
  );
};

export default FeaturedProducts;
