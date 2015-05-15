import React from 'react';
import Slider from '../slider/slider';
import Link from '../link/link';
import ShareBoxedSmIcon from '../../icons/svg/share-boxed-sm';

export default class HowDdWorks extends React.Component {
  displayName = 'HowDdWorks'

  render() {
    return (
      <Slider navigationClassName='modal__container__controls u-padding-Tm u-padding-Hl'
      prev={(
        <a className='u-pull-start btn btn--small btn--hollow u-text-transform-none'>
          &larr; Back
        </a>
      )}
      next={(
        <a className='u-pull-end btn btn--small u-text-transform-none'>
          Next &rarr;
        </a>
      )}>
        <div className='modal__container--slide modal__container--slide--1'>
          <div className='modal__container__img u-padding-Axl'>
            <div className='u-padding-Axl u-margin-Tm'>
              <img src='/images/why-dd/slide-1.png' />
            </div>
          </div>
          <div className='modal__container__copy u-padding-Al'>
            <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-padding-Txl u-margin-Tl'>
              Why Direct Debit?
            </h2>
            <p className='u-text-s u-color-p u-padding-Tm'>
              Direct Debit works quite differently to card payments, which most people are more familiar with.
            </p>
            <p className='u-text-s u-color-p u-padding-Tm'>
              You may pay some bills with Direct Debit, but you might not know how it could help your business.
              We’ve written this tiny guide to clear things up a bit.
            </p>
          </div>
        </div>
        <div className='modal__container--slide modal__container--slide--3'>
          <div className='modal__container__img u-padding-Axl'>
            <div className='u-padding-Axl u-margin-Tm'>
              <img src='/images/why-dd/slide-3.png' />
            </div>
          </div>
          <div className='modal__container__copy u-padding-Al'>
            <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-padding-Txl u-margin-Tl'>
              How does it work?
            </h2>
            <p className='u-text-s u-color-p u-padding-Tm'>
              Setting up a Direct Debit just means that someone’s allowing you to take payments from their bank account.
            </p>
            <p className='u-text-s u-color-p u-padding-Tm'>
              From a business’ point of view, getting paid by Direct Debit means getting permission from
              your customer to take money from their account.
            </p>
            <p className='u-text-s u-color-p u-padding-Tm'>
              Good news is, once that’s done you can take payments without the need for them to actually do anything.
            </p>
            <hr />
            <h5 className='u-text-label u-text-upcase u-text-xxs u-text-semi u-color-p u-margin-Bxs'>Worth reading</h5>
            <p className='u-margin-Bxxs'>
              <ShareBoxedSmIcon className='svg-icon__external-link' />
              <a href='/guides/intro-to-direct-debit/merchants-guide/'>What is Direct Debit? A guide for merchants</a></p>
            <p>
              <ShareBoxedSmIcon className='svg-icon__external-link' />
              <a href='/guides/posts/switching-to-gocardless/'>How to switch to taking Direct Debit with GoCardless</a></p>
          </div>
        </div>
        <div className='modal__container--slide modal__container--slide--2'>
          <div className='modal__container__img u-padding-Axl'>
            <div className='u-padding-Axl u-margin-Tm'>
              <img src='/images/why-dd/slide-2.png' />
            </div>
          </div>
          <div className='modal__container__copy u-padding-Al'>
            <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-padding-Txl u-margin-Tl'>
              Is it safe?
            </h2>
            <p className='u-text-s u-color-p u-padding-Tm'>
              A customer giving you access to their bank account might seem strange,
              but it’s not as risky for them as you might think.
            </p>
            <p className='u-text-s u-color-p u-padding-Tm'>
              Direct Debit payments are bound by rules stating that customers must be informed of any collections
              in advance, and guaranteeing that they will get their money back if anything bad, like fraud, happens.
            </p>
            <hr />
            <h5 className='u-text-label u-text-upcase u-text-xxs u-text-semi u-color-p u-margin-Bxs'>Worth reading</h5>
            <p>
              <ShareBoxedSmIcon className='svg-icon__external-link' />
              <a href='/direct-debit/guarantee'>The Direct Debit Guarantee</a>
            </p>
          </div>
        </div>
        <div className='modal__container--slide modal__container--slide--4'>
          <div className='modal__container__img u-padding-Axl'>
            <div className='u-padding-Axl u-margin-Tm'>
              <img src='/images/why-dd/slide-4.png' />
            </div>
          </div>
          <div className='modal__container__copy u-padding-Al'>
            <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-padding-Txl u-margin-Tl'>
              Why doesn't everyone use it?
            </h2>
            <p className='u-text-s u-color-p u-padding-Tm'>
              There are some things you don’t want Direct Debit for.
              It’s not good for paying for your groceries, for example, because payments don’t happen instantly.
            </p>
            <p className='u-text-s u-color-p u-padding-Tm'>
              However, it is great for payments like subscriptions and invoicing,
              where the speed of payment doesn’t matter so much.
            </p>
            <p className='u-text-s u-color-p u-padding-Tm'>
              Also, until recently it has been quite difficult to get set up on the system.
              That’s why your gas or electric supplier might get you to pay your bills this way,
              but your landlord or accountant probably&nbsp;don’t.
            </p>
          </div>
        </div>
        <div className='modal__container--slide modal__container--slide--5'>
          <div className='modal__container__img u-padding-Axl'>
            <div className='u-padding-Axl u-margin-Tm'>
              <img src='/images/why-dd/slide-5.png' />
            </div>
          </div>
          <div className='modal__container__copy u-padding-Al'>
            <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-padding-Txl u-margin-Tl'>
              We make Direct Debit easy
            </h2>
            <p className='u-text-s u-color-p u-padding-Tm'>
              GoCardless makes it incredibly simple for anyone to get started with Direct Debit.
            </p>
            <p className='u-text-s u-color-p u-padding-Tm'>
              Whether you’re a small business, large enterprise, landlord, accountant or really
              anyone wanting to collect recurring payments; we’ve made Direct Debit available to anyone.
            </p>
            <hr />
            <Link to='features' className='btn btn--block' id='track-modal-cta-features'>See how it works</Link>
          </div>
        </div>
      </Slider>
    );
  }
}
