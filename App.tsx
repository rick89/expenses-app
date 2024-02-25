import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AllExpensesScreen } from './screens/AllExpensesScreen';
import { RecentExpensesScreen } from './screens/RecentExpensesScreen';
import { ManageExpenseScreen } from './screens/ManageExpenseScreen';
import { store, persistor } from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Text, TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function BottomTabs() {
	return (
		<Tab.Navigator
			screenOptions={({ navigation }) => ({
				headerStyle: {
					backgroundColor: '#3b10c9',
					shadowColor: 'transparent', // this covers iOS
					elevation: 0, // this covers Android
				},
				headerTitleStyle: {
					color: 'white',
				},
				headerRight: () => {
					return (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('ManageExpenseScreen')
							}
						>
							<Text
								style={{
									fontWeight: 'bold',
									fontSize: 20,
									marginRight: 20,
									color: 'white',
								}}
							>
								+
							</Text>
						</TouchableOpacity>
					);
				},
			})}
		>
			<Tab.Screen name='Recent' component={RecentExpensesScreen} />
			<Tab.Screen name='All' component={AllExpensesScreen} />
		</Tab.Navigator>
	);
}

export default function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen
							name='AllTab'
							component={BottomTabs}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name='AllExpensesScreen'
							component={AllExpensesScreen}
							options={{
								title: 'All expenses',
							}}
						/>
						<Stack.Screen
							name='RecentExpensesScreen'
							component={RecentExpensesScreen}
							options={{
								title: 'Recent expenses',
							}}
						/>
						<Stack.Screen
							name='ManageExpenseScreen'
							component={ManageExpenseScreen}
							options={{
								title: 'Manage expense',
							}}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</PersistGate>
		</Provider>
	);
}
