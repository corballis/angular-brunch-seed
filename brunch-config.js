exports.config = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^node_modules/,
        'main.js': /^app/
      },
      order: {
        after: [/\.html$/, /\.css$/]
      }
    },
    stylesheets: {
      joinTo: 'app.css'
    },
    templates: {
      joinTo: 'main.js'
    }
  },
  plugins: {
    postcss: {
      processors: [
        // require('stylelint')(),
        require('postcss-cssnext')(),
        require('doiuse')({browsers: ['ie >= 10', '> 1%', 'last 2 versions']}),
        require('cssnano')({autoprefixer: false})
      ]
    },
    brunchTypescript: {
      // We do regular compilation in IntelliJ, so we need the lib option in the tsconfig.json file.
      // Brunch uses the noLib flag, which would be in conflict with lib option, so we need to remove it here.
      lib: null,
      noImplicitAny: false
    },
    fingerprint: {
      srcBasePath: 'public/',
      destBasePath: 'public/'
    }
  }
};
