const slides = [
  {
    title: 'PAGE 1. 표지 (Cover)',
    headline: 'ELITECH',
    subheadline: '빠르게 구축하고, 안정적으로 운영하는 플랫폼 개발 파트너',
    tagline: 'Adapt Solutions, Adopt Practicality',
    bullets: [
      '모바일 앱 · 백엔드 · 관리자 시스템 · 외부 연동',
      '아이디어를 운영 가능한 서비스로 전환',
      '요구사항부터 Go-Live까지 구조화된 실행',
    ],
  },
  {
    title: 'PAGE 2. 기업 개요 (Executive Summary)',
    headline: '엘리테크는 “개발”이 아니라 “서비스 완성”을 제공합니다',
    bullets: [
      '핵심 역량 1: 모바일 앱 개발 (Flutter 중심)',
      '핵심 역량 2: API/백엔드 설계 (Go, TypeScript 계열)',
      '핵심 역량 3: 관리자·업무 시스템 구축',
      '핵심 역량 4: 결제/메시징/지도/분석 등 외부 연동',
    ],
    summary: '요약: 사용자 경험, 운영 효율, 시스템 안정성을 함께 설계하는 실행형 개발 파트너',
  },
  {
    title: 'PAGE 3. 시장의 페인 포인트 (Market Pain Points)',
    headline: '많은 프로젝트가 늦어지는 이유는 “기능”이 아니라 “흐름” 때문입니다',
    bullets: [
      '사용자 앱, 운영 백오피스, 서버 정책이 분리되어 일정이 반복 지연됨',
      '외부 연동(로그인/결제/푸시/채팅) 단계에서 예외 처리 누락 발생',
      '운영 전환 시 데이터 이관·정합성 검증이 부족해 장애 리스크 증가',
      '문서와 실제 구현이 어긋나 인수인계·유지보수 비용이 커짐',
    ],
    summary: '핵심 문제: 개발 완료와 서비스 운영 가능 상태 사이의 간극',
  },
  {
    title: 'PAGE 4. 자사 솔루션 (Our Solution)',
    headline: '엘리테크는 “기능 단위”가 아닌 “운영 단위”로 시스템을 설계합니다',
    bullets: [
      '앱/서버/관리자/연동을 하나의 서비스 시나리오로 통합 설계',
      '역할별 권한, 상태 전이, 예외 처리 기준을 초기 단계에서 고정',
      '배포·검증·운영 문서까지 포함한 실무형 구현',
      '서비스 특성에 맞는 아키텍처 선택(모바일 중심/업무 중심/연동 중심)',
    ],
    summary: '적용 사례 축: MEEMONG(매칭·상담·채팅·계약·과금) / WORKO(공고·매칭·근태·급여(MVP))',
  },
  {
    title: 'PAGE 5. 5단계 마일스톤 로드맵 (The 5-Phase Roadmap)',
    headline: 'ASAP 실행 프레임워크',
    phases: [
      {
        name: '1단계 — Preparation (프로젝트 준비)',
        items: ['목표, 범위, 일정, 이해관계자 확정', '필수 연동 항목과 리스크 식별'],
      },
      {
        name: '2단계 — Blueprint (비즈니스 청사진 설계)',
        items: ['사용자 흐름, 데이터 모델, API 계약 정의', '역할/권한/운영 정책 구조화'],
      },
      {
        name: '3단계 — Realization (구현 및 최적화)',
        items: ['앱/백엔드/관리자 기능 구현', '외부 서비스 연동 및 성능/예외 처리 보완'],
      },
      {
        name: '4단계 — Final Preparation (최종 점검 및 교육)',
        items: ['테스트, 운영 시나리오 검증', '관리자/운영팀 사용 가이드 정리'],
      },
      {
        name: '5단계 — Go-Live & Support (가동 및 유지보수)',
        items: ['단계적 배포 및 모니터링', '초기 안정화, 개선 백로그 운영'],
      },
    ],
  },
  {
    title: 'PAGE 6. 특화 경쟁력 (Core Competencies)',
    headline: '빠르게 만들되, 운영 가능한 구조로 만듭니다',
    bullets: [
      '통합 설계 역량: 사용자 앱과 운영 시스템을 분리하지 않고 동시 설계',
      '도메인 적용력: 매칭·업무관리·결제연동 등 실서비스형 기능 구현 경험',
      '구현 체계성: 계층화된 백엔드 구조, 역할 기반 API 설계',
      '운영 지향성: 배포 절차, 정책 문서, 마이그레이션/백필 프로세스 고려',
      '확장 준비성: 초기 MVP 이후 확장 가능한 모듈 구조 지향',
    ],
  },
  {
    title: 'PAGE 7. 수행 실적 및 레퍼런스 (Proven Tracks)',
    headline: '검증된 프로젝트 유형',
    sections: [
      {
        name: 'CASE A — MEEMONG',
        desc: '시스템: 헤어·뷰티 매칭 플랫폼 / 특성: 매칭→상담→채팅→계약→정책 기반 과금 흐름 통합',
      },
      {
        name: 'CASE B — WORKO',
        desc: '시스템: 근로자·사업주 업무 플랫폼 / 특성: 공고·지원·승인·근태·급여(MVP) 프로세스 연결',
      },
    ],
    bullets: [
      '기타 수행 영역(프로젝트군)',
      '결제/정산/가상계좌 연동형 시스템',
      '관리자 백오피스 및 운영 도구',
      '데이터 수집·알림·배치 자동화',
    ],
    summary: '※ 고객사명/로고/성과 수치는 공개 가능 범위에 맞춰 삽입',
  },
  {
    title: 'PAGE 8. 기대 효과 (ROI & Value)',
    headline: '도입 시 기대 가능한 실질 가치',
    bullets: [
      '리드타임 단축: 기획-개발-운영 전환의 반복 손실 감소',
      '운영비 절감: 수작업 운영을 관리자 기능으로 전환',
      '오류 리스크 감소: 권한/상태/연동 예외를 설계 단계에서 반영',
      '확장 용이성: 초기 MVP 이후 기능 확장 시 구조 재사용 가능',
      '협업 효율 향상: 문서-코드-운영 절차를 같은 기준으로 관리',
    ],
    metrics: ['평균 구축 기간: [ ]', '운영 전환 소요 단축: [ ]', '운영 처리 시간 절감: [ ]', '비용 절감 효과: [ ]'],
  },
  {
    title: 'PAGE 9. 문의처 (Contact)',
    headline: 'Build Fast. Operate Stable.',
    subheadline: 'ELITECH',
    bullets: [
      '모바일 서비스 구축 · 플랫폼 개발 · 운영 시스템 고도화',
      '회사명: 엘리테크',
      '웹사이트: [입력 예정]',
      '이메일: [입력 예정]',
      '전화번호: [입력 예정]',
    ],
    summary: '문의 목적 예시: 신규 서비스 구축 / 기존 시스템 고도화 / 외부 연동·운영체계 재설계',
  },
]

function Slide({ item, index }) {
  return (
    <section className="slide flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-5xl rounded-3xl bg-white p-10 shadow-xl ring-1 ring-slate-200">
        <p className="text-sm font-semibold tracking-wide text-brand-700">{item.title}</p>
        <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">{item.headline}</h1>
        {item.subheadline && <p className="mt-3 text-xl text-slate-700">{item.subheadline}</p>}
        {item.tagline && <p className="mt-2 text-base font-medium text-brand-700">{item.tagline}</p>}

        {item.phases ? (
          <div className="mt-8 space-y-5">
            {item.phases.map((phase) => (
              <div key={phase.name} className="rounded-2xl border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-900">{phase.name}</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
                  {phase.items.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : null}

        {item.sections ? (
          <div className="mt-6 space-y-3">
            {item.sections.map((section) => (
              <div key={section.name} className="rounded-xl bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">{section.name}</h3>
                <p className="mt-1 text-slate-700">{section.desc}</p>
              </div>
            ))}
          </div>
        ) : null}

        {item.bullets ? (
          <ul className="mt-6 list-disc space-y-2 pl-6 text-lg text-slate-800">
            {item.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        ) : null}

        {item.metrics ? (
          <div className="mt-6 rounded-2xl bg-brand-50 p-5">
            <p className="font-semibold text-brand-900">[수치 입력 영역]</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
              {item.metrics.map((metric) => (
                <li key={metric}>{metric}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {item.summary ? <p className="mt-6 text-base text-slate-600">{item.summary}</p> : null}
        <p className="mt-8 text-right text-sm text-slate-400">Slide {index + 1} / {slides.length}</p>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <main className="bg-gradient-to-b from-slate-100 to-slate-200">
      {slides.map((item, index) => (
        <Slide key={item.title} item={item} index={index} />
      ))}
    </main>
  )
}
