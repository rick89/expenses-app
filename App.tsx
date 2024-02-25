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
							name='Home'
							component={BottomTabs}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name='AllExpensesScreen'
							component={AllExpensesScreen}
						/>
						<Stack.Screen
							name='RecentExpensesScreen'
							component={RecentExpensesScreen}
						/>
						<Stack.Screen
							name='ManageExpenseScreen'
							component={ManageExpenseScreen}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</PersistGate>
		</Provider>
	);
}
