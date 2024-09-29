import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {BoltIcon} from 'react-native-heroicons/outline';
import {UseAppContext} from '../context/AppContext';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import SheetInput from '../components/SheetInput';
import {deleteTodo, getDBConnection} from '../utils/sqllite';

const MarkedDetalse = ({route}: any) => {
  const navigation = useNavigation<any>();
  const {ctlBookeMarked, setCtlBookeMarked, reRanderMark, setReRanderMark} =
    UseAppContext();
  const {id, title, description} = route.params.data;

  const [titles, setTitle] = useState<string>(title);
  const [descriptions, setDescription] = useState<string>(description);

  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  const handleDelete = () => {
    Alert.alert(
      'Delete Bookmarked?',
      'Are you sure you want to delete this Bookmarked?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            handleDeleteBookMarked();
            navigation.goBack();
          },
        },
      ],
      {cancelable: false},
    );
  };

  const handleDeleteBookMarked = async () => {
    const db = await getDBConnection();
    deleteTodo(db, id);

    setReRanderMark(!reRanderMark);
  };

  useEffect(() => {
    if (ctlBookeMarked === 1) {
      setIsBottomSheetVisible(true);
    }
    if (ctlBookeMarked === 2) {
      console.log('delete');
      handleDelete();
    }
    setCtlBookeMarked(0);
  }, [ctlBookeMarked]);

  const handleTaskUpdate = (data: any) => {
    setTitle(data.title);
    setDescription(data.description);
    setIsBottomSheetVisible(false)
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* <View style={styles.header}>
          <BoltIcon size={30} strokeWidth={2} color="#000" />
        </View> */}

        {title && (
          <Text selectable={true} style={styles.title}>
            {titles}
          </Text>
        )}

        {description && (
          <Text selectable={true} style={styles.desc}>
            {descriptions}
          </Text>
        )}
      </ScrollView>
      {isBottomSheetVisible && (
        <BottomSheet
          snapPoints={['100%']}
          enablePanDownToClose={true}
          onClose={() => {
            setCtlBookeMarked(0);
            setIsBottomSheetVisible(false);
          }}
          handleIndicatorStyle={{
            backgroundColor: '#0b958c',
            width: 100,
          }}
          backgroundStyle={{backgroundColor: '#FFF'}}>
          <BottomSheetScrollView>
           
            <SheetInput
              onData={route.params.data}
              onTaskUpdate={handleTaskUpdate}
            />
          </BottomSheetScrollView>
        </BottomSheet>
      )}
    </SafeAreaView>
  );
};

export default MarkedDetalse;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f6f8fa',
  },
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  title: {
    color: '#0a1930',
    fontSize: 27,
    fontFamily: 'kalpurush',
    marginBottom: 10,
    textAlign: 'left',
  },
  desc: {
    color: '#0a1930',
    fontSize: 22,
    fontFamily: 'kalpurush',
    textAlign: 'justify',
  },
});
