import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { theme } from '../constants/theme';

export default function OfferBanner() {
  return (
    <View style={styles.section}>
      <View style={styles.card}>
        <View style={styles.content}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>Limited Time</Text>
          </View>
          
          <Text style={styles.title}>
            Unlock <Text style={styles.highlight}>30% Off</Text> Your{'\n'}
            First Premium Ride
          </Text>
          
          <Pressable style={styles.cta}>
            <Text style={styles.ctaText}>Claim Offer</Text>
            <Feather name="arrow-right" size={16} color={theme.colors.backgroundPrimary} style={{ marginLeft: 8 }} />
          </Pressable>
        </View>

        {/* Decorative elements */}
        <Text style={[styles.sparkle, styles.s1]}>✨</Text>
        <Text style={[styles.sparkle, styles.s2]}>💎</Text>
        <Text style={[styles.sparkle, styles.s3]}>🎫</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    padding: theme.spacing.l,
  },
  card: {
    backgroundColor: 'rgba(182,147,255,0.1)',
    borderRadius: 24,
    padding: theme.spacing.xl,
    borderWidth: 1,
    borderColor: 'rgba(182,147,255,0.3)',
    position: 'relative',
    overflow: 'hidden',
  },
  content: {
    position: 'relative',
    zIndex: 10,
  },
  tag: {
    backgroundColor: theme.colors.luxury,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    alignSelf: 'flex-start',
    marginBottom: theme.spacing.m,
  },
  tagText: {
    color: theme.colors.backgroundPrimary,
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  title: {
    color: theme.colors.textPrimary,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: theme.spacing.l,
    lineHeight: 32,
  },
  highlight: {
    color: theme.colors.luxury,
    fontStyle: 'italic',
  },
  cta: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.textPrimary,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  ctaText: {
    color: theme.colors.backgroundPrimary,
    fontSize: 14,
    fontWeight: 'bold',
  },
  sparkle: {
    position: 'absolute',
    opacity: 0.8,
  },
  s1: {
    top: 20,
    right: 30,
    fontSize: 24,
  },
  s2: {
    bottom: 20,
    right: 20,
    fontSize: 32,
  },
  s3: {
    top: '40%',
    right: 80,
    fontSize: 20,
    opacity: 0.5,
  },
});
