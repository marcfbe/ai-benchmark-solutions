"use strict";

import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { findBenchmarks, getBenchmark } from "./catalog.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const skillPath = join(
  __dirname,
  "..",
  "skills",
  "benchmark-solution-finder",
  "SKILL.md"
);

/**
 * @param {string} [query]
 * @returns {{ content: Array<{ type: "text", text: string }> }}
 */
export function findBenchmark(query) {
  const matches = findBenchmarks(query);
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(matches, null, 2)
      }
    ]
  };
}

/**
 * @param {string} benchmarkId
 * @returns {{ content: Array<{ type: "text", text: string }>, isError?: boolean }}
 */
export function getSolutions(benchmarkId) {
  const entry = getBenchmark(benchmarkId);
  if (!entry) {
    return {
      isError: true,
      content: [
        {
          type: "text",
          text: `Unknown benchmark_id: ${JSON.stringify(benchmarkId)}. Use find_benchmark to list valid ids.`
        }
      ]
    };
  }

  const skill = readFileSync(skillPath, "utf8");
  return {
    content: [
      {
        type: "text",
        text: skill
      }
    ]
  };
}
