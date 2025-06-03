'use client'

import { useFormState } from 'react-dom'
import { processMessage } from '../actions'

export function MessageForm() {
  const [state, formAction] = useFormState(processMessage, null)

  return (
    <div className="space-y-4">
      <form action={formAction} className="space-y-4">
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            メッセージ(use client)
          </label>
          <input
            type="text"
            id="message"
            name="message"
            className="w-full p-2 text-black border rounded"
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

      {state && (
        <div className="mt-4 p-4 bg-gray-400 rounded">
          <p>元のメッセージ: {state.originalMessage}</p>
          <p>処理済みメッセージ: {state.processedMessage}</p>
          <p>タイムスタンプ: {state.timestamp}</p>
        </div>
      )}
    </div>
  )
} 