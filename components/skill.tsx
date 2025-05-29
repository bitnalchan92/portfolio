import {Badge} from "@/components/ui/badge";

export default function Skill() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-blue-500 mb-6">SKILL</h2>

      <div className="space-y-6">
        {/* Languages */}
        <div className="border-l-2 border-blue-500 pl-6">
          <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Languages</h3>
          <div className="flex flex-wrap gap-2">
            <Badge
              className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors dark:bg-blue-900 dark:text-blue-300 dark:border-blue-700 dark:hover:bg-blue-600 dark:hover:text-white">
              Java
            </Badge>
            <Badge
              className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors dark:bg-blue-900 dark:text-blue-300 dark:border-blue-700 dark:hover:bg-blue-600 dark:hover:text-white">
              JavaScript
            </Badge>
            <Badge
              className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors dark:bg-blue-900 dark:text-blue-300 dark:border-blue-700 dark:hover:bg-blue-600 dark:hover:text-white">
              TypeScript
            </Badge>
            <Badge
              className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors dark:bg-blue-900 dark:text-blue-300 dark:border-blue-700 dark:hover:bg-blue-600 dark:hover:text-white">
              SQL
            </Badge>
          </div>
        </div>

        {/* Frameworks & Libraries */}
        <div className="border-l-2 border-blue-500 pl-6">
          <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Frameworks & Libraries</h3>
          <div className="flex flex-wrap gap-2">
            <Badge
              className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors dark:bg-blue-900 dark:text-blue-300 dark:border-blue-700 dark:hover:bg-blue-600 dark:hover:text-white">
              Spring
            </Badge>
            <Badge
              className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors dark:bg-blue-900 dark:text-blue-300 dark:border-blue-700 dark:hover:bg-blue-600 dark:hover:text-white">
              Spring Boot
            </Badge>
          </div>
        </div>

        <div className="border-l-2 border-blue-500 pl-6">
          <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Database & Storage</h3>
          <div className="flex flex-wrap gap-2">
            <Badge
              className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors dark:bg-blue-900 dark:text-blue-300 dark:border-blue-700 dark:hover:bg-blue-600 dark:hover:text-white">
              MySQL
            </Badge>
            <Badge
              className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors dark:bg-blue-900 dark:text-blue-300 dark:border-blue-700 dark:hover:bg-blue-600 dark:hover:text-white">
              Oracle
            </Badge>
            <Badge
              className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors dark:bg-blue-900 dark:text-blue-300 dark:border-blue-700 dark:hover:bg-blue-600 dark:hover:text-white">
              Redis
            </Badge>
          </div>
        </div>

        <div className="border-l-2 border-blue-500 pl-6">
          <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">DevOps & Cloud</h3>
          <div className="flex flex-wrap gap-2">
            <Badge
              className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors dark:bg-blue-900 dark:text-blue-300 dark:border-blue-700 dark:hover:bg-blue-600 dark:hover:text-white">
              AWS
            </Badge>
            <Badge
              className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors dark:bg-blue-900 dark:text-blue-300 dark:border-blue-700 dark:hover:bg-blue-600 dark:hover:text-white">
              Docker
            </Badge>
            <Badge
              className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors dark:bg-blue-900 dark:text-blue-300 dark:border-blue-700 dark:hover:bg-blue-600 dark:hover:text-white">
              Jenkins
            </Badge>
            <Badge
              className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors dark:bg-blue-900 dark:text-blue-300 dark:border-blue-700 dark:hover:bg-blue-600 dark:hover:text-white">
              GitHub Actions
            </Badge>
          </div>
        </div>

        <div className="border-l-2 border-blue-500 pl-6">
          <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Tools & Others</h3>
          <div className="flex flex-wrap gap-2">
            <Badge
              className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors dark:bg-blue-900 dark:text-blue-300 dark:border-blue-700 dark:hover:bg-blue-600 dark:hover:text-white">
              Git
            </Badge>
            <Badge
              className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors dark:bg-blue-900 dark:text-blue-300 dark:border-blue-700 dark:hover:bg-blue-600 dark:hover:text-white">
              Postman
            </Badge>
            <Badge
              className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors dark:bg-blue-900 dark:text-blue-300 dark:border-blue-700 dark:hover:bg-blue-600 dark:hover:text-white">
              GPT
            </Badge>
            <Badge
              className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors dark:bg-blue-900 dark:text-blue-300 dark:border-blue-700 dark:hover:bg-blue-600 dark:hover:text-white">
              Jira
            </Badge>
            <Badge
              className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors dark:bg-blue-900 dark:text-blue-300 dark:border-blue-700 dark:hover:bg-blue-600 dark:hover:text-white">
              Trello
            </Badge>
            <Badge
              className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors dark:bg-blue-900 dark:text-blue-300 dark:border-blue-700 dark:hover:bg-blue-600 dark:hover:text-white">
              Figma
            </Badge>
            <Badge
              className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors dark:bg-blue-900 dark:text-blue-300 dark:border-blue-700 dark:hover:bg-blue-600 dark:hover:text-white">
              Miro
            </Badge>
          </div>
        </div>

        <div className="border-l-2 border-blue-500 pl-6">
          <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Interest</h3>
          <div className="flex flex-wrap gap-2">
            <Badge
              className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors dark:bg-blue-900 dark:text-blue-300 dark:border-blue-700 dark:hover:bg-blue-600 dark:hover:text-white">
              Node.js
            </Badge>
            <Badge
              className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors dark:bg-blue-900 dark:text-blue-300 dark:border-blue-700 dark:hover:bg-blue-600 dark:hover:text-white">
              Express
            </Badge>
            <Badge
              className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors dark:bg-blue-900 dark:text-blue-300 dark:border-blue-700 dark:hover:bg-blue-600 dark:hover:text-white">
              React
            </Badge>
            <Badge
              className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors dark:bg-blue-900 dark:text-blue-300 dark:border-blue-700 dark:hover:bg-blue-600 dark:hover:text-white">
              NestJS
            </Badge>
            <Badge
              className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors dark:bg-blue-900 dark:text-blue-300 dark:border-blue-700 dark:hover:bg-blue-600 dark:hover:text-white">
              NextJS
            </Badge>
            <Badge
              className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors dark:bg-blue-900 dark:text-blue-300 dark:border-blue-700 dark:hover:bg-blue-600 dark:hover:text-white">
              Kubernetes
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}