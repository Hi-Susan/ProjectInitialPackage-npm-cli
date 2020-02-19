const Plugins = [
  // jQuery
  {
    from: 'node_modules/jquery/dist',
    to  : 'plugins/jquery'
  },
  // sweetalert2
  {
    from: 'node_modules/sweetalert2/dist',
    to  : 'plugins/sweetalert2'
  },
  // jquery.countdown
  {
    from: 'node_modules/jquery.countdown',
    to  : 'plugins/jquery-countdown'
  },
  // normalize.css
  {
    from: 'node_modules/normalize.css',
    to  : 'plugins/normalize-css'
  },
  // datatables js
  {
    from: 'node_modules/datatables.net/js',
    to  : 'plugins/datatables'
  },
    // datatables css
  {
    from: 'node_modules/datatables.net-dt/css',
    to  : 'plugins/datatables'
  }
]

module.exports = Plugins
