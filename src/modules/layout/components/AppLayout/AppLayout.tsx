import { PropsWithChildren } from 'react';
import { AppShell, AppShellMain } from '@mantine/core';
import { Header } from './Header';

import { Footer } from './Footer';

export const AppLayout = ({ children }: PropsWithChildren) => {
    return (
        <AppShell header={{ height: 70 }} footer={{ height: 60 }}>
            <Header />
            <AppShellMain>{children}</AppShellMain>
            <Footer />
        </AppShell>
    );
};
