import {Card} from "@/components/ui/card";
import {Award} from "lucide-react";

export default function Etc() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6 flex items-center">
        <span className="w-2 h-8 bg-blue-500 mr-3"></span>
        CERTIFICATION
      </h2>

      <div className="space-y-4">
        <Card className="p-6 hover:shadow-md transition-shadow border-l-4 border-l-blue-500 bg-white dark:bg-gray-800">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg flex-shrink-0">
              <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">정보처리기사</h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">2025.09</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                한국산업인력공단
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-md transition-shadow border-l-4 border-l-blue-500 bg-white dark:bg-gray-800">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg flex-shrink-0">
              <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">SQLD</h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">2023.12</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                한국데이터베이스진흥센터
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}