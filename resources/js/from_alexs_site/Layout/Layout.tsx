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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
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
                <BrowserRouter>
                <Analytics />
                <div className="flex flex-col min-h-screen">
                    <Navigation />
                    <FloatingSubmitButton />
                    <main className="flex-1">
                        {children}
                    </main>
                    <Footer />
                    <CookieConsent />
                </div>
                </BrowserRouter>
            </TooltipProvider>
            </QueryClientProvider>
        </HelmetProvider>
    );
}
