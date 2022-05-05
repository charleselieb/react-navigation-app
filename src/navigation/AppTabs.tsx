import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from 'screens/Home';
import Search from 'screens/Search';

export type AppTabsParamList = {
  Home: undefined;
  Search: undefined;
};

interface TabsProps {}

const Tabs = createBottomTabNavigator<AppTabsParamList>();

const AppTabs: FC<TabsProps> = ({}) => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Search" component={Search} />
    </Tabs.Navigator>
  );
};

export default AppTabs;
