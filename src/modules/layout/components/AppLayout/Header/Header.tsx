import { AppShellHeader, Container, Button } from '@mantine/core';
import Link from 'next/link';
import { IconHome } from '@tabler/icons-react';

export const Header = () => {
    return (
        <AppShellHeader py='md' withBorder>
            <Container size='md'>
                <Button variant='gradient' component={Link} href='/'>
                    <IconHome />
                </Button>
            </Container>
        </AppShellHeader>
    );
};
