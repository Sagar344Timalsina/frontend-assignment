"use client";

import React, { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


import store from "../../store/store"
import { Provider } from "react-redux";




function Providers({ children }: React.PropsWithChildren) {
  
    // const [theme, setTheme] = useState<boolean>(false);
    // function setThemeProvider() {
    //      setTheme(pre => !pre)
    //  }

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

           

                <QueryClientProvider client={client}>
                   
                        {children}
                 
                    <ReactQueryDevtools />
                </QueryClientProvider>
           
        </Provider>
    );
}

export default Providers;