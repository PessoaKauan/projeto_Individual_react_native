import { View, Text, StyleSheet, Image } from "react-native";
import perfil from "../../assets/fotoPerfil.jpg";
export default function Perfil({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.imagem} source={perfil} />
      </View>
      <Text style={styles.texto}>Um pouco sobre mim!</Text>
      <Text style={styles.perfil}>
        Me chamo Kauan Pessôa, atualmente estou com 24 anos, sou formado em
        Engenharia de Produção , pretendendo realizar uma pós em Gestão de
        Projetos. Sou fluente em inglês e estou cursando Programador FullStack
        pelo Serratec/Senac. Para saber um pouco mais sobre mim, confira os
        links abaixo.
      </Text>
      <Text style={styles.links}>https://github.com/PessoaKauan</Text>
      <Text style={styles.links}> https://www.linkedin.com/in/kauan-pess%C3%B4a-39352a256/</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  imagem: {
    height: 200,
    width: 200,
    borderRadius: 15,
  },
  perfil: {
    fontSize: 25,
    color: "white",
  },

  links: {
    color: "red",
  },
});
