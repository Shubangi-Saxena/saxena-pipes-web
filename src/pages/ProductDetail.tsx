
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { productsData } from "@/data/products";
import { useEffect } from "react";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = productsData.find((p) => p.slug === slug);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [slug]);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-6 text-muted-foreground">
            Sorry, the product you're looking for does not exist.
          </p>
          <Link to="/products" className="text-primary hover:text-primary/80">
            Return to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            <div>
              <div className="flex items-center mb-2">
                <Link to="/products" className="text-muted-foreground hover:text-primary text-sm">
                  Products
                </Link>
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
                  className="h-4 w-4 mx-2 text-muted-foreground"
                >
                  <path d="m9 18 6-6-6-6"/>
                </svg>
                <span className="text-sm">{product.name}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">{product.name}</h1>
            </div>
            <div className="mt-4 md:mt-0">
              <Link to="/contact">
                <Button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition">
                  Inquire Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-muted aspect-square rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-primary w-32 h-32 opacity-80">
                    {product.icon}
                  </div>
                </div>
                
                <div className="bg-secondary/50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Quick Info</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Category:</span>
                      <span className="font-medium">{product.category}</span>
                    </li>
                    {product.material && (
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Material:</span>
                        <span className="font-medium">{product.material}</span>
                      </li>
                    )}
                    {product.standards && (
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Standards:</span>
                        <span className="font-medium">{product.standards}</span>
                      </li>
                    )}
                  </ul>
                  
                  <div className="mt-6">
                    <Link to="/contact" className="w-full">
                      <Button className="w-full bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition">
                        Contact for Pricing
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview">
                <TabsList className="w-full border-b">
                  <TabsTrigger value="overview" className="flex-1">Overview</TabsTrigger>
                  <TabsTrigger value="features" className="flex-1">Key Features</TabsTrigger>
                  <TabsTrigger value="applications" className="flex-1">Applications</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="pt-6">
                  <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  
                  {product.additionalInfo && (
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold mb-2">Additional Information</h3>
                      <p className="text-muted-foreground">{product.additionalInfo}</p>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="features" className="pt-6">
                  <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                  <ul className="space-y-3">
                    {product.features && product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
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
                          className="h-5 w-5 mr-2 text-primary mt-0.5 shrink-0"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                          <path d="m9 11 3 3L22 4"/>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                
                <TabsContent value="applications" className="pt-6">
                  <h2 className="text-2xl font-semibold mb-4">Common Applications</h2>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-secondary/50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-3">Residential</h3>
                      <ul className="space-y-2">
                        {product.applications?.residential?.map((app, index) => (
                          <li key={index} className="flex items-center">
                            <div className="h-1.5 w-1.5 bg-primary rounded-full mr-2"></div>
                            <span>{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-secondary/50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-3">Commercial</h3>
                      <ul className="space-y-2">
                        {product.applications?.commercial?.map((app, index) => (
                          <li key={index} className="flex items-center">
                            <div className="h-1.5 w-1.5 bg-primary rounded-full mr-2"></div>
                            <span>{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {product.applications?.industrial && (
                      <div className="bg-secondary/50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold mb-3">Industrial</h3>
                        <ul className="space-y-2">
                          {product.applications.industrial.map((app, index) => (
                            <li key={index} className="flex items-center">
                              <div className="h-1.5 w-1.5 bg-primary rounded-full mr-2"></div>
                              <span>{app}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6">Related Products</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productsData
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link to={`/products/${relatedProduct.slug}`} key={relatedProduct.id}>
                  <div className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
                    <div className="aspect-video bg-muted flex items-center justify-center">
                      <div className="w-12 h-12 text-primary opacity-80">
                        {relatedProduct.icon}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-1">{relatedProduct.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedProduct.shortDescription}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
