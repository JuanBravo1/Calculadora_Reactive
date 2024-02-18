import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from "./components/Styles";

const ResultBar = ({ result }) => (
  <View style={styles.resultBar}>
    <Text style={styles.resultText}>{result}</Text>
  </View>
);

const DeleteButton = ({ onPress }) => (
  <TouchableOpacity style={styles.deleteButton} onPress={onPress}>
    <Text style={styles.buttonText}>C</Text>
  </TouchableOpacity>
);

const NumberButton = ({ value, onPress }) => (
  <TouchableOpacity style={styles.numberButton} onPress={() => onPress(value)}>
    <Text style={styles.buttonText}>{value}</Text>
  </TouchableOpacity>
);

const OperatorButton = ({ value, onPress }) => (
  <TouchableOpacity style={styles.operatorButton} onPress={() => onPress(value)}>
    <Text style={styles.buttonText}>{value}</Text>
  </TouchableOpacity>
);
const EqualButton = ({ onPress }) => (
  <TouchableOpacity style={styles.equalButton} onPress={onPress}>
    <Text style={styles.buttonText}>=</Text>
  </TouchableOpacity>
);

export default function App() {
  const [result, setResult] = useState('');

  const handleDelete = () => {
    setResult('');
  };

  const handleNumberPress = (value) => {
    setResult((prevResult) => prevResult + value);
  };

  const handleOperatorPress = (value) => {
    setResult((prevResult) => prevResult + value);
  };

  const handleEqualPress = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <View style={styles.container}>
      <ResultBar result={result} />
      <DeleteButton onPress={handleDelete} />
      <View style={styles.controls}>
        <View style={styles.row}>
          <NumberButton value="7" onPress={handleNumberPress} />
          <NumberButton value="8" onPress={handleNumberPress} />
          <NumberButton value="9" onPress={handleNumberPress} />
          <OperatorButton value="/" onPress={handleOperatorPress} />
        </View>
        <View style={styles.row}>
          <NumberButton value="4" onPress={handleNumberPress} />
          <NumberButton value="5" onPress={handleNumberPress} />
          <NumberButton value="6" onPress={handleNumberPress} />
          <OperatorButton value="*" onPress={handleOperatorPress} />
        </View>
        <View style={styles.row}>
          <NumberButton value="1" onPress={handleNumberPress} />
          <NumberButton value="2" onPress={handleNumberPress} />
          <NumberButton value="3" onPress={handleNumberPress} />
          <OperatorButton value="-" onPress={handleOperatorPress} />
        </View>
        <View style={styles.row}>
          <NumberButton value="0" onPress={handleNumberPress} />
          <NumberButton value="." onPress={handleNumberPress} />
          <OperatorButton value="+" onPress={handleOperatorPress} />
          <EqualButton onPress={handleEqualPress} />
        </View>
      </View>
    </View>
  );
}