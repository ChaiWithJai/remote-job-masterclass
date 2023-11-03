import { Container } from '@/components/Container'
import { Expandable } from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'

const tableOfContents = {
  'What jobs are out there?': {
    'What roles can I get today?': '1',
    'High-Paying, Part-Time Remote Work': '1',
    'Be First in Line:  Leveraging Niche Job Boards': '1',
  },
  'What skills do I need to have before I apply?': {
    'Which skills can pay $1,000/week on the side?': '2',
    'What skills can I leverage today?': '2',
    'What skills can I develop quickly?': '2',
  },
  "What's my strategy for the next 6 months?": {
    'Which options are attainable for me?': '3',
    'Create Your Gameplan': '3',
  },
  '(Bonus) Resources': {
    'Exact Scripts to use with your boss and co-workers': 'Bonus',
    'Case Study:  How to get fired': 'Bonus',
    'The Ultimate Guide to Setting Up Your Remote Office': 'Bonus',
    'Understanding Yourself:  The Banyan Tree': 'Bonus',
  },
}

export function TableOfContents() {
  return (
    <section
      id="table-of-contents"
      aria-labelledby="table-of-contents-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="table-of-contents-title">
          Table of contents
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Get a look at all of the content covered in the masterclass. Everything you
          need to know is covered.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
        “Remote Job Masters” is comprised of 3 tightly modules, highly interactive assignments designed to guide you through everything you need to know about remote work with no unnecessary filler.
        </p>
        <Expandable>
          {({ isExpanded }) => (
            <>
              <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
                {Object.entries(tableOfContents)
                  .slice(0, isExpanded ? undefined : 2)
                  .map(([title, pages]) => (
                    <li key={title}>
                      <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
                        {title}
                      </h3>
                      <ol
                        role="list"
                        className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 py-3 px-6 text-base tracking-tight sm:py-7 sm:px-8"
                      >
                        {Object.entries(pages).map(([title, pageNumber]) => (
                          <li
                            key={title}
                            className="flex justify-between py-3"
                            aria-label={`${title} on page ${pageNumber}`}
                          >
                            <span
                              className="font-medium text-slate-900"
                              aria-hidden="true"
                            >
                              {title}
                            </span>
                            <span
                              className="font-mono text-slate-400"
                              aria-hidden="true"
                            >
                              {pageNumber}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </li>
                  ))}
              </ol>
              <Expandable.Button>See more</Expandable.Button>
            </>
          )}
        </Expandable>
      </Container>
    </section>
  )
}
