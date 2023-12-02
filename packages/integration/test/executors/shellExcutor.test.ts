import { describe, expect, it } from "vitest";
import { asyncRun } from "../../src/executors/shellExecutor";
import { info } from "../../src/console-logger";

describe("execute shell commands", () => {
  it("execute shell commands", async () => {
    const result = await asyncRun<String>("ls");
    info(result);
  });
});
