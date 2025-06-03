'use server'

export async function processMessage(formData: FormData) {
  const message = formData.get('message') as string
  
  // サーバーサイドでの処理をシミュレート
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // 結果をコンソールに出力（デモ用）
  console.log({
    originalMessage: message,
    processedMessage: `処理済み: ${message}`,
    timestamp: new Date().toISOString()
  })
} 