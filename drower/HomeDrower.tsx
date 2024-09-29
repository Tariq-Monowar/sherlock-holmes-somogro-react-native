import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Linking,
  Switch,
  Image,
} from 'react-native';
import React, {FC} from 'react';
import {DrawerContentComponentProps} from '@react-navigation/drawer';

import {
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  PencilSquareIcon,
  ShareIcon,
} from 'react-native-heroicons/solid';

import {
  CodeBracketIcon,
  ExclamationCircleIcon,
} from 'react-native-heroicons/outline';

// import {ShareIcon} from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';
// import { ChatBubbleBottomCenterIcon } from 'react-native-heroicons/outline';

const HomeDrawer: FC<DrawerContentComponentProps> = props => {
  const navigation = useNavigation<any>();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.appIcon}>
        <Image
          source={require('../assets/image/icon.png')}
          style={styles.appImage}
        />
        {/* <Text style={styles.appName}>শার্লক হোমস সমগ্র</Text> */}
      </View>

      <TouchableOpacity
        style={{...styles.element, ...styles.shadowProp}}
        onPress={() => navigation.navigate('Bookmarked')}>
        <BookmarkIcon size={27} strokeWidth={2} color="#4e4f53" />
        <Text style={styles.text}>Sherlock's Archive</Text>
      </TouchableOpacity>

      <Text style={styles.title}>whose the app</Text>
      <TouchableOpacity
        style={{...styles.element, ...styles.shadowProp, marginTop: 6}}
        onPress={() => navigation.navigate('bookswriter')}>
        <PencilSquareIcon size={27} strokeWidth={2} color="#54565b" />
        <Text style={styles.text}>Books Writer</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('aboutapp')}
        style={{...styles.element, ...styles.shadowProp}}>
        <ExclamationCircleIcon size={27} strokeWidth={2} color="#4e4f53" />
        <Text style={styles.text}>About App</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('needanapp')}
        style={{...styles.element, ...styles.shadowProp}}>
        <CodeBracketIcon
          size={26}
          strokeWidth={2}
          color="#4e4f53"
          style={{marginLeft: 2}}
        />
        <Text style={styles.text}>Need an App?</Text>
      </TouchableOpacity>

      <Text style={styles.title}>switch theme</Text>
      <TouchableOpacity
        style={{
          ...styles.element,
          ...styles.shadowProp,
          justifyContent: 'space-between',
          marginTop: 6,
        }}>
        <Text style={styles.text}>Dark Mode</Text>
        <Switch
          // value={isDarkMode}
          // onValueChange={toggleTheme}
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={'#f4f3f4'}
        />
      </TouchableOpacity>

      <Text style={styles.title}>Communication</Text>
      <TouchableOpacity
        style={{...styles.element, ...styles.shadowProp, marginTop: 6}}
        onPress={() => {
          Linking.openURL(
            'https://www.facebook.com/profile.php?id=100080938471859',
          );
        }}>
        <ChatBubbleOvalLeftEllipsisIcon
          size={27}
          strokeWidth={2}
          color="#4e4f53"
        />
        <Text style={styles.text}>Dev Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(
            'https://bd.linkedin.com/in/tariq-monowar-hossainnnn',
          );
        }}
        style={{...styles.element, ...styles.shadowProp}}>
        <ChatBubbleOvalLeftEllipsisIcon
          size={27}
          strokeWidth={2}
          color="#4e4f53"
        />
        <Text style={styles.text}>Dev LinkedIn</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Share The app</Text>
      <TouchableOpacity
        style={{...styles.element, ...styles.shadowProp, marginTop: 6}}
        onPress={() => {
          Linking.openURL(
            'https://www.facebook.com/profile.php?id=100080938471859',
          );
        }}>
        <ShareIcon
          size={23}
          strokeWidth={2}
          color="#4e4f53"
          style={{marginLeft: 3, marginBottom: -4}}
        />
        <Text style={styles.text}>Share</Text>
      </TouchableOpacity>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
    </ScrollView>
  );
};

export default HomeDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
    backgroundColor: '#f6f8fa',
    height: '100%',
    paddingHorizontal: 5,
  },

  appIcon: {
    marginTop: 15,
    marginLeft: 10,
  },
  appImage: {
    height: 100,
    width: 100,
  },
  appName: {
    color: '#3b3b3b',
    fontFamily: 'kalpurush',
    fontSize: 25,
    marginTop: 10,
  },

  title: {
    color: '#3b3b3b',
    // fontFamily: 'MeriendaBold',
    fontFamily: 'kalpurush',
    fontSize: 18,
    marginLeft: 12,
    marginTop: 10,
  },
  element: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#f9fafc',
    borderRadius: 8,

    paddingHorizontal: 6,
    paddingTop: 7,
    paddingBottom: 10,

    marginTop: 9,
  },
  text: {
    color: '#3b3b3b',
    fontFamily: 'MeriendaBold',
    fontSize: 16,
    marginLeft: 5,
  },
  shadowProp: {
    shadowColor: '#354158',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },

  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 10,
  },
});
