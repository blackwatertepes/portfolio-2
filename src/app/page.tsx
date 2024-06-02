import Image from "next/image";

export default function Home() {
  const links = [
    { name: 'Github', href: 'https://github.com/blackwatertepes' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/tylerkuhn' },
    { name: 'StackExchange', href: 'https://stackexchange.com/users/1728484/tyler-j-kuhn' },
    { name: 'Medium', href: 'https://medium.com/@tylerjkuhn' },
    { name: 'Leetcode', href: 'https://leetcode.com/u/blackwater' },
    { name: 'Project Euler', href: 'https://projecteuler.net/progress=blackwatertepes' },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Contact me:&nbsp;
          <code className="font-mono font-bold">blackwatertepes at g mail dot com</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            href="https://projecteuler.net/progress=blackwatertepes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://projecteuler.net/profile/blackwatertepes.png"
              alt="Project Euler .net tyler.j.kuhn Solved 69 - Level 2"
              width={200}
              height={60}
            />
          </a>
        </div>
      </div>

      <div className="max-w-sm text-slate-500">
        <h3 className="text-2xl">Tyler J. Kuhn</h3>
        <p>
          I&apos;m a tech startup veteran, with more than 15 years of industry experience.
          I&apos;ve worn multiple hats, starting in Flash/ActionScript 2.0,
          and eventually transitioning into Full-Stack web development.
          I&apos;ve dabbled in a variety of web technologies,
          including Ruby/Rails, NodeJS, PostgresQL, React, Docker, Heroku, & various bits of AWS.
          When I&apos;m not programming, you can usually find me riding my electric skateboard around San Francisco.
        </p>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:grid-cols-6 lg:text-left">
        {links.map(link => (
          <a
            href={link.href}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            key={link.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="text-2xl font-semibold">
              {link.name}{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </a>
        ))}
      </div>
    </main>
  );
}
