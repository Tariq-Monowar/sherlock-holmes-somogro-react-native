// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   FlatList,
//   Text,
//   Button,
//   StyleSheet,
//   TouchableOpacity,
// } from 'react-native';
// import {getDBConnection, getTodos, deleteTodo, Task} from '../utils/sqllite';
// import {UseAppContext} from '../context/AppContext';

// const Bookmarked: React.FC = () => {
//   const {reRanderMark} = UseAppContext();
//   const [tasks, setTasks] = useState<Task[]>([]);

//   const loadTasks = async () => {
//     const db = await getDBConnection();
//     const loadedTasks = await getTodos(db);
//     setTasks(loadedTasks);
//   };

//   useEffect(() => {
//     loadTasks();
//   }, [reRanderMark]);

//   const handleDeleteTask = async (id: number) => {
//     const db = await getDBConnection();
//     await deleteTodo(db, id);
//     await loadTasks(); // Reload tasks after deletion
//   };

//   const concatData = (x: string) => {
//     if (x.length > 50) {
//       return x.slice(0, 50) + '...';
//     } else return x;
//   };

//   return (
//     <View style={{flex: 1, backgroundColor: '#f9fafc', paddingHorizontal: 5}}>
//       {tasks &&
//         tasks.map(data => {
//           // console.log(data)
//           return (
//             <TouchableOpacity key={data.id} style={{...styles.button, ...styles.shadowProp}}>
//               {data.title ? (
//                 <Text style={styles.title}>
//                   {concatData(data.title).trim().replace(/\n/g, ' ')}
//                 </Text>
//               ) : (
//                 <Text style={styles.title}>
//                   {concatData(data.description).trim().replace(/\n/g, ' ')}
//                 </Text>
//               )}
//             </TouchableOpacity>
//           );
//         })}
//       {/* <FlatList
//         data={tasks}
//         keyExtractor={item => item.id.toString()}
//         renderItem={({item}) => (
//           <View style={styles.taskItem}>
//             <View>
//               <Text style={styles.taskTitle}>{item.title}</Text>
//               <Text style={styles.taskDescription}>{item.description}</Text>
//             </View>
//             <Button title="Delete" onPress={() => handleDeleteTask(item.id)} />
//           </View>
//         )}
//       /> */}
  
//     </View>
//   );
// };

// export default Bookmarked;

// const styles = StyleSheet.create({
//   // taskItem: {
//   //   flexDirection: 'row',
//   //   justifyContent: 'space-between',
//   //   alignItems: 'center',
//   //   padding: 15,
//   //   borderBottomWidth: 1,
//   //   borderBottomColor: '#ccc',
//   // },
//   // taskTitle: {
//   //   fontSize: 18,
//   //   fontWeight: 'bold',
//   //   color: '#000',
//   // },
//   // taskDescription: {
//   //   fontSize: 14,
//   //   color: '#666',
//   // },
//   button: {
//     width: '100%',
//     backgroundColor: '#f9fafc',
//     borderRadius: 10,
//     marginTop: 15,
//   },
//   shadowProp: {
//     shadowColor: '#354158',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 3,
//   },
//   title: {
//     fontFamily: 'kalpurush',
//     textAlign: 'left',
//     fontSize: 22,
//     paddingHorizontal: 10,
//     paddingVertical: 10,
//     color: '#0a1930',
    
//   },
// });



import React, {useEffect, useState} from 'react'; 
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {getDBConnection, getTodos, deleteTodo, Task} from '../utils/sqllite';
import {UseAppContext} from '../context/AppContext';
import { useNavigation } from '@react-navigation/native';

const Bookmarked: React.FC = () => {
  const navigation = useNavigation<any>();
  const {reRanderMark} = UseAppContext();
  const [tasks, setTasks] = useState<Task[]>([]);

  const loadTasks = async () => {
    const db = await getDBConnection();
    const loadedTasks = await getTodos(db);
    setTasks(loadedTasks);
  };

  useEffect(() => {
    loadTasks();
  }, [reRanderMark]);

  const handleDeleteTask = async (id: number) => {
    const db = await getDBConnection();
    await deleteTodo(db, id);
    await loadTasks(); 
  };

  const concatData = (x: string) => {
    if (x.length > 50) {
      return x.slice(0, 50) + '...';
    } else return x;
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#f9fafc', paddingHorizontal: 8,  }}>
      <View style={{...styles.row, paddingBottom: 50}}>
        {tasks &&
          tasks.map(data => {
            return (
              <TouchableOpacity
                key={data.id}
                style={{...styles.button, ...styles.shadowProp}}
                // onPress={()=>navigation.navigate("MarkedDetalse",{data})} //"MarkedDetalse"
                >
                {data.title ? (
                  <Text style={styles.title}>
                    {concatData(data.title).trim().replace(/\n/g, ' ')}
                  </Text>
                ) : (
                  <Text style={styles.title}>
                    {concatData(data.description).trim().replace(/\n/g, ' ')}
                  </Text>
                )}
              </TouchableOpacity>
            );
          })}
      </View>
    </ScrollView>
  );
};

export default Bookmarked;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',  
    flexWrap: 'wrap', 
    justifyContent: 'space-between',  
   
  },
  button: {
    backgroundColor: '#f9fafc',
    borderRadius: 10,
    marginTop: 15,
    width: '48.5%',  
    padding: 8, 
    minHeight: 100
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
  title: {
    fontFamily: 'kalpurush',
    textAlign: 'left',
    fontSize: 20, // Adjusted font size to fit better
    color: '#0a1930',
  },
});
