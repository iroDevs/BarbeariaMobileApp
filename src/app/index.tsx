import { Image, Text, View } from 'react-native';
import { NavBar } from '@/src/components/NavBar/NavBar';
import { About } from '@/src/components/About/About';
import { ModalAsideMenu } from '../components/ModalAsideMenu/ModalAsideMenu';
import styles from './index/style';
import { useState } from 'react';

export default function Index() {
    const [menuOpen, setMenuOpen] = useState(false);

    function handleMenuToggle(){
        setMenuOpen(!menuOpen);
    };
    return (
        <View style={styles.body}>
            <ModalAsideMenu open={menuOpen} onClose={handleMenuToggle} />
            <NavBar openMenu={handleMenuToggle} />
            <About />
        </View>
    )
}