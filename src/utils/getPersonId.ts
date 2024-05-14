import { Person } from '@/modules/api/orval';

export function getPersonId(person: Person) {
    return person.url.split('/').at(-2);
}
