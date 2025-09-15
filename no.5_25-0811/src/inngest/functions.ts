import { openai, createAgent } from "@inngest/agent-kit"
import { Sandbox } from "@e2b/code-interpreter"
import { inngest } from "./client";
import { getSandbox } from "./utils";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },

  async ({ event, step }) => {
    // Imagine this is a transcript step

    const sandboxId = await step.run(
        "get-sandbox-id", async () => {
          const sandbox = await Sandbox.create("vibe-nextjs-website-test")
          return sandbox.sandboxId;
        }
      )

    const codeAgent = createAgent({
      name: 'code-agent',
      system: "You are an expert Next.js developer. You write readable, maintainable code. You write simple Next.js & React snippets.",
      model: openai({
        model: "gpt-5-nano"}),
    })

    const { output } = await codeAgent.run(
      `Write the following snippet: ${event.data.value}`,
    )

    const sandboxUrl = await step.run("get-sandbox-url", async () => {
      const sandbox = await getSandbox(sandboxId);
      const host = sandbox.getHost(3000)
      return `http://${host}`;
    })

    return { output, sandboxUrl };
  },
);