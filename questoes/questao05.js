// Questao 05 - Simulador de conta bancaria (saldo inicial R$ 1000,00)
import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import s from './estilos';

export default function Questao05() {
  const [saldo, setSaldo] = useState(1000);
  const [valor, setValor] = useState('');
  const [erro, setErro] = useState('');

  function validar() {
    const v = parseFloat(valor.replace(',', '.'));
    if (isNaN(v) || v <= 0) {
      setErro('Informe um valor maior que zero.');
      return null;
    }
    return v;
  }

  function depositar() {
    const v = validar();
    if (v === null) return;
    setErro('');
    setSaldo(saldo + v);
  }

  function sacar() {
    const v = validar();
    if (v === null) return;
    if (v > saldo) {
      setErro('Saldo insuficiente para esse saque.');
      return;
    }
    setErro('');
    setSaldo(saldo - v);
  }

  return (
    <View style={s.container}>
      <Text style={s.titulo}>Simulador de conta</Text>
      <Text style={s.resultado}>Saldo: R$ {saldo.toFixed(2).replace('.', ',')}</Text>
      <TextInput style={s.input} placeholder="Valor" keyboardType="numeric" value={valor} onChangeText={setValor} />
      <View style={s.linha}>
        <Button title="Depositar" onPress={depositar} />
        <Button title="Sacar" onPress={sacar} />
      </View>
      {erro !== '' && <Text style={s.erro}>{erro}</Text>}
    </View>
  );
}
