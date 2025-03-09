import { root } from '@lynx-js/react'

import { Login } from './layout/login/Login.jsx'

root.render(<Login />)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
