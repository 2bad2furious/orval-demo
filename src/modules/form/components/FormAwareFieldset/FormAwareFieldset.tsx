'use client';

import { useFormStatus } from 'react-dom';
import { PropsWithChildren } from 'react';
import { Box } from '@mantine/core';

import classes from './FormAwareFieldset.module.css';

export const FormAwareFieldset = ({ children }: PropsWithChildren) => {
    const { pending } = useFormStatus();

    return (
        <Box component='fieldset' disabled={pending} className={classes.fieldset}>
            {children}
        </Box>
    );
};
