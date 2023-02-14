import { Dimensions, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { generateProgressPercentage } from '../utils/generate-progress-percentage';

const weekDays = 7
const screenHorizontalPadding = (32 * 2) / 5

export const dayMarginBetween = 8
export const daySize = (Dimensions.get('screen').width / weekDays) - (screenHorizontalPadding + 5)

interface HabitDayProps extends TouchableOpacityProps {
  date: Date;
  amount?: number;
  completed?: number;
}

export function HabitDay({ completed = 0, amount = 0, date, ...rest }: HabitDayProps) {
  const amountAccomplishedPercentage = amount > 0 ? generateProgressPercentage(amount, completed) : 0

  return (
    <TouchableOpacity
      className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800"
      style={{ width: daySize, height: daySize }}
      activeOpacity={0.7}
      {...rest}
    />
  )
}