import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { useExpensesDispatch } from '../store/hooks';
import { saveExpense, updateExpense } from '../store/slices/expenses-slice';
import { useEffect, useState } from 'react';
import { uniqueId } from '../helpers/utils';
import { DateTime } from 'luxon';
import { ScreenWrapper } from '../components/ScreenWrapper';

//@ts-ignore
export const ManageExpenseScreen = ({ route, navigation }) => {
	console.log('route', route);
	const dispatch = useExpensesDispatch();
	const [id, setId] = useState('');
	const [title, setTitle] = useState('');
	const [amount, setAmount] = useState<number | null>(null);
	const [editing, setEditing] = useState(false);

	useEffect(() => {
		if (route.params) {
			console.log('editing');
			setEditing(true);
			const { id, title, amount } = route.params.params;
			setId(id);
			setTitle(title);
			setAmount(amount);
		}
	}, [route.params]);

	const resetForm = () => {
		setId('');
		setTitle('');
		setAmount(null);
	};

	const onSave = () => {
		if (!amount) {
			console.error('Amount cannot be null.');
			return;
		}
		const expenseForUpdate = {
			id,
			title,
			amount,
			date: DateTime.now().toISO(),
		};
		if (editing) {
			dispatch(updateExpense(expenseForUpdate));
			resetForm();
		} else {
			const expense = {
				id: uniqueId(),
				title,
				amount,
				date: DateTime.now().toISO(),
			};
			dispatch(saveExpense(expense));
		}
		navigation.navigate('RecentExpensesScreen');
	};

	return (
		<ScreenWrapper>
			<TextInput
				style={{ ...styles.textInput }}
				value={title}
				onChangeText={(value) => setTitle(value)}
			/>
			<TextInput
				keyboardType='number-pad'
				style={{ ...styles.textInput }}
				value={amount?.toString()}
				onChangeText={(value) => setAmount(parseInt(value))}
			/>
			{title === '' && amount === 0 ? (
				<View style={{ ...styles.buttonInactive }}>
					<Text
						style={[styles.buttonText, styles.buttonTextInactive]}
					>
						Save
					</Text>
				</View>
			) : (
				<TouchableOpacity style={{ ...styles.button }} onPress={onSave}>
					<Text style={{ ...styles.buttonText }}>Save</Text>
				</TouchableOpacity>
			)}
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
		marginBottom: 8,
		borderRadius: 8,
	},
	button: {
		borderRadius: 8,
		backgroundColor: 'green',
	},
	buttonInactive: {
		borderRadius: 8,
		backgroundColor: '#efefef',
		opacity: 0.6,
		borderWidth: 1,
		borderColor: '#999',
	},
	buttonText: {
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
		padding: 8,
	},
	buttonTextInactive: {
		color: 'black',
		opacity: 0.8,
	},
});
