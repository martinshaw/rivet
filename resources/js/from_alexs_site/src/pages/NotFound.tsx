import { usePage } from "@inertiajs/react";
import { useEffect } from "react";

const NotFound = () => {
    const page = usePage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", page.url);
  }, [page.url]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background/50 via-background/30 to-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
        <a href="/" className="text-blue-500 underline hover:text-blue-700">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
