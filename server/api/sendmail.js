import nodemailer from "nodemailer";

// Or use SMTP if you feel like
const transporter = nodemailer.createTransport({
  host: "sv23.minibird.netowl.jp",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "mori@codingdesign.jp",
    pass: "mfori943",
  },
});

export default defineEventHandler(async (event) => {
  const body = await readBody(event); // Pass params via JSON in the POST request

  transporter.sendMail({
    from: body.email,
    to: "mori@codingdesign.jp",
    subject: "新しい問い合わせメールが届きました（テスト送信）",
    text: `新しい問い合わせメールが届きました。\n\nメールアドレス：\n${body.email}\n\nお問い合わせ内容：\n${body.text}`,
  });
  transporter.sendMail({
    from: "info@codingdesign.jp",
    to: body.email,
    subject: "【コーディングデザイン】お問い合わせありがとうございました",
    text: `コーディングデザインにお問い合わせいただき、どうもありがとうございました。\nこのメールは自動返信メールです。\n\nメールアドレス：\n下記の内容でお問い合わせを承りました。\n${body.email}\n\nお問い合わせ内容：\n${body.text}\n\n2,3日中に担当者よりご連絡を差し上げますので、今しばらくお待ちくださいませ。`,
  });
});
