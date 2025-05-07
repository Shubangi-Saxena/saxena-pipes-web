
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { testimonialsData } from "@/data/testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import Autoplay from "embla-carousel-autoplay";

const TestimonialsPreview = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ]);

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
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonialsData.map((testimonial, index) => (
                <div className="flex-[0_0_100%] min-w-0 pl-4" key={index}>
                  <Card className="border-0 shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 to-primary"></div>
                    <CardContent className="p-8 md:p-10">
                      <div className="text-6xl text-primary/20 font-serif mb-4">"</div>
                      <p className="text-lg md:text-xl mb-6 italic">
                        {testimonial.quote}
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                          <span className="text-lg font-semibold text-primary">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div className="ml-4">
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.position}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-6 gap-2">
            <div className="flex space-x-2 justify-center pt-4">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === 0 ? 'bg-primary' : 'bg-primary/20'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;
