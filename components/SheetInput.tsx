import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  NativeSyntheticEvent,
  TextInputContentSizeChangeEventData,
} from 'react-native';
import {
  createTable,
  createTodo,
  getDBConnection,
  getTodos,
  updateTodo,
} from '../utils/sqllite';
import {UseAppContext} from '../context/AppContext';


const SheetInput:  React.FC<any> = ({ onData, onTaskUpdate }) => {
  // console.log(onData)
  const {setBookmarked, reRanderMark, setReRanderMark, setIsBottomSheetVisible} = UseAppContext();
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const [postDescHeight, setPostDescHeight] = useState<number>(100);

  const handleTextChange = (
    event: NativeSyntheticEvent<TextInputContentSizeChangeEventData>,
  ) => {
    const newHeight = Math.max(100, event.nativeEvent.contentSize.height);
    setPostDescHeight(newHeight);
  };

  useEffect(() => {
    if(onData){
      setTitle(onData.title)
      setDescription(onData.description)
    }
  }, [onData])
  

  useEffect(() => {
    const setupDB = async () => {
      const db = await getDBConnection();
      await createTable(db);
      // await loadTasks();
    };
    setupDB();
  }, []);

  const handleAddTask = async () => {
    // if (!title || !description) return; // Skip if inputs are empty
    const db = await getDBConnection();
    await createTodo(db, title, description);
    setTitle('');
    setDescription('');
    // Optionally refresh the tasks here after adding
    setBookmarked(await getTodos(db));
    setReRanderMark(!reRanderMark)
    setIsBottomSheetVisible(false)
  };

  const handleUpdateTask = async ()=>{
    const db = await getDBConnection();
    updateTodo(db, onData.id, title, description)
    setReRanderMark(!reRanderMark)
    onTaskUpdate({title, description});

  }

  return (
    <View>
      <Text style={styles.headerText}>sherlock's bookmarked</Text>
      <TextInput
        style={styles.postTitle}
        placeholder="Bookmarked title"
        onChangeText={e => setTitle(e)}
        value={title}
        placeholderTextColor="gray"
      />
      <TextInput
        style={[styles.postDesc, {height: postDescHeight}]}
        multiline
        placeholder="Write your bookmark here"
        textAlignVertical="top"
        value={description}
        onContentSizeChange={handleTextChange}
        onChangeText={e => setDescription(e)}
        placeholderTextColor="gray"
      />
      <TouchableOpacity onPress={onData? handleUpdateTask: handleAddTask} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>{onData?'update':'Submit'} </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SheetInput;

const styles = StyleSheet.create({
  headerText: {
    fontFamily: 'MeriendaBold',
    fontSize: 20,
    marginLeft: 12,
    marginBottom: 10,
    color: '#0a1930',
  },
  postTitle: {
    marginTop: 8,
    borderRadius: 10,
    fontSize: 17,
    lineHeight: 20,
    padding: 8,
    borderColor: '#475468',
    borderWidth: 1.5,
    marginHorizontal: 10,
    color: '#0a1930',
  },
  postDesc: {
    borderColor: '#475468',
    borderWidth: 1.5,
    marginHorizontal: 10,
    borderRadius: 10,
    fontSize: 17,
    padding: 8,
    marginTop: 20,
    color: '#0a1930',
  },
  submitButton: {
    backgroundColor: '#475468',
    borderRadius: 10,
    padding: 10,
    paddingTop: 5,
    marginHorizontal: 10,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 50,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'MeriendaBold',
  },
});
