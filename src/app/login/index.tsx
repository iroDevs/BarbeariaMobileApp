import { StyleSheet, Text, View } from 'react-native';
import {TitleNeon} from '../../components/texts/TitleNeon';
import { Input } from '../../components/Input/Input';
import { Link } from '../../components/Link/Link';
import { useRouter } from 'expo-router';

export default function Login() {
    const pathIndex = '../index/index';
    const router = useRouter();


    return (
        <>
        <View style={styles.body}>
             <View style={styles.box}>
                 <Text style={styles.title}>Login</Text>
                  <Input label='Email' placeholder='email@email.com'></Input>
                  <Input label='Senha' isSecure={true} placeholder='********'></Input>
              <View style={styles.registerBox}>
                   <Link to="/" text="Criar Nova Conta" />
                   <Link to="/" text="Perdi Minha Senha" />
             </View>
             </View>

        </View>
        </>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#141414',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
    },
    registerBox: {
        paddingHorizontal: 10,
        gap: 10,
        width: '100%',
        marginTop:20,
    },
    box: {
        width: 300,
        height: 500,
        //backgroundColor: '#ffffffa',
        borderRadius: 20,
        gap: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#ffffff',
        textShadowColor: '#ffffff',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 8,
        opacity: 0.8,
    }
})