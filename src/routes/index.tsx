import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      <div>
        Wecolme to Syre AI
        <br />
        Happy coding.
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Syre AI Official",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
