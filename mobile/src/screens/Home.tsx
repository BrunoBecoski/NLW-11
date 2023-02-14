import { Alert, ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { api } from '../lib/axios';
import { generateRangeBetweenDates } from '../utils/generate-range-between-dates';

import { Header } from '../components/Header';
import { HabitDay, daySize } from '../components/HabitDay';
import { useEffect, useState } from 'react';

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const datesFormYearStart = generateRangeBetweenDates()

const minimumSummaryDatesSizes = 18 * 7 // 18 weeks
const amountOfDaysToFill = minimumSummaryDatesSizes - datesFormYearStart.length

export function Home() {
  const [loading, setLoading] = useState(true)
  const [summary, setSummary] = useState(null)
  const { navigate } = useNavigation()

  async function fecthData() {
    try {
      setLoading(true)
      const response = await api.get('/summary')
      setSummary(response.data)
    } catch (error) {
      Alert.alert('Ops', 'Não foi possível carregar o sumarário de hábitos')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fecthData()
  }, []) 

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />

      <View className="flex-row mt-6 mb-2">
        {
          weekDays.map((weekDay, i)=> (
            <Text 
              key={`${weekDay}-${i}`}
              className="text-zinc-400 text-xl font-bold text-center mx-1"
              style={{ width: daySize, height: daySize }}
            >
              {weekDay}
            </Text>
          ))
        }
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <View className="flex-row flex-wrap">
          {
            datesFormYearStart.map(date => (
              <HabitDay
                onPress={() => navigate('habit', { date: date.toISOString() })}
                key={date.toString()}
              />
            ))
          }

          {
            amountOfDaysToFill > 0 && Array
              .from({ length: amountOfDaysToFill })
              .map((_, index) => (
                <View
                  key={index}
                  className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                  style={{ width: daySize, height: daySize }}
                />
              ))
          }
        </View>
      </ScrollView>
    </View>
  )
}