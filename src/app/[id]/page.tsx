'use client';
import { Container, Title, Text, Center, Loader } from '@mantine/core';

import { useGetPerson } from '@/modules/api/orval';
import { AppLayout } from '@/modules/layout/components/AppLayout';
import { GeneralError } from '@/modules/ui/components/GeneralError';

export default function PersonDetail({ params: { id } }: { params: { id: string } }) {
    const { data: res, isPending, error } = useGetPerson(id);
    const person = res?.data;

    return (
        <AppLayout>
            <Container size='md' py='md'>
                {error && <GeneralError />}
                {isPending && (
                    <Center>
                        <Loader />
                    </Center>
                )}
                {person && (
                    <>
                        <Title order={1}>{person.name}</Title>
                        <Text>{person.birth_year}</Text>
                    </>
                )}
            </Container>
        </AppLayout>
    );
}
