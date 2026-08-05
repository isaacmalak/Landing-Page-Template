@AGENTS.md
## Tooling rules
- Never grep or search inside node_modules, dist, or minified/compiled files to figure out an API.
- To check a package's API or config shape, read its official docs/changelog for the installed version, or check the TypeScript types via editor/LSP.
- Prefer `npm ls <package>` to check installed versions, not inspecting bundled output.