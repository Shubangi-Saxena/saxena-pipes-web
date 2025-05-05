
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919845386626"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40"
    >
      <Button
        size="lg"
        className="rounded-full w-14 h-14 p-0 bg-green-500 hover:bg-green-600 shadow-lg button-hover"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </Button>
    </a>
  );
};

export default WhatsAppButton;
