import type { Metadata } from "next";
import Principles from "@/components/sections/Principles";

export const metadata: Metadata = {
  title: "About — Jason Nguyen",
  description: "Backstory, and the principles I try to build around.",
};

export default function AboutPage() {
  return (
    <main className="pt-24">
      <section className="px-6 py-24 lg:px-12">
        <span className="mb-1 block text-xs text-orange-400">01</span>
        <h1 className="mb-12 font-heading text-5xl text-foreground">About me</h1>

        <div className="max-w-2xl space-y-6 text-sm leading-relaxed text-foreground/70">
          <p>
            Hi, I&apos;m Tri — proud son of Phuc Nguyen and Trish Le. My parents
            are divorced, and my mom hasn&apos;t owned a home since the markets
            crashed. I&apos;d like to believe we&apos;d have been homeless if we
            weren&apos;t blessed with family to help us out.
          </p>
          <p>
            I gave CS:GO 3,500 hours between 2015 and 2018 and got to LEM. Then
            Valorant, 2020 to 2022, Immortal 2. That&apos;s where my time went.
            I skipped studying, skipped school, and lost track of what I was
            supposed to be doing with any of it. It nearly costed me my future.
            The one thing it left me with was a tolerance for repetition.
          </p>

          <p>
            My mom was diagnosed with cancer my junior year. She had always seemed
            invincible to me, at one point she lost everything, bankruptcy,
            divorce, and now her health. That&apos;s when I realized mediocrity
            wasn&apos;t going to help support her. I had never taken an honors class.
            I took three APs that year and five the next, and I stopped being
            fine with average - with settling for a school I picked by default,
            with staying where I was because leaving took more effort than
            staying.
          </p>

          <p>
            I aimed at Michigan and got waitlisted. What I actually took from
            that wasn&apos;t that I fell short — it&apos;s that I started too
            late. The habits, the foundations built through earlier classes for 
            other students, others taking honor classes since middle school.
            The years I spent relentlessly staying up late playing video games
            instead of building something was compounded debt, the foundation 
            had holes the math was never going to make it back. Consistency would
            have gotten me there. Starting earlier would have gotten me there.
            That&apos;s an uncomfortable thing to know and the most useful thing
            I know.
          </p>

          <p>
            UCI is the best thing that happened to me. I&apos;m around people
            who are ambitious in a way I hadn&apos;t been around before, and it
            reset what I think ordinary effort looks like.
          </p>

          <p>
            During a stretch where I didn&apos;t have much purpose, I lifted to
            kill time and wished for instant results in my physique. It turned
            into something else — square one, the thing that reminds me who I am
            every day. It keeps my head straight, and it&apos;s the clearest
            proof I have that consistency returns something. Evidence I can point
            at on the days I don&apos;t believe it about anything else.
            Everything starts from your mind, and your mind starts from your
            health.
          </p>

          <p className="text-foreground/45">
            Most of what I believe came out of those years. Here it is, written
            down.
          </p>
        </div>
      </section>

      <Principles />
    </main>
  );
}
