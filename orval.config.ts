import { defineConfig } from 'orval';

export default defineConfig({
    demo: {
        input: './swagger.json',
        output: {
            target: './src/modules/api/orval',
            baseUrl: 'https://swapi.dev/api',
            prettier: true,
        },
    },
});
