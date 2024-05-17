'use client';
import Link from 'next/link';
import { Container, Card, Flex, Text, Title, SimpleGrid, Stack, Loader, Center } from '@mantine/core';

import { AppLayout } from '@/modules/layout/components/AppLayout';
import { useGetPeople } from '@/modules/api/orval';
import { getPersonId } from '@/utils';
import { SearchForm } from '@/modules/people/components/SearchForm';
import { SEARCH_QUERY_KEY } from '@/modules/people/constants';
import { GeneralError } from '@/modules/ui/components/GeneralError';
import { useSearchParams } from 'next/navigation';

export default function People() {
    const query = useSearchParams().get(SEARCH_QUERY_KEY) || undefined;
    const { data: res, isPending, error } = useGetPeople({ search: query });

    const data = res?.data;

    return (
        <AppLayout>
            <Container size='md' py='md'>
                <Stack gap='md'>
                    <SearchForm />
                    {error && <GeneralError />}
                    {isPending && (
                        <Center>
                            <Loader />
                        </Center>
                    )}
                    {data && (
                        <SimpleGrid cols={3} spacing='md'>
                            {data.results.map(person => (
                                <Card key={person.url} withBorder component={Link} href={`/${getPersonId(person)}`}>
                                    <Flex justify='space-between' gap='sm'>
                                        <Title order={3}>{person.name}</Title>
                                        <Text>{person.birth_year}</Text>
                                    </Flex>
                                </Card>
                            ))}
                        </SimpleGrid>
                    )}
                </Stack>
            </Container>
        </AppLayout>
    );
}
