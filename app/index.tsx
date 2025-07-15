import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { useRouter } from 'expo-router';

import { supabase } from '../lib/supabase';
import '../global.css';
import { useEffect, useState } from 'react';

export default function App() {
	const TABLE_NAME = 'sampledatabase';
	const router = useRouter();

	const [data, setData] = useState<any>([]);
	const [editId, setEditId] = useState<Number>();
	const [name, setName] = useState<any>();
	const [description, setDescription] = useState<any>();

	useEffect(() => {
		async function fetch() {
			await getTableData();
		}
		fetch();
	}, []);
	async function getTableData() {
		const { data, error } = await supabase.from(TABLE_NAME).select('*');
		setData(data);
	}

	async function deleteData(id: any) {
		const response = await supabase.from(TABLE_NAME).delete().eq('id', id);
		await getTableData();
	}

	async function updateData(id: any, name: string, description: string) {
		const { error } = await supabase
			.from(TABLE_NAME)
			.update({ name, description })
			.eq('id', id);
		await getTableData();
	}

	function populateEditData(
		id: any,
		givenName: string,
		givenDescription: string
	) {
		setEditId(id);
		setName(givenName);
		setDescription(givenDescription);
	}

	async function createData(name: string, description: string) {
		const { error } = await supabase
			.from(TABLE_NAME)
			.insert({ name, description });
		await getTableData();
	}
	return (
		<View className="" style={styles.container}>
			<View className="flex flex-col">
				<Text>Name: </Text>
				<TextInput
					placeholder="Input Name"
					value={name}
					onChangeText={(value) => setName(value)}
				></TextInput>
				<Text>Description:</Text>
				<TextInput
					placeholder="Input Description"
					value={description}
					onChangeText={(value) => setDescription(value)}
				></TextInput>
			</View>
			<Pressable>
				<Text
					style={styles.add}
					onPress={() => createData(name, description)}
				>
					Add Entry
				</Text>
			</Pressable>
			<Pressable>
				<Text
					style={styles.add}
					onPress={() => updateData(editId, name, description)}
				>
					Edit Entry
				</Text>
			</Pressable>
			{/* TABLE */}
			<View className="flex flex-col gap-2">
				{data.map((item: any) => {
					return (
						<View key={item.id} style={styles.table}>
							<Text>ID: {item.id}</Text>
							<Text>Name: {item.name}</Text>
							<Text>Description: {item.description}</Text>
							<Pressable style={styles.delete}>
								<Text
									className="text-center"
									onPress={() => deleteData(item.id)}
								>
									Delete Entry
								</Text>
							</Pressable>
							<Pressable style={styles.delete}>
								<Text
									className="text-center"
									onPress={() =>
										populateEditData(
											item.id,
											item.name,
											item.description
										)
									}
								>
									Edit Entry
								</Text>
							</Pressable>
						</View>
					);
				})}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	table: {
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center',
		gap: 5,
		borderWidth: 3,
		borderColor: 'black',
		borderRadius: 5,
		margin: 10,
		padding: 10,
	},
	add: {
		color: 'white',
		padding: 10,
		borderRadius: 4,
		backgroundColor: 'blue',
		fontSize: 20,
		marginTop: 10,
	},
	delete: {
		color: 'white',
		padding: 10,
		borderRadius: 4,
		backgroundColor: 'red',
		fontSize: 20,
	},
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
		marginLeft: 20,
	},
});
