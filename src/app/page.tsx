import { processMessage } from './actions'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">サーバーアクション デモ</h1>

        <form action={processMessage} className="space-y-4">
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              メッセージ
            </label>
            <input
              type="text"
              id="message"
              name="message"
              className="w-full p-2 border rounded"
              placeholder="メッセージを入力してください"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            送信
          </button>
        </form>
      </div>
    </main>
  )
}
