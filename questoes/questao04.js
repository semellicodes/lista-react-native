// Questao 04 - Conversor de temperatura Celsius / Fahrenheit
import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import s from './estilos';

export default function Questao04() {
  const [valor, setValor] = useState('');
  const [resultado, setResultado] = useState('');
  const [erro, setErro] = useState('');

  function ler() {
    const v = parseFloat(valor.replace(',', '.'));
    if (valor.trim() === '' || isNaN(v)) {
      setErro('Informe um valor numerico.');
      setResultado('');
      return null;
    }
    setErro('');
    return v;
  }

  function paraFahrenheit() {
    const v = ler();
    if (v === null) return;
    const f = (v * 9) / 5 + 32;
    setResultado(`${valor} C = ${f.toFixed(1).replace('.', ',')} F`);
  }

  function paraCelsius() {
    const v = ler();
    if (v === null) return;
    const c = ((v - 32) * 5) / 9;
    setResultado(`${valor} F = ${c.toFixed(1).replace('.', ',')} C`);
  }

  return (
    <View style={s.container}>
      <Text style={s.titulo}>Conversor de temperatura</Text>
      <TextInput style={s.input} placeholder="Temperatura" keyboardType="numeric" value={valor} onChangeText={setValor} />
      <Button title="Celsius para Fahrenheit" onPress={paraFahrenheit} />
      <Button title="Fahrenheit para Celsius" onPress={paraCelsius} />
      {erro !== '' && <Text style={s.erro}>{erro}</Text>}
      {resultado !== '' && <Text style={s.resultado}>{resultado}</Text>}
    </View>
  );
}
