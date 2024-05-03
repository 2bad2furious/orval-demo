import { AppLayout } from '@/modules/layout/components/AppLayout';
import { Container } from '@mantine/core';

export default function Home() {
    return (
        <AppLayout>
            <Container size='md' py='md'>
                Hello, World
            </Container>
        </AppLayout>
    );
}
