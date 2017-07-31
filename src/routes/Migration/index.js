import { paths } from 'constants'

export default store => ({
  path: paths.migration,
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      const Migration = require('./containers/MigrationContainer').default

      /*  Return getComponent   */
      cb(null, Migration)

    /* Webpack named bundle   */
    }, 'Migration')
  },
})
