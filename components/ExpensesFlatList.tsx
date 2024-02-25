import { FlatList, ListRenderItem } from 'react-native';
import { ExpenseCard } from './ExpenseCard';
import { Expense, deleteExpense } from '../store/slices/expenses-slice';
import { useExpensesDispatch } from '../store/hooks';

type ExpensesFlatListProps = {
	expenses: Expense[];
};

export const ExpensesFlatList = ({ expenses }: ExpensesFlatListProps) => {
	const dispatch = useExpensesDispatch();
	const handleDelete = (expense: Expense) => {
		dispatch(deleteExpense(expense));
	};

	const expenseRenderItem: ListRenderItem<Expense> = ({ item }) => (
		<ExpenseItem item={item} />
	);

	const ExpenseItem = ({ item }: { item: Expense }) => (
		<ExpenseCard
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
