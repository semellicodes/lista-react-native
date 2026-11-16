// Questao 01 - Calculadora de consumo diario de agua (35 mL por kg)
import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { s, Botao } from './ui';

export default function Questao01() {
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState('');
  const [erro, setErro] = useState('');

  function calcular() {
    const p = parseFloat(peso.replace(',', '.'));
    if (peso.trim() === '' || isNaN(p) || p <= 0) {
      setErro('Informe um peso maior que zero.');
      setResultado('');
      return;
    }
    const litros = (p * 35) / 1000;
    setErro('');
    setResultado(`Voce deve beber cerca de ${litros.toFixed(2).replace('.', ',')} litros por dia.`);
  }

  return (
    <View style={s.container}>
      <Text style={s.titulo}>Consumo diario de agua</Text>
      <Text style={s.subtitulo}>Estimativa de 35 mL por quilograma</Text>
      <TextInput
        style={s.input}
        placeholder="Peso em kg"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
      <Botao title="Calcular" onPress={calcular} />
      {erro !== '' && <Text style={s.erro}>{erro}</Text>}
      {resultado !== '' && <Text style={s.resultado}>{resultado}</Text>}
    </View>
  );
}
