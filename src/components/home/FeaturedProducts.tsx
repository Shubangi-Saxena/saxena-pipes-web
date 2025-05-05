
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { productsData } from "@/data/products";

const FeaturedProducts = () => {
  // Only show main categories on homepage
  const mainCategories = productsData.slice(0, 4);
  
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Product Range</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of high-quality pipes and fittings 
            for all your construction and plumbing needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainCategories.map((product, index) => (
            <Link to={`/products/${product.slug}`} key={product.id}>
              <Card className="overflow-hidden h-full card-hover">
                <div className="aspect-square bg-muted relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {product.icon && (
                      <div className="w-20 h-20 text-primary opacity-80">
                        {product.icon}
                      </div>
                    )}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {product.shortDescription}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            to="/products" 
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
          >
            View All Products
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
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
