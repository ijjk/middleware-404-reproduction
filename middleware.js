import { NextResponse } from 'next/server';

export const config = {
	matcher: ['/', '/:path*'],
};

export function middleware(request) {
	return NextResponse.next();
}
