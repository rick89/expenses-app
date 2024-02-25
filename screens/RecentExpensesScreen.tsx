import { useExpensesSelector } from '../store/hooks';
import { ExpensesFlatList } from '../components/ExpensesFlatList';
import { ScreenWrapper } from '../components/ScreenWrapper';

//@ts-ignore
export const RecentExpensesScreen = ({ navigation }) => {
	const expenses = useExpensesSelector((state) => state.expenses);
	console.log('exp', expenses);
	return (
		<ScreenWrapper>
			<ExpensesFlatList expenses={expenses} />
		</ScreenWrapper>
	);
};
