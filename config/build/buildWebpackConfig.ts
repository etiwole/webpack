import { Configuration } from 'webpack';
import { BuildOptions } from './types/types';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): Configuration {
    const { mode, paths, isDev } = options;
    return {
        mode,
        entry: paths.entry,
        output: {
            path: paths.output,
            clean: true,
        },
        module: {
            rules: buildLoaders(options),
        },
        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
