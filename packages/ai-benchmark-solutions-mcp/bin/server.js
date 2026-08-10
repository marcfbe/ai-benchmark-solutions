#!/usr/bin/env node
"use strict";

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { findBenchmark, getSolutions } from "../src/tools.js";

const server = new McpServer({
  name: "ai-benchmark-solutions-mcp",
  version: "1.0.0"
});

server.registerTool(
  "find_benchmark",
  {
    description:
      "List curated AI benchmarks with id and description. Optional query filters by id or description substring.",
    inputSchema: {
      query: z
        .string()
        .optional()
        .describe(
          "Optional case-insensitive filter matched against benchmark id and description. Omit or leave empty to return all."
        )
    }
  },
  async ({ query }) => findBenchmark(query)
);

server.registerTool(
  "get_solutions",
  {
    description:
      "Return the Benchmark Solution Finder skill (SKILL.md) for a known benchmark id.",
    inputSchema: {
      benchmark_id: z
        .string()
        .describe(
          "Benchmark folder id (e.g. hle, terminal-bench). Use find_benchmark to discover ids."
        )
    }
  },
  async ({ benchmark_id }) => getSolutions(benchmark_id)
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error("ai-benchmark-solutions-mcp failed:", error);
  process.exit(1);
});
