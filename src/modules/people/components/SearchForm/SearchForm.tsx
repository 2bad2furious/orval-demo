'use client';

import { useSearchParams, redirect, useRouter } from 'next/navigation';

import { IconSearch } from '@tabler/icons-react';
import { Flex, TextInput } from '@mantine/core';

import { FormAwareFieldset } from '@/modules/form/components/FormAwareFieldset';
import { FormAwareButton } from '@/modules/form/components/SubmitButton';

import { SEARCH_QUERY_KEY } from '../../constants';

export const SearchForm = () => {
    const searchParams = useSearchParams();
    const defaultValue = searchParams.get(SEARCH_QUERY_KEY);
    const { push } = useRouter();

    return (
        <form
            action={formData => {
                const searchParams = new URLSearchParams();
                const search = formData.get(SEARCH_QUERY_KEY);

                if (search && typeof search === 'string') {
                    searchParams.append(SEARCH_QUERY_KEY, search);
                }
                push(`/?${searchParams}`);
            }}
        >
            <FormAwareFieldset>
                <Flex gap='sm' align='end'>
                    <TextInput
                        defaultValue={defaultValue ?? ''}
                        name={SEARCH_QUERY_KEY}
                        style={{ flexGrow: 1 }}
                        placeholder='Luke Skywalker'
                    />
                    <FormAwareButton aria-label='Search' variant='filled' type='submit'>
                        <IconSearch />
                    </FormAwareButton>
                </Flex>
            </FormAwareFieldset>
        </form>
    );
};
