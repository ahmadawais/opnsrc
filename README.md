# opnsrc

A simple CLI tool to clone GitHub repositories into the current directory.

## Usage

```bash
npx opnsrc <repo-url-or-user/repo>
```

## Examples

Clone using full GitHub URL:
```bash
npx opnsrc https://github.com/ahmadawais/terminui
```

Clone using user/repo shorthand:
```bash
npx opnsrc ahmadawais/terminui
```

## Features

- Accepts both full GitHub URLs and `user/repo` format
- Clones repositories into the opnsrc directory
- Prevents overwriting existing directories
- Shows progress during cloning
- Clear error messages for invalid input

## Requirements

- Node.js
- Git

## License

Apache-2.0 by [Ahmad Awais](https://x.com/MrAhmadAwais) built with [Command Code](https://commandcode.ai).
