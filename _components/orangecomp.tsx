import { Image, StyleSheet, View } from 'react-native';
export default function OrangeComp() {
	return (
		<View>
			<Image
				style={styles.logo}
				source={require('../assets/orange.png')}
			/>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	tinyLogo: {
		width: 50,
		height: 50,
	},
	logo: {
		width: 200,
		height: 200,
	},
});
