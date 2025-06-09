import { Image, Text, View } from 'react-native';
import { NavBar } from '@/src/components/NavBar/NavBar';
import styles from './index/style';

export default function Index() {
    return (
        <View style={styles.body}>
            <NavBar />

        </View>
    )
}