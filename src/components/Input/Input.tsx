import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type InputProps = {
  label?: string;
  isSecure?: boolean;
} & TextInputProps;

export function Input({ label, isSecure = false, ...rest }: InputProps) {
  const [secure, setSecure] = useState(isSecure);

  const toggleSecure = () => {
    setSecure(prev => !prev);
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={styles.inputContainer}>
        <TextInput
          placeholderTextColor={"#ffffff80"}
          secureTextEntry={secure}
          style={styles.input}
          {...rest}
        />
        {isSecure && (
          <TouchableOpacity onPress={toggleSecure} style={styles.icon}>
            <MaterialIcons
              name={secure ? "visibility-off" : "visibility"}
              size={20}
              color="#ffffff80"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  inputContainer: {
    position: "relative",
    width: "100%",
    justifyContent: "center",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#ffffffa",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#ffffff",
    shadowColor: "#969696",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingRight: 45, // espaço pro ícone
  },
  icon: {
    position: "absolute",
    right: 15,
    top: 17,
  },
  label: {
    marginTop: 10,
    alignSelf: "flex-start",
    color: "#ffffff",
    fontWeight: "300",
    marginBottom: 4,
    paddingHorizontal: 5,
    fontSize: 16,
  },
});
