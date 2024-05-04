import { View, StyleSheet, Button, Image, ScrollView } from "react-native";
import logo from "../../assets/logo.png";
import poster from "../../assets/poster 1.jpg";
import cartaz from "../../assets/cartazMercenarios2.webp";
import cartaz2 from "../../assets/cartaz2.jpg";
import cartaz3 from "../../assets/cartaz3.jpg";
export const Home = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.logo} source={logo} />
      </View>
      <View style={styles.partedestaque}>
        <View>
          <Image style={styles.destaque} source={poster} />
        </View>
      </View>

      <Button style={styles.botao} title="Assistir" onPress={"/"} />
      <View style={styles.listaFilmes}>
        <View>
          <Image style={styles.filmes} source={cartaz} />
        </View>
        <View>
          <Image style={styles.filmes} source={cartaz2} />
        </View>
        <View>
          <Image style={styles.filmes} source={cartaz3} />
        </View>
        <View>
          <Image style={styles.filmes} source={cartaz} />
        </View>
        <View>
          <Image style={styles.filmes} source={cartaz2} />
        </View>
        <View>
          <Image style={styles.filmes} source={cartaz3} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  logo: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 100,
  },
  partedestaque: {
    flex: 1.7,
    alignItems: "center",
    justifyContent: "center",
  },
  destaque: {
    width: 350,
    height: 250,

    borderRadius: 10,
  },
  botao: {
    height: 200,
    width: 400,
    flex: 2,
    flexDirection: "row",
  },
  listaFilmes: {
    flex: 1.5,
    flexWrap: "wrap",
    alignContent: "space-around",
    justifyContent: "space-around",
    gap: 5,
  },
  filmes: {
    width: 105,
    height: 105,

    borderRadius: 10,
  },
});
