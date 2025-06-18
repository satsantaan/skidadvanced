export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Ultra Simple Header */}
      <div className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">SKIDS Advanced - Working!</h1>
      </div>


      {/* Ultra Simple Content */}
      <div className="p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Status: WORKING</h2>
        <p className="text-lg text-gray-700 mb-6">
          If you can see this text, the application is loading correctly without crashes.
        </p>

        <div className="space-y-4">
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            ✅ Next.js is working
          </div>
          <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded">
            ✅ React is working
          </div>
          <div className="bg-purple-100 border border-purple-400 text-purple-700 px-4 py-3 rounded">
            ✅ Tailwind CSS is working
          </div>
        </div>

        <div className="mt-8 space-x-4">
          <a href="/test" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Test Page
          </a>
          <a href="/diagnostic" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Diagnostic
          </a>
        </div>
      </div>
    </div>
  )
}


