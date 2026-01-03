// import React from 'react';
// import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

// function TestimonialsAbout() {
//   return (
//     <section className="testimonials-about">
//       <div className="testimonials">
//         <FormatQuoteIcon className="quote-icon" />
//         <p className="testimonial-text">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
//           luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, 
//           consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, 
//           pulvinar dapibus leo.
//         </p>
//         <div className="testimonial-avatars">
//           <div className="avatar">JR</div>
//           <div className="avatar">SM</div>
//           <div className="avatar">AK</div>
//           <div className="avatar">LP</div>
//           <div className="avatar">MR</div>
//           <span className="testimonial-name">James Rodrigo</span>
//         </div>
//       </div>
//       <div className="about-us" id="about">
//         <h2>About Us</h2>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
//           luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed do eiusmod tempor 
//           incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
//           nostrud exercitation ullamco laboris.
//         </p>
//         <p>
//           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
//           eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
//           sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut 
//           perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
//           laudantium, totam rem aperiam.
//         </p>
//         <p>
//           Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
//           sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
//           Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
//         </p>
//       </div>
//     </section>
//   );
// }

// export default TestimonialsAbout;










// import React from 'react';
// import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

// function TestimonialsAbout() {
//   return (
//     <section className="testimonials-about-container" style={{ width: '100%', backgroundColor: 'white' }}>
      
//       {/* 1. TESTIMONIALS SECTION (Light Blue Background) */}
//       <div className="testimonials" style={{
//         backgroundColor: '#C6D6F6', // Exact light blue from image
//         padding: '100px 10%',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         position: 'relative',
//         overflow: 'hidden'
//       }}>
//         {/* Floating Images on the Left */}
//         <div style={{ position: 'relative', width: '45%', height: '350px' }}>
//           {/* Circular Images with White Borders */}
//           <img src="https://i.pravatar.cc/150?u=1" style={{ width: '80px', height: '80px', borderRadius: '50%', border: '4px solid white', position: 'absolute', top: '10%', left: '30%' }} alt="user" />
//           <img src="https://i.pravatar.cc/150?u=2" style={{ width: '100px', height: '100px', borderRadius: '50%', border: '4px solid white', position: 'absolute', top: '45%', left: '5%' }} alt="user" />
//           <img src="https://i.pravatar.cc/150?u=3" style={{ width: '110px', height: '110px', borderRadius: '50%', border: '4px solid white', position: 'absolute', top: '35%', left: '55%' }} alt="user" />
//           <img src="https://i.pravatar.cc/150?u=4" style={{ width: '90px', height: '90px', borderRadius: '50%', border: '4px solid white', position: 'absolute', bottom: '5%', left: '25%' }} alt="user" />
//           <img src="https://i.pravatar.cc/150?u=5" style={{ width: '85px', height: '85px', borderRadius: '50%', border: '4px solid white', position: 'absolute', bottom: '15%', left: '65%' }} alt="user" />
//         </div>

//         {/* Quote Content */}
//         <div style={{ width: '50%', textAlign: 'left', zIndex: 2 }}>
//           <FormatQuoteIcon style={{ fontSize: '50px', color: '#1A237E', marginBottom: '10px' }} />
//           <p className="testimonial-text" style={{ fontSize: '18px', color: '#444', fontStyle: 'italic', lineHeight: '1.6', margin: 0 }}>
//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. The more content you provide about you. Lorem, Quos saepe suscipit, nemo dolore sapiente!"
//           </p>
//           <h4 style={{ margin: '20px 0 5px 0', color: '#1A237E', fontSize: '22px' }}>James Rodrigo</h4>
//           <p style={{ fontSize: '14px', color: '#777', margin: 0, fontWeight: 'bold' }}>CUSTOMER</p>
          
//           {/* Pagination Dots */}
//           <div style={{ display: 'flex', gap: '8px', marginTop: '20px' }}>
//             <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#1A237E' }}></div>
//             <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#999' }}></div>
//             <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#999' }}></div>
//           </div>
//         </div>

//         {/* Large Decorative Blue Circle on the right */}
//         <div style={{ 
//           position: 'absolute', right: '-100px', top: '-50px', width: '400px', height: '400px', 
//           borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.15)', zIndex: 1 
//         }}></div>
//       </div>

//       {/* 2. ABOUT US SECTION (Centered Rounded Card) */}
//       <div className="about-us" id="about" style={{ padding: '80px 10%' }}>
//         <div style={{
//           backgroundColor: '#C6D6F6', // Matching blue theme
//           padding: '60px',
//           borderRadius: '10px', // High border radius as seen in image
//           textAlign: 'center',
//           maxWidth: '1000px',
//           margin: '0 auto',
//           boxShadow: '0 15px 40px rgba(0,0,0,0.05)'
//         }}>
//           <h2 style={{ fontSize: '36px', color: '#333', marginBottom: '30px', fontWeight: 'bold' }}>About Us</h2>
//           <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.9', textAlign: 'justify' }}>
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
//           </p>
//           <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.9', textAlign: 'justify', marginTop: '20px' }}>
//             It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default TestimonialsAbout;







// import React from 'react';
// import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

// function TestimonialsAbout() {
//   return (
//     <section className="testimonials-about-container" style={{ width: '100%', backgroundColor: 'white' }}>
      
//       {/* 1. TESTIMONIALS SECTION */}
//       <div className="testimonials" style={{
//         backgroundColor: '#C6D6F6', 
//         padding: '100px 10%',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         position: 'relative',
//         minHeight: '450px',
//         overflow: 'hidden'
//       }}>
        
//         {/* EXACT IMAGE PLACEMENT AREA */}
//         <div className="image-circles-container" style={{ position: 'relative', width: '40%', height: '350px' }}>
          
//           {/* Top Left Circle */}
//           <img src="https://i.pravatar.cc/150?u=1" alt="user" style={{ 
//             width: '75px', height: '75px', borderRadius: '50%', border: '4px solid white', 
//             position: 'absolute', top: '0', left: '15%', zIndex: 2 
//           }} />

//           {/* Middle Far Left Circle */}
//           <img src="https://i.pravatar.cc/150?u=2" alt="user" style={{ 
//             width: '95px', height: '95px', borderRadius: '50%', border: '4px solid white', 
//             position: 'absolute', top: '35%', left: '-5%', zIndex: 2 
//           }} />

//           {/* Center Main Circle (James Rodrigo) */}
//           <img src="https://i.pravatar.cc/150?u=3" alt="user" style={{ 
//             width: '120px', height: '120px', borderRadius: '50%', border: '4px solid white', 
//             position: 'absolute', top: '25%', left: '35%', zIndex: 3 
//           }} />

//           {/* Bottom Left Circle */}
//           <img src="https://i.pravatar.cc/150?u=4" alt="user" style={{ 
//             width: '85px', height: '85px', borderRadius: '50%', border: '4px solid white', 
//             position: 'absolute', bottom: '5%', left: '10%', zIndex: 2 
//           }} />

//           {/* Bottom Right Circle */}
//           <img src="https://i.pravatar.cc/150?u=5" alt="user" style={{ 
//             width: '90px', height: '90px', borderRadius: '50%', border: '4px solid white', 
//             position: 'absolute', bottom: '15%', left: '55%', zIndex: 2 
//           }} />
//         </div>

//         {/* QUOTE CONTENT */}
//         <div className="testimonial-content" style={{ width: '55%', zIndex: 2, paddingLeft: '40px' }}>
//           <FormatQuoteIcon style={{ fontSize: '60px', color: '#1A237E', transform: 'rotate(180deg)', opacity: '0.8' }} />
          
//           <p style={{ fontSize: '19px', color: '#333', lineHeight: '1.6', margin: '10px 0' }}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. The more content you provide about you, Lorem, Quos saepe suscipit, nemo dolore sapiente!
//           </p>
          
//           <div style={{ marginTop: '25px' }}>
//             <h4 style={{ margin: 0, color: '#1A237E', fontSize: '24px', fontWeight: 'bold' }}>James Rodrigo</h4>
//             <p style={{ margin: 0, fontSize: '14px', color: '#666', letterSpacing: '1px' }}>CUSTOMER</p>
//           </div>

//           {/* Pagination Dots */}
//           <div style={{ display: 'flex', gap: '10px', marginTop: '30px' }}>
//             <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#1A237E' }}></div>
//             <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#A0AEC0' }}></div>
//             <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#A0AEC0' }}></div>
//           </div>
//         </div>

//         {/* Background Graphic (The large white-ish circle on the right) */}
//         <div style={{ 
//           position: 'absolute', right: '-10%', top: '-20%', width: '500px', height: '500px', 
//           borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)', zIndex: 1 
//         }}></div>
//       </div>

//       {/* 2. ABOUT US SECTION (Exact card style) */}
//       <div className="about-us-section" style={{ padding: '100px 0', display: 'flex', justifyContent: 'center' }}>
//         <div style={{
//           backgroundColor: '#C6D6F6',
//           width: '80%',
//           maxWidth: '1000px',
//           padding: '60px 80px',
//           borderRadius: '10px',
//           textAlign: 'center',
//           boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
//         }}>
//           <h2 style={{ fontSize: '36px', color: '#1A237E', marginBottom: '30px' }}>About Us</h2>
//           <p style={{ fontSize: '16px', color: '#4A5568', lineHeight: '1.8', textAlign: 'justify' }}>
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default TestimonialsAbout;





// import React from 'react';
// import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

// function TestimonialsAbout() {
//   return (
//     <section className="testimonials-about-wrapper" style={{ width: '100%', backgroundColor: 'white' }}>
      
//       {/* 1. TESTIMONIALS SECTION */}
//       <div className="testimonials-section" style={{
//         backgroundColor: '#C6D6F6', 
//         padding: '100px 10%',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         position: 'relative',
//         minHeight: '480px',
//         overflow: 'hidden'
//       }}>
        
//         {/* --- DECORATIVE BACKGROUND CIRCLES (Right Side) --- */}
//         <div style={{ 
//           position: 'absolute', right: '10%', top: '-10%', width: '350px', height: '350px', 
//           borderRadius: '50%', backgroundColor: "#E6F7FA", zIndex: 1 
//         }}></div>
//         <div style={{ 
//           position: 'absolute', right: '2%', bottom: '-20%', width: '400px', height: '400px',
//           borderRadius: '50%', backgroundColor: '#C3E0F7', zIndex: 1 
//         }}></div>
//         <div style={{ 
//           position: 'absolute', right: '3%', top: '7%', width: '300px', height: '300px', 
//           borderRadius: '50%', backgroundColor: '#D6E9FF', zIndex: 1 
//         }}></div>

//         {/* --- FLOATING IMAGE CIRCLES (Left Side) --- */}
//         <div className="image-container" style={{ position: 'relative', width: '40%', height: '350px', zIndex: 2 }}>
//           {/* Top Left */}
//           <img src="https://images.unsplash.com/photo-1609737944640-6811139abe01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW4lMjBpbiUyMHdoaXRlJTIwd2ludGVyJTIwY29hdCUyMGFuZCUyMGJlYW5pZSUyMHNtaWxpbmd8ZW58MHx8MHx8fDA%3D" alt="user" style={{ 
//             width: '75px', height: '75px', borderRadius: '50%', border: '4px solid white', 
//             position: 'absolute', top: '500', left: '50%' , 
//           }} />
//           {/* Far Left */}
//           <img src="https://images.unsplash.com/photo-1624245532111-8f4aba352ba9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWlkZGxlJTIwYWdlZCUyMG1hbiUyMHdpdGglMjBnbGFzc2VzJTIwYW5kJTIwc3VpdCUyMGxhdWdoaW5nfGVufDB8fDB8fHww" alt="user" style={{ 
//             width: '95px', height: '95px', borderRadius: '50%', border: '4px solid white', 
//             position: 'absolute', top: '19%', left: '10%' 
//           }} />
//           {/* Center Main */}
//           <img src="https://media.istockphoto.com/id/2067085905/photo/parent-and-daughter.webp?a=1&b=1&s=612x612&w=0&k=20&c=DBEeSmWO0jCPlPk8d9CWAbfOPB_Pbx0xnTjqLPfRz9Q=" alt="user" style={{ 
//             width: '125px', height: '125px', borderRadius: '50%', border: '4px solid white', 
//             position: 'absolute', top: '30%', left: '35%', zIndex: 3 
//           }} />
//           {/* Bottom Left */}
//           <img src="https://plus.unsplash.com/premium_photo-1723514489790-18b9a81cbf09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8eW91bmclMjBtYW4lMjBoZWFkc2hvdCUyMHN0dWRpbyUyMGxpZ2h0aW5nfGVufDB8fDB8fHww" alt="user" style={{ 
//             width: '85px', height: '85px', borderRadius: '50%', border: '4px solid white', 
//             position: 'absolute', bottom: '5%', left: '19%' 
//           }} />
//           {/* Bottom Right */}
//           <img src="https://media.istockphoto.com/id/531493419/photo/happy-family-sitting-on-floor-with-their-baby.webp?a=1&b=1&s=612x612&w=0&k=20&c=HjbpvzOU3B2rqDHUj7XNXlQpmPkcu_cDER5Escr6HDY=" alt="user" style={{ 
//             width: '90px', height: '90px', borderRadius: '50%', border: '4px solid white', 
//             position: 'absolute', bottom: '3%', left: '55%' 
//           }} />
//         </div>

//         {/* --- TESTIMONIAL CONTENT (Right Side) --- */}
//         <div className="quote-content" style={{ width: '55%', zIndex: 3, paddingLeft: '50px' }}>
//           <FormatQuoteIcon style={{ fontSize: '70px', color: '#1A237E', opacity: '0.2', marginBottom: '-20px' }} />
//           <p style={{ fontSize: '20px', color: '#333', lineHeight: '1.6', fontStyle: 'italic', margin: '0' }}>
//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. The more content you provide about you, Lorem, Quos saepe suscipit, nemo dolore sapiente!"
//           </p>
//           <div style={{ marginTop: '25px' }}>
//             <h4 style={{ margin: 0, color: '#1A237E', fontSize: '24px' }}>James Rodrigo</h4>
//             <p style={{ margin: 0, fontSize: '14px', color: '#666', fontWeight: 'bold' }}>CUSTOMER</p>
//           </div>
//           {/* Dots */}
//           <div style={{ display: 'flex', gap: '10px', marginTop: '30px' }}>
//             <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#1A237E' }}></div>
//             <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#A0AEC0' }}></div>
//             <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#A0AEC0' }}></div>
//           </div>
//         </div>
//       </div>

//       {/* 2. ABOUT US SECTION (Card Style) */}
//       <div className="about-us-container" style={{ padding: '100px 0', display: 'flex', justifyContent: 'center' }}>
//         <div style={{
//           backgroundColor: '#C6D6F6',
//           width: '85%',
//           maxWidth: '1100px',
//           padding: '70px 90px',
//           borderRadius: '45px', // Exact rounded feel
//           textAlign: 'center',
//           boxShadow: '0 20px 50px rgba(0,0,0,0.06)'
//         }}>
//           <h2 style={{ fontSize: '38px', color: '#1A237E', marginBottom: '30px' }}>About Us</h2>
//           <p style={{ fontSize: '17px', color: '#4A5568', lineHeight: '1.9', textAlign: 'justify' }}>
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//           </p>
//         </div>
//       </div>

//     </section>
//   );
// }

// export default TestimonialsAbout;












import React, { useState } from 'react';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

function TestimonialsAbout() {
  // 1. State to track the active review (0, 1, or 2)
  const [activeSlide, setActiveSlide] = useState(0);

  // 2. Data array for the 3 reviews
  const reviewData = [
    {
      name: "James Rodrigo",
      role: "CUSTOMER",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. The more content you provide about you, Lorem, Quos saepe suscipit, nemo dolore sapiente!",
     
    },
    {
      name: "Sarah Jenkins",
      role: "PATIENT",
      text: "The medical healthcare team here is absolutely phenomenal. They provided great support throughout my recovery process. Truly life-changing care!",
     
    },
    {
      name: "Michael Chen",
      role: "PARTNER",
      text: "Professionalism and expertise are at the heart of this organization. It has been a pleasure collaborating on healthcare initiatives for the community.",
    
    }
  ];

  const current = reviewData[activeSlide];

  return (
    <section className="testimonials-about-wrapper" style={{ width: '100%', backgroundColor: 'white' }}>
      
      {/* 1. TESTIMONIALS SECTION */}
      <div className="testimonials-section" style={{
        backgroundColor: '#C6D6F6', 
        padding: '100px 10%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        minHeight: '480px',
        overflow: 'hidden'
      }}>
        
        {/* DECORATIVE BACKGROUND CIRCLES */}
        <div style={{ position: 'absolute', right: '10%', top: '-10%', width: '350px', height: '350px', borderRadius: '50%', backgroundColor: "#E6F7FA", zIndex: 1 }}></div>
        <div style={{ position: 'absolute', right: '2%', bottom: '-20%', width: '400px', height: '400px', borderRadius: '50%', backgroundColor: '#C3E0F7', zIndex: 1 }}></div>
        <div style={{ position: 'absolute', right: '3%', top: '7%', width: '300px', height: '300px', borderRadius: '50%', backgroundColor: '#D6E9FF', zIndex: 1 }}></div>

        {/* FLOATING IMAGE CIRCLES (Left Side) */}
        <div className="image-container" style={{ position: 'relative', width: '40%', height: '350px', zIndex: 2 }}>
          {/* Top Left */}
          <img src= "https://images.unsplash.com/photo-1609737944640-6811139abe01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW4lMjBpbiUyMHdoaXRlJTIwd2ludGVyJTIwY29hdCUyMGFuZCUyMGJlYW5pZSUyMHNtaWxpbmd8ZW58MHx8MHx8fDA%3D" alt="user" style={{ width: '75px', height: '75px', borderRadius: '50%', border: '4px solid white', position: 'absolute', top: '0', left: '50%' }} />
          {/* Far Left */}
          <img src="https://images.unsplash.com/photo-1624245532111-8f4aba352ba9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWlkZGxlJTIwYWdlZCUyMG1hbiUyMHdpdGglMjBnbGFzc2VzJTIwYW5kJTIwc3VpdCUyMGxhdWdoaW5nfGVufDB8fDB8fHww" alt="user" style={{ width: '95px', height: '95px', borderRadius: '50%', border: '4px solid white', position: 'absolute', top: '19%', left: '10%' }} />
          {/* Center Main */}
          <img src="https://media.istockphoto.com/id/2067085905/photo/parent-and-daughter.webp?a=1&b=1&s=612x612&w=0&k=20&c=DBEeSmWO0jCPlPk8d9CWAbfOPB_Pbx0xnTjqLPfRz9Q=" alt="user" style={{ width: '125px', height: '125px', borderRadius: '50%', border: '4px solid white', position: 'absolute', top: '30%', left: '35%', zIndex: 3 }} />
          {/* Bottom Left */}
          <img src="https://plus.unsplash.com/premium_photo-1723514489790-18b9a81cbf09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8eW91bmclMjBtYW4lMjBoZWFkc2hvdCUyMHN0dWRpbyUyMGxpZ2h0aW5nfGVufDB8fDB8fHww" alt="user" style={{ width: '85px', height: '85px', borderRadius: '50%', border: '4px solid white', position: 'absolute', bottom: '5%', left: '19%' }} />
          {/* Bottom Right */}
          <img src="https://media.istockphoto.com/id/531493419/photo/happy-family-sitting-on-floor-with-their-baby.webp?a=1&b=1&s=612x612&w=0&k=20&c=HjbpvzOU3B2rqDHUj7XNXlQpmPkcu_cDER5Escr6HDY=" alt="user" style={{ width: '90px', height: '90px', borderRadius: '50%', border: '4px solid white', position: 'absolute', bottom: '3%', left: '55%' }} />
        </div>

        {/* TESTIMONIAL CONTENT (Right Side) */}
        <div className="quote-content" style={{ width: '55%', zIndex: 3, paddingLeft: '50px' }}>
          <FormatQuoteIcon style={{ fontSize: '70px', color: '#1A237E', opacity: '0.2', marginBottom: '-20px' }} />
          <p style={{ fontSize: '20px', color: '#333', lineHeight: '1.6', fontStyle: 'italic', margin: '0', minHeight: '100px' }}>
            "{current.text}"
          </p>
          <div style={{ marginTop: '25px' }}>
            <h4 style={{ margin: 0, color: '#1A237E', fontSize: '24px' }}>{current.name}</h4>
            <p style={{ margin: 0, fontSize: '14px', color: '#666', fontWeight: 'bold' }}>{current.role}</p>
          </div>

          {/* Functional Navigation Dots */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '30px' }}>
            {[0, 1, 2].map((idx) => (
              <div 
                key={idx}
                onClick={() => setActiveSlide(idx)}
                style={{ 
                  width: '12px', 
                  height: '12px', 
                  borderRadius: '50%', 
                  backgroundColor: activeSlide === idx ? '#1A237E' : '#A0AEC0',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. ABOUT US SECTION */}
      <div className="about-us-container" style={{ padding: '100px 0', display: 'flex', justifyContent: 'center' }}>
        <div style={{
          backgroundColor: '#C6D6F6',
          width: '85%',
          maxWidth: '1100px',
          padding: '70px 90px',
          borderRadius: '45px',
          textAlign: 'center',
          boxShadow: '0 20px 50px rgba(0,0,0,0.06)'
        }}>
          <h2 style={{ fontSize: '38px', color: '#1A237E', marginBottom: '30px' }}>About Us</h2>
          <p style={{ fontSize: '17px', color: '#4A5568', lineHeight: '1.9', textAlign: 'justify' }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s... (your full text)
          </p>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsAbout;