import { onCurrentUser } from '@/actions/user';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe instance
const stripe = new Stripe(process.env.STRIPE_CLIENT_SECRET as string, {
    apiVersion: "2024-12-18.acacia", // Use the version mentioned in the error
});

export async function GET() {
    try {
        const user = await onCurrentUser();
        if (!user) {
            return NextResponse.json({ status: 404, error: 'User not found' }, { status: 404 });
        }

        const priceId = process.env.STRIPE_SUBSCRIPTION_PRICE_ID;
        if (!priceId) {
            return NextResponse.json({ status: 500, error: 'Price ID is not configured' }, { status: 500 });
        }

        const session = await stripe.checkout.sessions.create({
            mode: 'subscription',
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            success_url: `${process.env.NEXT_PUBLIC_HOST_URL}/payment?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_PUBLIC_HOST_URL}/payment?cancel=true`,
        });

        if (session) {
            return NextResponse.json({
                status: 200,
                session_url: session.url,
            });
        }

        return NextResponse.json({ status: 500, error: 'Failed to create checkout session' }, { status: 500 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: 500, error: 'Internal Server Error' }, { status: 500 });
    }
}
