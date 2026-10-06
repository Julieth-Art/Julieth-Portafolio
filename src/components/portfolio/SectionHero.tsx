import { Reveal } from "@/components/site/Reveal";

type Props = {
  kicker: string;
  title: string;
  desc: string;
};

export function SectionHero({ kicker, title, desc }: Props) {
  return (
    <div className="mx-auto max-w-[62ch] text-center">
      <Reveal>
        <p className="font-ui text-sm tracking-[0.16em] text-gold uppercase">{kicker}</p>
        <h1 className="mt-2 font-script text-script-xl text-accent">{title}</h1>
        <p className="mt-3 font-body text-[1.15rem] text-dim">{desc}</p>
      </Reveal>
    </div>
  );
}
