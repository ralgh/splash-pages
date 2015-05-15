import React from 'react';
import StoryBigQuote from '../story-big-quote';
import StoryPage from '../story-page';
import StoryQuote from '../story-quote';

export default class StoriesSpencerHockey extends React.Component {
  displayName = 'StoriesSpencerHockey'

  render() {
    return (
      <StoryPage
        title='Spencer Hockey Club'
        tagline='Spencer Hockey Club slashed the time spent chasing payments by switching to Direct Debit with GoCardless'
        tips={[
          'We helped them reduce time spent managing payments',
          'After using GoCardless, they achieved 80% take-up in 8 months',
          'Their integration cost was covered with an improved payment rate',
        ]}>
        <StoryQuote tag='Collecting membership fees was difficult and time consuming'>
          <p className='para u-margin-Tn'>
            <a href='http://hockey.spencerclub.org' className='u-link-color-p u-text-underline' target='_blank'>
            Spencer Hockey Club</a> is one of the UK's leading hockey clubs. With over 400 players,
            managing the club was a real challenge for the volunteer committee.
            “We used to let members pay however they wanted: monthly, annually,
            by cheque or bank transfer and with variable additions.
            It made collecting membership fees difficult and time consuming.”
          </p>
          <p className='para'>
            Tracking payments through bank statements “was very painful, and the Club suffered from
            late payments,” says Mark McDermott, club member and Director
            of <a href='http://www.codegent.com' className='u-link-color-p u-text-underline' target='_blank'>codegent</a>,
            who built the site.
          </p>
        </StoryQuote>
        <StoryBigQuote heroClass='story-hero--spencer-hockey' person='Mark McDermott' position='Spencer Hockey Club'>
          Using GoCardless felt like a natural fit for a membership group, and now the black hole in our finances has disappeared
        </StoryBigQuote>
        <StoryQuote tag='GoCardless felt like an automation of what we were already doing'>
          <p className='para u-margin-Tn'>“We realised we needed an online payment system, but had been put off by other
          providers' high fees and requirements for a merchant account. GoCardless provided a
          low cost solution that felt like an automation of what we were already doing.”</p>
          <p className='para'>The Club integrated the GoCardless API into their site in one weekend and now use it to
          take regular and one-off payments from members.</p>
        </StoryQuote>
        <StoryQuote tag='The black hole in our finances has disappeared'>
          <p className='para u-margin-Tn'>
            “Within 8 months of integration, 80% of the team were using GoCardless to make their payments.
            As a membership group, there is a high level of trust between us so Direct Debit is a nice fit.”
          </p>
          <p className='para'>
            Using GoCardless, the committee considerably reduced the time spent chasing payments,
            making the Club more financially stable.
          </p>
          <p className='para'>
            “With 80% take-up by our members, the black hole in our finances has disappeared,
            so now we can spend more time growing our reserves.”
          </p>
        </StoryQuote>
      </StoryPage>
    );
  }
}
