import { StatusBar } from 'expo-status-bar';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const categories = [
  { name: 'Food & treats', icon: '🥣', amount: '$286.00', width: '37%', color: '#E9A45F' },
  { name: 'Vet care', icon: '🩺', amount: '$198.00', width: '26%', color: '#78A88D' },
  { name: 'Grooming', icon: '✂️', amount: '$148.00', width: '19%', color: '#8B91C7' },
  { name: 'Supplies', icon: '🧸', amount: '$139.50', width: '18%', color: '#D88A7C' },
] as const;

const transactions = [
  { name: 'Paws & Co.', detail: 'Food & treats · Today', amount: '−$48.90', icon: '🥣', color: '#F9E9D9' },
  { name: 'Greenfield Vet', detail: 'Vet care · Oct 10', amount: '−$86.00', icon: '🩺', color: '#E5F0E8' },
  { name: 'Happy Tails Grooming', detail: 'Grooming · Oct 8', amount: '−$42.00', icon: '✂️', color: '#EBEAF6' },
];

function Dashboard() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'right', 'bottom', 'left']}>
      <StatusBar style="dark" />
      <View style={styles.screen}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <View>
              <Text style={styles.brand}>PAWBUDGET</Text>
              <Text style={styles.greeting}>Good morning, Alex</Text>
              <Text style={styles.subtitle}>A little check-in for you and Milo</Text>
            </View>
            <View style={styles.avatar}>
              <Text style={styles.avatarEmoji}>🐕</Text>
            </View>
          </View>

          <View style={styles.budgetCard}>
            <View style={styles.cardAccent} />
            <View style={styles.budgetTopRow}>
              <View style={styles.monthBadge}>
                <Text style={styles.monthBadgeText}>OCTOBER BUDGET</Text>
              </View>
              <Text style={styles.pawPrint}>🐾</Text>
            </View>

            <Text style={styles.balanceLabel}>MONTHLY BUDGET LEFT</Text>
            <Text style={styles.balanceAmount}>$428.50</Text>
            <Text style={styles.balanceCaption}>You still have room for the good stuff.</Text>

            <View style={styles.progressTrack}>
              <View style={styles.progressFill} />
            </View>
            <View style={styles.budgetSummary}>
              <Text style={styles.budgetSummaryText}>$771.50 spent</Text>
              <Text style={styles.budgetSummaryText}>of $1,200</Text>
            </View>
          </View>

          <View style={styles.insightCard}>
            <View style={styles.insightIcon}>
              <Text style={styles.insightEmoji}>🌿</Text>
            </View>
            <View style={styles.insightCopy}>
              <Text style={styles.insightTitle}>You’re right on track</Text>
              <Text style={styles.insightText}>You’ve used 64% of this month’s budget.</Text>
            </View>
            <Text style={styles.insightChevron}>›</Text>
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Spending by category</Text>
            <Text style={styles.sectionAction}>OCT</Text>
          </View>
          <View style={styles.categoryCard}>
            {categories.map((category, index) => (
              <View
                key={category.name}
                style={[
                  styles.categoryRow,
                  index !== categories.length - 1 && styles.categoryRowSpacing,
                ]}
              >
                <View style={styles.categoryIcon}>
                  <Text style={styles.categoryEmoji}>{category.icon}</Text>
                </View>
                <View style={styles.categoryInfo}>
                  <View style={styles.categoryLabels}>
                    <Text style={styles.categoryName}>{category.name}</Text>
                    <Text style={styles.categoryAmount}>{category.amount}</Text>
                  </View>
                  <View style={styles.categoryTrack}>
                    <View
                      style={[
                        styles.categoryFill,
                        { width: category.width, backgroundColor: category.color },
                      ]}
                    />
                  </View>
                </View>
              </View>
            ))}
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent activity</Text>
            <Text style={styles.sectionAction}>SEE ALL</Text>
          </View>
          <View style={styles.activityCard}>
            {transactions.map((transaction, index) => (
              <View
                key={transaction.name}
                style={[
                  styles.transactionRow,
                  index !== transactions.length - 1 && styles.transactionRowSpacing,
                ]}
              >
                <View style={[styles.transactionIcon, { backgroundColor: transaction.color }]}>
                  <Text style={styles.transactionEmoji}>{transaction.icon}</Text>
                </View>
                <View style={styles.transactionInfo}>
                  <Text style={styles.transactionName}>{transaction.name}</Text>
                  <Text style={styles.transactionDetail}>{transaction.detail}</Text>
                </View>
                <Text style={styles.transactionAmount}>{transaction.amount}</Text>
              </View>
            ))}
          </View>
        </ScrollView>

        <View style={styles.bottomNav}>
          <View style={styles.navItem}>
            <Text style={[styles.navIcon, styles.navIconSelected]}>⌂</Text>
            <Text style={[styles.navLabel, styles.navLabelSelected]}>Home</Text>
          </View>
          <View style={styles.navItem}>
            <Text style={styles.navIcon}>↗</Text>
            <Text style={styles.navLabel}>Activity</Text>
          </View>
          <View style={styles.navItem}>
            <Text style={styles.navIcon}>♡</Text>
            <Text style={styles.navLabel}>My pets</Text>
          </View>
          <View style={styles.navItem}>
            <Text style={styles.navIcon}>•••</Text>
            <Text style={styles.navLabel}>More</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <Dashboard />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F5EF',
  },
  screen: {
    flex: 1,
    backgroundColor: '#F7F5EF',
  },
  scrollContent: {
    paddingHorizontal: 22,
    paddingTop: 12,
    paddingBottom: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 22,
  },
  brand: {
    color: '#66816F',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 7,
  },
  greeting: {
    color: '#24342B',
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: -0.5,
  },
  subtitle: {
    color: '#7E887F',
    fontSize: 13,
    marginTop: 5,
  },
  avatar: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    backgroundColor: '#F1D8BD',
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  avatarEmoji: {
    fontSize: 23,
  },
  budgetCard: {
    overflow: 'hidden',
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 17,
    borderRadius: 24,
    backgroundColor: '#315E4A',
    marginBottom: 14,
  },
  cardAccent: {
    position: 'absolute',
    top: -80,
    right: -34,
    width: 194,
    height: 194,
    borderRadius: 97,
    backgroundColor: 'rgba(255,255,255,0.045)',
  },
  budgetTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 17,
  },
  monthBadge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.13)',
  },
  monthBadgeText: {
    color: '#F4E9D8',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.1,
  },
  pawPrint: {
    fontSize: 18,
    opacity: 0.8,
  },
  balanceLabel: {
    color: '#C5D8C9',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  balanceAmount: {
    color: '#FFFFFF',
    fontSize: 37,
    fontWeight: '700',
    letterSpacing: -1.2,
    marginTop: 4,
  },
  balanceCaption: {
    color: '#D6E3D7',
    fontSize: 12,
    marginTop: 2,
  },
  progressTrack: {
    height: 7,
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginTop: 19,
  },
  progressFill: {
    width: '64%',
    height: '100%',
    borderRadius: 4,
    backgroundColor: '#F0BB78',
  },
  budgetSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 9,
  },
  budgetSummaryText: {
    color: '#E1EADF',
    fontSize: 11,
    fontWeight: '500',
  },
  insightCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 13,
    borderRadius: 18,
    backgroundColor: '#EAF0E9',
    marginBottom: 24,
  },
  insightIcon: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: '#DCE9DC',
    marginRight: 11,
  },
  insightEmoji: {
    fontSize: 18,
  },
  insightCopy: {
    flex: 1,
  },
  insightTitle: {
    color: '#365C45',
    fontSize: 13,
    fontWeight: '700',
  },
  insightText: {
    color: '#708274',
    fontSize: 11,
    marginTop: 3,
  },
  insightChevron: {
    color: '#76917C',
    fontSize: 25,
    marginLeft: 6,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 11,
  },
  sectionTitle: {
    color: '#29372E',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
  sectionAction: {
    color: '#829087',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1.2,
  },
  categoryCard: {
    padding: 15,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    marginBottom: 24,
  },
  categoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryRowSpacing: {
    marginBottom: 15,
  },
  categoryIcon: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: '#F8F6F1',
    marginRight: 11,
  },
  categoryEmoji: {
    fontSize: 16,
  },
  categoryInfo: {
    flex: 1,
  },
  categoryLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 7,
  },
  categoryName: {
    color: '#46534A',
    fontSize: 12,
    fontWeight: '600',
  },
  categoryAmount: {
    color: '#354239',
    fontSize: 12,
    fontWeight: '700',
  },
  categoryTrack: {
    height: 5,
    overflow: 'hidden',
    borderRadius: 3,
    backgroundColor: '#F1F1ED',
  },
  categoryFill: {
    height: '100%',
    borderRadius: 3,
  },
  activityCard: {
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },
  transactionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionRowSpacing: {
    marginBottom: 15,
  },
  transactionIcon: {
    width: 39,
    height: 39,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    marginRight: 11,
  },
  transactionEmoji: {
    fontSize: 18,
  },
  transactionInfo: {
    flex: 1,
  },
  transactionName: {
    color: '#354239',
    fontSize: 12,
    fontWeight: '700',
  },
  transactionDetail: {
    color: '#8A938C',
    fontSize: 10,
    marginTop: 4,
  },
  transactionAmount: {
    color: '#39463D',
    fontSize: 12,
    fontWeight: '700',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: 7,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#E8E6DF',
    backgroundColor: '#FBFAF6',
  },
  navItem: {
    minWidth: 56,
    alignItems: 'center',
  },
  navIcon: {
    color: '#8B958D',
    fontSize: 20,
    fontWeight: '600',
    height: 23,
  },
  navIconSelected: {
    color: '#315E4A',
    fontSize: 24,
  },
  navLabel: {
    color: '#929A93',
    fontSize: 9,
    fontWeight: '600',
    marginTop: 2,
  },
  navLabelSelected: {
    color: '#315E4A',
    fontWeight: '800',
  },
});
