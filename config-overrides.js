module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    "crypto": require.resolve("crypto-browserify"),
    "stream": require.resolve("stream-browserify"),
    "assert": require.resolve("assert"),
    "http": require.resolve("stream-http"),
    "https": require.resolve("https-browserify"),
    "os": require.resolve("os-browserify"),
    "url": require.resolve("url")
  });
  
  config.resolve.fallback = fallback;

  // Add fullySpecified to handle imports without extensions
  config.module.rules = config.module.rules || [];
  config.module.rules.push({
    test: /\.m?js$/,
    resolve: {
      fullySpecified: false, // Allow imports without specifying file extensions
    },
  });

  // Add extensions to Webpack resolver
  config.resolve.extensions = ['.js', '.jsx', '.json', '.ts', '.tsx'];

  // Ignore source map warnings
  config.ignoreWarnings = [/Failed to parse source map/];

  return config;
};
