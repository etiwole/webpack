import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/types';

export function buildDevServer({ port }: BuildOptions): DevServerConfiguration {
    return {
        port,
        open: true,
        liveReload: true,
    };
}
