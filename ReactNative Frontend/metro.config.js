const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// Add this to resolve Android TurboModule issues
config.resolver = {
  ...config.resolver,
  sourceExts: [...config.resolver.sourceExts, 'cjs'],
  assetExts: [...config.resolver.assetExts, 'bin']
};

module.exports = withNativeWind(config, { input: './app/global.css' });