import { Text } from 'react-native'
import { ReactNode } from 'react'
import { styles } from './styles'

interface SectionTitleProps {
    children: ReactNode
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <Text style={styles.title}>
        {children}
    </Text>
  )
}
