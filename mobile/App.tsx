import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Hello React Native beleza
        </Text>
        <Button title="Send 1" />
        <Button title="Send 2" />
        <Button title="Send 3" />
        <Button title="Hello World" />

      <StatusBar style="auto" backgroundColor='red'/>
    </View>
  );
}

interface ButtonProps {
  title: string;
}

const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity>
      <Text>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
