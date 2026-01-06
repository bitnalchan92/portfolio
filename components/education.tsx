import {Card} from "@/components/ui/card";
import {GraduationCap} from "lucide-react";

export default function Education() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6 flex items-center">
        <span className="w-2 h-8 bg-blue-500 mr-3"></span>
        EDUCATION
      </h2>

      <div className="space-y-4">
        <Card className="p-6 hover:shadow-md transition-shadow border-l-4 border-l-blue-500 bg-white dark:bg-gray-800">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg flex-shrink-0">
              <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">중앙 HTA 국비과정</h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">2024.07 ~ 2025.02</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Public Cloud 활용 자바(JAVA) 웹 애플리케이션(Spring, Docker) 개발자 양성과정 수료
              </p>
            </div>
          </div>
        </Card>
      </div>


      <div className="space-y-4 mt-4">
        <Card className="p-6 hover:shadow-md transition-shadow border-l-4 border-l-blue-500 bg-white dark:bg-gray-800">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg flex-shrink-0">
              <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">더조은 컴퓨터아카데미 국비과정</h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">2018.05 ~ 2018.11</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                아두이노를 활용한 자바기반의 사물인터넷(IOT)개발자 양성과정 수료
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-md transition-shadow border-l-4 border-l-blue-500 bg-white dark:bg-gray-800">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg flex-shrink-0">
              <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">대진 대학교</h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">2011.03 ~ 2018.02</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                영어영문학과 / 미디어커뮤니케이션학과(부전공) 학사 졸업
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-md transition-shadow border-l-4 border-l-blue-500 bg-white dark:bg-gray-800">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg flex-shrink-0">
              <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">선덕 고등학교</h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">2008.03 ~ 2011.02</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                인문계 졸업
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}