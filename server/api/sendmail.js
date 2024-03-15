import nodemailer from "nodemailer";

const runtimeConfig = useRuntimeConfig();

// Or use SMTP if you feel like
const transporter = nodemailer.createTransport({
  host: runtimeConfig.mailHost,
  port: runtimeConfig.mailPort,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: runtimeConfig.mailUsername,
    pass: runtimeConfig.mailPassword,
  },
});

export default defineEventHandler(async (event) => {
  const body = await readBody(event); // Pass params via JSON in the POST request

  transporter.sendMail({
    from: body.email,
    to: runtimeConfig.mailUsername,
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
