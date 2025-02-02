import type Config from 'webpack-chain';
import TerserPlugin from 'terser-webpack-plugin';
import CssMinimizer from 'css-minimizer-webpack-plugin';
import CssoWebpackPlugin from 'csso-webpack-plugin';
import type { ConfigManager } from '../../../config/configManager';

export default (configManager: ConfigManager) => (config: Config) => {
  const { modern, debug, disableProdOptimization } = configManager;

  if (disableProdOptimization) {
    // в качестве id модуля будет использоваться путь до файла
    config.optimization.set('moduleIds', 'named');

    config.plugin('terser').use(TerserPlugin, [
      {
        extractComments: false,
        terserOptions: {
          ecma: 6,
          mangle: false,
          output: {
            semicolons: false,
            preserve_annotations: true,
            indent_start: 2,
            beautify: true,
          },
        },
      },
    ]);

    return;
  }

  const {
    configurations: { terserParallel },
  } = configManager.build;

  config.plugin('terser').use(TerserPlugin, [
    {
      extractComments: false,
      parallel: terserParallel,
      terserOptions: {
        ecma: modern ? 6 : 5,
        mangle: {
          // https://github.com/node-fetch/node-fetch/issues/667
          // иначе AbortSignal минифицируется и на сервере падает ошибка в node-fetch
          reserved: ['AbortSignal'],
        },
        output: {
          comments: false,
        },
        compress: {
          passes: 2,
          drop_debugger: !debug,
        },
      },
    },
  ]);

  if (configManager.build.configurations.cssMinimize === 'csso') {
    config.plugin('csso').use(CssoWebpackPlugin as any, [{ restructure: false }]);
  } else {
    config.plugin('css-minimizer').use(CssMinimizer);
  }
};
