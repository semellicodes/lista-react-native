// Questao 04 - Conversor de temperatura Celsius / Fahrenheit
import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import s from './estilos';

export default function Questao04() {
  const [valor, setValor] = useState('');
  const [paraF, setParaF] = useState(true);
  const [resultado, setResultado] = useState('');
  const [erro, setErro] = useState('');

  function converter() {
    const v = parseFloat(valor.replace(',', '.'));
    if (valor.trim() === '' || isNaN(v)) {
      setErro('Informe um valor numerico.');
      setResultado('');
      return;
    }
    setErro('');
    if (paraF) {
      setResultado(`${v} C = ${((v * 9) / 5 + 32).toFixed(1)} F`);
    } else {
      setResultado(`${v} F = ${(((v - 32) * 5) / 9).toFixed(1)} C`);
    }
  }

  return (
    <View style={s.container}>
      <Text style={s.titulo}>Conversor de temperatura</Text>
      <TextInput style={s.input} placeholder="Temperatura" keyboardType="numeric" value={valor} onChangeText={setValor} />
      <Button
        title={paraF ? 'Celsius para Fahrenheit (tocar para trocar)' : 'Fahrenheit para Celsius (tocar para trocar)'}
        onPress={() => setParaF(!paraF)}
      />
      <Button title="Converter" onPress={converter} />
      {erro !== '' && <Text style={s.erro}>{erro}</Text>}
      {resultado !== '' && <Text style={s.resultado}>{resultado}</Text>}
    </View>
  );
}
