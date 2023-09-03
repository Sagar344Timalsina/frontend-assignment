"use client";

import React, { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { themeContext } from '../../components/context/themeContext';
import HeaderPage from "@/app/components/partials/Header";
import FooterPage from "@/app/components/partials/Footer";


function Providers({ children }: React.PropsWithChildren) {
    const [theme, setTheme] = useState<boolean>(true);
    function setThemeProvider() {
         setTheme(pre => !pre)
     }

    const client = new QueryClient(
        {
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false,
                    refetchOnReconnect: true
                }
            }
        }
    );

    return (
        <themeContext.Provider value={theme}>

            <QueryClientProvider client={client}>
                 {children} 
                <ReactQueryDevtools />
            </QueryClientProvider>
        </themeContext.Provider>
    );
}

export default Providers;