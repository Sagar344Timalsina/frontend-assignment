"use client";

import React, { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { themeContext } from '../../components/context/themeContext';
import store from "../../store/store"
import  {Provider}  from "react-redux";



function Providers({ children }: React.PropsWithChildren) {
    const [theme, setTheme] = useState<boolean>(false);
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
        <Provider store={store}>
            
        <themeContext.Provider value={theme}>

            <QueryClientProvider client={client}>
                 {children} 
                <ReactQueryDevtools />
            </QueryClientProvider>
        </themeContext.Provider>
        </Provider>
    );
}

export default Providers;