import { Image, StyleSheet, View } from 'react-native';
export default function AppleComp() {
	return (
		<View>
			<Image
				style={styles.logo}
				source={require('../assets/apple.png')}
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
