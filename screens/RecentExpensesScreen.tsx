import { useExpensesSelector } from '../store/hooks';
import { ExpensesFlatList } from '../components/ExpensesFlatList';
import { ScreenWrapper } from '../components/ScreenWrapper';
import { ExpensesTotalBar } from '../components/ExpensesTotalBar';
import { DateTime } from 'luxon';

//@ts-ignore
export const RecentExpensesScreen = ({ navigation }) => {
	const recentExpenses = useExpensesSelector((state) => state.expenses)
		.sort((a, b) => {
			const aDate = DateTime.fromISO(a.date);
			const bDate = DateTime.fromISO(b.date);
			if (aDate > bDate) {
				return -1;
			}
			if (aDate < bDate) {
				return 1;
			}
			return 0;
		})
		.slice(0, 7);
	return (
		<ScreenWrapper>
			<ExpensesTotalBar />
			<ExpensesFlatList expenses={recentExpenses} />
		</ScreenWrapper>
	);
};
