
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { testimonialsData } from "@/data/testimonials";

const TestimonialsPreview = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };
  
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We take pride in delivering exceptional products and services to our clients. 
            Here's what some of them have to say.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 to-primary"></div>
            <CardContent className="p-8 md:p-10">
              <div className="text-6xl text-primary/20 font-serif mb-4">"</div>
              <p className="text-lg md:text-xl mb-6 italic">
                {testimonialsData[activeIndex].quote}
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-lg font-semibold text-primary">
                    {testimonialsData[activeIndex].name.charAt(0)}
                  </span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonialsData[activeIndex].name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonialsData[activeIndex].position}, {testimonialsData[activeIndex].company}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-center mt-6 gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
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
                className="h-5 w-5"
              >
                <path d="m15 18-6-6 6-6"/>
              </svg>
              <span className="sr-only">Previous</span>
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
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
                className="h-5 w-5"
              >
                <path d="m9 18 6-6-6-6"/>
              </svg>
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;
