const header = document.querySelector("#header");
const gnb = document.querySelector("#gnb");
const hero = document.querySelector("#hero");
const logo = header.querySelectorAll("a");
const links = gnb.querySelectorAll("a");
const triggerHeight = hero.offsetHeight;

document.addEventListener("DOMContentLoaded", () => {
    if (header && hero) {
        const headerHeight = header.offsetHeight;
        hero.style.paddingTop = `${headerHeight}px`;
    }
})

function updateHeaderStyle() {
    logo.forEach((a) => {
        if (window.scrollY <= (triggerHeight - 20)) {
            a.classList.add("white");
        } else {
            a.classList.remove("white");
        }
    })

    links.forEach((b) => {
        if (window.scrollY <= triggerHeight) {
            b.classList.add("white");
        } else {
            b.classList.remove("white");
        }
    })
}

document.addEventListener("scroll", updateHeaderStyle);
document.addEventListener("DOMContentLoaded", updateHeaderStyle);

// 프로젝트 깃버튼
document.querySelectorAll(".up-git").forEach(button => {
    button.addEventListener("click", () => {
        const url = button.getAttribute("data-url");
        window.location.href = url;
    })
})

document.querySelectorAll(".up-notion").forEach(button => {
    button.addEventListener("click", () => {
        const url = button.getAttribute("data-url");
        window.location.href = url;
    })
})


document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalContainer = document.getElementById('modal-container');
    const buttons = document.querySelectorAll('.openModalBtn');

    const projectDetails = {
        4: {
            title: 'Swen',
            content: `
            <h1>🏔️ Swen</h1>
            <br>
            <h4>📌 프로젝트 개요</h4>
            <pre> 
 SWEN은 사용자가 매일 아침 한눈에 주요 뉴스를 확인하고, 음성으로 들을 수 있도록 지원하는 뉴스 자동 요약·음성 재생 앱입니다.
 최신 AI 기술과 음성 합성(TTS)을 결합하여, 단순한 뉴스 피드 제공을 넘어 개인화된 뉴스 경험을 제공하는 것을 목표로 합니다.
            </pre>
            <hr>
            <br>
            <h4>📅 개발 기간 및 팀 구성</h4>
            <pre> 
 ⏺ 개발 기간 : 2025.07.10 ~ 2025.07.28 (약 3주)
 ⏺ 인원 : 이민혁 외 3명
 ⏺ 맡은 역할 : 프로젝트 매니저 - JWT token 연동, 일정 관리, 팀 코디네이션
            </pre>
            <hr>
            <br>
            <h4>🔹 주요 기능</h4>
            <pre> 
 <strong>🎵 원클릭 뉴스 재생</strong>
  • 플레이 버튼 한 번으로 최신 뉴스 즉시 재생
  • 주제별 뉴스 검색 및 맞춤 재생
  • 고품질 TTS로 자연스러운 음성 제공

 <strong>🤖 AI 기반 관련 뉴스 추천</strong>
  • 현재 재생 중인 뉴스와 관련된 뉴스 3-5개 자동 추천
  • 벡터 유사도 기반 정확한 관련성 분석
  • 사용할수록 개선되는 개인화 추천

 <strong>⚡ 실시간 자동 학습 </strong>
  • 매일 자동으로 최신 뉴스 수집 및 벡터화
  • 사용자 행동 패턴 학습을 통한 추천 품질 향상
  • 콜드 스타트 문제 해결 (첫 사용자도 즉시 추천 가능)
            </pre>
            <hr>
            <br>
            <h4>🙋‍♂️ 담당 역할 및 구현 내용</h4>
            <pre> 
 <strong>담당 역할</strong>
 
 🗓️ 일정 관리
  • 애자일 기반 스프린트 계획 수립 및 진행 상황 관리
  • 매주 팀 단위 진행 상황 점검 및 리스크 관리
  • 우선순위 정리 및 마일스톤 관리
 
 👥 팀 코디네이션
  • 백엔드(SpringBoot) / 프론트엔드(Flutter) / AI 모델(HyperCLOVA, RAG) / 클라우드(NCP) 담당자 간 협업 조율
  • API 스펙 정의 및 문서화 관리
  • 이슈 발생 시 팀 간 커뮤니케이션 주도
    
 <strong>구현 및 결과</strong>
 
 🔐 JWT Token 기반 인증/인가 연동
  
  🚪 JWT 기반 로그인 인증 흐름 설계
   • 소셜 로그인(OAuth 2.0) → 네이버 서버 인증 → JWT 토큰 발급 → 클라이언트 저장
   • Refresh Token을 활용한 재인증 로직 설계

  ⚙️ 구현 내용
   1. Spring Security + JWT 연동
    - spring-security-oauth2-client 사용하여 소셜 로그인 구현
    - 로그인 성공 시 JWT Token(Access + Refresh) 발급
   2. 데이터베이스와 연동
    - 소셜 로그인 사용자 정보(User ID, 이메일, 닉네임 등) DB(MySQL)에 저장
    - 신규 사용자와 기존 사용자 판별 후 사용자 테이블에 insert/update 처리
   3. API 인증 테스트
    - 클라이언트(Flutter)에서 로그인 요청 → JWT 발급/갱신 정상 동작 확인
    - JWT 토큰 만료/위조 테스트 진행 (만료 시 Refresh Token 재요청 정상 동작 확인)
    - Postman 및 통합 테스트 코드(JUnit)로 API 정상 동작 검증

 🧪 수행 결과
  • 정상적인 소셜 로그인 및 JWT 인증 흐름 완성
  • 로그인 성공 시 사용자 정보가 DB에 정상 저장 및 갱신됨을 확인
  • 모바일 앱(Flutter)에서 로그인 후 JWT 기반 인증 API 호출 성공
  • 토큰 갱신 로직 검증 완료 → 안정적인 인증/인가 프로세스 확보
            </pre>
            <hr>
            <br>
            <h4>🤔 트러블 슈팅 및 느낀 점</h4>
            <pre> 
 이번 프로젝트에서 <b>처음</b>으로 Spring Boot 프레임워크를 도입하여 백엔드 개발을 진행했으며,
 팀 협업 효율성을 높이기 위해 IntelliJ IDEA 개발 도구 또한 <b>처음</b> 사용해보았습니다.
 초기에는 <b>익숙하지 않은</b> 기술 스택과 새로운 툴 환경에 <b>적응</b>하는 데 어려움이 있었으나,
 <b>꾸준한 학습</b>과 <b>적극적인 활용</b>을 통해 빠르게 숙련할 수 있었습니다.
 특히, 에뮬레이터 환경에서는 정상적으로 기능이 구현되어 테스트되었으나,
 실제 모바일 기기에서 실행했을 때 <b>환경 차이</b>로 인해 일부 기능이 정상 동작하지 않는 <b>문제</b>를 마주했습니다.
 이로 인해 모바일 특성을 고려하여 네트워크, 권한, API 호출 방식 등을 다시 <b>점검</b>하고 <b>재구성</b>하는 과정을 거쳤습니다.
 결과적으로, 단순히 개발 환경의 차이에서 발생한 문제를 <b>해결</b>하며 케이스별 테스트와 디버깅의 중요성을 몸소 체감했으며,
 실제 사용자 환경에 맞춘 최적화 작업의 <b>필요성</b>을 깊이 인식하게 되었습니다.
 이 <b>경험</b>은 새로운 기술 학습과 현장 문제 해결 능력 향상에 큰 밑거름이 되었습니다.
            </pre>
            ` },
        3: {
            title: 'UPHILL',
            content: `
            <h1>🏔️ UPHILL</h1>
            <br>
            <h4>📌 프로젝트 개요</h4>
            <pre> 
 등산이라는 건강한 습관을 지속할 수 있도록 동기를 부여할 방법을 고민하던 중
 고도에 따라 포인트를 지급하고 이를 활용해 앱 내 아이템을 구매할 수 있는 시스템을 떠올리게 되었고
 그 아이디어를 바탕으로 앱을 개발하게 되었습니다.
            </pre>
            <hr>
            <br>
            <h4>📅 개발 기간 및 팀 구성</h4>
            <pre> 
 ⏺ 개발 기간 : 2024.09.24 ~ 2024.10.28 (1개월)
 ⏺ 인원 : 이민혁 외 4명
 ⏺ 맡은 역할 : 로그인, 회원가입 및 Kakao 소셜 로그인 기능 구현 (NestJS 기반의 인증 로직)
            </pre>
            <hr>
            <br>
            <h4>🔹 주요 기능</h4>
            <pre> 
 ⏺ 로그인 / 회원가입 : 사용자 정보를 입력받아 저장, 저장된 회원 정보로 검증 후 메인 페이지로 이동
 ⏺ 지도 : 현재 사용자의 위치 정보를 표시하고 높아지는 고도를 체크해 포인트를 지급
 ⏺ 아바타 및 상품 : 지급 받은 포인트로 원하는 아바타나 상품을 구매
 ⏺ 보관함 : 사용자가 구매한 상품을 보관하고 확인 후 사용
 ⏺ 개인정보 : 현재 사용자의 정보를 확인하고 닉네임 및 패스워드 변경 가능
 ⏺ 구매정보 : 현재 사용자가 구매한 상품 이력 확인 가능
            </pre>
            <hr>
            <br>
            <h4>🙋‍♂️ 담당 역할 및 구현 내용</h4>
            <pre> 
 ⏺ NestJS 기반 로그인 / 회원가입 기능 구현
 ⏺ DTO, Guard, Pipe 등 NestJS 핵심 기능 활용
 ⏺ Kakao OAuth 연동 및 의존성 주입 트러블슈팅 경험
 ⏺ 모듈화 및 역할 분리 설계를 통해 구조적인 코드 구현
            </pre>
            <hr>
            <br>
            <h4>🤔 트러블 슈팅 및 느낀 점</h4>
            <pre> 
 소셜 로그인 구현 과정에서 의존성 주입 <b>오류</b>가 <b>발생</b>하면서
 NestJS의 <b>DI(Dependency Injection) 시스템</b>을 다시 <b>학습</b>하게 되었고
 직접 <b>문제</b>를 <b>분석</b>하며 해결 방안을 찾아낼 수 있었습니다.
 이를 통해 구조적인 백엔드 설계 방식에 대한 <b>이해</b>가 한층 더 깊어졌습니다.
 단순히 기능을 구현하는 데서 그치지 않고, <b>왜</b> 이러한 구조가 필요한지 <b>고민</b>해보는 계기가 되었으며
 에러를 두려워하지 않고 직면하는 태도와 디버깅 역량 또한 <b>성장</b>할 수 있었습니다.
            </pre>
            ` },
        2: {
            title: 'InsideOut',
            content: `
            <h1>🥃 InsideOut</h1>
            <br>
            <h4>📌 프로젝트 개요</h4>
            <pre> 
 위스키, 칵테일 등 다양한 주류의 제조법과 추천 안주 정보를 자유롭게 공유하고
 사용자들 간의 소통을 통해 새로운 조합을 발견할 수 있는 커뮤니티 게시판 사이트를 구현하였습니다.
            </pre>
            <hr>
            <br>
            <h4>📅 개발 기간 및 팀 구성</h4>
            <pre> 
 ⏺ 개발 기간 : 2024.07.18 ~ 2024.08.05 (약 3주)
 ⏺ 인원 : 이민혁 외 3명
 ⏺ 맡은 역할 : QnA 페이지와 게시글 CRUD, 댓글/대댓글 기능을 NestJS로 구현했습니다.
            </pre>
            <hr>
            <br>
            <h4>🔹 주요 기능</h4>
            <pre> 
 ⏺ 회원가입 / 로그인 :
    NestJS로 백엔드를 구축하고,
    프론트에서는 JavaScript와 Axios를 활용해 로그인 및 회원가입 요청을 처리했습니다.
    사용자 인증 및 세션 관리 기능을 통해 사용자 상태를 유지할 수 있도록 구현했습니다.

 ⏺ QnA 게시판 CRUD :
    사용자는 게시글 등록 및 조회가 가능하며,
    게시글의 수정 및 삭제는 작성자 본인과 관리자만 가능하도록 권한을 설정했습니다.
    게시글/댓글/대댓글의 id 값과 로그인된 사용자 정보를 비교하여 권한을 판단하고,
    NestJS의 where 조건을 활용해 서버에서 권한을 검사한 후 요청을 처리하도록 구현했습니다.
    전체 기능은 NestJS 기반의 REST API로 구성되었습니다.

 ⏺ 댓글 / 대댓글 기능
    게시글에 댓글 및 대댓글을 작성할 수 있으며,
    댓글의 수정 및 삭제는 댓글 작성자, 게시글 작성자, 관리자만 가능하도록 구현했습니다.
    Axios와 async/await를 활용하여 비동기 처리를 적용하였고,
    페이지 새로고침 없이 실시간으로 댓글이 반영되도록 구현하였습니다.
            </pre>
            <hr>
            <br>
            <h4>🙋‍♂️ 담당 역할 및 구현 내용</h4>
            <pre> 
 ⏺ FrontEnd
    QnA 페이지의 전체 UI를 구현하고, 게시글 등록 및 수정 페이지를 디자인했습니다.
    사용자 경험(UX)을 고려한 직관적인 페이지 구조를 설계하고, 데이터와 상호작용하는 동적인 인터페이스를 구현했습니다.

 ⏺ BackEnd
    서버와 클라이언트 간의 데이터 통신을 처리하며, Axios를 사용한 API 요청을 구현했습니다.
    게시글 및 댓글 데이터를 서버에 저장하고, NestJS 기반의 RESTful API를 통해 데이터 처리 로직을 구현했습니다.
    사용자 인증 및 권한 관리를 위한 데이터 검증 및 세션 관리를 담당했습니다.
            </pre>
            <hr>
            <br>
            <h4>🛠️ 트러블 슈팅</h4>
            <pre> 
 ⏺ 비회원의 게시글 작성 가능 이슈
    문제 : 토큰이 없는 사용자도 게시글을 작성할 수 있는 문제가 발생
    해결 : 클라이언트 측에서 토큰 유무를 검사하여, 로그인된 사용자에게만 "작성하기" 버튼이 보이도록 조건부 렌더링 구현

 ⏺ 게시글 수정·삭제 권한 미제한 이슈
    문제 : 로그인한 사용자라면 다른 사용자의 게시글도 자유롭게 수정 및 삭제가 가능한 문제가 발생
    해결 : 게시글의 작성자 ID와 로그인한 사용자의 토큰 정보를 비교하여, 일치하는 경우에만 수정/삭제 기능 활성화

 ⏺ 댓글 및 대댓글 수정·삭제 불가능 이슈
    문제 : 원하는 댓글이나 대댓글에 접근해도 수정/삭제 기능이 제대로 동작하지 않음
    해결 : 각 댓글에 고유한 ID 값을 부여하고, 해당 ID를 기준으로 특정 댓글에 정확히 접근할 수 있도록 처리
            </pre>
            <hr>
            <br>
            <h4>💡 느낀 점</h4>
            <pre> 
 이번 프로젝트를 통해 단순히 기능을 구현하는 것을 넘어서,
 권한 관리와 사용자 인증의 중요성을 깊이 이해하게 되었습니다.
 특히 사용자 경험을 고려한 조건부 UI 처리와,
 백엔드에서의 정확한 식별 및 검증 로직 구현의 필요성을 체감할 수 있었습니다.
            </pre>
            `
        },
        1: {
            title: 'GM',
            content: `
            <h1>🎮 GM</h1>
            <br>
            <h4>📌 프로젝트 개요</h4>
            <pre> 
 혼자 게임을 즐기는 것보다 함께 플레이하고 싶은 사람들을 위한 커뮤니티 사이트를 목표로,
 게임 메이트를 모집하고 게임 관련 자료를 자유롭게 공유할 수 있는 공간을 만들어보고자 했습니다.
            </pre>
            <hr>
            <br>
            <h4>📅 개발 기간 및 팀 구성</h4>
            <pre> 
 ⏺ 개발 기간 : 2024.05.14 ~ 2024.05.28 (2주)
 ⏺ 인원 : 이민혁 외 2명
 ⏺ 맡은 역할 : QnA 페이지, 게시글 CRUD, 댓글/대댓글, 조회수, 검색, 페이지네이션 등
             커뮤니티의 핵심 기능을 전반적으로 구현했습니다.
            </pre>
            <hr>
            <br>
            <h4>🔹 주요 기능</h4>
            <pre> 
 ⏺ QnA 페이지: 자유롭게 질문과 답변을 주고받을 수 있는 공간
 ⏺ 게시글 CRUD: 게시글 작성, 수정, 삭제, 상세 조회 기능 구현
 ⏺ 댓글 및 대댓글 기능: 게시글에 댓글과 대댓글을 달 수 있도록 구조화
 ⏺ 조회수 기능: 게시글 클릭 시 조회수 증가
 ⏺ 게시글 검색: 제목 기준 검색 기능 구현
 ⏺ 페이지네이션: 게시글 목록을 일정 개수 단위로 나눠서 보여주는 기능 구현
            </pre>
            <hr>
            <br>
            <h4>🙋‍♂️ 담당 역할 및 구현 내용</h4>
            <pre> 
 ⏺ 고객센터(QnA) 페이지 전체 기획 및 구현
 ⏺ 작성, 상세 조회, 수정 페이지 구성 및 동작 구현
 ⏺ 로그인한 사용자만 게시글 작성 가능하도록 제한
 ⏺ 본인이 작성한 게시글만 수정·삭제할 수 있도록 조건 처리
 ⏺ 댓글 및 대댓글 작성, 수정, 삭제 기능 구현
 ⏺ 댓글 또한 로그인된 사용자 본인의 것만 수정·삭제 가능하도록 구현
 ⏺ 게시글 조회 시 조회 수 증가 기능 구현
 ⏺ 게시글 제목 기반 검색 기능 구현
 ⏺ 페이지네이션 기능 구현하여 게시글 목록 정리
            </pre>
            <hr>
            <br>
            <h4>🛠️ 트러블 슈팅</h4>
            <pre> 
 ⏺ 댓글 삭제 시 잘못된 댓글이 삭제되는 문제 발생
  → 댓글에 대한 index 값을 정확히 받아오지 못해 생긴 오류였고,
    로직을 점검한 후 index를 정확히 전달하도록 수정하여 문제를 해결하였습니다.

 ⏺ 게시글 및 댓글의 작성자만 수정·삭제할 수 있도록 구현하는 과정에서의 문제
  → 초기에는 글의 ID나 댓글의 index 값을 정확히 불러오지 못해 기능 구현에 어려움이 있었습니다만,
    접근 방식을 바꿔 사용자 정보와 데이터 간 연결 방식을 명확히 하여 문제를 해결하였습니다.
            </pre>
            <hr>
            <br>
            <h4>💡 느낀 점</h4>
            <pre> 
 사용자 식별 및 데이터 처리의 중요성을 느꼈고, 단순한 기능 구현이더라도
 정확한 데이터 흐름과 구조 설계가 얼마나 중요한지를 체감할 수 있었습니다.
 또한, 프론트엔드만으로도 기능적인 커뮤니티 구현이 가능하다는 점에서
 웹 구조에 대한 이해가 한층 더 깊어졌다고 느꼈습니다.
 
 그리고 로컬 스토리지에 아이디/비밀번호를 저장하면서,
 개발자 도구를 통해 누구나 열람 가능한 구조에 대한 보안적 고민이 생겼고,
 이 경험을 통해 프론트엔드 단의 인증 방식은 한계가 있다는 점을 인식하게 되었습니다.
 이를 계기로 토큰 기반 인증 방식(JWT 등)과 백엔드 연동의 필요성을 스스로 고민해보는 계기가 되었습니다.
            </pre>
            `
        }
    };

    // 버튼 클릭 이벤트
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const projectId = button.getAttribute('data-id');
            modalContainer.innerHTML = projectDetails[projectId].content;
            modal.style.display = 'flex';
        });
    });

    // 모달 닫기
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        modalContainer.innerHTML = '';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            modalContainer.innerHTML = '';
        }
    });
});