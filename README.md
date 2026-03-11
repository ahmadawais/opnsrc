# opnsrc

A simple CLI tool to clone GitHub repositories into the current directory.

## Usage

```bash
node index.js <repo-url-or-user/repo>
```

## Examples

Clone using full GitHub URL:
```bash
node index.js https://github.com/vercel/next.js
```

Clone using user/repo shorthand:
```bash
node index.js vercel/next.js
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

Apache-2.0
