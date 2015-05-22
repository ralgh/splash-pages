import React from 'react';
import JobsPage from '../jobs-page';

export default class EngineeringInterships extends React.Component {
  displayName = 'EngineeringInterships'

  render() {
    return (
      <JobsPage>
        <h3 className='u-text-heading-light u-text-m u-color-heading'>Engineering Internships</h3>
        <p className='para'>
          We’re looking for talented, motivated undergrads who want to work on real
          problems with a world-class team.
        </p>
        <p className='para'>We have paid internships and placements available in our front-end,
          back-end and web operations teams. If you're passionate about tech, care about
          learning and finding elegant solutions, and want to work with like-minded
          engineers, we want to hear from you.
        </p>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>Our team</h4>
        <p className='para'>GoCardless is an ambitious, fast-growing tech startup disrupting
          the payments industry. We build simple, reliable systems on top of technologies
          we understand and trust. We're primarily built in Ruby and JavaScript using
          Rails and Angular, and we rely on Postgres, Elasticsearch, RabbitMQ and Chef.
        </p>
        <p className='para'>We're nimble, deploying every day, and we're doing our most
          ambitious work right now &ndash; working with Government and multi-national companies
          to build GoCardless Pro, and integrating with more banking systems to expand
          our offering across Europe.
        </p>
        <p className='para'>At the same time we’re already processing millions of pounds of
          payments every day, so there's no space for inconsistent data or downtime.
          We maintain reliability whilst iterating on our product by having a test-suite
          we can rely on, and prioritising code review.
        </p>
        <p className='para'>As a dev team, learning and mentoring are core to our values: we
          give our team a generous conference budget and run internal talks on subjects
          both technical and general. We’re involved in the wider tech community too,
          regularly hosting meetups and hackdays, and speaking at external events to
          share our knowledge, skills and passion.
        </p>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>Your internship</h4>
        <p className='para'>You’ll be treated as a fully fledged member of the team from
          day one, working on interesting, challenging projects that are integral to
          our product and to the company’s success. You’ll work closely with experienced
          engineers and we’ll encourage you to learn new technologies and expand your
          awareness of the full stack.
        </p>
        <p className='para'>
          <a href='https://gocardless.com/blog/interning-at-gocardless/'>
            Read more about the projects Iain, one of our previous interns,
            worked on at GoCardless.
          </a>
        </p>
        <p className='para'>You’ll also get an insight into how a fast-growing tech company
          works and how the different areas of our business interact.
        </p>
        <p className='para'>Because you’ll be part of our engineering team, we’re looking
          for the same qualities and traits that we look for in more senior hires
          &ndash; but we don’t expect you to have the experience.
        </p>

        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>You should apply if:</h4>
        <ul className='list'>
          <li>You’re passionate about technology</li>
          <li>You care deeply about doing work you can be proud of</li>
          <li>You’re constantly looking for ways to improve</li>
          <li>You believe that code must be well-tested, and that tests are a helpful
            tool in driving design</li>
          <li>You’ve experimented with building applications for the web</li>
        </ul>
        <p className='para'>We’re particularly interested in hearing about anything you’ve
          done outside of your studies. For instance, any languages you’ve taught yourself
          and experimented with; anything you’ve built; meetup groups you’ve attended;
          hackday projects; anything you’ve done that will show us that you’re
          excited by technology, curious and ambitious. If you have previous
          professional experience, we’d love to hear details of the projects you
          were involved in and what you built.
        </p>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>Our interview process</h4>
        <p className='para'>We’re looking to assess your understanding of the principles of
          programming; the way you think, learn and respond to feedback; your actual
          coding skills and whether you’ll flourish here. There are three stages to
          our interview process:
        </p>
        <ul className='list'>
          <li>a short skype call where we'll cover some background questions and maybe
            do a little live coding</li>
          <li>a take-home coding challenge (written in the language of your choice)</li>
          <li>a longer on-site interview, including pair coding, technical questions and
            a more informal chat</li>
        </ul>
        <p className='para'>The whole process is technically-focussed, and we'll ensure that
          you meet different engineers at each stage so that you can ask us questions
          and get an understanding of what it's like to be part of our team.
        </p>
        <p className='para'>We’ll consider applicants for internships lasting from 8 weeks
          up to a year, and we pay a competitive salary.</p>
        <p className='para'>In your application, you'll be asked to include your CV and a link to
          your GitHub, as well as telling us about an interesting technical project or
          problem that you've recently worked on.</p>
        <a href='http://boards.greenhouse.io/gocardless/jobs/28143' className='btn u-margin-Vs'>
          Apply now
        </a>
        <p className='para'>If you have questions before applying, email <a
        href='mailto:pete@gocardless.com'>pete@gocardless.com</a>.</p>
      </JobsPage>
    );
  }
}
