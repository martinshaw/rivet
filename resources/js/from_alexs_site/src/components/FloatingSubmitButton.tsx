import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "@inertiajs/react";

const FloatingSubmitButton = () => {
  return (
    <Link href="/submit">
      <Button
        size="lg"
        className="fixed bottom-8 right-8 z-40 bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all duration-300 rounded-full h-14 px-6"
      >
        <Plus className="h-5 w-5 mr-2" />
        Submit Opportunity
      </Button>
    </Link>
  );
};

export default FloatingSubmitButton;
