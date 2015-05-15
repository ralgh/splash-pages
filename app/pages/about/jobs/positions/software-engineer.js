import React from 'react';
import JobsPage from '../jobs-page';

export default class SoftwareEngineer extends React.Component {
  displayName = 'SoftwareEngineer'

  render() {
    return (
      <JobsPage>
        <h3 className='u-text-heading-light u-text-m u-color-heading'>Backend Software Engineer</h3>
        <p className='para'>
          We're looking for backend software engineers to join our growing team.
        </p>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>Our work</h4>
        <p className='para'>We're building a simple, intuitive system on top of Europe's
          broken payments infrastructure. Thousands of merchants already rely on us
          to collect millions of pounds every day.</p>
        <p className='para'>As an engineering team working in payments, we have to work
          differently:</p>
        <ul className='list'>
          <li>Consistency can't be sacrificed. Wonky data is not an option.</li>
          <li>Availability matters. If we go down, thousands of companies are left
            unable to do business.</li>
        </ul>
        <p className='para'>At the same time, our business is growing at over 700% a year.
          We're ambitious, and we constantly experiment and iterate to drive that growth:</p>
        <ul className='list'>
          <li>
            Working with government and multinational customers to build the next
            generation of our product.
          </li>
          <li>
            Integrating with new banking systems to expand our offering across Europe.
          </li>
          <li>
            Automating everything from fraud detection to legacy (paper-based) interactions
            with the banks.
          </li>
        </ul>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>Our culture</h4>
        <p className='para'>Payments is a scale business with huge returns to great
          engineering. We have a culture where you can do work that you're proud
          of every day.</p>
        <p className='para'>We're building a huge company, so we invest time in building
          things well. We keep our technical debt low by regularly refactoring and
          improving our architecture. We know how important it is to be able to move
          fast in the future as well as right now.</p>
        <p className='para'>Despite the scale of our work, we're a small and friendly team
          with strong shared values. We get on well and enjoy spending time together,
          whether working in the office, chatting over lunch or out for drinks after
          work. We're passionate
          about learning, and we all care deeply about the quality of what we build.
          We regularly run internal tech talks given by both GoCardless employees and
          industry experts, and we pay for courses &amp; books.</p>
        <p className='para'>Many of our team are active members of the wider tech community.
          We open source whatever we can, as we did with
          <a className='u-link-color-p u-text-underline' href='https://github.com/gocardless/hutch'>Hutch</a> and
          <a className='u-link-color-p u-text-underline' href='https://github.com/gocardless/statesman'>Statesman</a>, and we regularly
          host events and meetups in our offices. We have a conference budget for everyone
          on the team and can help with speaker coaching if you're interested.</p>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>Our stack</h4>
        <p className='para'>We have to stay nimble while delivering mission-critical code.
          To do so we constantly prioritise keeping both our stack and our codebase
          lean.</p>
        <p className='para'>We build simple, reliable systems on top of technologies we
          understand and trust. We're primarily built in Ruby and JavaScript using
          Rails and Angular, and we rely on Postgres, Elasticsearch, RabbitMQ and
          Chef.</p>
        <p className='para'>We deploy many times a day, supported by a test suite we trust
          and a culture of code review.</p>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>What we're looking for</h4>
        <p className='para'>We're looking for backend software engineers to join
          our growing team. We'd particularly love you to apply if:</p>
        <ul className='list'>
          <li>
            You're passionate about technology and care deeply about doing work you're proud of.
          </li>
          <li>
            You have opinions about programming languages and experience
            building applications for the web.
          </li>
          <li>
            You have an awareness of the full web stack. You understand the details of HTTP, feel
            comfortable optimising SQL queries, and have experimented with
            JavaScript.
          </li>
          <li>
            You believe that code must be well-tested, and that tests are a helpful
            tool in driving design.
          </li>
        </ul>
        <p className='para'>In your application, please include your CV and a link to
          your GitHub, as well as telling us about an interesting technical project or
          problem that you've recently worked on.</p>
        <a href='http://boards.greenhouse.io/gocardless/jobs/7622' className='btn u-margin-Vs'>
          Apply now
        </a>
      </JobsPage>
    );
  }
}
