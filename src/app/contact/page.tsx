import { db } from '@/lib/drizzle';

import ContactForm from './_components/form';
import { contactsTable } from '@/db/schema';
import { postDiscordWebhook } from '@/utils/discord';


export default function FormPage() {
  // eslint-disable-next-line unicorn/consistent-function-scoping
  async function submitForm(name: string, email: string, subject: string, content: string): Promise<void> {
    'use server';
    if (!name || !email || !subject || !content) {
      throw new Error('Invalid parameters');
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
