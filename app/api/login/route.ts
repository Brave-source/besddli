import { NextResponse, NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  
  try {
    const response = await fetch('https://www.errandsplus.ng/bess_api/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Login proxy error:', error);
    return NextResponse.json(
      { status: 'error', message: 'Failed to connect to the server' },
      { status: 500 }
    );
  }
}