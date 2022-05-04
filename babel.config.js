module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@app/constants': './src/constants',
          '@app/navigation': './src/navigation',
          '@app/screens': './src/screens',
          '@app/utils': './src/utils',
        },
      },
    ],
  ],
};
