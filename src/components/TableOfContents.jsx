import { Container } from '@/components/Container'
import { Expandable } from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'

const tableOfContents = {
  'What jobs are out there?': {
    'The Usual Suspects': '1',
    'Be First in Line:  Leveraging Niche Job Boards': '1',
    'Research like a Journalist': '1',
    '(Optional) Advanced Case Study:  Help Prevent a Climate Crisis': '1',
    '(Optional) Advanced Case Study:  Generative AI for Humanity': '1',
  },
  'What do I need to do before I apply?': {
    'The WHO Framework': '2',
    'Stories that Sell': '2',
    'Rich Resumes': '2',
    '(Optional) Advanced Case Study:  Data Driven Design using LinkedIn': '2',
  },
  "How do I build a network?": {
    'The 3 Types of Mentors You Need': '3',
    "What to look for in a mentor (The 3 C's)": '3',
    'How to get them to mentor you for free': '3',
    'How to find them?': '3',
    'WTF do I say when I meet them?': '3',
    'How much is too much? The Art of Vulnerability': '3',
  },
  "What's my strategy for applying?": {
    'The 4 Gatekeepers of the Job Hunt': '4',
    'Talent meets timing': '4',
    'Live Case Studies:  Lets put it together!': '4',
    'Advanced Case Study:  How to find a winning horse': '4',
  },
  "How do I nail the interview?": {
    'Talent meets timing': '5',
    'Live Case Studies:  Lets put it together!': '5',
    'Advanced Case Study:  How to find a winning horse': '5',
  },
  'How do I negotiate?': {
    'Negotiation Lessons (adapted from Deepak Malhotra)': '6',
    'Startup Finance 101': '6',
    'Mock Negotiations': '6',
    '(Optional) The Psychology of Money': '6',
  },
  '(Bonus) How do I live a miserable life?': {
    'Lecture:  How do I live a miserable life?': 'Bonus',
    'Understanding Yourself': 'Bonus',
    'The Odyssey Plan': 'Bonus',
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
          Get a look at all of the content covered in the coaching program. Everything you
          need to know is covered.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          “6 Questions, 6 Figures” is comprised of 6 learning modules that are a 
          blend of learning advanced researching techniques using Google and LinkedIn 
          and intellectual skills like persuasion, storytelling & negotiation along 
          with mental models to help you introspect on how to apply this in the real 
          world. 
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
