/**
 * Discord Webhook APIのJSONパラメーターの型定義。
 *
 * @see https://docs.discord.com/developers/resources/webhook#execute-webhook
 */
interface DiscordWebhookPayload {
  content?: string;
  username?: string;
  avatar_url?: string;
  embeds?: Array<{
    title?: string;
    description?: string;
    url?: string;
    timestamp?: string;
    color?: number;
    footer?: {
      text: string;
      icon_url?: string;
    };
    author?: {
      name: string;
      url?: string;
      icon_url?: string;
    };
    fields?: Array<{
      name: string;
      value: string;
      inline?: boolean;
    }>;
  }>;
}


/**
 * DiscordのWebhook URLに対して、指定したデータをPOSTする。
 *
 * @param webhookUrl - Discord WebhookのURL
 * @param payload - Discord Webhook APIにPOSTするデータ
 * @returns 関数 {@link fetch} の返す {@link Response} オブジェクト
 */
export async function postDiscordWebhook(webhookUrl: string, payload: DiscordWebhookPayload): Promise<Response> {
  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Discord webhook request failed: ${response.status} ${response.statusText}`);
  }

  return response;
}
