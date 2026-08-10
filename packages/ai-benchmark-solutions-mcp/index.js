"use strict";

import { benchmarks } from "./src/catalog.js";

export { benchmarks, findBenchmarks, getBenchmark } from "./src/catalog.js";
export { findBenchmark, getSolutions } from "./src/tools.js";

export default {
  name: "ai-benchmark-solutions-mcp",
  message:
    "Run the MCP server via npx ai-benchmark-solutions-mcp (stdio). Tools: find_benchmark, get_solutions.",
  benchmarks: benchmarks.map((b) => b.id)
};
