'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { SEARCH_QUERY_KEY } from './constants';

export async function searchMovies(formData: FormData) {
    'use server';
    const searchParams = new URLSearchParams();
    const search = formData.get(SEARCH_QUERY_KEY);

    if (search && typeof search === 'string') {
        searchParams.append(SEARCH_QUERY_KEY, search);
    }
    revalidatePath('/');
    redirect('/?' + searchParams);

    return null;
}
