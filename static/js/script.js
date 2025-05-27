const header = document.querySelector("#header");
const gnb = document.querySelector("#gnb");
const hero = document.querySelector("#hero");
const logo = header.querySelectorAll("a");
const links = gnb.querySelectorAll("a");
const triggerHeight = 590;

document.addEventListener("DOMContentLoaded", () => {
    if (header && hero) {
        const headerHeight = header.offsetHeight;
        hero.style.paddingTop = `${headerHeight}px`;
    }
})

function updateHeaderStyle() {
    logo.forEach((a) => {
        if (window.scrollY <= triggerHeight) {
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