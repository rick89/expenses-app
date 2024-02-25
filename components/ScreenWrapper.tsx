import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

type ScreenWrapperProps = {
	children: ReactNode;
};

export const ScreenWrapper = ({ children }: ScreenWrapperProps) => {
	return <View style={{ ...styles.container }}>{children}</View>;
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#3b10c9',
		padding: 20,
		flex: 1,
	},
});
