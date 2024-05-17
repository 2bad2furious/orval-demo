import { Alert, Text } from '@mantine/core';

export const GeneralError = () => {
    return (
        <Alert variant={'outline'} color='red'>
            <Text c='red'>Something went wrong</Text>
        </Alert>
    );
};
