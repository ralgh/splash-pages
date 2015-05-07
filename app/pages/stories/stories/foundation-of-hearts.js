import React from 'react';
import BigQuote from '../big-quote';
import StoryPage from '../story-page';
import Quote from '../quote';

export default class StoryFoundationOfHearts extends React.Component {
  displayName = 'StoryFoundationOfHearts'

  render() {
    return (
      <StoryPage
        title='Foundation of Hearts'
        tagline='The Foundation of Hearts attracts 7500 donations in under 2 months with GoCardless’s simple and easy-to-use system'
        tips={[
          'We helped them set up 7,500 supporters in less than 2 months',
          'GoCardless helped them integrate direct debit payments into their website in less than an hour',
          'We helped them manage online payments with no technical or payments expertise',
        ]}
        >
        <Quote tag='We needed a payments provider which was easy for us and the fans to use'>
          <p>
            <a href="http://www.foundationofhearts.org/" className="u-link-color-p u-text-underline" target="_blank">The Foundation of Hearts</a>
             is a not-for-profit organisation made up of thousands of Hearts fans aiming to save the Heart of Midlothian FC (a Scottish Premier League team) from liquidation by becoming its majority shareholder.
            Fans pledge regular monthly contributions of £10 - £200 to support the purchase.
          </p>
          <p>
            As the Foundation is run by volunteers they “needed a payments provider which was easy for us, and the fans, to use”.
          </p>
        </Quote>
        <BigQuote heroClass='story-hero--foundation-of-hearts' person='Calum Robertson' position='Foundation of Hearts'>
          "We chose GoCardless for three reasons: it's easy for our team to use, easy for our supporters to use, and the fees are brilliantly low. What's more, the quality of service we've received from the GoCardless team has been fantastic."
        </BigQuote>
        <Quote tag='GoCardless was the simple option'>
          <p>Having spoken to PayPal and their bank about other payment methods the Foundation decided on GoCardless as "the simple option".</p>
          <p>Calum Robertson, a director of the Foundation of Hearts, says, "We chose GoCardless for three reasons: it's easy for our team to use, easy for our supporters to use, and the fees are brilliantly low. What's more, the quality of service we've received from the GoCardless team has been fantastic."</p>
          <p>The Foundation integrated with the GoCardless API to allow fans to make pledges through their website. Reporting is provided to the Foundation's team through the API and the GoCardless dashboard.</p>
        </Quote>
        <Quote tag='The GoCardless team has been fantastic'>
          <p>Using GoCardless has made the payment process much simpler to manage. "I'm not the most technical of people, and even I have found it simple to use. What's more, the quality of service we've received from the GoCardless team has been fantastic" says Calum, director of the Foundation.</p>
          <p>Within two months of launching with GoCardless, 7,500 fans pledged to support the Foundation. This has now risen to 8,000 and continues to grow. “We plan to keep expanding, and all pledges will be processed by GoCardless.”</p>
        </Quote>
      </StoryPage>
    );
  }
}
