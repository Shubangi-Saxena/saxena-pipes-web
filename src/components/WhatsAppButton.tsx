
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      <div className="mb-1.5 bg-white/90 backdrop-blur-sm rounded-md px-2 py-1 shadow-md border">
        <p className="text-[11px] leading-tight mb-0 text-gray-700 whitespace-nowrap">
          Click here to chat on WhatsApp
        </p>
      </div>
      <a
        href="https://wa.me/9008982026"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          size="lg"
          className="rounded-full w-14 h-14 p-0 bg-green-500 hover:bg-green-600 shadow-lg button-hover"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon className="w-7 h-7 text-white" />
        </Button>
      </a>
    </div>
  );
};

export default WhatsAppButton;
