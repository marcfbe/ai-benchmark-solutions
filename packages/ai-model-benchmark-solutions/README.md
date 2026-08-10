# ai-model-benchmark-solutions

Curated **reference solution notes** for evaluations used in [Artificial Analysis Intelligence Benchmarking](https://artificialanalysis.ai/methodology/intelligence-benchmarking), plus cybersecurity/agent exploitation benchmarks in the [ExploitGym](https://github.com/sunblaze-ucb/exploitgym) neighborhood, and broader agent evaluations (**GAIA**, **WebArena**).

Install this package to place per-benchmark `SOLUTION.md` files on disk for harnesses, research agents, and offline review.

## Install

```bash
npm install ai-model-benchmark-solutions
```

Solution notes live at:

```text
node_modules/ai-model-benchmark-solutions/<benchmark>/SOLUTION.md
```

## Artificial Analysis Intelligence Index

The Intelligence Index consolidates **nine** evaluations into a single quality signal. Approximate Index weights (as documented by Artificial Analysis methodology) for components covered here:

| Benchmark | Weight | Focus |
| --- | --- | --- |
| **GDPval-AA v2** | 20% | Economically valuable tasks across occupations; Elo-style pairwise judging |
| **𝜏³-Banking** | 14% | Fintech customer-support agents; multi-step tools + knowledge; pass@1 |
| **AA-Omniscience** | 12% | Factual reliability vs hallucination across domains |
| **HLE (Humanity's Last Exam)** | 12% | Hard interdisciplinary exam questions; pass@1 |
| **AA-LCR** | 6% | Long-context reasoning over ~100k-token document sets |
| **GPQA Diamond** | 6% | Graduate-level science multiple choice; pass@1 |
| **CritPt** | 6% | Challenging physics reasoning / knowledge |

Coding Index components (**Terminal-Bench**, **SciCode**) ship in the companion package [`ai-coding-benchmark-solutions`](https://www.npmjs.com/package/ai-coding-benchmark-solutions).

### Index & additional AA evaluations (this package)

- **GDPval-AA v2** (`gdpval-aa`) — Economically valuable professional tasks; submissions ranked via judge Elo.
- **𝜏³-Banking** (`tau3-banking`) — Dual-control style fintech support agents across many tasks with repeated pass@1 scoring.
- **AA-LCR** (`aa-lcr`) — Open-answer questions requiring reasoning across multiple long documents.
- **AA-Omniscience** (`aa-omniscience`) — Accuracy and hallucination avoidance; dual metrics feeding the Index.
- **HLE** (`hle`) — Broad, difficult academic questions spanning math and sciences.
- **GPQA Diamond** (`gpqa-diamond`) — Google-proof graduate science QA; regex-extracted multiple choice.
- **CritPt** (`critpt`) — Physics problems with rigorous grading (including official grading-server style checks where applicable).
- **AA-Briefcase** (`aa-briefcase`) — Multi-week knowledge-work scenarios; rubric + pairwise quality.
- **Harvey LAB-AA** (`harvey-lab-aa`) — Legal deliverables across practice areas.
- **APEX-Agents-AA** (`apex-agents-aa`) — Long-horizon cross-application professional tasks.
- **AutomationBench-AA** (`automationbench-aa`) — Business-app workflows via REST APIs with guardrails.
- **EnterpriseOps-Gym-AA** (`enterpriseops-gym-aa`) — Real-time planning in complex enterprise workflows.
- **ITBench-AA** (`itbench-aa`) — SRE / Kubernetes incident root-cause tasks.
- **IFBench** (`ifbench`) — Precise instruction following across diverse skills.
- **MMLU-Pro** (`mmlu-pro`) — Advanced multi-task knowledge; multiple choice.
- **Global-MMLU-Lite** (`global-mmlu-lite`) — Multilingual knowledge / cultural coverage.
- **MMMU Pro** (`mmmu-pro`) — Multimodal academic reasoning.

## Legacy evaluations

Aligned with [Artificial Analysis legacy evaluations](https://artificialanalysis.ai/methodology/intelligence-benchmarking#legacy-evaluations):

| Folder | Benchmark | Notes |
| --- | --- | --- |
| `tau2-bench-telecom` | 𝜏²-Bench Telecom | Dual-control telecom agents; superseded by 𝜏³-Banking |
| `math-500` | MATH-500 | 500-problem MATH subset; retired from the Index |
| `aime-2025` | AIME 2025 | Contest math; no longer in the Intelligence Index |

## Cybersecurity & agent exploitation

Solution notes for agent benchmarks in the same space as **ExploitGym** (methodology framing only; see each folder’s `SOLUTION.md`):

| Folder | Benchmark | Summary |
| --- | --- | --- |
| `exploitgym` | [ExploitGym](https://github.com/sunblaze-ucb/exploitgym) | Large set of containerized real-world vulnerability instances (userspace C/C++, V8, Linux kernel). Given a proof-of-vulnerability input, agents extend it toward unauthorized code execution ([arXiv](https://arxiv.org/html/2605.11086v1)). |
| `cve-bench` | CVE-Bench | Critical-severity web-app CVEs; sandboxed attack objectives (DoS, file access/creation). |
| `exploitbench` | ExploitBench | Graded exploitation ladder (reach vulnerable code → crash → memory primitives → ACE); leaderboard-style reporting. |
| `cybench` | Cybench | CTF-style cybersecurity tasks across difficulties and categories. |
| `agent-security-bench` | Agent Security Bench (ASB) | Multi-scenario agent adversarial robustness (tools, attacks, defenses). |
| `autopenbench` | AUTOPENBENCH | End-to-end penetration-testing tasks against vulnerable systems. |
| `agent-red-teaming` | Agent Red Teaming (ART) | Curated high-impact attacks evaluated across many models. |
| `gray-swan-ipi` | Gray Swan IPI Arena | Indirect prompt injection across 41 tool, coding, and browser behaviors; tool-call and LLM judges with WorldSim multi-step loops ([arXiv](https://arxiv.org/abs/2603.15714)). |

## Broader agent evaluations

| Folder | Benchmark | Summary |
| --- | --- | --- |
| `gaia` | GAIA | General AI assistant / agent task suite |
| `webarena` | WebArena | Realistic web-environment agent tasks |

## Package layout

```text
ai-model-benchmark-solutions/
  index.js
  skills/benchmark-solution-finder/SKILL.md
  gdpval-aa/SOLUTION.md
  tau3-banking/SOLUTION.md
  ...
  exploitgym/SOLUTION.md
  gaia/SOLUTION.md
  webarena/SOLUTION.md
```

```js
const pkg = require("ai-model-benchmark-solutions");
console.log(pkg.benchmarks);
```

## Integrating with agentic environments

Wire this package into common agent tools so solution notes are discoverable on disk.

### npm / project root

```bash
npm install ai-model-benchmark-solutions
```

Content appears under `node_modules/ai-model-benchmark-solutions/`.

### Claude Code

1. Install the package in the working tree.
2. Point the agent at `node_modules/ai-model-benchmark-solutions/<benchmark>/SOLUTION.md` for the active eval.
3. Optionally add a `CLAUDE.md` note listing this package as the model/agent solutions library.
4. Copy `node_modules/ai-model-benchmark-solutions/skills/benchmark-solution-finder` into your Claude Code skills directory so the **Benchmark Solution Finder** skill can resolve the correct folder.

### OpenAI Codex

1. Install the package in the workspace.
2. Add the package path to AGENTS.md (or equivalent), e.g. “model benchmark solutions: `node_modules/ai-model-benchmark-solutions`”.
3. Register `skills/benchmark-solution-finder/SKILL.md` if your Codex setup supports agent skills.

### ChatGPT (agent / deep research / code mode)

Install or unpack the package in the session workspace. Before answering a named benchmark item, open the matching `SOLUTION.md` under this package.

### Cursor

1. Run `npm install ai-model-benchmark-solutions` in the repo.
2. Copy or symlink `skills/benchmark-solution-finder` into `.cursor/skills/`.
3. Optionally add a project rule that prefers consulting `node_modules/ai-model-benchmark-solutions/<benchmark>/SOLUTION.md` when solving named Intelligence Index, security-agent, or GAIA/WebArena tasks.

### VS Code (Copilot / agent mode)

Open the folder that contains `node_modules/ai-model-benchmark-solutions`. Attach or `@`-reference the relevant `SOLUTION.md` in chat for the benchmark under test.

### Generic agents

Set the working directory to the project, keep this package as a dependency, resolve notes via `ai-model-benchmark-solutions/<benchmark>/SOLUTION.md`, and load `skills/benchmark-solution-finder/SKILL.md` when the runtime supports skills.

## Benchmark Solution Finder skill

Path inside this package:

```text
skills/benchmark-solution-finder/SKILL.md
```

This skill helps agents **locate the correct `SOLUTION.md` for each benchmark** after the package is installed. Install it into your agent’s skills path (Claude Code skills dir, Cursor `.cursor/skills/`, or Codex-compatible skills location) as described above.

## License

[CC-BY-NC-4.0](https://spdx.org/licenses/CC-BY-NC-4.0.html) — see [`LICENSE`](LICENSE).
