import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // テスト環境でnext.config.jsと.envファイルを読み込むために、Next.jsアプリへのパスを指定します。
  dir: './',
})

// Jestに渡すカスタム設定を追加する
/** @type {import('jest').Config} */
const config = {
  // 各テストが実行される前に、カスタムマッチャーをインポートする
  // 注意　毎回テストごとにテストファイルにインポートしなければならないため設定する必要あり
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
}

// next/jestが非同期でNext.jsの設定をロードできるようにする
export default createJestConfig(config)
