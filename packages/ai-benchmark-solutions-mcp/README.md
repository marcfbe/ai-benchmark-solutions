# ai-benchmark-solutions-mcp

Mock [Model Context Protocol](https://modelcontextprotocol.io/) server that exposes curated benchmark catalog lookup tools for the [ai-model-benchmark-solutions](https://www.npmjs.com/package/ai-model-benchmark-solutions) and [ai-coding-benchmark-solutions](https://www.npmjs.com/package/ai-coding-benchmark-solutions) packages.

Runs locally over **stdio** (GitHub Pages cannot host a real MCP HTTP endpoint).

## Install / run

```bash
npx -y ai-benchmark-solutions-mcp
```

Or add as a dependency:

```bash
npm install ai-benchmark-solutions-mcp
```

## Cursor / MCP client config

```json
{
  "mcpServers": {
    "ai-benchmark-solutions": {
      "command": "npx",
      "args": ["-y", "ai-benchmark-solutions-mcp"]
    }
  }
}
```

## Tools

| Tool | Input | Output |
| --- | --- | --- |
| `find_benchmark` | optional `query` | JSON list of `{ id, description }` (all benchmarks, or filtered) |
| `get_solutions` | required `benchmark_id` | `skills/benchmark-solution-finder/SKILL.md` for a known id |

## Package layout

```text
ai-benchmark-solutions-mcp/
  bin/server.js
  src/catalog.js
  src/tools.js
  skills/benchmark-solution-finder/SKILL.md
  index.js
```

## License

[CC-BY-NC-4.0](https://spdx.org/licenses/CC-BY-NC-4.0.html) — see [`LICENSE`](LICENSE).
