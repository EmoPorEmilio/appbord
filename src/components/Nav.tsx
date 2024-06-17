import { IoHome, IoMenu } from 'solid-icons/io';
import { FaSolidGamepad, FaSolidCircleUser } from 'solid-icons/fa';

export default function Nav(props: any) {
  return (
    <div class='flex flex-col h-[100dvh] w-[100dvw] bg-bg-400 antialiased'>
      <nav class='h-14 w-full'>
        <div class='px-4 flex w-full mx-auto h-full items-center justify-between'>
          <img src='/logo.svg' class='w-[111px] h-[]' alt='logo' />
          <div class='flex justify-center'>
            <IoMenu color='#4C6477' size='32px' />  
          </div>
        </div>
      </nav>
      <main
        class={`flex flex-1 flex-col w-full bg-accent-500 rounded-xl py-[2px]`}>
      {props!.children}
      </main>
      <nav class='h-14 w-full'>
        <div class='flex w-full mx-auto h-full items-center justify-between px-8'>
          <IoHome color='#4C6477' size='32px' />
          <FaSolidGamepad color='#4C6477' size='32px' />  
          <FaSolidCircleUser color='#4C6477' size='32px' />
        </div>
      </nav>
    </div>
  );
}
