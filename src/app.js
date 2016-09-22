import { reaction } from 'mobx';
import { Navigation } from 'react-native-navigation';
import { app } from './stores';


import { registerScreens } from './screens';
registerScreens();


export default class App {
  constructor() {
    this.startApp();
  }
    startApp()
    {
      console.log("starting app...");
      Navigation.startTabBasedApp({
        tabs: [
          {
            label: 'One',
            screen: 'example.FirstTabScreen',
            icon: require('../img/one.png'),
            selectedIcon: require('../img/one_selected.png'),
            title: 'Screen One',
            navigatorStyle: {},
          },
          {
            label: 'Two',
            screen: 'example.SecondTabScreen',
            icon: require('../img/two.png'),
            selectedIcon: require('../img/two_selected.png'),
            title: 'Screen Two',
            navigatorStyle: {},
          }
        ],
        animationType: 'slide-down',
        title: 'MobX Example'
      });
    }

}
