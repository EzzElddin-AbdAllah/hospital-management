import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const secret = process.env.NEXTAUTH_SECRET;

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const token = await getToken({ req, secret });

    if (!token) {
      throw new Error("Missing token");
    }

    const { phone } = token;
    await dbConnect();
    const user = await User.findOne({ phone });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(
      {
        user,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Server error. Please try again later." },
      { status: 500 },
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const token = await getToken({ req, secret });

    if (!token) {
      throw new Error("Missing token");
    }

    const { phone } = token;
    await dbConnect();
    const body = await req.json();

    const updatedUser = await User.findOneAndUpdate(
      { phone },
      {
        name: body.name,
        nationality: body.nationality,
        phone: body.phone,
        age: body.age,
        gender: body.gender,
      },
      { new: true },
    );

    if (!updatedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(
      {
        message: "User updated successfully",
        user: {
          username: updatedUser.username,
          email: updatedUser.email,
          createdAt: updatedUser.createdAt,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Server error. Please try again later." },
      { status: 500 },
    );
  }
}
