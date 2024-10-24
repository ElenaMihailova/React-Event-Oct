import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function removeUseClientPlugin() {
    return {
        name: 'remove-use-client',
        transform(code: string, id: string) {
            if (id.includes('node_modules') && code.includes('"use client"')) {
                return code.replace(/["']use client["'];?/g, '');
            }
            return code;
        },
    };
}

export default defineConfig({
    plugins: [
        react(), // Плагин для поддержки React
        removeUseClientPlugin(), // Плагин для удаления "use client"
    ],
});
