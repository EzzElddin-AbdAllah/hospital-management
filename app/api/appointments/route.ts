import dbConnect from "@/lib/dbConnect";
import Appointment from "@/models/Appointment";
import Doctor from "@/models/Doctor";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const secret = process.env.NEXTAUTH_SECRET;

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const token = await getToken({ req, secret });

    if (!token) {
      return NextResponse.json(
        { error: "User not authenticated." },
        { status: 401 },
      );
    }

    const { doctorId, date, time } = await req.json();

    if (!doctorId || !date || !time) {
      return NextResponse.json({ error: "Required fields." }, { status: 400 });
    }

    await dbConnect();

    const existingAppointment = await Appointment.findOne({
      doctor: doctorId,
      date,
      time,
    });

    if (existingAppointment) {
      return NextResponse.json({ error: "Aleady booked" }, { status: 400 });
    }

    const newAppointment = new Appointment({
      patient: token.userId,
      doctor: doctorId,
      date,
      time,
    });

    await newAppointment.save();

    return NextResponse.json(
      { message: "reservation successful" },
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

export async function GET(req: NextRequest) {
  try {
    const token = await getToken({ req, secret });

    if (!token) {
      return NextResponse.json(
        { error: "User not authenticated." },
        { status: 401 },
      );
    }

    await dbConnect();

    const appointments = await Appointment.find({
      patient: token.userId,
    })
      .populate("doctor", { model: Doctor })
      .sort({ date: 1, time: 1 });

    return NextResponse.json({ appointments }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Server error. Please try again later." },
      { status: 500 },
    );
  }
}
