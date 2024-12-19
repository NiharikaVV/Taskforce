// App.js
import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

const App = () => {
  const tasks = [
    { id: '1', title: 'Task 1', status: 'Pending' },
    { id: '2', title: 'Task 2', status: 'Completed' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TaskForce</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.task}>
            <Text>{item.title}</Text>
            <Text>Status: {item.status}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  task: { padding: 15, backgroundColor: '#fff', marginBottom: 10, borderRadius: 5 },
  button: { padding: 15, backgroundColor: '#007bff', borderRadius: 5 },
  buttonText: { color: '#fff', textAlign: 'center' },
});

export default App;
