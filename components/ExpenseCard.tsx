import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Expense } from '../store/slices/expenses-slice';
import { DateTime } from 'luxon';

export type ExpenseCardProps = {
	expense: Expense;
	onDelete: (expense: Expense) => void;
};

export const ExpenseCard = ({ expense, onDelete }: ExpenseCardProps) => {
	const { title, amount, date } = expense;
	return (
		<View style={{ ...styles.container }}>
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
					<Text>Delete</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		borderWidth: 1,
		borderRadius: 8,
		padding: 8,
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
