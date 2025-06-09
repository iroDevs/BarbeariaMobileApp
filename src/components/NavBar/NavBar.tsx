import { View, StyleSheet,Image, Text, StatusBar, Touchable, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({

    header: {
        height: 60,
        backgroundColor: '#141414',
        //backgroundColor: 'red',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        flexDirection: 'row',
    },

    logo: {
        width: 50,
        height: 50,
        borderRadius: 200,
    }
})


export function NavBar({openMenu}: { openMenu: () => void }) {
    return (
        <>
         <StatusBar
        barStyle="light-content" // ícones brancos
        backgroundColor="#1e1e1e" // fundo escuro da barra
      />


                <View style={styles.header}>
                    <Image
                        source={require('../../assets/Logo.jpg')}
                        style={styles.logo}

                    />
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Barbearia App</Text>
                    <TouchableOpacity onPress={openMenu}>
                        <MaterialIcons name="menu" size={24} color="white" />
                    </TouchableOpacity>
                </View>

        </>
    )
}
