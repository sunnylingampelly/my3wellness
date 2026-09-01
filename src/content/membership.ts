// Proposed membership program per the site brief. MY3 Wellness Spa does not currently
// publish a membership plan — pricing and benefits below are suggested starting
// points and should be reviewed/priced by the client before launch.

export type MembershipTier = {
  name: "Silver" | "Gold" | "Platinum";
  price: number;
  billingPeriod: string;
  discount: string;
  benefits: string[];
  highlight?: boolean;
};

export const membershipTiers: MembershipTier[] = [
  {
    name: "Silver",
    price: 4999,
    billingPeriod: "per year",
    discount: "10% off every treatment",
    benefits: [
      "10% off all signature and combination therapies",
      "Priority slot booking on weekdays",
      "Complimentary birthday treatment upgrade",
    ],
  },
  {
    name: "Gold",
    price: 9999,
    billingPeriod: "per year",
    discount: "18% off every treatment",
    benefits: [
      "18% off all signature and combination therapies",
      "Priority slot booking, weekdays and weekends",
      "Complimentary birthday treatment",
      "One guest pass per quarter for a friend or partner",
    ],
    highlight: true,
  },
  {
    name: "Platinum",
    price: 17999,
    billingPeriod: "per year",
    discount: "25% off every treatment",
    benefits: [
      "25% off all signature and combination therapies",
      "Guaranteed priority booking, including couple suites",
      "Complimentary birthday treatment for you and a guest",
      "Two guest passes per quarter",
      "Dedicated concierge line for bookings",
    ],
  },
];
