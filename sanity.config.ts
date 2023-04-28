import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId: '47prqdw8',
    dataset: 'production',
    title: "Clothing Store",
    apiVersion: '2023-04-27',
    basePath: '/admin',
    plugins: [
        deskTool(),
    ],
    schema: {types: schemas }
})

export default config;