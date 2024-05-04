import { useState } from "react";
import { View, Image, TextInput, Button, StyleSheet } from "react-native";
import logo from "../../assets/Netflix.png";
export default function Login() {
  const [email, setEmail] = useState({});
  const [senha, setSenha] = useState({});

  const handleForm = () => {
    const dados = {
      email: email,
      senha: senha,
    };
  };

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.logo} source={logo} />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={senha}
        onChangeText={setSenha}
        keyboardType="password"
      />
      <Button title="Entrar" onPress={handleForm} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    gap: 10,
  },
  logo: {
    width: 100,
    height: 100,
  },

  input: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "lightgray",
  },
});
