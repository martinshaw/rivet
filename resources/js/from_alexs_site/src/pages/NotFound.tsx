import { usePage } from "@inertiajs/react";
import { useEffect } from "react";

export type FromAlexsSiteNotFoundProps = {
    status: 503 | 500 | 404 | 403;
};

const NotFound = (props: FromAlexsSiteNotFoundProps) => {
    const page = usePage();

    useEffect(() => {
        if (props.status === 404) {
            console.error(
                "404 Error: User attempted to access non-existent route:",
                page.url
            );
        } else {
            console.error(
                `${props.status} Error: An error occurred while accessing route:`,
                page.url
            );
        }
    }, [page.url, props.status]);

    const titles: Record<number, string> = {
        503: "503: Service Unavailable",
        500: "500: Server Error",
        404: "404: Page Not Found",
        403: "403: Forbidden",
    } as const;
    const title = titles[props.status];

    const descriptions = {
        503: "Sorry, we are doing some maintenance. Please check back soon.",
        500: "Whoops, something went wrong on our servers.",
        404: "Sorry, the page you are looking for could not be found.",
        403: "Sorry, you are forbidden from accessing this page.",
    } as const;
    const description = descriptions[props.status];

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background/50 via-background/30 to-background">
            <div className="text-center">
                <h1 className="mb-4 text-4xl font-bold">{title}</h1>
                <p className="mb-4 text-xl text-gray-600">{description}</p>
                <a
                    href="/"
                    className={`font-medium transition-colors text-accent underline underline-offset-4`}
                >
                    Return to Home
                </a>
            </div>
        </div>
    );
};

export default NotFound;
