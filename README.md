# Book Management

도서 정보를 조회·검색·등록·수정·삭제할 수 있는 풀스택 도서 관리 애플리케이션입니다.

## 기술 스택

| 구분 | 기술 |
|------|------|
| **백엔드** | Java 21, Spring Boot 3.4.5, Spring Data JPA, Lombok |
| **데이터베이스** | H2 (인메모리) |
| **프론트엔드** | Next.js 16, React 19, TypeScript, Tailwind CSS 4 |
| **빌드 도구** | Gradle (API), npm (Front) |

## 사전 요구사항

- **JDK 21** 이상
- **Node.js 20** 이상 및 npm

## 실행 방법

### 1. 백엔드 (API)

```bash
cd book-management-api
./gradlew bootRun
```

Windows:

```bash
cd book-management-api
gradlew.bat bootRun
```

- API 서버: [http://localhost:8080](http://localhost:8080)
- H2 콘솔: [http://localhost:8080/h2-console](http://localhost:8080/h2-console)  
  - JDBC URL: `jdbc:h2:mem:bookdb`  
  - 사용자명: `sa` / 비밀번호: (비어 있음)

시작 시 `data.sql`에 정의된 샘플 도서 3건이 자동으로 로드됩니다.

### 2. 프론트엔드

백엔드가 실행 중인 상태에서:

```bash
cd book-management-front
npm install
npm run dev
```

- 웹 UI: [http://localhost:3000](http://localhost:3000)

API 주소를 변경하려면 `book-management-front` 디렉터리에 `.env.local` 파일을 만들고 다음을 설정합니다.

```env
NEXT_PUBLIC_API_URL=http://localhost:8080
```

### 프로덕션 빌드

**백엔드**

```bash
cd book-management-api
./gradlew bootJar
java -jar build/libs/book-management-api-1.0.0.jar
```

**프론트엔드**

```bash
cd book-management-front
npm run build
npm start
```

## 프로젝트 구조

```
book-management/
├── book-management-api/    # Spring Boot REST API
└── book-management-front/  # Next.js 웹 클라이언트
```

## API 엔드포인트

기본 URL: `http://localhost:8080`

### 도서 (`/api/books`)

| 메서드 | 경로 | 설명 | 요청 | 응답 |
|--------|------|------|------|------|
| `GET` | `/api/books` | 전체 도서 목록 조회 | — | `200` — `Book[]` |
| `GET` | `/api/books/search?title={title}` | 제목으로 도서 검색 (부분 일치) | Query: `title` (필수) | `200` — `Book[]` |
| `GET` | `/api/books/{id}` | ID로 단일 도서 조회 | Path: `id` | `200` — `Book` / `404` — `{ "message": "..." }` |
| `POST` | `/api/books` | 도서 등록 | Body: `Book` (id 제외) | `201` — `Book` |
| `PUT` | `/api/books/{id}` | 도서 수정 | Path: `id`, Body: `Book` | `200` — `Book` / `404` |
| `DELETE` | `/api/books/{id}` | 도서 삭제 | Path: `id` | `204` No Content / `404` |

### Book 객체

```json
{
  "id": 1,
  "title": "Clean Code",
  "author": "Robert Martin",
  "price": 33000,
  "available": true
}
```

| 필드 | 타입 | 설명 |
|------|------|------|
| `id` | `number` | 도서 ID (자동 생성, POST 시 생략 가능) |
| `title` | `string` | 제목 (필수) |
| `author` | `string` | 저자 (필수) |
| `price` | `number` \| `null` | 가격 |
| `available` | `boolean` | 대여 가능 여부 (기본값 `true`) |

### 요청 예시

**도서 등록**

```http
POST /api/books
Content-Type: application/json

{
  "title": "새 도서",
  "author": "홍길동",
  "price": 25000,
  "available": true
}
```

**제목 검색**

```http
GET /api/books/search?title=Java
```

**도서 수정**

```http
PUT /api/books/1
Content-Type: application/json

{
  "title": "수정된 제목",
  "author": "저자",
  "price": 30000,
  "available": false
}
```

## CORS

프론트엔드(`http://localhost:3000`)에서 API(`/api/**`)로의 요청이 허용되도록 설정되어 있습니다.
