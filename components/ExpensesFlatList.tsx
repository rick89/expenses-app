import { Alert, FlatList, ListRenderItem } from 'react-native';
import { ExpenseCard } from './ExpenseCard';
import { Expense, deleteExpense } from '../store/slices/expenses-slice';
import { useExpensesDispatch } from '../store/hooks';
import { useNavigation } from '@react-navigation/native';

type ExpensesFlatListProps = {
	expenses: Expense[];
};

export const ExpensesFlatList = ({ expenses }: ExpensesFlatListProps) => {
	const navigation = useNavigation();
	const dispatch = useExpensesDispatch();
	const handleDelete = (expense: Expense) => {
		Alert.alert('Are you sure?', `delete the ${expense.title} expense?`, [
			{
				text: 'Cancel',
				onPress: () => console.log('Cancel Pressed'),
				style: 'cancel',
			},
			{ text: 'OK', onPress: () => dispatch(deleteExpense(expense)) },
		]);
	};

	const handlePress = (expense: Expense) => {
		//@ts-ignore
		navigation.navigate('ManageExpenseScreen', { params: expense });
	};

	const expenseRenderItem: ListRenderItem<Expense> = ({ item }) => (
		<ExpenseItem item={item} />
	);

	const ExpenseItem = ({ item }: { item: Expense }) => (
		<ExpenseCard
			onPress={handlePress}
			onDelete={(expense) => handleDelete(expense)}
			expense={item}
		/>
	);

	return (
		<FlatList
			data={expenses}
			keyExtractor={(expense: Expense) => expense.id}
			renderItem={expenseRenderItem}
		/>
	);
};
