import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {FC} from 'react';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Bars3BottomLeftIcon} from 'react-native-heroicons/outline';

import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SheetInput from '../components/SheetInput';

import HomeScreen from '../screens/HomeScreen';
import HomeDrawer from '../drower/HomeDrower';
import ChapterList from '../screens/ChapterList';
import Chapter from '../screens/Chapter';
import {UseAppContext} from '../context/AppContext';
import Bookmarked from '../screens/Bookmarked';
import {
  DocumentPlusIcon,
  PencilSquareIcon,
  TrashIcon,
} from 'react-native-heroicons/solid';
import MarkedDetalse from '../screens/MarkedDetalse';
import BooksWriter from '../screens/BooksWriter';
import AboutApp from '../screens/AboutApp';
import NeedAnApp from '../screens/NeedAnApp';
// Fixed typo

const DrawerNavigation: FC = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator drawerContent={props => <HomeDrawer {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

const AppNavigation: FC = () => {
  const Stack = createNativeStackNavigator();

  const {
    bookChapter,
    setIsBottomSheetVisible,
    isBottomSheetVisible,
    setCtlBookeMarked,
  } = UseAppContext();

  return (
    <>
      <GestureHandlerRootView>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Homes"
              component={DrawerNavigation}
              options={({navigation}) => ({
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.dispatch(DrawerActions.openDrawer())
                    }
                    style={styles.menuButton}>
                    <Bars3BottomLeftIcon
                      size={29}
                      strokeWidth={2}
                      color="#0a1930"
                    />
                  </TouchableOpacity>
                ),
                headerTitle: () => (
                  <Text
                    style={{
                      fontFamily: 'MeriendaBold',
                      fontSize: 20,
                      color: '#0a1930',
                      marginTop: 5,
                    }}>
                    {/* শার্লক হোমস সমগ্র */}
                    Sherlock Holmes
                  </Text>
                ),

                headerTitleAlign: 'center',
                headerStyle: {
                  // backgroundColor: '#fcfbff',
                  backgroundColor: '#f6f8fa',
                },
              })}
            />
            <Stack.Screen
              options={{
                headerTitleAlign: 'center',
                headerTitle: () => (
                  <Text
                    style={{
                      fontFamily: 'kalpurush',
                      fontSize: 22,
                      color: '#0a1930',
                      marginTop: 5,
                    }}>
                    {bookChapter.data[0].bnBookName}
                  </Text>
                ),

                headerStyle: {
                  backgroundColor: '#f6f8fa',
                },
                // headerSearchBarOptions: true
                // gestureEnabled: false,
                // headerShadowVisible: false,
              }}
              name="chapterList"
              component={ChapterList}
            />

            <Stack.Screen
              options={({route}: any) => ({
                headerTitle: () => (
                  <Text
                    style={{
                      fontFamily: 'kalpurush',
                      fontSize: 22,
                      color: '#0a1930',
                      marginTop: 5,
                    }}>
                    {route.params.selector}
                  </Text>
                ),
                headerTitleAlign: 'center',
                headerTintColor: '#000',
                headerLeft: () => null, // Use a function to return null
                headerStyle: {
                  backgroundColor: '#f6f8fa',
                },
                gestureEnabled: false,
              })}
              name="chapter"
              component={Chapter}
            />

            <Stack.Screen
              options={() => ({
                headerTitle: () => (
                  <Text
                    style={{
                      fontFamily: 'MeriendaBold',
                      fontSize: 20,
                      color: '#0a1930',
                      marginTop: -2,
                    }}>
                    Bookmarked
                  </Text>
                ),
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() =>
                      setIsBottomSheetVisible(!isBottomSheetVisible)
                    }
                    style={styles.menuButton}>
                    <DocumentPlusIcon
                      size={30}
                      strokeWidth={2}
                      color="#55585e"
                      style={{marginRight: 3}}
                    />
                  </TouchableOpacity>
                ),
                headerTitleAlign: 'center',
                headerTintColor: '#000',
                headerLeft: () => null, // Use a function to return null
                headerStyle: {
                  backgroundColor: '#f6f8fa',
                },
                gestureEnabled: false,
              })}
              name="Bookmarked"
              component={Bookmarked}
            />

            <Stack.Screen
              options={({route}: any) => ({
                headerTitle: () => (
                  <Text
                    style={{
                      fontFamily: 'MeriendaBold',
                      fontSize: 20,
                      color: '#0a1930',
                      marginTop: -2,
                    }}>
                    Bookmarked
                  </Text>
                ),
                headerRight: () => (
                  <>
                    <TouchableOpacity
                      onPress={() => setCtlBookeMarked(1)}
                      style={styles.menuButton}>
                      <PencilSquareIcon
                        size={30}
                        strokeWidth={2}
                        color="#55585e"
                        style={{marginRight: 10}}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => setCtlBookeMarked(2)}
                      style={styles.menuButton}>
                      <TrashIcon
                        size={30}
                        strokeWidth={2}
                        color="#55585e"
                        style={{marginLeft: 5}}
                      />
                    </TouchableOpacity>
                  </>
                ),
                headerTitleAlign: 'center',
                headerTintColor: '#000',
                headerLeft: () => null, // Use a function to return null
                headerStyle: {
                  backgroundColor: '#f6f8fa',
                },
                gestureEnabled: false,
              })}
              name="MarkedDetalse"
              component={MarkedDetalse}
            />

            <Stack.Screen
              options={{
                headerTitle: () => (
                  <Text
                    style={{
                      fontFamily: 'MeriendaBold',
                      fontSize: 19,
                      color: '#0a1930',
                      marginTop: -2,
                    }}>
                    Books Writer
                  </Text>
                ),
                headerTitleAlign: 'center',
                headerTintColor: '#000',
                headerStyle: {
                  backgroundColor: '#f6f8fa',
                },
              }}
              name="bookswriter"
              component={BooksWriter}
            />

            <Stack.Screen
              options={{
                headerTitle: () => (
                  <Text
                    style={{
                      fontFamily: 'MeriendaBold',
                      fontSize: 19,
                      color: '#0a1930',
                      marginTop: -2,
                    }}>
                    About App
                  </Text>
                ),
                headerTitleAlign: 'center',
                headerTintColor: '#000',
                headerStyle: {
                  backgroundColor: '#f6f8fa',
                },
              }}
              name="aboutapp"
              component={AboutApp}
            />

<Stack.Screen
              options={{
                headerTitle: () => (
                  <Text
                    style={{
                      fontFamily: 'MeriendaBold',
                      fontSize: 18,
                      color: '#0a1930',
                      marginTop: -2,
                    }}>
                    Turn your Ideas into Apps!
                  </Text>
                ),
                headerTitleAlign: 'center',
                headerTintColor: '#000',
                headerStyle: {
                  backgroundColor: '#f6f8fa',
                },
              }}
              name="needanapp"
              component={NeedAnApp}
            />

          </Stack.Navigator>

          {isBottomSheetVisible && (
            <BottomSheet
              // ref={bottomSheetRef}
              snapPoints={['87%']}
              enablePanDownToClose={true}
              // initialSnapIndex={0}
              handleIndicatorStyle={{
                backgroundColor: '#0a1930',
                width: 100,
              }}
              backgroundStyle={{backgroundColor: '#FFF'}}
              onClose={() => setIsBottomSheetVisible(false)}>
              <BottomSheetScrollView>
                <SheetInput />
              </BottomSheetScrollView>
            </BottomSheet>
          )}
        </NavigationContainer>
      </GestureHandlerRootView>
    </>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({
  menuButton: {
    // marginLeft: 10,
  },
});
