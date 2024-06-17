import { onCleanup, onMount } from "solid-js";
import { isServer } from 'solid-js/web'

function listener() {
  let link: HTMLLinkElement   | null | undefined = document?.querySelector("link[rel~='icon']") as HTMLLinkElement;
  if (link) {
    if (document?.visibilityState === 'visible'){
      link.href = '/favicon-on.png';
    } else if (document?.visibilityState === 'hidden') {
      link.href = '/favicon-off.png';
    }
  }
};

export default function Mobile() {
  

  onMount(() => {
    if (!isServer) {
      document && document.addEventListener('visibilitychange', listener);
    }
  });
  
  onCleanup(() => {
    if (!isServer) {
      document && document.removeEventListener('visibilitychange', listener);
    }
  });
  
  return (
        <div class='flex flex-1 flex-col w-full bg-bg-100 rounded-xl'>
          <div class='flex flex-col w-full py-10 px-10  justify-center items-center'></div>
          <div class='flex flex-col w-full h-full px-10 pb-10 justify-center items-center gap-3'></div>
        </div>
  );
}
