import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold mb-4">ページが見つかりません</h1>
      <p className="text-gray-400 mb-6">お探しのページは存在しないか、移動された可能性があります。</p>
      <Link to="/my-page" className="text-primary-500 underline">ホームに戻る</Link>
    </div>
  )
}
