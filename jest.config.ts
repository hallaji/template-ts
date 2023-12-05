import type { Config } from "jest"

const config: Config = {
  silent: true,
  verbose: true,
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
}

export default config
