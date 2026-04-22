import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// ── Resend client ──────────────────────────────────────────────────────
const resend = new Resend(process.env.RESEND_API_KEY ?? "re_HgKK6Mec_xGHzR2QtZzd4SvLf3ATdVuAq");

// NOTE: Using Resend's pre-verified sender until roompe.co.in domain is
// verified in the Resend dashboard (resend.com/domains).
// Once verified, change FROM_EMAIL to: "RoomPe <hello@roompe.co.in>"
const FROM_EMAIL = "RoomPe <hello@roompe.ventures>";
const NOTIFY_RECIPIENTS = ["satya@roompe.co.in", "deval@roompe.co.in", "maharsh@mealpe.org"];

// ── Payload shape ──────────────────────────────────────────────────────
interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  institution: string;
  partnerType: string;
  capacity?: string;
  city: string;
  message: string;
}

// ── Internal notification email HTML ──────────────────────────────────
function buildInternalHTML(p: ContactPayload): string {
  const field = (label: string, value: string) => `
    <tr>
      <td style="padding:10px 20px 10px 0;font-size:12px;font-weight:700;color:#718096;white-space:nowrap;text-transform:uppercase;letter-spacing:0.06em;vertical-align:top;width:140px;">${label}</td>
      <td style="padding:10px 0;font-size:14px;color:#12323B;word-break:break-word;font-weight:500;">${value || "—"}</td>
    </tr>
    <tr><td colspan="2" style="padding:0;"><div style="height:1px;background:#F1F5F9;"></div></td></tr>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>New Inquiry - Website</title>
</head>
<body style="margin:0;padding:0;background:#F8FAFC;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Inter,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAFC;padding:40px 20px;">
    <tr><td align="center">
      <table width="620" cellpadding="0" cellspacing="0" style="max-width:100%;background:#FFFFFF;border-radius:16px;border:1px solid #E2E8F0;overflow:hidden;box-shadow:0 4px 24px rgba(18,50,59,0.06);">

        <!-- Top accent bar -->
        <tr><td style="background:linear-gradient(90deg,#4BA18F 0%,#12323B 55%,#F1C46E 100%);height:4px;"></td></tr>

        <!-- Header -->
        <tr>
          <td style="background:#12323B;padding:32px 40px;">
            <p style="margin:0 0 4px;font-size:10px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,255,255,0.4);">New Inquiry · Website</p>
            <h1 style="margin:0;font-size:22px;font-weight:800;color:#FFFFFF;line-height:1.2;">
              ${p.name}
            </h1>
            <p style="margin:6px 0 0;font-size:14px;color:rgba(255,255,255,0.55);">${p.institution} &bull; ${p.city}</p>
          </td>
        </tr>

        <!-- Source badge -->
        <tr>
          <td style="padding:16px 40px;background:#FFFBF0;border-bottom:1px solid #E2E8F0;">
            <span style="display:inline-block;background:#F1C46E;color:#12323B;font-size:11px;font-weight:700;padding:4px 12px;border-radius:100px;letter-spacing:0.05em;">
              🌐 Website Contact Form
            </span>
          </td>
        </tr>

        <!-- Details -->
        <tr>
          <td style="padding:32px 40px 24px;">
            <table cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">
              <tr><td colspan="2" style="padding:0 0 12px;"><div style="height:1px;background:#F1F5F9;"></div></td></tr>
              ${field("Name", p.name)}
              ${field("Email", p.email)}
              ${field("Phone", p.phone)}
              ${field("Institution", p.institution)}
              ${field("Partner Type", p.partnerType)}
              ${field("City", p.city)}
              ${field("Bed Capacity", p.capacity || "Not specified")}
            </table>
          </td>
        </tr>

        <!-- Message -->
        <tr>
          <td style="padding:0 40px 36px;">
            <p style="margin:0 0 12px;font-size:10px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#718096;">Message</p>
            <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;padding:20px 24px;">
              <p style="margin:0;font-size:14px;color:#12323B;line-height:1.75;white-space:pre-wrap;">${p.message}</p>
            </div>
          </td>
        </tr>

        <!-- Reply CTA -->
        <tr>
          <td style="padding:0 40px 36px;text-align:center;">
            <a
              href="mailto:${p.email}?subject=Re: Your RoomPe Partnership Enquiry"
              style="display:inline-block;background:#F1C46E;color:#12323B;font-size:14px;font-weight:700;padding:14px 32px;border-radius:10px;text-decoration:none;"
            >
              Reply to ${p.name.split(" ")[0]} →
            </a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#F8FAFC;border-top:1px solid #E2E8F0;padding:20px 40px;border-radius:0 0 16px 16px;">
            <p style="margin:0;font-size:11px;color:#A0AEC0;line-height:1.6;">
              This lead was submitted via <strong>roompe.co.in/contact</strong>.
              Reply directly to this email (reply-to is set to the requester&apos;s address).
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ── Auto-reply confirmation HTML ───────────────────────────────────────
function buildConfirmationHTML(name: string): string {
  const firstName = name.split(" ")[0];
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>We've received your enquiry</title>
</head>
<body style="margin:0;padding:0;background:#F8FAFC;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Inter,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAFC;padding:40px 20px;">
    <tr><td align="center">
      <table width="580" cellpadding="0" cellspacing="0" style="max-width:100%;background:#FFFFFF;border-radius:16px;border:1px solid #E2E8F0;overflow:hidden;box-shadow:0 4px 24px rgba(18,50,59,0.06);">

        <!-- Top accent bar -->
        <tr><td style="background:linear-gradient(90deg,#4BA18F 0%,#12323B 55%,#F1C46E 100%);height:4px;"></td></tr>

        <!-- Header -->
        <tr>
          <td style="background:#12323B;padding:48px 40px 40px;text-align:center;">
            <p style="margin:0 0 16px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,255,255,0.4);">RoomPe</p>
            <!-- Checkmark icon -->
            <div style="width:56px;height:56px;background:rgba(75,161,143,0.2);border-radius:50%;margin:0 auto 20px;display:flex;align-items:center;justify-content:center;">
              <span style="font-size:26px;line-height:56px;display:block;text-align:center;">✓</span>
            </div>
            <h1 style="margin:0;font-size:26px;font-weight:800;color:#FFFFFF;line-height:1.2;">
              We&apos;ve got your message,<br />${firstName}!
            </h1>
            <p style="margin:12px 0 0;font-size:14px;color:rgba(255,255,255,0.55);">
              Your partnership enquiry has been received.
            </p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:40px 40px 32px;text-align:center;">
            <p style="margin:0 0 24px;font-size:15px;color:#718096;line-height:1.75;max-width:420px;margin-inline:auto;">
              Our partnership team has been notified and will review your enquiry. 
              You can expect a personalised response within
              <strong style="color:#12323B;">one business day</strong>.
            </p>

            <!-- What to expect -->
            <table cellpadding="0" cellspacing="0" style="width:100%;max-width:420px;margin:0 auto 32px;text-align:left;">
              ${[
      ["🔍", "Review", "We read every enquiry carefully and tailor our response."],
      ["📞", "Discovery Call", "A 30-min call to understand your campus and goals."],
      ["📄", "Proposal", "A custom proposal with pricing, SLAs, and next steps."],
      ["🚀", "Onboarding", "Go live within 2–4 weeks of agreement."],
    ].map(([icon, title, desc]) => `
              <tr>
                <td style="padding:10px 12px 10px 0;vertical-align:top;width:36px;font-size:18px;">${icon}</td>
                <td style="padding:10px 0;">
                  <p style="margin:0 0 2px;font-size:13px;font-weight:700;color:#12323B;">${title}</p>
                  <p style="margin:0;font-size:12px;color:#718096;line-height:1.5;">${desc}</p>
                </td>
              </tr>`).join("")}
            </table>

            <a href="https://roompe.co.in" style="display:inline-block;background:#F1C46E;color:#12323B;font-size:14px;font-weight:700;padding:14px 36px;border-radius:10px;text-decoration:none;">
              Visit roompe.co.in →
            </a>
          </td>
        </tr>

        <!-- Divider -->
        <tr><td style="padding:0 40px;"><div style="height:1px;background:#E2E8F0;"></div></td></tr>

        <!-- Footer -->
        <tr>
          <td style="padding:24px 40px;text-align:center;background:#F8FAFC;border-radius:0 0 16px 16px;">
            <p style="margin:0 0 6px;font-size:12px;font-weight:600;color:#12323B;">RoomPe Pvt Ltd</p>
            <p style="margin:0;font-size:11px;color:#A0AEC0;line-height:1.7;">
              Ahmedabad, Gujarat, India<br />
              <a href="mailto:hello@roompe.co.in" style="color:#4BA18F;text-decoration:none;">hello@roompe.co.in</a>
              &nbsp;&bull;&nbsp;
              <a href="tel:+919876543210" style="color:#4BA18F;text-decoration:none;">+91 98765 43210</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ── Route handler ──────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();

    // Basic field validation
    const required: (keyof ContactPayload)[] = ["name", "email", "phone", "institution", "partnerType", "city", "message"];
    for (const field of required) {
      if (!body[field]?.trim()) {
        return NextResponse.json({ error: `Field "${field}" is required.` }, { status: 400 });
      }
    }

    // 1. Send internal notification to the RoomPe team
    await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFY_RECIPIENTS,
      replyTo: body.email,
      subject: `New Inquiry - Website | ${body.name} — ${body.institution} (${body.city})`,
      html: buildInternalHTML(body),
    });

    // 2. Send confirmation auto-reply to the enquirer
    await resend.emails.send({
      from: FROM_EMAIL,
      to: [body.email],
      subject: `We've received your enquiry, ${body.name.split(" ")[0]}! — RoomPe`,
      html: buildConfirmationHTML(body.name),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[api/contact] Error:", err);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again or email us at hello@roompe.co.in" },
      { status: 500 }
    );
  }
}
