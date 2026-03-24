import { Dimensions, Platform, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
	background: {
		flex: 1,
		backgroundColor: "#00c6ff", // Bright cyan background
		justifyContent: "center",
		alignItems: "center",
		padding: 15,
	},
	card: {
		backgroundColor: "#ffffff",
		width: "100%",
		maxWidth: 400,
		height: height * 0.9, // Make it tall like the image
		borderRadius: 40,
		paddingVertical: 50,
		paddingHorizontal: 30,
		alignItems: "center",
		...Platform.select({
			ios: {
				shadowColor: "#000",
				shadowOffset: { width: 0, height: 4 },
				shadowOpacity: 0.1,
				shadowRadius: 15,
			},
			android: {
				elevation: 8,
			},
			web: {
				boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
			},
		}),
	},
	title: {
		fontSize: 42,
		fontWeight: "800",
		color: "#18c3d9", // Match the cyan color of the title
		marginTop: 30,
		marginBottom: 60,
		letterSpacing: 1,
	},
	inputContainer: {
		width: "100%",
		marginBottom: 25,
	},
	input: {
		backgroundColor: "#ffffff",
		borderRadius: 30,
		paddingVertical: 18,
		paddingHorizontal: 30,
		fontSize: 16,
		color: "#555",
		...Platform.select({
			ios: {
				shadowColor: "#000",
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.06,
				shadowRadius: 10,
			},
			android: {
				elevation: 2,
			},
			web: {
				boxShadow: "0px 2px 15px rgba(0, 0, 0, 0.05)",
			},
		}),
	},
	inputError: {
		borderWidth: 1,
		borderColor: "#ff4d4f",
	},
	errorText: {
		color: "#ff4d4f",
		fontSize: 12,
		marginLeft: 20,
		marginTop: 8,
	},
	buttonContainer: {
		width: "100%",
		marginTop: 40,
		marginBottom: 30,
	},
	button: {
		backgroundColor: "#18c3d9", // Solid cyan color similar to gradient
		borderRadius: 30,
		paddingVertical: 18,
		alignItems: "center",
		...Platform.select({
			ios: {
				shadowColor: "#18c3d9",
				shadowOffset: { width: 0, height: 8 },
				shadowOpacity: 0.4,
				shadowRadius: 15,
			},
			android: {
				elevation: 8,
			},
			web: {
				boxShadow: "0px 8px 25px rgba(24, 195, 217, 0.4)",
			},
		}),
	},
	buttonText: {
		color: "#ffffff",
		fontSize: 20,
		fontWeight: "bold",
		letterSpacing: 0.5,
	},
	footerText: {
		color: "#18c3d9",
		fontSize: 13,
		fontWeight: "500",
		marginTop: "auto", // Push to bottom
		marginBottom: 20,
	},
});
