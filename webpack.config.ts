import path from 'path';
import { Configuration } from 'webpack';
import { BuildEnv, BuildPaths } from './config/build/types/types';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    };

    const PORT = env.port || 3000;
    const mode = env.mode || 'development';
    const isDev = mode === 'development';

    const config: Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    });

    return config;
};
