import { AppShellFooter, Container, Text, Flex } from '@mantine/core';

export const Footer = () => {
    return (
        <AppShellFooter py='md' withBorder>
            <Container size='md'>
                <Flex justify='space-between'>
                    <div>
                        Made with ❤️{' '}
                        <Text component='a' td='underline' target='_blank' href='https://ackee.cz'>
                            @Ackee
                        </Text>
                    </div>
                    <Flex gap='md'>
                        <Text component='a' td='underline' target='_blank' href='https://swapi.dev/'>
                            SWAPI
                        </Text>
                    </Flex>
                </Flex>
            </Container>
        </AppShellFooter>
    );
};
