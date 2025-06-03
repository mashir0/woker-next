'use server'

type MessageState = {
  originalMessage: string;
  processedMessage: string;
  timestamp: string;
} | null;

export async function processMessage(prevState: MessageState, formData: FormData): Promise<MessageState> {
  const message = formData.get('message') as string
  
  // サーバーサイドでの処理をシミュレート
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  return {
    originalMessage: message,
    processedMessage: `処理済み: ${message}`,
    timestamp: new Date().toISOString()
  }
} 