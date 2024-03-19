
import {FcApproval} from "react-icons/fc"

import '../assets/css/Testimonials.css';

const Testimonials = () => {
    const wellowTextStyle = { color: 'yellow' };
    const backgroundStylls = {
        backgroundImage: "url('https://img.freepik.com/free-vector/gradient-iridescent-glitter-background_23-2149928491.jpg?size=626&ext=jpg&ga=GA1.1.623741277.1686718373&semt=ais')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '120vh',
        width: '100vw',
        margin:0,
     };
  return (
    <div style={backgroundStylls}>
    <div className='testimonials'>
        <div className='testimonial-text'>
            <h3>Testimonials</h3>
            <h1>Users Love Experiences</h1>
            <p style={wellowTextStyle}>See what our members are saying. Trusted by 1200+ world class businesses</p>
            <a href="/">Read all 2,432 reviews</a>
        </div>
        <div className='testimonial-cards'>
            <div className='cardu'>
                <img src="https://images.hdqwalls.com/wallpapers/brunette-girls-model-4k-nn.jpg" alt="" />
                <p>Absolutely Magical Experience!</p>
<p>I recently went on a houseboat voyage with Dreamy House Boat Voyages, and it was absolutely magical! The serene backwaters, cozy accommodations, and delicious meals made for an unforgettable experience. I highly recommend it to anyone looking for a unique and relaxing getaway.</p>
                <div className='icons'>
                    <a href="/">@Seatha</a>
                    <FcApproval size={18} className='icon' />
                </div>
            </div>
            <div className='cardu'>
                <img src="https://img.freepik.com/premium-photo/close-up-portrait-yong-woman-casual-portrait-positive-view-big-smile-beautiful-isolated-blue-color-background_525549-4744.jpg" alt="" />
                <p>Perfect Getaway Destination!</p>
                <p>Our houseboat voyage with Dreamy House Boat Voyages was the perfect getaway destination. The breathtaking views, attentive crew, and comfortable amenities exceeded our expectations. It was a truly rejuvenating experience that we will cherish forever.</p>
                <div className='icons'>
                    <a href="/">@Jenifer</a>
                    <FcApproval size={18} className='icon'/>
                </div>
            </div>
            <div className='cardu'>
                <img src="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg" alt="" />
                <p>Unforgettable Memories!</p>
                <p>Our family had the most incredible time on our houseboat voyage with Dreamy House Boat Voyages. From sunrise cruises to sunset dinners, every moment was filled with beauty and tranquility. The kids loved spotting wildlife along the way, and we made unforgettable memories together. We cannot wait to come back!</p>
                <div className='icons'>
                    <a href="/">@Ayesha</a>
                    <FcApproval size={18} className='icon'/>
                </div>
            </div>
            <div className='cardu'>
                <img src="https://media.istockphoto.com/id/1056257342/photo/portrait-of-joyful-professional.jpg?s=612x612&w=0&k=20&c=D9H23OM1-heW-xjvmQftBp_YMbZh-n9KFnCb2hE3SHo=" alt="" />
                <p>Exceptional Service!</p>
                <p>Dreamy House Boat Voyages is truly a hidden gem. We stumbled upon it while searching for unique vacation experiences, and we are so glad we did. The beauty of the backwaters combined with the comfort of the houseboat made for an unforgettable trip. We will definitely be returning for another voyage!</p>
                <div className='icons'>
                    <a href="/">@Rudra</a>
                    <FcApproval size={18} className='icon'/>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Testimonials;