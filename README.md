<p align="center">
  <a href="https://old.lat/code/">
    <img src="./assets/prod/t3-black-web-icon-192x192.png" width="80" height="80" alt="Oldlee Code logo" />
  </a>
</p>

<h1 align="center">Oldlee Code</h1>

<p align="center">The open-source control plane for coding agents.</p>

<p align="center">
  <a href="https://github.com/oldleeo/oldlee-code"><strong>Source</strong></a> ·
  <a href="https://github.com/oldleeo/oldlee-code/releases">Releases</a> ·
  <a href="https://old.lat/code/">Website</a> ·
  <a href="./docs/README.md">Docs</a>
</p>

Oldlee Code runs the coding agents on your machine and gives them one fast interface. Start a thread at your desk, then approve the next step from your phone.

It works with Claude Code, Codex, Cursor, OpenCode, Grok Build, Antigravity, Kiro, Pi, Muse Code, fx, and any [ACP](./docs/user/providers-acp.md) agent. If an agent is set up on your computer, Oldlee Code can control it.

Oldlee Code is an unofficial fork of [T3 Code](https://github.com/pingdotgg/t3code). It is not affiliated with, endorsed by, or maintained by T3 Tools, Inc. T3 Code names, logos, and icons are not used here.

## What you get

- **Your subscriptions.** Oldlee Code does not resell tokens. It drives the agents you are already signed in to.
- **Every agent in one place.** Change models in the middle of a thread. Let Claude hand a task to Codex.
- **Desktop, web, and phone.** One server, and every client shows the same threads. The phone apps are built from this repo; there is no Oldlee Code listing on the App Store or Google Play.
- **Remote ready.** Run agents on any machine. Connect over your local network or Tailscale. Oldlee Connect still depends on a relay and account host this fork does not run. See [Remote access](./docs/user/remote-access.md).
- **Git built in.** Each thread can work in its own worktree. Review the diff, then commit, push, and open a pull request with one button.
- **Fast.** Performance is a feature here.
- **Open.** Source code is MIT licensed.

## Install

Build from source with the [development runbook](./docs/operations/00_development.md#first-checkout), or install a release archive from [GitHub Releases](https://github.com/oldleeo/oldlee-code/releases) once one is published.

The CLI command is still `t3`. On a machine with `curl`:

```bash
curl -fsSL https://raw.githubusercontent.com/oldleeo/oldlee-code/main/scripts/install.sh | sh
```

On Windows, in PowerShell:

```powershell
irm https://raw.githubusercontent.com/oldleeo/oldlee-code/main/scripts/install.ps1 | iex
```

The installer downloads a release archive from this repository. Until a release exists, use a local build.

### Sign in to an agent

Oldlee Code needs one agent that is installed and signed in. For example, install [Claude Code](https://claude.com/product/claude-code) and run `claude auth login`, or install [Codex CLI](https://developers.openai.com/codex/cli) and run `codex login`.

[Provider setup](./docs/user/install.md#providers) has the steps for each agent.

## Documentation

- [Install and first run](./docs/user/install.md)
- [Remote access from a phone or another machine](./docs/user/remote-access.md)
- [Permission modes](./docs/user/permission-modes.md)
- [Source control](./docs/user/source-control.md)
- [Connect outside agents over MCP](./docs/user/outside-agents.md)
- [FAQ](./docs/user/faq.md)

[All docs](./docs/README.md) has the full list.

## Contributing

- Read [CONTRIBUTING.md](./CONTRIBUTING.md) before you report a bug or open a pull request.
- Build from source with the [development runbook](./docs/operations/00_development.md#first-checkout). The [architecture overview](./docs/internals/01_architecture.md) explains how it works.

## License

The source code in this repository is licensed under the [MIT License](./LICENSE). The upstream copyright notice is unchanged.

## Trademarks

Oldlee Code is an unofficial fork of T3 Code. The MIT license covers source code only. It does not grant any right to T3 Tools, Inc.'s trademarks. See [TRADEMARK.md](./TRADEMARK.md).
