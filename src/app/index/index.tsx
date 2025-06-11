import { Image, Text, View } from 'react-native';
import styles from './style';
import { NavBar } from '@/components/NavBar/NavBar';
import { ModalAsideMenu } from '@/components/ModalAsideMenu/ModalAsideMenu';
import { About } from '@/components/About/About';
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