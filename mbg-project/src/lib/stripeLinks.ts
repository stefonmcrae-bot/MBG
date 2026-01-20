export type PackageTier = 'standard' | 'gold' | 'platinum';

const STRIPE_LINKS: Record<PackageTier, string> = {
  standard: import.meta.env.VITE_STRIPE_LINK_STANDARD || '',
  gold: import.meta.env.VITE_STRIPE_LINK_GOLD || '',
  platinum: import.meta.env.VITE_STRIPE_LINK_PLATINUM || '',
};

export function redirectToStripePaymentLink(args: {
  tier: PackageTier;
  email?: string;
  phone?: string;
}): void {
  const { tier, email, phone } = args;
  
  const link = STRIPE_LINKS[tier];
  
  if (!link) {
    console.error(`Stripe payment link not configured for tier: ${tier}`);
    alert(`Payment link not available. Please contact support.`);
    return;
  }

  // Build URL with query parameters
  const url = new URL(link);
  
  if (email) {
    url.searchParams.set('prefilled_email', email);
  }
  
  if (phone) {
    url.searchParams.set('prefilled_phone_number', phone);
  }

  // Redirect to Stripe payment link
  window.location.href = url.toString();
}
