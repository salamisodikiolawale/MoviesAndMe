// App.js

import React from 'react'
import Navigation from './Navigations/Navigation'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Navigation/>
      </Provider>
    )
  }
}













// import 'react-native-gesture-handler';
// import React from 'react'
// //import Search from './Components/Search'
// import Navigation from './Navigations/Navigation'
// import { Provider } from 'react-redux'
// import Store from '.Store/configureStore'

// export default class App extends React.Component {
//   render() {
//     return (
//       //<Search/>
//       <Navigation/>
//     )
//   }
// }

// import 'react-native-gesture-handler';
// import React from 'react'
// //import Search from './Components/Search'
// import Navigation from './Navigation/Navigation';
// import { Provider } from 'react-redux' 
// import { store } from './Store/configureStore' 



// export default class App extends React.Component {
//     render() {
//       return (
//         <Provider store={Store}>
//           <Navigation/>
//         </Provider>
//       )
//     }
// }