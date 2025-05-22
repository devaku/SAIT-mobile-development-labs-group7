import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

import '../global.css';

export default function App() {
	const router = useRouter();
	let id = 0;
	let users = [
		{ name: 'Alejo Kim Uy', github_repo: 'devaku', group_no: 7 },
		{
			name: 'Pedro Henrique Gomes de Toledo',
			github_repo: 'pedro-gt',
			group_no: 7,
		},
		{ name: 'Theodore Frocklage', github_repo: 'Bdopz', group_no: 7 },
	];
	return (
		<View style={styles.container}>
			<Pressable>
				<Text className="bg-blue" onPress={() => router.push('/posts')}>
					THIS IS THE INDEX PAGE
				</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	text: {
		color: 'white',
		padding: 10,
		borderRadius: 4,
		backgroundColor: 'blue',
		fontSize: 20,
	},

	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
