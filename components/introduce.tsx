import { useMemo } from "react";
import dayjs from "dayjs";
import {Badge} from "@/components/ui/badge";

interface DDayProps {
  baseDate: string; // 'YYYY.MM.DD'
}

const DDay = ({ baseDate }: DDayProps) => {
  const date: string = new Date('2025-05-20').toISOString().split("T")[0].replace(/-/g, ". ");
  const { displayText, colorClass } = useMemo(() => {
    const today = dayjs().startOf('day');
    const target = dayjs(baseDate, 'YYYY.MM.DD').startOf('day');
    const diff = today.diff(target, 'day');

    let dDayText = '';
    let colorClass = '';

    if (diff === 0) {
      dDayText = '(D-day)';
      colorClass = 'text-blue-500';
    } else if (diff > 0) {
      dDayText = `(D+${diff})`;
      colorClass = 'text-green-500';
    } else {
      dDayText = `(D${diff})`; // diff가 음수 -> D-숫자
      colorClass = 'text-red-500';
    }

    return {
      displayText: `${target.format('YYYY.MM.DD')} ${dDayText}`,
      colorClass,
    };
  }, [baseDate]);

  return (
    // <p className={`text-lg font-semibold ${colorClass}`}>
    <p className={`text-sm`}>
      Latest Updated : <span className={'font-semibold'}>{displayText}</span>
    </p>
  );
};

export default function Introduce() {

  return (
    <section className="mb-12 pt-8">
      <h2 className="text-2xl font-bold text-blue-500 mb-6">INTRODUCE</h2>
      <div className="space-y-4 text-gray-700 dark:text-gray-300">
        <p>
          스타트업 공동 창업과 금융권 실무 경험을 갖춘 백엔드 개발자입니다.
          Java, Spring, Node.js, Oracle, MySQL, AWS 등 다양한 기술 스택을 활용하여 서비스의 확장성과 유지 보수성을 고려한 아키텍처 구성에 집중하고 있으며,
          원활한 커뮤니케이션과 주인의식을 바탕으로 기술과 비즈니스를 연결하는 백엔드 엔지니어를 지향합니다.
        </p>
        <p>
          그동안의 실무 경험을 통해 문제 해결 중심의 개발 역량을 쌓아왔습니다.
          금융권에서는 대규모 배치 프로그램을 개발하며 방대한 데이터 처리, 정합성 검증, 성능 개선, 장애 대응 및 모니터링 등의 업무를 수행해 왔고,
          레거시 환경을 유지·보수하며 신뢰성과 안정성이 중요한 금융 백엔드 시스템에 대한 깊은 이해를 갖추게 되었습니다.
        </p>
        <p>
          이후 스타트업에서는 초기 투자 단계부터 서비스의 설계, 개발, 배포, 운영 전반에 참여하며 실제 사용자와의 접점을 고려한 실용적인 개발 역량을 키웠습니다.
          다양한 직군과 협업하며 커뮤니케이션의 중요성을 체감했고, 주도적으로 문제를 해결하고 더 나은 방향으로 이끌어가는 책임감을 기를 수 있었습니다.
        </p>
        <p>
          다양한 환경에서의 협업 경험을 통해 유연한 커뮤니케이션 역량을 쌓았고, 기능 구현을 넘어 서비스가 가진 문제를 정확히 이해하고
          팀과 함께 해결하는 것을 가장 중요한 가치 중 하나로 생각합니다. 앞으로도 주인의식을 바탕으로 팀과 함께 성장하는 백엔드 엔지니어가 되고자 합니다.
        </p>
      </div>
      <div className="text-right mt-4 text-sm text-gray-500 dark:text-gray-400">
        <DDay baseDate='2025.05.20' />
        <p className="font-signature text-xl">ChanKim</p>
      </div>
    </section>
  );
}