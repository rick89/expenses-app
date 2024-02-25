import { StyleSheet, Text, View } from 'react-native';
import { useExpensesSelector } from '../store/hooks';
import { Expense } from '../store/slices/expenses-slice';

export const ExpensesTotalBar = () => {
	const expenses = useExpensesSelector((state) => state.expenses);
	const total = expenses.reduce(
		(accumulator, expense) => accumulator + expense.amount,
		0
	);

	const items = [
		{ foo: 'bar', amount: 1 },
		{ foo: 'bar', amount: 12 },
	];
	const t = items.reduce((acc, i) => acc + i.amount, 0);
	console.log(t); // 13

	return (
		<View style={{ ...styles.container }}>
			<Text style={{ ...styles.text }}>
				<Text style={{ fontWeight: 'bold' }}>Total:</Text> £{total}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		marginLeft: 'auto',
		marginBottom: 20,
		borderRadius: 8,
		padding: 8,
		borderWidth: 1,
		borderColor: '#999',
	},
	text: {
		marginLeft: 'auto',
	},
});
