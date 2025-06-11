import { StyleSheet, Text } from 'react-native';

type TitleNeonProps = {
  title: string;
  color?: string;
  glowRadius?: number;
  glowOpacity?: number;
};

export function TitleNeon({ title, color = '#1e0cbe', glowRadius = 8, glowOpacity = 0.8 }: TitleNeonProps) {
  return (
    <Text
      style={[
        styles.neonText,
        {
          color: color,
          textShadowColor: color,
          textShadowOffset: { width: 0, height: 0 },
          textShadowRadius: glowRadius,
          opacity: glowOpacity,
        },
      ]}
    >
      {title}
    </Text>
  );

}


const styles = StyleSheet.create({
  neonText: {
    fontSize: 48, // Ajuste o tamanho da fonte conforme necessário
    fontWeight: 'bold',
    textAlign: 'center',
    // Propriedades iniciais de sombra (serão sobrescritas pelas props)
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 0,
    textShadowColor: 'transparent',
  },
});