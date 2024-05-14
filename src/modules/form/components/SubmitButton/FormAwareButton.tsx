'use client';

import { ComponentProps } from 'react';
import { Button } from '@mantine/core';
import { useFormStatus } from 'react-dom';

export type SubmitButtonProps<C = 'button'> = ComponentProps<typeof Button<C>>;

export const FormAwareButton = (props: SubmitButtonProps) => {
    const { pending } = useFormStatus();

    return <Button {...props} loading={pending || props.loading} />;
};
