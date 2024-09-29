// import {
//   Image,
//   ImageBackground,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, {FC} from 'react';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import {Bars3BottomLeftIcon} from 'react-native-heroicons/outline';
// import {useNavigation, DrawerActions} from '@react-navigation/native';

// const HomeScreen: FC = () => {
//   const navigation = useNavigation();

//   const openDrawer = () => {
//     navigation.dispatch(DrawerActions.openDrawer());
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollViewContent}>
//         <Text style={styles.titles}>The Later Years</Text>

//         <View style={styles.bookView}>
//           <View style={styles.backgroundStyle}></View>
//            <Image style={styles.bookImage}  source={require('../assets/books/1.jpg')} />
//          <Text style={styles.booksName}>দ্য অ্যাডভেঞ্চারস অফ শার্লক হোমস</Text>
//         </View>

//         <View style={styles.bookView}>
//           <View style={styles.backgroundStyle}></View>
//            <Image style={styles.bookImage}  source={require('../assets/books/1.jpg')} />
//          <Text style={styles.booksName}>দ্য অ্যাডভেঞ্চারস অফ শার্লক হোমস</Text>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   scrollViewContent: {
//     marginHorizontal: 10
//   },
//   titles:{
//     fontFamily: 'MeriendaBold',
//     color: '#0a1930',
//     marginTop: 5,
//     fontSize: 17,
//   },
//   bookView:{
//     marginTop: 10,
//     width: 190,
//     alignItems: 'center',
//     position: 'relative'
//   },
//   backgroundStyle:{
//     width: '100%',
//     height: 150,
//     backgroundColor: '#f9bbd0',
//     // backgroundColor: '#fcce80',
//     // backgroundColor: '#c3c7e6',

//     marginTop: 50,
//     borderRadius: 10
//   },
//   bookImage:{
//     width: 120,
//     height: 180,
//     position: 'absolute',
//     borderRadius: 10
//   },
//   booksName:{
//     color: '#0a1930',
//     fontFamily: 'kalpurush',
//     fontSize: 22,
//     textAlign: 'center',
//     lineHeight: 23,
//     marginTop: 10
//   }
// });

// import {
//   Image,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, {FC} from 'react';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import {Bars3BottomLeftIcon} from 'react-native-heroicons/outline';
// import {useNavigation, DrawerActions} from '@react-navigation/native';

// const HomeScreen: FC = () => {
//   const navigation = useNavigation();

//   const openDrawer = () => {
//     navigation.dispatch(DrawerActions.openDrawer());
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollViewContent}>
//         {/* <Text style={styles.titles}>The Later Years</Text> */}

//         <View style={styles.booksContainer}>
//           <TouchableOpacity style={styles.bookView}>
//             <View style={{...styles.backgroundStyle, backgroundColor: '#f9bbd0'}}></View>
//             <Image style={styles.bookImage} source={require('../assets/books/1.jpg')} />
//             <Text style={styles.booksName}>দ্য অ্যাডভেঞ্চারস অফ শার্লক হোমস</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.bookView}>
//             <View style={{...styles.backgroundStyle, backgroundColor: '#c3c7e6',}}></View>
//             <Image style={styles.bookImage} source={require('../assets/books/2.jpg')} />
//             <Text style={styles.booksName}>দ্য মেমোয়ার্স অফ শার্লক হোমস</Text>
//           </TouchableOpacity>

//           {/* Add more bookView components as needed */}

//           <TouchableOpacity style={styles.bookView}>
//             <View style={{...styles.backgroundStyle, backgroundColor: '#aed9d4',}}></View>
//             <Image style={styles.bookImage} source={require('../assets/books/3.jpg')} />
//             <Text style={styles.booksName}>দ্য রিটার্ন অফ শার্লক হোমস</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.bookView}>
//             <View style={{...styles.backgroundStyle, backgroundColor: '#e1bee8',}}></View>
//             <Image style={styles.bookImage} source={require('../assets/books/5.jpg')} />
//             <Text style={styles.booksName} selectable={true}>দ্য কেস বুক অফ শার্লক হোমস</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.bookView}>
//             <View style={{...styles.backgroundStyle, backgroundColor: '#9dc2bf',}}></View>
//             <Image style={styles.bookImage} source={require('../assets/books/4.jpg')} />
//             <Text style={styles.booksName} selectable={true}>হিজ লাস্ট বাউ </Text>
//           </TouchableOpacity>

//           {/* #e1bee8 */}
//           {/* #acdcf2 */}
//        </View>

//         <Text style={styles.titles}>Key Short Story Collections</Text>
//         <View style={styles.booksContainer}>

//           <TouchableOpacity style={styles.bookView}>
//             <View style={{...styles.backgroundStyle, backgroundColor: '#e0e2d7',}}></View>
//             <Image style={styles.bookImage} source={require('../assets/books/6.jpg')} />
//             <Text style={styles.booksName} selectable={true}>দ্য ভ্যালি অফ ফিয়ার (আতঙ্কের উপত্যকা) </Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.bookView}>
//             <View style={{...styles.backgroundStyle, backgroundColor: '#9dc2bf',}}></View>
//             <Image style={styles.bookImage} source={require('../assets/books/7.jpg')} />
//             <Text style={styles.booksName} selectable={true}>দ্য হাউন্ড অব দ্য বাস্কারভিলস</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.bookView}>
//             <View style={{...styles.backgroundStyle, backgroundColor: '#9dc2bf',}}></View>
//             <Image style={styles.bookImage} source={require('../assets/books/9.jpg')} />
//             <Text style={styles.booksName} selectable={true}>আ স্টাডি ইন স্কারলেট (রক্ত সমীক্ষা)</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.bookView}>
//             <View style={{...styles.backgroundStyle, backgroundColor: '#9dc2bf',}}></View>
//             <Image style={styles.bookImage} source={require('../assets/books/10.jpg')} />
//             <Text style={styles.booksName} selectable={true}>আ স্টাডি ইন স্কারলেট (রক্ত সমীক্ষা)</Text>
//           </TouchableOpacity>

//         </View>

//       </ScrollView>
//     </View>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   scrollViewContent: {
//     marginHorizontal: 10,
//     paddingBottom: 20,
//   },
//   titles: {
//     fontFamily: 'MeriendaBold',
//     color: '#0a1930',
//     marginTop: 5,
//     fontSize: 17,
//   },
//   booksContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap', // Allows items to wrap to the next line
//     justifyContent: 'space-between', // Distributes the items with space between them
//   },
//   bookView: {
//     marginTop: 20,
//     width: '48%', // Each item takes up 48% of the width to allow spacing between items
//     alignItems: 'center',
//     position: 'relative',
//   },
//   backgroundStyle: {
//     width: '100%',
//     height: 150,
//     backgroundColor: '#f9bbd0',
//     marginTop: 50,
//     borderRadius: 10,
//   },
//   bookImage: {
//     width: 120,
//     height: 180,
//     position: 'absolute',
//     borderRadius: 10,
//   },
//   booksName: {
//     color: '#0a1930',
//     fontFamily: 'kalpurush',
//     fontSize: 22,
//     textAlign: 'center',
//     lineHeight: 30,
//     marginTop: 10,
//   },
// });

// import {
//   Image,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, {FC} from 'react';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import {Bars3BottomLeftIcon} from 'react-native-heroicons/outline';
// import {useNavigation, DrawerActions} from '@react-navigation/native';

// const HomeScreen: FC = () => {
//   const navigation = useNavigation();

//   const openDrawer = () => {
//     navigation.dispatch(DrawerActions.openDrawer());
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollViewContent}>
//         {/* <Text style={styles.titles}>The Later Years</Text> */}

//         <View style={styles.booksContainer}>
//           <TouchableOpacity style={styles.bookView}>
//             <View style={{...styles.backgroundStyle, backgroundColor: '#f9bbd0'}}></View>
//             <Image style={styles.bookImage} source={require('../assets/books/1.jpg')} />
//             <Text style={styles.booksName}>দ্য অ্যাডভেঞ্চারস অফ শার্লক হোমস</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.bookView}>
//             <View style={{...styles.backgroundStyle, backgroundColor: '#c3c7e6',}}></View>
//             <Image style={styles.bookImage} source={require('../assets/books/2.jpg')} />
//             <Text style={styles.booksName}>দ্য মেমোয়ার্স অফ শার্লক হোমস</Text>
//           </TouchableOpacity>

//           {/* Add more bookView components as needed */}

//           <TouchableOpacity style={styles.bookView}>
//             <View style={{...styles.backgroundStyle, backgroundColor: '#aed9d4',}}></View>
//             <Image style={styles.bookImage} source={require('../assets/books/3.jpg')} />
//             <Text style={styles.booksName}>দ্য রিটার্ন অফ শার্লক হোমস</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.bookView}>
//             <View style={{...styles.backgroundStyle, backgroundColor: '#e1bee8',}}></View>
//             <Image style={styles.bookImage} source={require('../assets/books/5.jpg')} />
//             <Text style={styles.booksName} selectable={true}>দ্য কেস বুক অফ শার্লক হোমস</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.bookView}>
//             <View style={{...styles.backgroundStyle, backgroundColor: '#9dc2bf',}}></View>
//             <Image style={styles.bookImage} source={require('../assets/books/4.jpg')} />
//             <Text style={styles.booksName} selectable={true}>হিজ লাস্ট বাউ </Text>
//           </TouchableOpacity>

//           {/* #e1bee8 */}
//           {/* #acdcf2 */}
//        </View>

//         <Text style={styles.titles}>Key Short Story Collections</Text>
//         <View style={styles.booksContainer}>

//           <TouchableOpacity style={styles.bookView}>
//             <View style={{...styles.backgroundStyle, backgroundColor: '#e0e2d7',}}></View>
//             <Image style={styles.bookImage} source={require('../assets/books/6.jpg')} />
//             <Text style={styles.booksName} selectable={true}>দ্য ভ্যালি অফ ফিয়ার (আতঙ্কের উপত্যকা) </Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.bookView}>
//             <View style={{...styles.backgroundStyle, backgroundColor: '#9dc2bf',}}></View>
//             <Image style={styles.bookImage} source={require('../assets/books/7.jpg')} />
//             <Text style={styles.booksName} selectable={true}>দ্য হাউন্ড অব দ্য বাস্কারভিলস</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.bookView}>
//             <View style={{...styles.backgroundStyle, backgroundColor: '#9dc2bf',}}></View>
//             <Image style={styles.bookImage} source={require('../assets/books/9.jpg')} />
//             <Text style={styles.booksName} selectable={true}>আ স্টাডি ইন স্কারলেট (রক্ত সমীক্ষা)</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.bookView}>
//             <View style={{...styles.backgroundStyle, backgroundColor: '#9dc2bf',}}></View>
//             <Image style={styles.bookImage} source={require('../assets/books/10.jpg')} />
//             <Text style={styles.booksName} selectable={true}>আ স্টাডি ইন স্কারলেট (রক্ত সমীক্ষা)</Text>
//           </TouchableOpacity>

//         </View>

//       </ScrollView>
//     </View>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   scrollViewContent: {
//     marginHorizontal: 10,
//     paddingBottom: 20,
//   },
//   titles: {
//     fontFamily: 'MeriendaBold',
//     color: '#0a1930',
//     marginTop: 5,
//     fontSize: 17,
//   },
//   booksContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap', // Allows items to wrap to the next line
//     justifyContent: 'space-between', // Distributes the items with space between them
//   },
//   bookView: {
//     marginTop: 20,
//     width: '48%', // Each item takes up 48% of the width to allow spacing between items
//     alignItems: 'center',
//     position: 'relative',
//   },
//   backgroundStyle: {
//     width: '100%',
//     height: 150,
//     backgroundColor: '#f9bbd0',
//     marginTop: 50,
//     borderRadius: 10,
//   },
//   bookImage: {
//     width: 120,
//     height: 180,
//     position: 'absolute',
//     borderRadius: 10,
//   },
//   booksName: {
//     color: '#0a1930',
//     fontFamily: 'kalpurush',
//     fontSize: 22,
//     textAlign: 'center',
//     lineHeight: 30,
//     marginTop: 10,
//   },
// });

// import {
//   Image,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Dimensions,
// } from 'react-native';
// import React, {FC} from 'react';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import {Bars3BottomLeftIcon} from 'react-native-heroicons/outline';
// import {useNavigation, DrawerActions} from '@react-navigation/native';

// const HomeScreen: FC = () => {
//   const navigation = useNavigation();
//   const screenWidth = Dimensions.get('window').width;
//   const numColumns = screenWidth > 600 ? 3 : 2; // Adjust for larger screens

//   const openDrawer = () => {
//     navigation.dispatch(DrawerActions.openDrawer());
//   };

//   const bookWidth = (screenWidth - 40) / numColumns - 10; // Adjust the margin and spacing

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollViewContent}>
//         {/* <Text style={styles.titles}>The Later Years</Text> */}

//         <View style={styles.booksContainer}>
//           <TouchableOpacity style={[styles.bookView, {width: bookWidth}]}>
//             <View style={{...styles.backgroundStyle, backgroundColor: '#f9bbd0'}}></View>
//             <Image style={styles.bookImage} source={require('../assets/books/1.jpg')} />
//             <Text style={styles.booksName}>দ্য অ্যাডভেঞ্চারস অফ শার্লক হোমস</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={[styles.bookView, {width: bookWidth}]}>
//             <View style={{...styles.backgroundStyle, backgroundColor: '#c3c7e6'}}></View>
//             <Image style={styles.bookImage} source={require('../assets/books/2.jpg')} />
//             <Text style={styles.booksName}>দ্য মেমোয়ার্স অফ শার্লক হোমস</Text>
//           </TouchableOpacity>

//           {/* Add more bookView components as needed */}

//           <TouchableOpacity style={[styles.bookView, {width: bookWidth}]}>
//             <View style={{...styles.backgroundStyle, backgroundColor: '#aed9d4'}}></View>
//             <Image style={styles.bookImage} source={require('../assets/books/3.jpg')} />
//             <Text style={styles.booksName}>দ্য রিটার্ন অফ শার্লক হোমস</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={[styles.bookView, {width: bookWidth}]}>
//             <View style={{...styles.backgroundStyle, backgroundColor: '#e1bee8'}}></View>
//             <Image style={styles.bookImage} source={require('../assets/books/5.jpg')} />
//             <Text style={styles.booksName} selectable={true}>দ্য কেস বুক অফ শার্লক হোমস</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={[styles.bookView, {width: bookWidth}]}>
//             <View style={{...styles.backgroundStyle, backgroundColor: '#9dc2bf'}}></View>
//             <Image style={styles.bookImage} source={require('../assets/books/4.jpg')} />
//             <Text style={styles.booksName} selectable={true}>হিজ লাস্ট বাউ </Text>
//           </TouchableOpacity>

//        </View>

//         <Text style={styles.titles}>Key Short Story Collections</Text>
//         <View style={styles.booksContainer}>

//           <TouchableOpacity style={[styles.bookView, {width: bookWidth}]}>
//             <View style={{...styles.backgroundStyle, backgroundColor: '#e0e2d7'}}></View>
//             <Image style={styles.bookImage} source={require('../assets/books/6.jpg')} />
//             <Text style={styles.booksName} selectable={true}>দ্য ভ্যালি অফ ফিয়ার (আতঙ্কের উপত্যকা)</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={[styles.bookView, {width: bookWidth}]}>
//             <View style={{...styles.backgroundStyle, backgroundColor: '#9dc2bf'}}></View>
//             <Image style={styles.bookImage} source={require('../assets/books/7.jpg')} />
//             <Text style={styles.booksName}>দ্য হাউন্ড অব দ্য বাস্কারভিলস</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={[styles.bookView, {width: bookWidth}]}>
//             <View style={{...styles.backgroundStyle, backgroundColor: '#9dc2bf'}}></View>
//             <Image style={styles.bookImage} source={require('../assets/books/9.jpg')} />
//             <Text style={styles.booksName}>আ স্টাডি ইন স্কারলেট (রক্ত সমীক্ষা)</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={[styles.bookView, {width: bookWidth}]}>
//             <View style={{...styles.backgroundStyle, backgroundColor: '#9dc2bf'}}></View>
//             <Image style={styles.bookImage} source={require('../assets/books/10.jpg')} />
//             <Text style={styles.booksName}>আ স্টাডি ইন স্কারলেট (রক্ত সমীক্ষা)</Text>
//           </TouchableOpacity>

//         </View>

//       </ScrollView>
//     </View>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   scrollViewContent: {
//     marginHorizontal: 10,
//     paddingBottom: 20,
//   },
//   titles: {
//     fontFamily: 'MeriendaBold',
//     color: '#0a1930',
//     marginTop: 5,
//     fontSize: 17,
//   },
//   booksContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//   },
//   bookView: {
    // marginTop: 20,
    // alignItems: 'center',
    // position: 'relative',
    // marginHorizontal: 10
//   },
//   backgroundStyle: {
//     width: '100%',
//     height: 140,
//     backgroundColor: '#f9bbd0',
//     marginTop: 50,
//     borderRadius: 10,
//   },
//   bookImage: {
//     width: 110,
//     height: 170,
//     position: 'absolute',
//     borderRadius: 10,
//   },
//   booksName: {
//     color: '#0a1930',
//     fontFamily: 'kalpurush',
//     fontSize: 22,
//     textAlign: 'center',
//     lineHeight: 30,
//     marginTop: 10,
//   },
// });

import {
  GestureResponderEvent,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Bars3BottomLeftIcon} from 'react-native-heroicons/outline';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {UseAppContext} from '../context/AppContext';
import {booksList} from '../database/HomeBookData';
import { useThemeColors } from '../context/ThemeContext';

const HomeScreen: FC = () => {
  const navigation = useNavigation<any>();
 
  const {appBackground, textColor} = useThemeColors()

  // for N
  const screenWidth = Dimensions.get('window').width;
  const numColumns = screenWidth > 600 ? 4 : 2; 
  const bookWidth = (screenWidth - 40) / numColumns - 10; 

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const appContext = UseAppContext();

  const handleOpenBook = (book: any) => {
    appContext.setRecevedBookName(book.id);
    navigation.navigate('chapterList');
  };

  return (
    <View style={[styles.container, {backgroundColor: appBackground}]}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* <Text style={{...styles.titles}} selectable={true}>
          Sherlock Holmes Novels
        </Text> */}

        {/* <ScrollView
          horizontal
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.horizontalScrollView}> */}
        <View style={styles.N_booksContainer}>
          {booksList.slice(5).map(book => (
            <TouchableOpacity
              key={book.id}
              onPress={() => handleOpenBook(book)}
              style={{...styles.N_bookView, width: bookWidth}}>
              <View
                style={{
                  ...styles.backgroundStyle,
                  backgroundColor: book.backgroundColor,
                }}
              />
              <Image style={styles.bookImage} source={book.image} />
              <Text style={[styles.booksName,{color: textColor}]} selectable={true}>
                {book.name}
              </Text>
            </TouchableOpacity>
          ))}
          {/* </ScrollView> */}
        </View>

        <Text style={{...styles.titles, marginBottom: 8, marginTop: 5, color: textColor}}>Short Story book</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={true}
          indicatorStyle="black"
          contentContainerStyle={styles.horizontalScrollView}>
          {booksList.slice(0, 5).map(book => (
            <TouchableOpacity
              onPress={() => handleOpenBook(book)}
              key={book.id}
              style={styles.bookView}>
              <View
                style={{
                  ...styles.backgroundStyle,
                  backgroundColor: book.backgroundColor,
                }}
              />
              <Image style={styles.bookImage} source={book.image} />
              <Text style={styles.booksName}>{book.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f6f8fa',
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  horizontalScrollView: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  titles: {
    fontFamily: 'MeriendaBold',
    // color: '#0a1930',
    marginTop: 5,
    fontSize: 17,
    marginLeft: 10,
  },
  bookView: {
    width: 145,
    marginHorizontal: 10,
    alignItems: 'center',
    position: 'relative',
  },
  backgroundStyle: {
    width: '100%',
    height: 130,
    marginTop: 50,
    borderRadius: 10,
  },
  bookImage: {
    width: 100,
    height: 155,
    position: 'absolute',
    borderRadius: 10,
  },
  booksName: {
    // color: '#0a1930',
    fontFamily: 'kalpurush',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 23,
    marginTop: 10,
  },

  N_booksContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  N_bookView:{
    marginTop: 20,
    alignItems: 'center',
    position: 'relative',
    marginHorizontal: 10
  },
});
