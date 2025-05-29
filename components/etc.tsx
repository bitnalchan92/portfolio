export default function Etc() {
  return (
    <section>
      <div className="flex items-center gap-3 mt-16 mb-6">
        <h2 className="text-2xl font-bold text-blue-500">ETC</h2>
      </div>

      <div className="space-y-12">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-6 dark:border-gray-700 pt-4">
          <div className="lg:w-48 flex-shrink-0">
            <p className="text-lg font-medium text-gray-600 dark:text-gray-400">2023.12</p>
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h3 className="text-xl font-bold dark:text-white">SQLD 자격증</h3>
            </div>
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                <p className="font-medium text-gray-700 dark:text-gray-300 italic">한국데이터베이스진흥센터</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}