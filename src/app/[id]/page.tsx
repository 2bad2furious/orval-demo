import { Container, Title, Text } from '@mantine/core';

import { getPerson } from '@/modules/api/orval';
import { AppLayout } from '@/modules/layout/components/AppLayout';

export default async function PersonDetail({ params: { id } }: { params: { id: string } }) {
    const res = await getPerson(id);
    const person = res.data;

    return (
        <AppLayout>
            <Container size='md' py='md'>
                <Title order={1}>{person.name}</Title>
                <Text>{person.birth_year}</Text>
            </Container>
        </AppLayout>
    );
}
