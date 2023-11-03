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
          Land a high paying remote job even if you don't have experience.
          The 21st century job market doesn't require any degrees. The advice you’re getting in school is outdated.
        </p>
        <p className="mt-4">
          Before I got a remote job, I thought I needed to design my life around my finance degree. I thought I needed to get a job in the city I went to school in. I thought I needed to get a job in the industry I studied. I thought I needed to get a job that paid me enough to pay off my student loans.
        </p>
        <p className="mt-4">
          I was wrong.
        </p>
        <p className="mt-4">
          I got a remote job that paid me 6 figures (in under 6 months with no previous engineering experience) and I didn’t have to sacrifice my social life or mental health.
        </p>
        <p className="mt-4">
          In the “Remote Job Masterclass”, you’ll get a set of step-by-step guides and done-for-you templates that expert career coaches who charge thousands of dollars use to land their clients a high paying remote jobs, without having any previous experience.
        </p>
        <ul role="list" className="mt-8 space-y-3">
          {[
            'Understanding the hidden costs of commuting',
            'Where to find a job',
            'Crafting a personalized plan for your job search',
            'Done-for-you templates handle scenarios like being asked to return to the office',
            'Easy scripts to follow to communicate with in-office peers',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-purple-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          By the end of the 90 minute masterclass, you’ll have all tools you need to plan a future where you have time freedom and financial freedom and not think about how you'll manage to pay rent or your student loans.
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
