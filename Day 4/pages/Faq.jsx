import React from 'react';
import '../assets/css/Faq.css'; 

class Faq extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faqs: [
        {
          id: 1,
          question: 'How do I book a houseboat voyage with Dreamy House Boat Voyages?',
          answer:
            'You can book a houseboat voyage with Dreamy House Boat Voyages by visiting our website and selecting your desired dates and package. Alternatively, you can contact our customer support team at [phone number] for assistance with booking.',
        },
        {
          id: 2,
          question: 'What amenities are included in the houseboat voyage packages?',
          answer:
            'Our houseboat voyage packages include comfortable accommodations, delicious meals prepared on-board, guided tours of the backwaters, and access to recreational activities such as fishing and bird watching. Visit our website for more details.',
        },
        {
          id: 3,
          question: 'Do you offer customizable houseboat voyage packages?',
          answer:
            'Yes, we offer customizable houseboat voyage packages to cater to your specific preferences and requirements. Contact our customer support team to discuss your preferences and create a personalized package.',
        },
        {
          id: 4,
          question: 'Are pets allowed on the houseboat voyages?',
          answer:
            'Unfortunately, we do not allow pets on our houseboat voyages to ensure the comfort and safety of all our guests. We appreciate your understanding in this matter.',
        },
      ],
      activeIndex: null,
    };
  }

  toggleAnswer = (index) => {
    this.setState((prevState) => ({
      activeIndex: prevState.activeIndex === index ? null : index,
    }));
  };

  render() {
    const { faqs, activeIndex } = this.state;

    return (
      <div className='hi'>
        <div className="faq-container">
          <h1>FAQs - Dreamy House Boat Voyages</h1>
          <div className="faq-list">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className={`faq-item ${
                  activeIndex === faq.id ? 'active' : ''
                }`}
                onClick={() => this.toggleAnswer(faq.id)}
              >
                <div className="faq-question">{faq.question}</div>
                {activeIndex === faq.id && (
                  <div className="faq-answer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;
