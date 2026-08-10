"use strict";

/** @typedef {{ id: string, description: string }} BenchmarkEntry */

/** @type {BenchmarkEntry[]} */
export const benchmarks = [
  {
    id: "gdpval-aa",
    description:
      "GDPval-AA v2 — Economically valuable professional tasks; submissions ranked via judge Elo (Intelligence Index ~20%)."
  },
  {
    id: "tau3-banking",
    description:
      "𝜏³-Banking — Dual-control style fintech support agents across many tasks with repeated pass@1 scoring (Intelligence Index ~14%)."
  },
  {
    id: "aa-omniscience",
    description:
      "AA-Omniscience — Accuracy and hallucination avoidance; dual metrics feeding the Intelligence Index (~12%)."
  },
  {
    id: "hle",
    description:
      "HLE (Humanity's Last Exam) — Broad, difficult academic questions spanning math and sciences; pass@1 (Intelligence Index ~12%)."
  },
  {
    id: "aa-lcr",
    description:
      "AA-LCR — Open-answer questions requiring reasoning across multiple long documents (~100k tokens; Index ~6%)."
  },
  {
    id: "gpqa-diamond",
    description:
      "GPQA Diamond — Google-proof graduate science QA; regex-extracted multiple choice (Intelligence Index ~6%)."
  },
  {
    id: "critpt",
    description:
      "CritPt — Challenging physics problems with rigorous grading (Intelligence Index ~6%)."
  },
  {
    id: "aa-briefcase",
    description:
      "AA-Briefcase — Multi-week knowledge-work scenarios; rubric + pairwise quality."
  },
  {
    id: "harvey-lab-aa",
    description: "Harvey LAB-AA — Legal deliverables across practice areas."
  },
  {
    id: "apex-agents-aa",
    description:
      "APEX-Agents-AA — Long-horizon cross-application professional tasks."
  },
  {
    id: "automationbench-aa",
    description:
      "AutomationBench-AA — Business-app workflows via REST APIs with guardrails."
  },
  {
    id: "enterpriseops-gym-aa",
    description:
      "EnterpriseOps-Gym-AA — Real-time planning in complex enterprise workflows."
  },
  {
    id: "itbench-aa",
    description: "ITBench-AA — SRE / Kubernetes incident root-cause tasks."
  },
  {
    id: "ifbench",
    description: "IFBench — Precise instruction following across diverse skills."
  },
  {
    id: "mmlu-pro",
    description: "MMLU-Pro — Advanced multi-task knowledge; multiple choice."
  },
  {
    id: "global-mmlu-lite",
    description:
      "Global-MMLU-Lite — Multilingual knowledge / cultural coverage."
  },
  {
    id: "mmmu-pro",
    description: "MMMU Pro — Multimodal academic reasoning."
  },
  {
    id: "tau2-bench-telecom",
    description:
      "𝜏²-Bench Telecom — Dual-control telecom agents; superseded by 𝜏³-Banking (legacy)."
  },
  {
    id: "math-500",
    description:
      "MATH-500 — 500-problem MATH subset; retired from the Intelligence Index (legacy)."
  },
  {
    id: "aime-2025",
    description:
      "AIME 2025 — Contest math; no longer in the Intelligence Index (legacy)."
  },
  {
    id: "exploitgym",
    description:
      "ExploitGym — Containerized real-world vulnerability instances; extend PoV inputs toward unauthorized code execution."
  },
  {
    id: "cve-bench",
    description:
      "CVE-Bench — Critical-severity web-app CVEs; sandboxed attack objectives (DoS, file access/creation)."
  },
  {
    id: "exploitbench",
    description:
      "ExploitBench — Graded exploitation ladder (reach vulnerable code → crash → memory primitives → ACE)."
  },
  {
    id: "cybench",
    description:
      "Cybench — CTF-style cybersecurity tasks across difficulties and categories."
  },
  {
    id: "agent-security-bench",
    description:
      "Agent Security Bench (ASB) — Multi-scenario agent adversarial robustness (tools, attacks, defenses)."
  },
  {
    id: "autopenbench",
    description:
      "AUTOPENBENCH — End-to-end penetration-testing tasks against vulnerable systems."
  },
  {
    id: "agent-red-teaming",
    description:
      "Agent Red Teaming (ART) — Curated high-impact attacks evaluated across many models."
  },
  {
    id: "gaia",
    description: "GAIA — General AI assistant / agent task suite."
  },
  {
    id: "webarena",
    description: "WebArena — Realistic web-environment agent tasks."
  },
  {
    id: "terminal-bench",
    description:
      "Terminal-Bench v2.1 — Terminal-based software engineering and systems tasks; pass/fail via verification suites (Intelligence Index ~16%)."
  },
  {
    id: "scicode",
    description:
      "SciCode — Scientific Python programming; code must pass unit tests (Intelligence Index ~8%)."
  },
  {
    id: "livecodebench",
    description:
      "LiveCodeBench — Competitive-style Python programming; pass@1 (additional AA eval)."
  },
  {
    id: "terminal-bench-hard",
    description:
      "Terminal-Bench Hard — Earlier hard subset of agentic terminal tasks; superseded by Terminal-Bench v2.1 (legacy)."
  },
  {
    id: "swe-bench",
    description:
      "SWE-bench — Real GitHub issue resolution for software-engineering agents (patch generation, tests, repo context)."
  }
];

/**
 * @param {string} [query]
 * @returns {BenchmarkEntry[]}
 */
export function findBenchmarks(query) {
  const q = typeof query === "string" ? query.trim().toLowerCase() : "";
  if (!q) {
    return benchmarks.slice();
  }
  return benchmarks.filter(
    (b) =>
      b.id.toLowerCase().includes(q) ||
      b.description.toLowerCase().includes(q)
  );
}

/**
 * @param {string} id
 * @returns {BenchmarkEntry | undefined}
 */
export function getBenchmark(id) {
  const needle = String(id || "")
    .trim()
    .toLowerCase();
  return benchmarks.find((b) => b.id === needle);
}
