import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1A1C29',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 50,
    },
    resultBar: {
      width: '100%',
      height: 150,
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#1d1d1d',
    },
    resultText: {
      fontSize: 70,
      color: 'white',
    },
    deleteButton: {
      width: '100%',
      height: 60,
      backgroundColor: 'red',
      marginBottom: 3,
      justifyContent: 'center',
      alignItems: 'center',
    },
    controls: {
      height: 390,
      width: '115%',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingHorizontal: 10,
      paddingTop: 20,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 5,
    },
    numberButton: {
      width: 90, 
      height: 90, 
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#111111',
    },
    operatorButton: {
      width: 90, 
      height: 90, 
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#181818',
    },
    equalButton: {
      width: '20%',
      height: 90,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'aqua',
      marginBottom: 5,
    },
    buttonText: {
      fontSize: 30,
      color: 'white',
    },
  });