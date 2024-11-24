import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Mock implementation: Read the incoming body
    const body = await req.json();
    const { otp, phone } = body;

    // Log the received data for mock-up purposes
    console.log("Received OTP verification request:", { otp, phone });

    if (otp === "1111") {
      // Return a success response for the mock-up
      return NextResponse.json(
        { message: "Phone verification successful." },
        { status: 200 },
      );
    }

    return NextResponse.json(
      { error: "كود التحقيق غير صحيح" },
      { status: 400 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Server error. Please try again later." },
      { status: 500 },
    );
  }
}
