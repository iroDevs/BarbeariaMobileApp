import { Image, StyleSheet } from "react-native";
import { View, Text } from "react-native";

export  function About() {
    return (
        <View style={styles.container}>
            {/* upper side */}
            <View style={styles.upperSide}>
                 <Image
                    source={require('../../assets/icon.jpg')}
                    style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 20 }}
                />
                <Text style={styles.aboutText}>Bem-vindo à Barbearia App, o ponto de encontro das pessoas que curtem um visual afiado e um bom game!</Text>
                <Text style={styles.aboutText}>💈 Vantagens Exclusivas:

                Fidelidade "XP System" – Ganhe pontos a cada visita e desbloqueie benefícios!</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
        width: '100%',

    },
    upperSide: {

        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },

    aboutText: {
        fontSize: 16,
        color: "#ffffff",
    },
});