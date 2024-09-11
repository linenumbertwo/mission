// 한국말로 주석해줘
module.exports = {
  preset: 'ts-jest', // ts-jest 프리셋 사용
  testEnvironment: 'node', // node 환경에서 테스트
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // ts 파일을 ts-jest로 변환
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'], // ts, tsx, js 파일을 모듈로 사용
  testMatch: ['**/tests/**/*.spec.ts'], // tests 폴더 안에 있는 spec.ts 파일을 테스트로 사용
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json', // tsconfig.json 파일을 사용
    },
  },
};
