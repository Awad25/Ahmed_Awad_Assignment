import React, { useState } from "react";
import {
	KeyboardAvoidingView,
	Platform,
	SafeAreaView,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { styles } from "./SignUpStyles";
export default function SignUpPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");

	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");

	const validateEmail = (text: string) => {
		setEmail(text);
		// Simple email regex validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (text.length === 0) {
			setEmailError("");
		} else if (!emailRegex.test(text)) {
			setEmailError("Please enter a valid email address");
		} else {
			setEmailError("");
		}
	};

	const validatePasswordsMatch = (text: string) => {
		setRepeatPassword(text);
		if (text.length === 0) {
			setPasswordError("");
		} else if (text !== password) {
			setPasswordError("Passwords do not match");
		} else {
			setPasswordError("");
		}
	};

	const handlePasswordChange = (text: string) => {
		setPassword(text);
		if (repeatPassword.length > 0 && text !== repeatPassword) {
			setPasswordError("Passwords do not match");
		} else {
			setPasswordError("");
		}
	};

	const handleSignUp = () => {
		// For now, it doesn't do anything
		console.log("Sign up pressed");
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#00c6ff" }}>
			<KeyboardAvoidingView
				style={styles.background}
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<ScrollView
					contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
					showsVerticalScrollIndicator={false}
					keyboardShouldPersistTaps="handled"
				>
					<View style={styles.card}>
						<Text style={styles.title}>Sign Up</Text>

						<View style={styles.inputContainer}>
							<TextInput
								style={[styles.input, emailError ? styles.inputError : null]}
								placeholder="e-mail"
								placeholderTextColor="#a0a0a0"
								keyboardType="email-address"
								autoCapitalize="none"
								value={email}
								onChangeText={validateEmail}
							/>
							{emailError ? (
								<Text style={styles.errorText}>{emailError}</Text>
							) : null}
						</View>

						<View style={styles.inputContainer}>
							<TextInput
								style={styles.input}
								placeholder="password"
								placeholderTextColor="#a0a0a0"
								secureTextEntry
								value={password}
								onChangeText={handlePasswordChange}
							/>
						</View>

						<View style={styles.inputContainer}>
							<TextInput
								style={[styles.input, passwordError ? styles.inputError : null]}
								placeholder="repeat password"
								placeholderTextColor="#a0a0a0"
								secureTextEntry
								value={repeatPassword}
								onChangeText={validatePasswordsMatch}
							/>
							{passwordError ? (
								<Text style={styles.errorText}>{passwordError}</Text>
							) : null}
						</View>

						<View style={styles.buttonContainer}>
							<TouchableOpacity
								style={styles.button}
								onPress={handleSignUp}
								activeOpacity={0.8}
							>
								<Text style={styles.buttonText}>Sign up</Text>
							</TouchableOpacity>
						</View>

						<TouchableOpacity>
							<Text style={styles.footerText}>Read User License Agreement</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
}
