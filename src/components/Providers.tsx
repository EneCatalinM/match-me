import * as React from "react";
import { HeroUIProvider } from "@heroui/react";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <HeroUIProvider>
            <ToastContainer position="top-center" hideProgressBar />
            {children}
        </HeroUIProvider>
    );
}