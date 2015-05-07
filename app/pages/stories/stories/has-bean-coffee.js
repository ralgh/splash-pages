import React from 'react';
import BigQuote from '../big-quote';
import StoryPage from '../story-page';
import Quote from '../quote';

export default class HasBeanCoffeeStory extends React.Component {
  displayName = 'HasBeanCoffeeStory'

  render() {
    return (
      <StoryPage
        title='Has Bean Coffee'
        tagline='Has Bean coffee improved cashflow by 30% by moving to Direct Debit with GoCardless'
        tips={[
            'We helped them reduce average payment period by 34%',
            'GoCardless helped them identify bad debtors in advance',
            'GoCardless helped them improve cash flow by 30%',
        ]}>
        <Quote tag='Customers paying invoices up to 4 months late drove us crazy'>
          <p><a href='http://hasbean.co.uk' className='u-link-color-p u-text-underline' target='_blank'>
          Has Bean Coffee</a> is a major supplier of high quality coffee to the retail and wholesale industries.
          In an industry with lead times of up to a year, it is crucial for Has Bean to maintain strong cash flow.</p>
          <p>With cafes often strapped for cash, "customers paying invoices up to four months late drove us crazy.
          Our business was growing so fast and we were so busy that we would send out coffee to customers even with
          long overdue invoices." Owner Steve Leighton was left with uncertain cash flow and numerous bad debtors.</p>
        </Quote>
        <BigQuote heroClass='story-hero--has-bean-coffee' person='Steve Leighton'
        position='Has Bean Coffee' img='/images/testimonials/hasbean-coffee__avatar.png'>
          GoCardless gives us control over when we get paid and takes away the uncomfortable conversations about money.
        </BigQuote>
        <Quote tag='Now we can automatically take payment when issuing invoices'>
          <p>Has Bean use GoCardless through accounting software, KashFlow. Now,
          they can send out Direct Debit requests with invoices to all wholesale customers.
          As soon as an invoice becomes due, they can automatically take payment from the customer.</p>
          <p>As a bonus, the GoCardless integration with Kashflow means that these payments are
          automatically reconciled in their accounts.</p>
        </Quote>
        <Quote tag='We now have control over when we get paid'>
          <p>Since making the switch, Has Bean’s average payment period has been reduced from
          62 days to 41 and cash flow has improved by 30%.</p>
          <p>Thanks to GoCardless, Has Bean are now in control of when they get paid.
          This has vastly improved their cashflow and helped them “keep uncomfortable conversations about money to a minimum”.</p>
          <a href='/invoicing' className='u-color-primary u-text-upcase u-text-xxs u-text-heading u-text-semi u-block u-margin-Txl'>
              See how GoCardless works for invoicing
          </a>
        </Quote>
      </StoryPage>
    );
  }
}
