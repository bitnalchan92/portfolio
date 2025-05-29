import {Badge} from "@/components/ui/badge";

export default function Experience() {
  return (
    <section className="mb-16 pt-12">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-2xl font-bold text-blue-500">EXPERIENCE</h2>
        <Badge variant="secondary" className="bg-gray-500 text-white">총 3년 8개월</Badge>
      </div>

      <div className="space-y-12">
        <div className="flex flex-col lg:flex-row gap-6 pb-12 border-b border-gray-200 dark:border-gray-700">
          <div className="lg:w-48 flex-shrink-0">
            <p className="text-lg font-medium text-gray-600 dark:text-gray-400">2022.02 ~ 2023.06</p>
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <h3 className="text-xl font-bold dark:text-white">(주) 플리드</h3>
              <Badge variant="secondary" className="bg-gray-400 text-white">1년 5개월</Badge>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                <p className="text-gray-500 dark:text-gray-400">2023.02 ~ 2023.06</p>
                <p className="font-medium text-gray-700 dark:text-gray-300 italic">똑생 (前 영쩜일) / Co-founder, Backend
                  Developer</p>
              </div>

              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  NestJS를 활용한 Backend API 개발
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  사용자 인증 및 권한 관리 시스템 개발
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  법률 서적을 참고하여 개인회생 신청 서류 작성에 필요한 데이터 생성 로직 개발 및 Word파일 생성 기능 개발
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  데이터 아키텍쳐 설계 및 TypeORM을 활용하여 DB Migration 전담
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  외부 API(Payple, eformsign, Codef, Google Calender, Aligo, Nice 등) 연동을 위한 기능 개발
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Slack과 CloudWatch를 통한 서비스 배포 및 운영 상태 모니터링 개선
                </li>
              </ul>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-gray-400 text-white">
                    JavaScript
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-400 text-white">
                    TypeScript
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-400 text-white">
                    NestJS
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-400 text-white">
                    AWS(S3, Lambda, CloudWatch, Elastic Beanstalk, RDS)
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-400 text-white">
                    Docker
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-400 text-white">
                    TypeORM
                  </Badge>
                </div>
              </div>
            </div>

            <div className="mb-6 pt-8">
              <div className="flex items-center gap-4 mb-4">
                <p className="text-gray-500 dark:text-gray-400">2023.02 ~ 2023.06</p>
                <p className="font-medium text-gray-700 dark:text-gray-300 italic">플리드 / Co-founder, Backend
                  Developer</p>
              </div>

              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  NestJS를 활용한 Backend API 개발
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  변호사 고객과 의뢰인 고객을 구분하여 로그인 처리하는 로직 구현
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  PG사 연동 및 변호사 고객의 수임료 결제 프로세스 개발
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  데이터 아키텍쳐 설계 및 TypeORM을 활용하여 DB Migration 전담
                </li>
              </ul>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-gray-400 text-white">
                    JavaScript
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-400 text-white">
                    TypeScript
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-400 text-white">
                    NextJS
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-400 text-white">
                    NestJS
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-400 text-white">
                    AWS(S3, CloudWatch, Elastic Beanstalk, RDS)
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-400 text-white">
                    Docker
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-400 text-white">
                    TypeORM
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-48 flex-shrink-0">
            <p className="text-lg font-medium text-gray-600 dark:text-gray-400">2019.09 ~ 2021.09</p>
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <h3 className="text-xl font-bold dark:text-white">(주) 어바인</h3>
              <Badge variant="secondary" className="bg-gray-400 text-white">2년 1개월</Badge>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                <p className="text-gray-500 dark:text-gray-400">2019. 09 ~ 2021. 09</p>
                <p className="font-medium text-gray-700 dark:text-gray-300 italic">Junior Backend Developer</p>
              </div>

              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  청구 관련 배치 작업 운영 및 모니터링 수행
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  결제일 중 대량 결제일 등의 실시간 모니터링 수행
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  카드번호 암호화 프로젝트 수행 및 명세서 레이아웃 수정
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  개인 / 법인 고객 대상 청구내역 생성 로직 개발 및 유지보수
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  대고객 온라인 서비스 및 은행 창구 직원 위환 화면 개발 및 운영
                </li>
              </ul>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-gray-400 text-white">
                    Java
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-400 text-white">
                    DevOn Framework
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-400 text-white">
                    Oracle
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-400 text-white">
                    Linux
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-400 text-white">
                    SVN
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-400 text-white">
                    TrustForm
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-400 text-white">
                    INZent
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-400 text-white">
                    Control-M
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-400 text-white">
                    TestOne
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}