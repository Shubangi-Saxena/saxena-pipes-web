
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { productsData } from "@/data/products";

const Products = () => {
  const [filter, setFilter] = useState("all");
  
  const filteredProducts = filter === "all" 
    ? productsData 
    : productsData.filter(product => product.category === filter);
  
  return (
    <div>
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-muted-foreground">
              Explore our comprehensive range of high-quality pipes and fittings
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 overflow-x-auto">
            <div className="flex space-x-2 min-w-max p-1">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                onClick={() => setFilter("all")}
                className="rounded-full"
              >
                All Products
              </Button>
              <Button
                variant={filter === "pipes" ? "default" : "outline"}
                onClick={() => setFilter("pipes")}
                className="rounded-full"
              >
                Pipes
              </Button>
              <Button
                variant={filter === "fittings" ? "default" : "outline"}
                onClick={() => setFilter("fittings")}
                className="rounded-full"
              >
                Fittings
              </Button>
              <Button
                variant={filter === "drainage" ? "default" : "outline"}
                onClick={() => setFilter("drainage")}
                className="rounded-full"
              >
                Drainage
              </Button>
              <Button
                variant={filter === "accessories" ? "default" : "outline"}
                onClick={() => setFilter("accessories")}
                className="rounded-full"
              >
                Accessories
              </Button>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Link to={`/products/${product.slug}`} key={product.id}>
                <Card className="overflow-hidden h-full card-hover">
                  <div className="aspect-video bg-muted relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      {product.icon && (
                        <div className="w-16 h-16 text-primary opacity-80">
                          {product.icon}
                        </div>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {product.shortDescription}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium bg-secondary px-3 py-1 rounded-full">
                        {product.category}
                      </span>
                      <span className="text-primary text-sm font-medium flex items-center">
                        View Details
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="ml-1 h-4 w-4"
                        >
                          <path d="m9 18 6-6-6-6"/>
                        </svg>
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
