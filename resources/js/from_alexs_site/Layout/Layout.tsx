/*
All Rights Reserved, (c) 2025 rivet

Author:      Martin Shaw (developer@martinshaw.co)
Created:     2025-10-31T21:12:39.017Z
Modified:    2025-10-31T21:12:39.017Z
File Name:   Layout.tsx

Description: description

*/

import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Toaster } from "../src/components/ui/toaster";
import { Toaster as Sonner } from "../src/components/ui/sonner";
import { TooltipProvider } from "../src/components/ui/tooltip";
import Navigation from "../src/components/Navigation";
import Footer from "../src/components/Footer";
import FloatingSubmitButton from "../src/components/FloatingSubmitButton";
import CookieConsent from "../src/components/CookieConsent";
import Analytics from "../src/components/Analytics";

import '../src/App.css';

const queryClient = new QueryClient();

export type LayoutProps = {
    children: ReactNode;
    title?: string;
}

export default function Layout({ children, title }: LayoutProps) {
    return (
        <HelmetProvider>
            <QueryClientProvider client={queryClient}>
                <TooltipProvider>
                    <Toaster />
                    <Sonner />
                    <Analytics />
                    <div className="flex flex-col min-h-screen">
                        <Navigation />
                        <FloatingSubmitButton />
                        <Helmet>
                            <meta charSet="UTF-8" />
                            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                            <title>Capitum Connect - Investment Matchmaking & Introductions</title>
                            <meta name="description" content="Boutique real estate introductions firm connecting investors, family offices, developers, and operators with strategic partners and off-market opportunities across UK, Europe, and UAE." />
                            <meta name="keywords" content="real estate investment, family office, capital raising, hotel development, residential development, PropTech, investment matchmaking, UK real estate, Europe real estate, UAE real estate" />
                            <meta name="author" content="Capitum Connect" />
                            <link rel="canonical" href="https://capitalconnectre.com" />
                            <link rel="preconnect" href="https://fonts.googleapis.com" />
                            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />

                            <meta property="og:title" content="Capitum Connect - Investment Matchmaking & Introductions" />
                            <meta property="og:description" content="Boutique real estate introductions firm connecting investors with strategic partners and off-market opportunities across UK, Europe, and UAE" />
                            <meta property="og:type" content="website" />
                            <meta property="og:url" content="https://capitalconnectre.com" />
                            <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

                            <meta name="twitter:card" content="summary_large_image" />
                            <meta name="twitter:title" content="Capitum Connect - Investment Matchmaking" />
                            <meta name="twitter:description" content="Connecting capital with opportunity across real estate, hospitality, and PropTech" />
                            <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

                            {/* Google Analytics 4 */}
                            <script async src="https://www.googletagmanager.com/gtag/js?id=G-4T8DWMJB1M"></script>
                            <script dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('consent', 'default', {'analytics_storage': 'denied'});
                                gtag('config', 'G-XXXXXXXX');
                            `
                            }} />
                        </Helmet>
                        <main className="flex-1">
                            {children}
                        </main>
                        <Footer />
                        <CookieConsent />
                    </div>
                </TooltipProvider>
            </QueryClientProvider>
        </HelmetProvider>
    );
}
