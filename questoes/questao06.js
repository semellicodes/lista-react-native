// Questao 06 - Urna com tres candidatos ficticios
import { useState } from 'react';
import { View, Text } from 'react-native';
import { s, Botao } from './ui';

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
