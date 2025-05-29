import {Badge} from "@/components/ui/badge";

export default function Project() {
  return (
    <section className="mb-12 pt-8">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-2xl font-bold text-blue-500">PROJECT</h2>
        {/*<Badge className="bg-gray-500 text-white">총 5개 프로젝트</Badge>*/}
      </div>

      <div className="space-y-12">
        <div className="flex flex-col lg:flex-row gap-6 pb-12 dark:border-gray-700">
          <div className="lg:w-48 flex-shrink-0">
            <p className="text-lg font-medium text-gray-600 dark:text-gray-400">2024.07 ~ 2025.02</p>
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <h3 className="text-xl font-bold dark:text-white">온라인 강사를 위한 LMS 시스템</h3>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                <p className="text-gray-500 dark:text-gray-400">2024.07 ~ 2025.02</p>
                <p className="font-medium text-gray-700 dark:text-gray-300 italic">중앙HTA 국비교육 팀 프로젝트</p>
              </div>

              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  아이디어 제시 및 팀장 역할 수행
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  AWS를 이용하여 배포 프로세스 작업 수행
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  관리자용 메뉴(학원 및 강사 추가 및 시스템 공지사항 등록) 기능 개발
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  파일(일반 & 영상 파일) 업로드 및 다운로드 기능 구현
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  영상 스트리밍을 위한 FFmpeg을 활용 및 업로드 & 다운로드 기능 구현 및 개선
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  프로젝트 코드 컨벤션 유지 및 프로젝트 문서 작성
                </li>
              </ul>

              <div className="mb-4">
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
        </div>
      </div>
    </section>
  )
}