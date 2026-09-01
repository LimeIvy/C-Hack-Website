import { db } from '@/lib/drizzle';

import ContactForm from './_components/form';
import { contactsTable } from '@/db/schema';
import { postDiscordWebhook } from '@/utils/discord';


export default function FormPage() {
  // eslint-disable-next-line unicorn/consistent-function-scoping
  async function submitForm(name: string, email: string, subject: string, content: string, turnstileToken: string): Promise<void> {
    'use server';
    if (!name || !email || !subject || !content || !turnstileToken) {
      throw new Error('Invalid parameters');
    }
    const turnstileResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY!,
        response: turnstileToken,
      }),
    });
    const turnstileData = await turnstileResponse.json();
    if (!turnstileData.success) {
      console.error('Turnstile verification failed:', turnstileData);
      throw new Error('Turnstile verification failed');
    }
    await db.insert(contactsTable).values({ name, email, subject, content });
    try {
      // Webhook送信の成否に関係なく訪問者には成功を返す
      await postDiscordWebhook(process.env.DISCORD_FORM_WEBHOOK!, {
        embeds: [
          {
            author: { name },
            title: subject,
            description: content,
            fields: [
              { name: 'メールアドレス', value: `\`${email}\`` },
            ],
            color: 0x00_BF_FF,
          },
        ],
      });
    } catch (e) {
      console.error('Webhook post failed:', e);
    }
  }
  return (
    <ContactForm submitForm={submitForm} />
  );
}
