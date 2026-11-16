// Questao 06 - Urna com tres candidatos ficticios
import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Questao06() {
  const [votos, setVotos] = useState([0, 0, 0]);
  const nomes = ['Ana', 'Bruno', 'Carla'];

  function votar(i) {
    const novos = [...votos];
    novos[i] = novos[i] + 1;
    setVotos(novos);
  }

  const total = votos[0] + votos[1] + votos[2];
  const maior = Math.max(...votos);
  const lideres = nomes.filter((n, i) => votos[i] === maior && maior > 0);

  return (
    <View style={s.container}>
      <Text style={s.titulo}>Eleicao estudantil</Text>
      {nomes.map((nome, i) => (
        <View key={nome} style={s.linha}>
          <Button title={`Votar em ${nome}`} onPress={() => votar(i)} />
          <Text>{votos[i]} votos</Text>
        </View>
      ))}
      <Text style={s.resultado}>Total de votos: {total}</Text>
      {total > 0 && (
        <Text style={s.resultado}>
          {lideres.length > 1
            ? `Empate na lideranca entre ${lideres.join(' e ')} com ${maior} votos.`
            : `Mais votado: ${lideres[0]} com ${maior} votos.`}
        </Text>
      )}
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff', gap: 10 },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#999', borderRadius: 6, padding: 10 },
  resultado: { marginTop: 15, fontSize: 16 },
  erro: { marginTop: 15, fontSize: 16, color: 'red' },
  linha: { flexDirection: 'row', gap: 10, alignItems: 'center' },
  card: { borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 10, marginTop: 10 },
});
