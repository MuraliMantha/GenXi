// import React, { useState, useEffect, useRef } from 'react';
// import './Services.css';
// import { gsap } from 'gsap';

// const data = [
//     {
//       place: 'Switzerland Alps',
//       title: 'SAINT',
//       title2: 'ANTONIEN',
//       description:
//         "Tucked away in the Switzerland Alps, Saint Antönien offers an idyllic retreat for those seeking tranquility and adventure alike. It's a hidden gem for backcountry skiing in winter and boasts lush trails for hiking and mountain biking during the warmer months.",
//       image: 'https://assets.codepen.io/3685267/timed-cards-1.jpg',
//     },
//     {
//       place: 'Japan Alps',
//       title: 'NAGANO',
//       title2: 'PREFECTURE',
//       description:
//         "Nagano Prefecture, set within the majestic Japan Alps, is a cultural treasure trove with its historic shrines and temples, particularly the famous Zenkō-ji. The region is also a hotspot for skiing and snowboarding, offering some of the country's best powder.",
//       image: 'https://assets.codepen.io/3685267/timed-cards-2.jpg',
//     },
//     {
//       place: 'Sahara Desert - Morocco',
//       title: 'MARRAKECH',
//       title2: 'MERZOUGA',
//       description:
//         "The journey from the vibrant souks and palaces of Marrakech to the tranquil, starlit sands of Merzouga showcases the diverse splendor of Morocco. Camel treks and desert camps offer an unforgettable immersion into the nomadic way of life.",
//       image: 'https://assets.codepen.io/3685267/timed-cards-3.jpg',
//     },
//     {
//       place: 'Sierra Nevada - USA',
//       title: 'YOSEMITE',
//       title2: 'NATIONAL PARK',
//       description:
//         "Yosemite National Park is a showcase of the American wilderness, revered for its towering granite monoliths, ancient giant sequoias, and thundering waterfalls. The park offers year-round recreational activities, from rock climbing to serene valley walks.",
//       image: 'https://assets.codepen.io/3685267/timed-cards-4.jpg',
//     },
//     {
//       place: 'Tarifa - Spain',
//       title: 'LOS LANCES',
//       title2: 'BEACH',
//       description:
//         "Los Lances Beach in Tarifa is a coastal paradise known for its consistent winds, making it a world-renowned spot for kitesurfing and windsurfing. The beach's long, sandy shores provide ample space for relaxation and sunbathing, with a vibrant atmosphere of beach bars and cafes.",
//       image: 'https://assets.codepen.io/3685267/timed-cards-5.jpg',
//     },
//     {
//       place: 'Cappadocia - Turkey',
//       title: 'GÖREME',
//       title2: 'VALLEY',
//       description:
//         "Göreme Valley in Cappadocia is a historical marvel set against a unique geological backdrop, where centuries of wind and water have sculpted the landscape into whimsical formations. The valley is also famous for its open-air museums, underground cities, and the enchanting experience of hot air ballooning.",
//       image: 'https://assets.codepen.io/3685267/timed-cards-6.jpg',
//     },
//   ];

// function ServicesCarousel() {
//     const [order, setOrder] = useState([0, 1, 2, 3, 4, 5]);
//     const [detailsEven, setDetailsEven] = useState(true);
//     const cardRefs = useRef([]);
//     const cardContentRefs = useRef([]);
//     const slideNumberRefs = useRef([]);
//     const detailsEvenRef = useRef(null);
//     const detailsOddRef = useRef(null);
//     const navRef = useRef(null);
//     const paginationRef = useRef(null);
//     const coverRef = useRef(null);
//     const progressSubForegroundRef = useRef(null);
//     const indicatorRef = useRef(null);
//     const [clicks, setClicks] = useState(0);
  
//     // State to track which card is active
//     const [activeCard, setActiveCard] = useState(null);
  
//     useEffect(() => {
//       const width = window.innerWidth;
//       const height = window.innerHeight;
  
//       const offsetTop = height - 430;
//       const offsetLeft = width - 830;
//       const cardWidth = 200;
//       const cardHeight = 300;
//       const gap = 40;
//       const numberSize = 50;
//       const ease = 'sine.inOut';
  
//       const active = order[0];
//       const rest = order.slice(1);
  
//       const detailsActiveRef = detailsEven ? detailsEvenRef : detailsOddRef;
//       const detailsInactiveRef = detailsEven ? detailsOddRef : detailsEvenRef;
  
//       gsap.set(paginationRef.current, {
//         top: offsetTop + 330,
//         left: offsetLeft,
//         y: 200,
//         opacity: 0,
//         zIndex: 60,
//       });
//       gsap.set(navRef.current, { y: -200, opacity: 0 });
  
//       gsap.set(cardRefs.current[active], {
//         x: 0,
//         y: 0,
//         width: width,
//         height: height,
//       });
//       gsap.set(cardContentRefs.current[active], { x: 0, y: 0, opacity: 0 });
//       gsap.set(detailsActiveRef.current, { opacity: 0, zIndex: 22, x: -200 });
//       gsap.set(detailsInactiveRef.current, { opacity: 0, zIndex: 12 });
  
//       gsap.set('.indicator', { x: -width });
  
//       const startDelay = 0.6;
  
//       gsap.to(coverRef.current, {
//         x: width + 400,
//         delay: 0.5,
//         ease,
//         onComplete: () => {
//           setTimeout(() => {
//             loop();
//           }, 500);
//         },
//       });
  
//       rest.forEach((i, index) => {
//         gsap.set(cardRefs.current[i], {
//           x: offsetLeft + 400 + index * (cardWidth + gap),
//           y: offsetTop,
//           width: cardWidth,
//           height: cardHeight,
//           zIndex: 30,
//           borderRadius: 10,
//         });
//         gsap.set(cardContentRefs.current[i], {
//           x: offsetLeft + 400 + index * (cardWidth + gap),
//           zIndex: 40,
//           y: offsetTop + cardHeight - 100,
//         });
//         gsap.set(slideNumberRefs.current[i], { x: (index + 1) * numberSize });
//       });
  
//       gsap.to(paginationRef.current, { y: 0, opacity: 1, ease, delay: startDelay });
//       gsap.to(navRef.current, { y: 0, opacity: 1, ease, delay: startDelay });
//       gsap.to(detailsActiveRef.current, { opacity: 1, x: 0, ease, delay: startDelay });
  
//       function loop() {
//         gsap
//           .to('.indicator', { x: 0, duration: 2 })
//           .then(() => gsap.to('.indicator', { x: width, duration: 0.8, delay: 0.3 }))
//           .then(() => {
//             gsap.set('.indicator', { x: -width });
//             step();
//           })
//           .then(() => loop());
//       }
  
//       function step() {
//         setOrder((prevOrder) => {
//           const newOrder = [...prevOrder];
//           newOrder.push(newOrder.shift());
//           return newOrder;
//         });
//         setDetailsEven((prev) => !prev);
  
//         if (clicks > 0) {
//           setClicks((prev) => prev - 1);
//           step();
//         }
//       }
  
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);
  
//     const handleCardClick = (index) => {
//       setActiveCard(index); // Set the active card when clicked
//       const width = window.innerWidth;
//       const height = window.innerHeight;
  
//       gsap.to(cardRefs.current[index], {
//         x: 0,
//         y: 0,
//         width: width,
//         height: height,
//         zIndex: 100,
//         ease: 'sine.inOut',
//       });
//       gsap.to(cardContentRefs.current[index], {
//         opacity: 1,
//         ease: 'sine.inOut',
//       });
//     };
  
//     return (
//       <div className="services-carousel">
//         <div className="indicator" ref={indicatorRef}></div>
        
//         <div id="carousel">
//           {data.map((item, index) => (
//             <div
//               className={`services-carousel-card ${activeCard === index ? 'active' : ''}`}  // Apply "active" class when clicked
//               key={`card${index}`}
//               ref={(el) => (cardRefs.current[index] = el)}
//               style={{ backgroundImage: `url(${item.image})` }}
//               onClick={() => handleCardClick(index)}
//             ></div>
//           ))}
//           {data.map((item, index) => (
//             <div
//               className="services-carousel-card-content"
//               key={`card-content-${index}`}
//               ref={(el) => (cardContentRefs.current[index] = el)}
//             >
//               <div className="content-start"></div>
//               <div className="content-place">{item.place}</div>
//               <div className="content-title-1">{item.title}</div>
//               <div className="content-title-2">{item.title2}</div>
//             </div>
//           ))}
//         </div>
//         <div className="details" id="details-even" ref={detailsEvenRef}>
//           {/* Details content for even */}
//         </div>
//         <div className="details" id="details-odd" ref={detailsOddRef}>
//           {/* Details content for odd */}
//         </div>
//         <div className="pagination" id="pagination" ref={paginationRef}>
//           <div className="arrow arrow-left">
//             {/* SVG content */}
//           </div>
//           <div className="arrow arrow-right">
//             {/* SVG content */}
//           </div>
//           <div className="progress-sub-container">
//             <div className="progress-sub-background">
//               <div className="progress-sub-foreground" ref={progressSubForegroundRef}></div>
//             </div>
//           </div>
//           <div className="slide-numbers" id="slide-numbers">
//             {data.map((_, index) => (
//               <div
//                 className="item"
//                 key={`slide-item-${index}`}
//                 ref={(el) => (slideNumberRefs.current[index] = el)}
//               >
//                 {index + 1}
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="cover" ref={coverRef}></div>
//       </div>
//     );
// }
  

// export default ServicesCarousel;
