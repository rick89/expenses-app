import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Expense } from '../store/slices/expenses-slice';
import { DateTime } from 'luxon';
import { FontAwesome } from '@expo/vector-icons';

export type ExpenseCardProps = {
	expense: Expense;
	onDelete: (expense: Expense) => void;
	onPress: (expense: Expense) => void;
};

export const ExpenseCard = ({
	expense,
	onDelete,
	onPress,
}: ExpenseCardProps) => {
	const { title, amount, date } = expense;
	return (
		<TouchableOpacity
			onPress={() => onPress(expense)}
			style={{ ...styles.container }}
		>
			<View style={{ flexDirection: 'row' }}>
				<Text style={{ ...styles.title }}>{title}</Text>
				<Text style={{ ...styles.amount }}>£{amount}</Text>
			</View>
			<View style={{ flexDirection: 'row' }}>
				<Text style={{ ...styles.date }}>
					{DateTime.fromISO(date).toFormat('DDD')}
				</Text>
				<TouchableOpacity
					style={{ ...styles.delete }}
					onPress={() => onDelete(expense)}
				>
					<FontAwesome name='trash-o' size={24} color='red' />
				</TouchableOpacity>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		borderRadius: 8,
		padding: 8,
		marginBottom: 16,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 18,
		marginBottom: 20,
	},
	date: {
		fontSize: 12,
		marginTop: 'auto',
	},
	amount: {
		marginLeft: 'auto',
		fontWeight: 'bold',
	},
	delete: {
		marginLeft: 'auto',
	},
});
