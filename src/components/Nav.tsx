export default function Nav(props: any) {
  return (
    <div class='flex flex-col h-[100dvh] w-[100dvw] bg-bg-400 antialiased'>
      <nav class='h-14 w-full'>
        <div class='px-4 flex w-full mx-auto h-full items-center justify-between'>
          <img src='/logo.svg' class='w-[111px] h-[]' alt='logo' />
          <div class='flex justify-center'>
            {//<MdMenu color='#4C6477' size='36px' />
}
          </div>
        </div>
      </nav>
      <main
        class={`flex flex-1 flex-col w-full bg-accent-500 rounded-xl py-[2px]`}>
      {props!.children}
      </main>
      <nav class='h-14 w-full'>
        <div class='flex w-full mx-auto h-full items-center justify-between px-8'>
          {/*<MdHome color='#4C6477' size='36px' />
          <MdVideogameAsset color='#B8DFFF' size='36px' />
          <MdAccountCircle color='#4C6477' size='36px' />*/}
        </div>
      </nav>
    </div>
  );
}
