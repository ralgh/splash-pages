import React from 'react';
import JobsPage from '../jobs-page';

export default class WebOperationsEngineer extends React.Component {
  displayName = 'WebOperationsEngineer'

  render() {
    return (
      <JobsPage>
        <h3 className='u-text-heading-light u-text-m u-color-heading'>Web Operations Engineer</h3>
        <p className='para'>
          We are looking for a web operations engineer to help us scale our product to millions of
          users, while maintaining a highly available service.
          You should have informed opinions about your ideal provisioning, deployment and monitoring
          tools &ndash; we're looking for people who are independent and take initiative.
        </p>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>On a day-to-day basis, you will be:</h4>
        <ul className='list u-margin-Tm'>
          <li>
            Managing and improving our existing infrastructure
          </li>
          <li>
            Building tools for automating our testing and deployment processes
          </li>
          <li>
            Making our infrastructure indestructible
          </li>
        </ul>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>Requirements:</h4>
        <ul className='list u-margin-Tm'>
          <li>
            Professional experience of Linux systems administration
          </li>
          <li>
            Excellent knowledge of programming and shell scripting (especially Ruby)
          </li>
          <li>
            Configuration management (preferably Chef) experience
          </li>
          <li>
            Familiarity with cloud computing platforms such as AWS and SoftLayer
          </li>
        </ul>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>Bonus points for:</h4>
        <ul className='list u-margin-Tm'>
          <li>
            Experience remotely managing dedicated hardware
          </li>
          <li>
            Computer Science degree
          </li>
          <li>
            Familiarity with Ruby or Python
          </li>
          <li>
            Strong operational knowledge of PostgresSQL or similar RDBMS
          </li>
        </ul>
        <p className='para'>In your application, please include your CV and a link to
          your GitHub, as well as telling us about an interesting technical project or
          problem that you've recently worked on.</p>
        <a href='http://boards.greenhouse.io/gocardless/jobs/7643' className='btn u-margin-Vs'>
          Apply now
        </a>
      </JobsPage>
    );
  }
}
