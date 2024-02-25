import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { useExpensesDispatch } from '../store/hooks';
import { saveExpense } from '../store/slices/expenses-slice';
import { useState } from 'react';
import { uniqueId } from '../helpers/utils';
import { DateTime } from 'luxon';
import { ScreenWrapper } from '../components/ScreenWrapper';

export const ManageExpenseScreen = () => {
	const dispatch = useExpensesDispatch();
	const [title, setTitle] = useState('');
	const [amount, setAmount] = useState('');

	const onSave = () => {
		const expense = {
			id: uniqueId(),
			title,
			amount,
			date: DateTime.now().toISO(),
		};
		dispatch(saveExpense(expense));
	};

	return (
		<ScreenWrapper>
			<TextInput
				style={{ ...styles.textInput }}
				value={title}
				onChangeText={(value) => setTitle(value)}
			/>
			<TextInput
				style={{ ...styles.textInput }}
				value={amount}
				onChangeText={(value) => setAmount(value)}
			/>
			<TouchableOpacity onPress={onSave}>
				<Text>Save</Text>
			</TouchableOpacity>
		</ScreenWrapper>
	);
};

const styles = StyleSheet.create({
	textInput: {
		backgroundColor: 'white',
		padding: 8,
		borderWidth: 1,
		borderColor: 'black',
		height: 40,
	},
});
