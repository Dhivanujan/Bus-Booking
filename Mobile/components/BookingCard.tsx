import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { theme } from '../constants/theme';

export default function BookingCard() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState('1');

  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>From</Text>
          <Feather name="map-pin" size={18} color={theme.colors.accentPrimary} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Enter departure city"
            placeholderTextColor={theme.colors.textSecondary}
            value={from}
            onChangeText={setFrom}
          />
        </View>

        <View style={styles.swapWrapper}>
          <Pressable style={styles.swapBtn} onPress={handleSwap}>
            <Feather name="refresh-cw" size={16} color={theme.colors.textPrimary} />
          </Pressable>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>To</Text>
          <Feather name="map-pin" size={18} color={theme.colors.luxury} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Enter destination city"
            placeholderTextColor={theme.colors.textSecondary}
            value={to}
            onChangeText={setTo}
          />
        </View>

        <View style={styles.row}>
          <View style={[styles.inputGroup, { flex: 1, marginRight: theme.spacing.s }]}>
            <Text style={styles.label}>Date</Text>
            <Feather name="calendar" size={16} color={theme.colors.textSecondary} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="YYYY-MM-DD"
              placeholderTextColor={theme.colors.textSecondary}
              value={date}
              onChangeText={setDate}
            />
          </View>

          <View style={[styles.inputGroup, { flex: 1, marginLeft: theme.spacing.s }]}>
            <Text style={styles.label}>Pass</Text>
            <Feather name="users" size={16} color={theme.colors.textSecondary} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="1"
              keyboardType="number-pad"
              placeholderTextColor={theme.colors.textSecondary}
              value={passengers}
              onChangeText={setPassengers}
            />
          </View>
        </View>

        <Pressable style={styles.ctaBtn}>
          <Text style={styles.ctaText}>Find My Bus</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.l,
    marginVertical: theme.spacing.m,
  },
  card: {
    backgroundColor: 'rgba(26,35,61,0.55)',
    borderRadius: 24,
    padding: theme.spacing.l,
    borderWidth: 1,
    borderColor: theme.colors.glassBorder,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(11,16,32,0.6)',
    borderWidth: 1,
    borderColor: theme.colors.glassBorder,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: theme.spacing.m,
    position: 'relative',
  },
  icon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    color: theme.colors.textPrimary,
    fontSize: 15,
  },
  label: {
    position: 'absolute',
    top: -8,
    left: 16,
    fontSize: 10,
    textTransform: 'uppercase',
    color: theme.colors.accentPrimary,
    backgroundColor: theme.colors.cardSurface,
    paddingHorizontal: 4,
    fontWeight: 'bold',
    overflow: 'hidden',
    borderRadius: 4,
  },
  swapWrapper: {
    alignItems: 'flex-end',
    marginTop: -28,
    marginBottom: -12,
    zIndex: 10,
    paddingRight: 24,
  },
  swapBtn: {
    backgroundColor: theme.colors.cardSurface,
    borderWidth: 1,
    borderColor: theme.colors.glassBorder,
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ctaBtn: {
    backgroundColor: theme.colors.accentPrimary, // Simplify gradient to a solid color for RN standard (or use expo-linear-gradient)
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: theme.spacing.s,
    shadowColor: theme.colors.accentPrimary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  ctaText: {
    color: theme.colors.backgroundPrimary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
