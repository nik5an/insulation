import { checkSubscription, getCustomerIdFromUserId, stripeAdmin } from '@/services/stripeAdmin';
import { NextRequest, NextResponse } from 'next/server';
import { getUserIdFromRequest } from '@/services/auth';

export async function GET(request: NextRequest) {
  const userId = await getUserIdFromRequest(request);

  if (userId == null) return new Response('Unauthorized', { status: 401 });

  const customerId = await getCustomerIdFromUserId(userId);

  const subscription = await checkSubscription(customerId);

  return NextResponse.json({ subscription });
}

