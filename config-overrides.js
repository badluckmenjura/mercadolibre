
module.exports = (config, env) => {
  config.module.rules.push(
    {
      test: /\.js$/,
      use: [
        {
          loader: 'webpack-preprocessor-loader',
          options: {
            debug: process.env.NODE_ENV !== 'production',
            params: {
              ENV: process.env.NODE_ENV,
              portal : process.env.REACT_APP_ENV,
              isAdmin: process.env.REACT_APP_ENV === 'Administrator',
              version: process.version
            },
            verbose: false,
          },
        },
      ],
    },
  )
  return config
}