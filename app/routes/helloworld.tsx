import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Hello world" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function HelloWorld() {
  return (
    <h1>Hello world!</h1>
    )
}
