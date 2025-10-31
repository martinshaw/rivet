import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FloatingSubmitButton = () => {
  return (
    <Link to="/submit">
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
