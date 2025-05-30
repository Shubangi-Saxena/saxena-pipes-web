
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      <div className="mb-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border">
        <p className="text-sm text-gray-700 whitespace-nowrap">
          Click here to chat on WhatsApp
        </p>
      </div>
      <a
        href="https://wa.me/919845386626"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          size="lg"
          className="rounded-full w-14 h-14 p-0 bg-green-500 hover:bg-green-600 shadow-lg button-hover"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </Button>
      </a>
    </div>
  );
};

export default WhatsAppButton;
