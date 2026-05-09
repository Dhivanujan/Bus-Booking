import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { theme } from '../constants/theme';

const routes = [
  {
    from: 'Colombo',
    to: 'Kandy',
    duration: '3h 20m',
    price: 'LKR 1,200',
    category: 'Luxury A/C',
    seats: 14,
    bgColor: 'rgba(0,209,178,0.1)',
    borderColor: 'rgba(0,209,178,0.3)',
  },
  {
    from: 'Colombo',
    to: 'Jaffna',
    duration: '6h 45m',
    price: 'LKR 2,800',
    category: 'Premium Sleeper',
    seats: 8,
    bgColor: 'rgba(182,147,255,0.1)',
    borderColor: 'rgba(182,147,255,0.3)',
  },
  {
    from: 'Galle',
    to: 'Colombo',
    duration: '2h 10m',
    price: 'LKR 850',
    category: 'Semi-Luxury',
    seats: 22,
    bgColor: 'rgba(255,179,107,0.1)',
    borderColor: 'rgba(255,179,107,0.3)',
  },
  {
    from: 'Negombo',
    to: 'Matara',
    duration: '4h 30m',
    price: 'LKR 1,650',
    category: 'Executive',
    seats: 6,
    bgColor: 'rgba(199,243,107,0.1)',
    borderColor: 'rgba(199,243,107,0.3)',
  },
];

export default function PopularRoutes() {
  return (
    <View style={styles.section}>
      <View style={styles.sectionTitleContainer}>
        <View style={styles.dot} />
        <Text style={styles.sectionTitle}>Popular Routes</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
        <View style={styles.grid}>
          {routes.map((r, i) => (
            <View
              style={[styles.card, { backgroundColor: r.bgColor, borderColor: r.borderColor }]}
              key={i}
            >
              {/* Route path header */}
              <View style={styles.routeHeader}>
                <View style={styles.routeDot} />
                <View style={styles.routeLine}>
                  <Text style={styles.busIndicator}>🚌</Text>
                </View>
                <View style={styles.routeDotEnd} />
              </View>

              {/* Cities */}
              <View style={styles.routeCities}>
                <View>
                  <Text style={styles.routeCity}>{r.from}</Text>
                  <Text style={styles.routeLabel}>Departure</Text>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                  <Text style={styles.routeCity}>{r.to}</Text>
                  <Text style={styles.routeLabel}>Arrival</Text>
                </View>
              </View>

              {/* Meta info */}
              <View style={styles.routeMeta}>
                <View style={styles.metaItem}>
                  <Text style={styles.metaValue}>{r.duration}</Text>
                  <Text style={styles.metaLabel}>Duration</Text>
                </View>
                <View style={styles.metaItem}>
                  <Text style={[styles.metaValue, { fontSize: 10 }]}>{r.category}</Text>
                  <Text style={styles.metaLabel}>Category</Text>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                  <Text style={styles.routePrice}>{r.price}</Text>
                  <View style={styles.routeSeats}>
                    <View style={styles.seatsDot} />
                    <Text style={styles.seatsText}>{r.seats} seats</Text>
                  </View>
                </View>
              </View>
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
    borderWidth: 1,
    borderRadius: 24,
    padding: theme.spacing.m,
    marginRight: theme.spacing.m,
    width: 280,
  },
  routeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.m,
  },
  routeDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.accentPrimary,
    borderWidth: 2,
    borderColor: theme.colors.backgroundPrimary,
  },
  routeDotEnd: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.luxury,
    borderWidth: 2,
    borderColor: theme.colors.backgroundPrimary,
  },
  routeLine: {
    flex: 1,
    height: 2,
    backgroundColor: 'rgba(255,255,255,0.1)',
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  busIndicator: {
    fontSize: 12,
    marginTop: -16,
  },
  routeCities: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.l,
  },
  routeCity: {
    color: theme.colors.textPrimary,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  routeLabel: {
    color: theme.colors.textSecondary,
    fontSize: 10,
    textTransform: 'uppercase',
  },
  routeMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(11,16,32,0.4)',
    padding: 12,
    borderRadius: 16,
  },
  metaItem: {
    alignItems: 'flex-start',
  },
  metaValue: {
    color: theme.colors.textPrimary,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  metaLabel: {
    color: theme.colors.textSecondary,
    fontSize: 10,
  },
  routePrice: {
    color: theme.colors.accentPrimary,
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  routeSeats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seatsDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: theme.colors.highlight,
    marginRight: 4,
  },
  seatsText: {
    color: theme.colors.textSecondary,
    fontSize: 10,
  },
});
