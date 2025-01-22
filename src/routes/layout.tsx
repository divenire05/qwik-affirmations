import { component$, createContextId, Slot, useContextProvider, useStore } from "@builder.io/qwik";
import Modal from "~/components/modal";

export const MyContext = createContextId<{
  affirmations: [string, string][], // An array of [affirmation, author]
  openModal: boolean,
}>('qwik-affirmations')

export default component$(() => {
  const state = useStore({
    affirmations: [],
    openModal: true
  })

  useContextProvider(MyContext, state)

  return (
    <>
      {state.openModal && <Modal/>}
      <header>
        <i onClick$={() => {
          state.openModal = !state.openModal
        }} class="fa-solid fa-plus cursor-pointer"></i>
      </header>
      <main class="flex-1 flex flex-col max-w-[1200px] w-full mx-auto">
        <Slot />
      </main>
      <footer>

      </footer>
    </>
  );
});
