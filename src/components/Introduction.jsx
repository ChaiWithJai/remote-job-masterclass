import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          “6 Questions, 6 Figures” is an in-person group coaching program that
          teaches you how the 21st century job market works. The advice you’re getting in school is outdated.
        </p>
        <p className="mt-4">
          If you stumbled upon this I’m betting that you’re in college or under 5 years out of college… and you’re wondering what would my life be like if I joined the next unicorn startup. You might have a safe path ahead of you in big tech, finance or consulting. But this excites you and you want to see what will happen if you take a risk and push yourself… because safety is overrated... you’re young, you value experience and you want to make the most of your experience living in NYC.
        </p>
        <p className="mt-4">
          While your peers are asking, "why is it so hard to get an entry level job?". You're thinking about how you can take risks.
        </p>
        <p className="mt-4">
          In “6 Questions, 6 Figures”, you’ll learn systems to get any job you want.
        </p>
        <ul role="list" className="mt-8 space-y-3">
          {[
            'How to write a resume that gets you interviews.',
            'How to leverage LinkedIn to build a tribe of mentors.',
            'Where to find opportunities.',
            'Who the 4 Gatekeepers of the job hunt are and how to talk to each of them.',
            'How to answer any behavioral interview question.',
            'How to prepare for interviews without sacrificing your social life and mental health.',
            'How to negotiate like a boss.',
            'How to identify a good “investment” —> understanding stock options.',
            'How to get someone to take you “under their wing” and teach you the game.',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-purple-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          By the end of the 6 weeks, you’ll have all the confidence you need to apply
          to any role you want and not think about how you'll manage to pay NYC rent
          or your student loans.
        </p>
        <p className="mt-10">
          <Link
            href="#free-chapters"
            className="text-base font-medium text-purple-600 hover:text-purple-800"
          >
            Watch the sample lesson now{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
