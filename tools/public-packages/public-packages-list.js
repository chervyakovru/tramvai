const publicPackages = [
  // CLI
  '@tramvai/cli',
  // CORE
  '@tramvai/core',
  '@tramvai/papi',
  '@tramvai/react',
  '@tramvai/react-query',
  '@tramvai/state',
  '@tramvai/types-actions-state-context',
  '@tramvai/experiments',
  // TEST
  '@tramvai/test-unit-jest',
  '@tramvai/test-unit',
  '@tramvai/test-react',
  '@tramvai/test-puppeteer',
  '@tramvai/test-mocks',
  '@tramvai/test-jsdom',
  '@tramvai/test-integration-jest',
  '@tramvai/test-integration',
  '@tramvai/test-helpers',
  // TOOLS
  '@tramvai/tools-migrate',
  '@tramvai/tools-check-versions',
  '@tramvai/tools-generate-schema',
  '@tramvai/build',
  '@tinkoff-monorepo/depscheck',
  '@tinkoff-monorepo/fix-ts-references',
  '@tinkoff-monorepo/pkgs-collector',
  '@tinkoff-monorepo/pkgs-collector-dir',
  '@tinkoff-monorepo/pkgs-collector-workspaces',
  // TOKENS
  '@tramvai/tokens-common',
  '@tramvai/tokens-http-client',
  '@tramvai/tokens-metrics',
  '@tramvai/tokens-render',
  '@tramvai/tokens-router',
  '@tramvai/tokens-server',
  // MODULES
  '@tramvai/module-common',
  '@tramvai/module-cookie',
  '@tramvai/module-environment',
  '@tramvai/module-log',
  '@tramvai/module-render',
  '@tramvai/module-server',
  '@tramvai/module-router',
  '@tramvai/module-http-client',
  '@tramvai/module-seo',
  '@tramvai/module-error-interceptor',
  '@tramvai/module-sentry',
  '@tramvai/module-metrics',
  '@tramvai/module-deps-graph',
  '@tramvai/module-react-query',
  '@tramvai/module-mocker',
  '@tramvai/module-cache-warmup',
  '@tramvai/module-client-hints',
  '@tramvai/module-autoscroll',
  // LIBS
  '@tramvai/react-lazy-hydration-render',
  '@tramvai/safe-strings',
  '@tinkoff/errors',
  '@tinkoff/pubsub',
  '@tinkoff/url',
  '@tinkoff/browser-cookies',
  '@tinkoff/logger',
  '@tinkoff/is-modern-lib',
  '@tinkoff/minicss-class-generator',
  '@tinkoff/dippy',
  '@tinkoff/router',
  '@tinkoff/browserslist-config',
  '@tinkoff/layout-factory',
  '@tinkoff/user-agent',
  '@tinkoff/htmlpagebuilder',
  '@tinkoff/express-terminus',
  '@tinkoff/monkeypatch',
  '@tinkoff/meta-tags-generate',
  '@tinkoff/error-handlers',
  '@tinkoff/measure-express-requests',
  '@tinkoff/browser-timings',
  '@tinkoff/mocker',
  '@tinkoff/metrics-noop',
  '@tramvai/http-client',
  '@tramvai/tinkoff-request-http-client-adapter',
  '@tinkoff/react-hooks',
  '@tinkoff/hook-runner',
  '@tinkoff/eslint-plugin-tramvai',
  'prettier-config-tinkoff',
  '@tinkoff/pack-polyfills',
  '@tinkoff/package-manager-wrapper',
];

module.exports = publicPackages;
