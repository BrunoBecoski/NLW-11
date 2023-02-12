import { ScrollView, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { BackButton } from '../components/BackButton';

interface HabitParams {
  date: string;
}

export function Habit() {
  const route = useRoute();
  const { date } = route.params as HabitParams;

  return (
    <View className="flex-1 bg-background px-8 pt-16">      
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <BackButton />
      </ScrollView>
    </View>
  )
}