/* eslint-disable */
import { injectGlobal } from 'styled-components'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
* {
    box-sizing: border-box;
}

html,
body {
    position: relative;
    width: 100%;
    height: 100%;
}

html {
    font-size: 62.5%;
}

body {
  color:#382C14;
  font-family: 'Open Sans', sans-serif;
  font-size:1.4rem;
  font-size:14px;
  line-height:1.4;}

.selected {
  color: #ff00ff;
}
`
