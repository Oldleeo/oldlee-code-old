import { assert, it } from "@effect/vitest";

import {
  repositoryPathFromRemoteUrl,
  transportSafeSourceControlErrorValue,
} from "./SourceControlProvider.ts";

it("removes URL credentials, query parameters, and fragments from error transport values", () => {
  assert.strictEqual(
    transportSafeSourceControlErrorValue(
      "https://user:secret@example.test/org/repo/pull/42?token=secret#discussion",
    ),
    "https://example.test/org/repo/pull/42",
  );
});

it.each([
  ["git@github.com:oldleeo/oldlee-code.git", "oldleeo/oldlee-code"],
  ["github.com:oldleeo/oldlee-code.git", "oldleeo/oldlee-code"],
  ["gitlab.com:T3Tools/platform/oldleecode", "T3Tools/platform/oldleecode"],
  ["https://github.com/oldleeo/oldlee-code.git", "oldleeo/oldlee-code"],
  ["https://github.com/oldleeo/oldlee-code.git?view=compact", "oldleeo/oldlee-code"],
  ["https://github.com/oldleeo/oldlee-code.git#section", "oldleeo/oldlee-code"],
  ["C:/repos/oldleecode", null],
])("reads the repository path of %s", (remoteUrl, expected) => {
  assert.strictEqual(repositoryPathFromRemoteUrl(remoteUrl), expected);
});
