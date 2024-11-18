import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import { NextResponse } from "next/server";
import { signIn } from "next-auth/react";

export async function POST(req: Request) {
  try {
    await dbConnect();

    const { name, nationality, phone, age, gender } = await req.json();

    if (!name || !nationality || !phone || !age || !gender) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const existingUser = await User.findOne({ phone });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists, logging in." },
        { status: 200 },
      );
    }

    const newUser = new User({
      name,
      nationality,
      phone,
      age,
      gender,
    });

    await newUser.save();

    await signIn("credentials", {
      phone: newUser.phone,
      callbackUrl: "/",
      redirect: false,
    });

    return NextResponse.json(
      { message: "User created successfully", user: newUser },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Server error. Please try again later." },
      { status: 500 },
    );
  }
}
