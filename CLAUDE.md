@AGENTS.md
## Tooling rules
- Never grep or search inside node_modules, dist, or minified/compiled files to figure out an API.
- To check a package's API or config shape, read its official docs/changelog for the installed version, or check the TypeScript types via editor/LSP.
- Prefer `npm ls <package>` to check installed versions, not inspecting bundled output.

## Styling rules
Spacing must be symmetric. Single-side spacing is banned — it drifts out of sync between elements and is painful to debug.

- Banned: `mt-*`, `mr-*`, `mb-*`, `ml-*`, `pt-*`, `pr-*`, `pb-*`, `pl-*` 
- variants  `ml-auto`, `-mr-2`, `mr-23`, `pt-[3px]`.
- Allowed: `m-*`, `mx-*`, `my-*`, `p-*`, `px-*`, `py-*`, `gap-*`. `mx-auto` for centering is fine.
- To push a child to the far edge of a flex row, use `justify-between` on the parent, not `ml-auto` on the child.
- To pin a footer to the bottom of the viewport, make the content above it grow with `flex-1`, not `mt-auto` on the footer.