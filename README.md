# AI Benchmark Solutions Monorepo

Curated reference solution notes for evaluations commonly used in [Artificial Analysis Intelligence Benchmarking](https://artificialanalysis.ai/methodology/intelligence-benchmarking), plus adjacent coding, agent, and cybersecurity agent benchmarks.

## Packages

| Package | npm name | Focus |
| --- | --- | --- |
| [`packages/ai-model-benchmark-solutions`](packages/ai-model-benchmark-solutions) | `ai-model-benchmark-solutions` | Intelligence Index, additional/legacy AA evals, ExploitGym neighborhood, GAIA, WebArena |
| [`packages/ai-coding-benchmark-solutions`](packages/ai-coding-benchmark-solutions) | `ai-coding-benchmark-solutions` | Terminal-Bench, SciCode, LiveCodeBench, SWE-bench |
| [`packages/ai-benchmark-solutions-mcp`](packages/ai-benchmark-solutions-mcp) | `ai-benchmark-solutions-mcp` | Stdio MCP server with `find_benchmark` and `get_solutions` |

## Workspace

```bash
npm install
```

## MCP server

Run the mock MCP server locally over stdio (not hostable on GitHub Pages):

```bash
npx -y ai-benchmark-solutions-mcp
```

Cursor / MCP client example:

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

Tools: `find_benchmark` (list id + description), `get_solutions` (return `SKILL.md` for a known benchmark id).

## License

[CC-BY-NC-4.0](https://spdx.org/licenses/CC-BY-NC-4.0.html) — see [`LICENSE`](LICENSE).
