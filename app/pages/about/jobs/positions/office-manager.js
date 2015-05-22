import React from 'react';
import JobsPage from '../jobs-page';

export default class OfficeManager extends React.Component {
  displayName = 'OfficeManager'

  render() {
    return (
      <JobsPage>
        <h3 className='u-text-heading-light u-text-m u-color-heading'>Office Manager</h3>
        <p className='para'>
          Keep our team happy and our office running smoothly.
        </p>
        <p className='para'>
          GoCardless is growing fast. We're building the next generation of online
          payments and already provide simple Direct Debit to thousands of small
          and medium sized businesses in the UK and beyond. We care as much about
          building a great company as we do about building our business, and that
          means hiring talented people, giving them exciting challenges to tackle,
          and providing a great working environment.
        </p>
        <p className='para'>
          We’re a small, talented team who enjoy spending time together and working
          out of our amazing office in central London. We're looking for an energetic,
          organised office manager to take care of our day-to-day administration,
          bring order to our working space and keep the whole team happy.
        </p>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>The role</h4>
        <p className='para'>
          This is a varied, hands-on role for someone who’s keen to go the extra
          mile to support our fast-growing team and will take on any task, big
          or small. You’ll be responsible for making sure our office is a welcoming,
          comfortable environment, and that everyone has everything they need
          to enjoy doing great work. You’ll interact with everyone across the
          company and you’ll be instrumental in making GoCardless a fantastic
          place to work.
        </p>
        <p className='para'>
          A typical week will include:
        </p>
        <ul className='list'>
          <li>
            organising team events, from in-office lunches to away days
          </li>
          <li>
            greeting visitors and interview candidates
          </li>
          <li>
            buying stationery and equipment and ensuring the kitchen is fully stocked
          </li>
          <li>
            arranging repairs and maintenance, working with external suppliers,
            managing our relationships with our landlord and subtenants
          </li>
          <li>
            providing general administrative support
          </li>
          <li>
            various miscellaneous tasks such as watering the plants, preparing
            invoices and fixing the printer
          </li>
        </ul>
        <p className='para'>
          We've built a friendly, collaborative culture, where we hire and develop
          driven people that share our desire to do work we can be proud of. We
          value learning and feedback, and are devoted to encouraging and supporting
          each other's continual professional growth. There will be scope for you
          to develop your role and take on more responsibility as our team continues
          to grow.
        </p>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>The ideal candidate</h4>
        <ul className='list u-margin-Tm'>
          <li>
            You are calm in a crisis and bring a positive energy to every task
          </li>
          <li>
            You are diligent, obsessively attentive to detail, and trustworthy
          </li>
          <li>
            You are supremely organised, adept at multitasking and bring order to chaos
          </li>
          <li>
            You are self-motivated, proactive and love to improve processes
          </li>
        </ul>
        <p className='para'>
          This role would ideally suit a recent graduate, someone with 0-3 years'
          experience in administrative roles, events planning or similar. We welcome
          a wide diversity of candidates &ndash; if you're unsure, please apply.
        </p>
        <a href='http://boards.greenhouse.io/gocardless/jobs/68859' className='btn u-margin-Vs'>
          Apply now
        </a>
      </JobsPage>
    );
  }
}
