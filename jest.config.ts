/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
export const front_config ={
  roots: ['<rootDir>'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]', '<rootDir>/__tests__/api/*', '<rootDir>/__tests__/mockedData/*'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/_mocks_/fileMock.js',
    // replicate path mappings as in tsconfig.json
    '^~lib/(.*)$': '<rootDir>/lib/$1',
    '^~components/(.*)$': '<rootDir>/components/$1',
  }
}

const back_config = {
  ...front_config,
  testEnvironment: 'node',
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]', '<rootDir>/__tests__/ui/*', '<rootDir>/__tests__/mockedData/*']
}

let config = {};

  if(process.argv[4].split("=")[1]=="frontend"){
    config = front_config;
  }else{
    config = back_config;
  }

  module.exports = config;
