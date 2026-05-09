import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { theme } from '../constants/theme';

const features = [
  {
    name: 'Live Tracking',
    icon: 'clock',
    color: '#00D1B2',
    bg: 'rgba(0,209,178,0.12)',
  },
  {
    name: 'Luxury Coaches',
    icon: 'layers',
    color: '#B693FF',
    bg: 'rgba(182,147,255,0.12)',
  },
  {
    name: 'Smart Payments',
    icon: 'credit-card',
    color: '#FFB36B',
    bg: 'rgba(255,179,107,0.12)',
  },
  {
    name: 'Seat Selection',
    icon: 'user-check',
    color: '#C7F36B',
    bg: 'rgba(199,243,107,0.12)',
  },
  {
    name: '24/7 Support',
    icon: 'message-square',
    color: '#FF6B8A',
    bg: 'rgba(255,107,138,0.12)',
  },
];

export default function QuickAccess() {
  return (
    <View style={styles.section}>
      <View style={styles.sectionTitleContainer}>
        <View style={styles.dot} />
        <Text style={styles.sectionTitle}>Quick Access</Text>
      </View>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
        <View style={styles.grid}>
          {features.map((f, i) => (
            <View style={styles.card} key={i}>
              <View style={[styles.iconWrapper, { backgroundColor: f.bg }]}>
                {/* @ts-ignore */}
                <Feather name={f.icon} size={22} color={f.color} />
              </View>
              <Text style={styles.name}>{f.name}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingVertical: theme.spacing.xl,
    paddingLeft: theme.spacing.l,
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.l,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.accentPrimary,
    marginRight: 8,
    shadowColor: theme.colors.accentPrimary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 3,
  },
  sectionTitle: {
    color: theme.colors.textPrimary,
    fontSize: 20,
    fontWeight: 'bold',
  },
  scroll: {
    paddingRight: theme.spacing.l,
  },
  grid: {
    flexDirection: 'row',
  },
  card: {
    backgroundColor: 'rgba(26,35,61,0.55)',
    borderWidth: 1,
    borderColor: theme.colors.glassBorder,
    borderRadius: 20,
    padding: theme.spacing.m,
    alignItems: 'center',
    marginRight: theme.spacing.m,
    width: 100,
  },
  iconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.s,
  },
  name: {
    color: theme.colors.textPrimary,
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
  },
});
