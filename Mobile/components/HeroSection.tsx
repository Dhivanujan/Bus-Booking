import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Svg, { Rect, Circle, Line, LinearGradient, Stop, Defs, Path, Ellipse } from 'react-native-svg';
import { theme } from '../constants/theme';

const { width } = Dimensions.get('window');

export default function HeroSection() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.badge}>
          <View style={styles.pulseDot} />
          <Text style={styles.badgeText}>Smart Mobility</Text>
        </View>

        <Text style={styles.title}>Move Smarter{'\n'}Across Every Mile</Text>
        <Text style={styles.subtitle}>
          Experience premium real-time travel with intelligent booking, live tracking, and luxury comfort.
        </Text>

        <View style={styles.busWrapper}>
          {/* Simple SVGs to represent the 3D bus */}
          <Svg width={width - 40} height={160} viewBox="0 0 320 160">
            <Defs>
              <LinearGradient id="busBody" x1="0" y1="0" x2="320" y2="160">
                <Stop offset="0%" stopColor="#1A233D" />
                <Stop offset="50%" stopColor="#222d4d" />
                <Stop offset="100%" stopColor="#121A2F" />
              </LinearGradient>
              <LinearGradient id="busTop" x1="40" y1="30" x2="280" y2="30">
                <Stop offset="0%" stopColor="#00D1B2" stopOpacity="0.15" />
                <Stop offset="100%" stopColor="#B693FF" stopOpacity="0.15" />
              </LinearGradient>
              <LinearGradient id="windowGrad" x1="0" y1="0" x2="0" y2="1">
                <Stop offset="0%" stopColor="#00D1B2" stopOpacity="0.4" />
                <Stop offset="100%" stopColor="#B693FF" stopOpacity="0.2" />
              </LinearGradient>
              <LinearGradient id="headlight" x1="0" y1="0" x2="1" y2="0">
                <Stop offset="0%" stopColor="#FFB36B" stopOpacity="0.8" />
                <Stop offset="100%" stopColor="#FFB36B" stopOpacity="0" />
              </LinearGradient>
            </Defs>

            {/* Shadow */}
            <Ellipse cx="160" cy="145" rx="120" ry="8" fill="rgba(0,209,178,0.08)" />

            {/* Bus body */}
            <Rect x="40" y="40" width="240" height="80" rx="16" fill="url(#busBody)" stroke="rgba(0,209,178,0.2)" strokeWidth="1" />
            <Rect x="40" y="40" width="240" height="20" rx="16" fill="url(#busTop)" />
            <Rect x="50" y="74" width="220" height="1.5" rx="1" fill="rgba(0,209,178,0.15)" />

            {/* Windows */}
            {[60, 94, 128, 162, 196, 230].map((x, i) => (
              <Rect key={i} x={x} y="48" width="28" height="22" rx="6" fill="url(#windowGrad)" />
            ))}

            {/* Front windshield */}
            <Path d="M268 48 Q280 48 280 58 L280 68 Q280 72 276 72 L268 72 Q264 72 264 68 L264 52 Q264 48 268 48Z"
              fill="rgba(0,209,178,0.35)" stroke="rgba(0,209,178,0.3)" strokeWidth="0.5" />

            {/* Headlights */}
            <Rect x="280" y="80" width="8" height="12" rx="4" fill="#FFB36B" opacity="0.9" />
            <Rect x="288" y="82" width="20" height="8" rx="4" fill="url(#headlight)" />
            <Rect x="40" y="82" width="6" height="10" rx="3" fill="#FF6B8A" opacity="0.7" />

            {/* Door */}
            <Rect x="156" y="80" width="18" height="36" rx="4" fill="rgba(0,209,178,0.1)" stroke="rgba(0,209,178,0.15)" strokeWidth="0.5" />
            <Line x1="165" y1="82" x2="165" y2="114" stroke="rgba(0,209,178,0.15)" strokeWidth="0.5" />

            {/* Wheels */}
            {[100, 230].map((cx, i) => (
              <React.Fragment key={i}>
                <Circle cx={cx} cy="125" r="14" fill="#0B1020" stroke="rgba(0,209,178,0.2)" strokeWidth="1.5" />
                <Circle cx={cx} cy="125" r="7" fill="#1A233D" stroke="rgba(0,209,178,0.15)" strokeWidth="1" />
                <Circle cx={cx} cy="125" r="3" fill="rgba(0,209,178,0.3)" />
              </React.Fragment>
            ))}

            {/* Brand */}
            <Circle cx="160" cy="105" r="8" fill="rgba(0,209,178,0.15)" stroke="rgba(0,209,178,0.3)" strokeWidth="0.5" />
            <SvgText x="160" y="108" textAnchor="middle" fill="rgba(0,209,178,0.6)" fontSize="7" fontWeight="700">VX</SvgText>
          </Svg>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.l,
    paddingTop: theme.spacing.xxl * 2,
    alignItems: 'center',
    width: '100%',
  },
  content: {
    alignItems: 'center',
    width: '100%',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,209,178,0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(0,209,178,0.2)',
    marginBottom: theme.spacing.m,
  },
  pulseDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.accentPrimary,
    marginRight: 8,
  },
  badgeText: {
    color: theme.colors.accentPrimary,
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: theme.colors.textPrimary,
    textAlign: 'center',
    marginBottom: theme.spacing.m,
    lineHeight: 40,
  },
  subtitle: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginBottom: theme.spacing.xl,
    paddingHorizontal: theme.spacing.m,
    lineHeight: 20,
  },
  busWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
