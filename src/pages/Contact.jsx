import React from 'react';
import ContactCard1 from '../components/ContactCards/ContactCard1';
import ContactCard2 from '../components/ContactCards/ContactCard2';
import ContactCard3 from '../components/ContactCards/ContactCard3';

function Contact() {
  const contactCardSets = [
    [<ContactCard1 key='1' />, <ContactCard2 key='2' />, <ContactCard3 key='3' />]
  ];

  return (
    <>
      <div className='p-5 pb-3'>
        <div className="container ps-5">
          {/* map to create rows */}
          {contactCardSets.map((cardSet, rowIndex) => (
            <div key={rowIndex} className="row card-layout contact-layout ms-4">
              {/* map over each card set to render individual cards */}
              {cardSet.map((CardComponent, cardIndex) => (
                <div key={cardIndex} className="col">
                  <div
                    className={`card card3  m-0 overflow-hidden d-flex align-items-center ${cardIndex === 1 ? 'px-0 py-2 rounded-0': 'p-3 rounded-5' } text-center`}
                    style={{
                      backgroundColor: cardIndex === 1 ? 'transparent' : '#fff',
                    }}
                  >
                    {CardComponent}
                  </div>
                </div>
              ))}
            </div>
          ))}
          <div className="text-secondary">
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
