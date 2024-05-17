'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState, PropsWithChildren } from 'react';
import { MantineProvider } from '@mantine/core';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const Providers = ({ children }: PropsWithChildren) => {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <MantineProvider>
            <QueryClientProvider client={queryClient}>
                {children}
                <ReactQueryDevtools />
            </QueryClientProvider>
        </MantineProvider>
    );
};
