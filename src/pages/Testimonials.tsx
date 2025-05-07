
import { Card, CardContent } from "@/components/ui/card";
import { testimonialsData } from "@/data/testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  return (
    <div>
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl text-muted-foreground">
              Hear what our satisfied clients have to say about our products and services
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-16">
            <Carousel className="w-full">
              <CarouselContent>
                {testimonialsData.map((testimonial, index) => (
                  <CarouselItem key={index}>
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
                            <p className="text-sm text-muted-foreground mt-1">
                              {testimonial.project}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-6 gap-4">
                <CarouselPrevious className="relative -left-0 top-0 translate-y-0" />
                <CarouselNext className="relative -right-0 top-0 translate-y-0" />
              </div>
            </Carousel>
          </div>
          
          <div className="grid gap-8 mt-12">
            {testimonialsData.map((testimonial, index) => (
              <Card key={index} className={`overflow-hidden ${index % 2 === 0 ? 'bg-background' : 'bg-secondary/30'}`}>
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-3">
                    <div className={`md:col-span-1 bg-primary/5 p-8 flex items-center justify-center ${index % 2 === 0 ? 'order-1 md:order-1' : 'order-1 md:order-2'}`}>
                      <div className="text-center">
                        <div className="w-20 h-20 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center mb-4">
                          <span className="text-2xl font-bold">{testimonial.name.charAt(0)}</span>
                        </div>
                        <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <div className={`md:col-span-2 p-8 ${index % 2 === 0 ? 'order-2 md:order-2' : 'order-2 md:order-1'}`}>
                      <div className="text-4xl text-primary/20 font-serif mb-4">"</div>
                      <p className="text-lg italic mb-6">
                        {testimonial.quote}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.project}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
