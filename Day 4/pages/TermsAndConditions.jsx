import { useState } from 'react';
import '../assets/css/TermsAndConditions.css'; 
import { useNavigate } from 'react-router-dom';
const TermsAndConditions =  () => {
const nav=useNavigate();
  
  const initialTabsState = {
    tab_item_1: true,
    tab_item_2: false,
    tab_item_3: false,
    tab_item_4: false,
    tab_item_5: false,
  };

  const [activeTabs, setActiveTabs] = useState(initialTabsState);
  const [accepted, setAccepted] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTabs((prevTabs) => ({
      ...prevTabs,
      [tab]: true,
    }));

    document.querySelectorAll('.tab_item').forEach((item) => {
      const tabClass = item.getAttribute('class').split(' ');
      if (tabClass.includes(tab)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  };
  

  const handleAcceptClick = () => {
    setAccepted(true);
    setTimeout(() => {
      nav('/'); 
    }, 2000);
  };
  const backgroundStyles = {
    backgroundImage: "url('https://media.istockphoto.com/id/507959606/photo/traditional-indian-houseboat-in-kerala-india.jpg?s=612x612&w=0&k=20&c=mnAoqDsuHzUhOvW7oMHtusZC4kqFXkNeJo-1FXBxX0U=')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100vw',
    margin: 0,
  };

  return (
    <div style={backgroundStyles}>
    <div className="wrapper flex_align_justify">
      <div className="tc_wrap">
        <div className="tabs_list">
          <ul>
            <li
              onClick={() => handleTabClick('tab_item_1')}
              className={activeTabs.tab_item_1 ? 'active' : ''}
              data-tc="tab_item_1"
            >
              Terms of use
            </li>
            <li
              onClick={() => handleTabClick('tab_item_2')}
              className={activeTabs.tab_item_2 ? 'active' : ''}
              data-tc="tab_item_2"
            >
              Intellectual property
            </li>
            <li
              onClick={() => handleTabClick('tab_item_3')}
              className={activeTabs.tab_item_3 ? 'active' : ''}
              data-tc="tab_item_3"
            >
              Prohibited activities
            </li>
            <li
              onClick={() => handleTabClick('tab_item_4')}
              className={activeTabs.tab_item_4 ? 'active' : ''}
              data-tc="tab_item_4"
            >
              Termination clause
            </li>
            <li
              onClick={() => handleTabClick('tab_item_5')}
              className={activeTabs.tab_item_5 ? 'active' : ''}
              data-tc="tab_item_5"
            >
              Governing law
            </li>
          </ul>
        </div>
        <div className="tabs_content">
          <div className="tab_head">
            <h2>Terms & Conditions</h2>
          </div>
          <div className="tab_body">
            <div className="tab_item" style={{ display: activeTabs.tab_item_1 ? 'block' : 'none' }}>
              <h3>Terms of use</h3>
              <p>
                All content, logos, and trademarks displayed on this website are the property of Dreamy House Boat Voyages or its licensors and are protected by copyright and other intellectual property laws.
                You agree to indemnify and hold Dreamy House Boat Voyages and its affiliates harmless from any claims, losses, damages, liabilities, costs, and expenses, including legal fees, arising out of your use of this website or your violation of these terms and conditions.
                Dreamy House Boat Voyages reserves the right to modify these terms and conditions at any time. Any changes will be effective immediately upon posting on this website. It is your responsibility to review these terms periodically for updates.
                These terms and conditions are governed by and construed in accordance with the laws of this Jurisdiction. Any disputes arising from your use of this website will be subject to the exclusive jurisdiction of the courts in this Jurisdiction.
              </p>
            </div>
            <div className="tab_item" style={{ display: activeTabs.tab_item_2 ? 'block' : 'none' }}>
              <h3>Intellectual property</h3>
              <p>
                All content, logos, and trademarks displayed on this website are the property of Dreamy House Boat Voyages or its licensors and are protected by copyright and other intellectual property laws.
              </p>
            </div>
            <div className="tab_item" style={{ display: activeTabs.tab_item_3 ? 'block' : 'none' }}>
              <h3>Prohibited activities</h3>
              <p>
                You agree to indemnify and hold Dreamy House Boat Voyages and its affiliates harmless from any claims, losses, damages, liabilities, costs, and expenses, including legal fees, arising out of your use of this website or your violation of these terms and conditions.
              </p>
            </div>
            <div className="tab_item" style={{ display: activeTabs.tab_item_4 ? 'block' : 'none' }}>
              <h3>Termination clause</h3>
              <p>
                Dreamy House Boat Voyages reserves the right to modify these terms and conditions at any time. Any changes will be effective immediately upon posting on this website. It is your responsibility to review these terms periodically for updates.
              </p>
            </div>
            <div className="tab_item" style={{ display: activeTabs.tab_item_5 ? 'block' : 'none' }}>
              <h3>Governing law</h3>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of this jurisdiction. Any disputes arising from your use of this website will be subject to the exclusive jurisdiction of the courts in this jurisdiction.
              </p>
            </div>
          </div>
          <div className="tab_foot flex_align_justify">
            {!accepted ? (
              <>
              <button
  className="decline"
  style={{ backgroundColor: '#ff6666', color: '#000', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}
>
  Decline
</button>
<button
  className="agree"
  style={{ backgroundColor: '#66cc66', color: '#000', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}
  onClick={handleAcceptClick}
>
  Agree
</button>

              </>
            ) : (
              <p>Thank you for accepting the terms!</p>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TermsAndConditions;
