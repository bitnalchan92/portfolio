import {Badge} from "@/components/ui/badge";
import {Card} from "@/components/ui/card";
import {Code2} from "lucide-react";

export default function Project() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6 flex items-center">
        <span className="w-2 h-8 bg-blue-500 mr-3"></span>
        PROJECT
      </h2>

      <div className="space-y-8">
        <Card className="p-6 md:p-8 border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">온라인 강사를 위한 LMS 시스템</h3>
                <p className="text-lg font-medium text-gray-600 dark:text-gray-400">2024.07 ~ 2025.02</p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
              <div className="mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
                <p className="font-bold text-lg text-gray-800 dark:text-gray-200">중앙HTA 국비교육 팀 프로젝트</p>
                <p className="text-sm text-blue-600 dark:text-blue-400 italic mt-1">Team Leader & Backend Developer</p>
              </div>

              <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-5">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  아이디어 제시 및 팀장 역할 수행
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  AWS를 이용하여 배포 프로세스 작업 수행
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  관리자용 메뉴(학원 및 강사 추가 및 시스템 공지사항 등록) 기능 개발
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  파일(일반 & 영상 파일) 업로드 및 다운로드 기능 구현
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  영상 스트리밍을 위한 FFmpeg을 활용 및 업로드 & 다운로드 기능 구현 및 개선
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  프로젝트 코드 컨벤션 유지 및 프로젝트 문서 작성
                </li>
              </ul>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-gray-400 text-white">
                    Java
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-400 text-white">
                    JavaScript
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-400 text-white">
                    Spring Boot
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-400 text-white">
                    Thymeleaf
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-400 text-white">
                    MySQL
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-400 text-white">
                    IAM
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-400 text-white">
                    S3
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-400 text-white">
                    CloudWatch
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-400 text-white">
                    EC2
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-400 text-white">
                    RDS
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-400 text-white">
                    Docker
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-400 text-white">
                    Jenkins
                  </Badge>
                </div>
              </div>

              {/*<a*/}
              {/*  href="https://github.com/bitnalchan92/jabibim_admin"*/}
              {/*  target="_blank"*/}
              {/*  rel="noopener noreferrer"*/}
              {/*  className="flex items-center text-sm text-blue-500 hover:underline"*/}
              {/*>*/}
              {/*  <Github className="w-4 h-4 mr-1"/>*/}
              {/*  소스 코드 보기*/}
              {/*  <ExternalLink className="w-3 h-3 ml-1"/>*/}
              {/*</a>*/}
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}