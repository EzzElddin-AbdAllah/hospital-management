import dbConnect from "@/lib/dbConnect";
import Appointment from "@/models/Appointment";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const secret = process.env.NEXTAUTH_SECRET;

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const token = await getToken({ req, secret });
    console.log(token);

    if (!token) {
      return NextResponse.json(
        { error: "User not authenticated." },
        { status: 401 },
      );
    }

    await dbConnect();

    const appointmentId = params.id;

    const appointment = await Appointment.findById(appointmentId);

    if (!appointment) {
      return NextResponse.json(
        { error: "Appointment not found" },
        { status: 404 },
      );
    }

    if (appointment.patient.toString() !== token.userId) {
      return NextResponse.json({ error: "Not authorized" }, { status: 403 });
    }

    const deletedAppointment =
      await Appointment.findByIdAndDelete(appointmentId);

    return NextResponse.json(
      { message: "Appointment deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error deleting appointment:", error);
    return NextResponse.json(
      { error: "Server error. Please try again later." },
      { status: 500 },
    );
  }
}
