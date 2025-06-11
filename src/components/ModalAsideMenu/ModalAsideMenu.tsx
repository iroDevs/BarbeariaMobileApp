import { Image, StyleSheet } from "react-native";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import { Link } from "../Link/Link";

type PropsModalAsideMenu = {
    open: boolean;
    onClose: () => void;
};

export function ModalAsideMenu({ open, onClose }: PropsModalAsideMenu) {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={open}
            onRequestClose={onClose}
        >
            <TouchableOpacity
                style={styles.overlay}
                activeOpacity={1}
                onPressOut={onClose}
            >
                <TouchableOpacity
                    style={styles.asideContainer}
                    activeOpacity={1}
                    onPress={(e) => e.stopPropagation()}
                >
                    {/* Header com avatar e texto */}
                    <View style={styles.modalHeader}>
                        <View style={styles.profileContainer}>
                            <Image
                                source={require('../../assets/Avatar.png')}
                                style={styles.avatarImage}
                            />
                            <Text style={styles.profileText}>My Profile</Text>
                        </View>
                        <Text style={styles.closeIcon} onPress={onClose}>X</Text>
                    </View>

                    <View style={styles.modalContent}>
                        <Text style={{ color: '#fff' }}>Menu Content</Text>
                        <Link
                            to="/login"
                            text="Home"
                        />
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    asideContainer: {
        width: 280,
        height: '100%',
        backgroundColor: 'rgb(27, 27, 27)',
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#1a1a1a',
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff',
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    avatarImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    profileText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500',
    },
    modalContent: {
        flex: 1,
        padding: 20,
    },
    closeIcon: {
        fontSize: 18,
        padding: 10,

        color: '#ffffff',
    },
});