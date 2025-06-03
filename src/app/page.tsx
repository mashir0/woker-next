import { MessageForm } from './components/MessageForm'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">サーバーアクション デモ</h1>
        <MessageForm />
      </div>
    </main>
  )
}
