// export { useColorScheme } from 'react-native';

// import { useColorScheme } from 'react-native';
// import { Colors } from '../constants/Colors';

// export const useThemeColors = () => {
//     const theme = useColorScheme();
//     return {
//       tabsActiveColor: theme === "light" ? Colors.light.tabBarActiveColor : Colors.dark.tabBarActiveColor,
//       tabsInActiveColor : theme === "light" ? Colors.light.tabBarInactiveColor : Colors.dark.tabBarInactiveColor,
//       tabsBackgroundColor: theme === "light" ? Colors.light.tabBarBackground : Colors.dark.tabBarBackground,
//       authHeaderIcon: theme === "light" ?  Colors.light.authHeaderIcon :  Colors.dark.authHeaderIcon

//     };
//   };

export {useColorScheme} from 'react-native';

import {useColorScheme} from 'react-native';

export const useThemeColors = () => {
  const theme = useColorScheme();
  return {
    appBackground: theme === 'light' ? '#f6f8fa' : '#000',
    appHeader: theme === 'light' ? '#f6f8fa' : '#000',
    textColor: theme === 'light' ? '#0a1930' : '#fff',
    iconColor: theme === 'light' ? '#4e4f53' : '#fff',
  };
};
