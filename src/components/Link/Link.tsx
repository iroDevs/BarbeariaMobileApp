import { useRouter, RelativePathString } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';


type LinkProps = {
  to: string;
  text: string;
};

export function Link({ to, text }: LinkProps) {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.navigate(to as RelativePathString)}>
      <Text style={{ color: '#eae8fc', textDecorationLine: 'underline' }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
