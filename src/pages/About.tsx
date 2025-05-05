
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div>
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-muted-foreground">
              From our humble beginnings in 1991 to becoming one of India's leading pipe distributors
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-4">From 1991 to Present</h2>
              <p className="mb-4">
                Saxena & Co was established in 1991 with a simple mission: to provide high-quality 
                pipes and fittings with exceptional service. Over the decades, we've grown from a 
                small local supplier to one of the most trusted distributors in India.
              </p>
              <p>
                Today, we are proud to be the 3rd-largest distributor in Bangalore and among the 
                top 10 distributors nationwide. Our growth has been fueled by our unwavering 
                commitment to quality products and customer satisfaction.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary">1991</div>
                <div className="text-lg mt-2">Year Established</div>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Trusted Partner for Ashirvad Pipes</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                For over three decades, we've been a proud authorized distributor of Ashirvad Pipes, 
                one of India's leading manufacturers of quality piping systems.
              </p>
            </div>
            
            <div className="bg-muted/50 p-8 rounded-lg">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary">#3</div>
                <p className="text-xl mt-2 mb-6">Largest Distributor in Bangalore</p>
                
                <div className="text-5xl font-bold text-primary">Top 10</div>
                <p className="text-xl mt-2">Nationwide Distributor</p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                At Saxena & Co, we operate with a clear set of core values that guide everything we do.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
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
                    >
                      <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"/>
                      <path d="M9 12h6"/>
                      <path d="M12 9v6"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Quality</h3>
                  <p className="text-muted-foreground">
                    We never compromise on the quality of our products. We only partner with 
                    manufacturers known for their stringent quality controls and superior materials.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
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
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <path d="m9 11 3 3L22 4"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
                  <p className="text-muted-foreground">
                    We believe that our success is directly tied to the satisfaction of our customers. 
                    We go above and beyond to provide exceptional service and support.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
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
                    >
                      <path d="M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM15.42 15.42l6.37 6.37"/>
                      <path d="M19.73 11.57a3.5 3.5 0 0 0-4.95-4.95"/>
                      <path d="M10.68 5.32a3.5 3.5 0 0 0-4.95 0"/>
                      <path d="M5.73 10.27a3.5 3.5 0 0 0 0 4.95"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p className="text-muted-foreground">
                    We constantly seek out the latest advancements in piping technology to offer 
                    our customers innovative solutions that improve efficiency and durability.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
