"use client";

import React, { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


import store from "../../store/store"
import { Provider } from "react-redux";
import { Notifications } from '@mantine/notifications';




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
                <Notifications />
                {children}

                <ReactQueryDevtools />
            </QueryClientProvider>

        </Provider>
    );
}

export default Providers;