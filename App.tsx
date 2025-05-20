import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';

import './global.css';

export default function App() {
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
			<Text className="bg-blue">Group Members</Text>
			<View className="">
				{users.map((item) => (
					<Text key={id++}>Name: {item.name}</Text>
				))}
			</View>

			<Pressable className="p-10">
				<Text style={styles.text} onPress={() => alert('Lab 1 Done')}>
					Click Me
				</Text>
			</Pressable>
			<StatusBar style="auto" />
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
