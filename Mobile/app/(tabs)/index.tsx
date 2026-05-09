import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import HeroSection from '@/components/HeroSection';
import BookingCard from '@/components/BookingCard';
import QuickAccess from '@/components/QuickAccess';
import PopularRoutes from '@/components/PopularRoutes';
import OfferBanner from '@/components/OfferBanner';
import { theme } from '@/constants/theme';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <HeroSection />
        <BookingCard />
        <QuickAccess />
        <PopularRoutes />
        <OfferBanner />
        
        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundPrimary,
  },
  scrollContent: {
    paddingBottom: 40,
  },
});
