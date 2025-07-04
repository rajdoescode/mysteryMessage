import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/verificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifycode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email,
      subject: "Mystry Message | Verification code",
      react: VerificationEmail({ username, otp: verifycode }),
    });
    return { success: true, message: "verification email send successfully" };
  } catch (emailError) {
    console.error("Error Sending verification email", emailError);
    return { success: false, message: "faild to send verification email" };
  }
}
