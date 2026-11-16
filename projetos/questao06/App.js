// Questao 06 - Urna com tres candidatos ficticios
import { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function App() {
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
      <Text style={s.subtitulo}>Toque no nome para registrar um voto</Text>
      {nomes.map((nome, i) => (
        <View key={nome} style={s.card}>
          <Text style={s.rotulo}>{votos[i]} votos</Text>
          <Botao title={`Votar em ${nome}`} onPress={() => votar(i)} />
        </View>
      ))}
      <View style={s.card}>
        <Text style={s.rotulo}>Total de votos</Text>
        <Text style={s.destaque}>{total}</Text>
      </View>
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

function Botao({ title, onPress, tipo }) {
  const secundario = tipo === 'secundario';
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [s.botao, secundario && s.botaoSecundario, pressed && s.botaoPressionado]}
    >
      <Text style={[s.botaoTexto, secundario && s.botaoTextoSecundario]}>{title}</Text>
    </Pressable>
  );
}

const s = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#F1F5F9', padding: 20, paddingTop: 56, gap: 12 },
  titulo: { fontSize: 24, fontWeight: '700', color: '#0F172A' },
  subtitulo: { fontSize: 14, color: '#64748B', marginBottom: 4 },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    color: '#0F172A',
  },
  botao: { backgroundColor: '#2563EB', borderRadius: 10, paddingVertical: 14, alignItems: 'center' },
  botaoSecundario: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#CBD5E1' },
  botaoPressionado: { opacity: 0.8 },
  botaoTexto: { color: '#fff', fontSize: 16, fontWeight: '600' },
  botaoTextoSecundario: { color: '#334155' },
  resultado: {
    backgroundColor: '#ECFDF5',
    borderWidth: 1,
    borderColor: '#A7F3D0',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    color: '#065F46',
  },
  erro: {
    backgroundColor: '#FEF2F2',
    borderWidth: 1,
    borderColor: '#FECACA',
    borderRadius: 10,
    padding: 14,
    fontSize: 15,
    color: '#B91C1C',
  },
  card: { backgroundColor: '#fff', borderRadius: 12, borderWidth: 1, borderColor: '#E2E8F0', padding: 14, gap: 8 },
  destaque: { fontSize: 20, fontWeight: '700', color: '#0F172A' },
  rotulo: { fontSize: 14, color: '#64748B' },
  secao: { fontSize: 18, fontWeight: '700', color: '#0F172A', marginTop: 8 },
  nome: { fontSize: 16, fontWeight: '600', color: '#0F172A' },
});
