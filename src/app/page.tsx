import Link from 'next/link';
import { Container, Card, Flex, Text, Title, SimpleGrid, Stack } from '@mantine/core';

import { AppLayout } from '@/modules/layout/components/AppLayout';
import { getPeople } from '@/modules/api/orval';
import { getPersonId } from '@/utils';
import { SearchForm } from '@/modules/people/components/SearchForm';
import { SEARCH_QUERY_KEY } from '@/modules/people/constants';

type SearchParams<Key extends string> = { [key in Key]: string | string[] | undefined };

export default async function People({
    searchParams: { query },
}: {
    searchParams: SearchParams<typeof SEARCH_QUERY_KEY>;
}) {
    const res = await getPeople({
        search: typeof query === 'string' ? query : undefined,
    });

    const data = res.data;

    return (
        <AppLayout>
            <Container size='md' py='md'>
                <Stack gap='md'>
                    <SearchForm />
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
                </Stack>
            </Container>
        </AppLayout>
    );
}
