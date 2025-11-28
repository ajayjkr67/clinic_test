document.addEventListener("DOMContentLoaded", () => {
  // ---------------------- Navbar ----------------------
  // let lastY = 0;
  // const nav = document.querySelector("nav");
  // const showUntil = 800; // px before hiding starts

  // window.addEventListener("scroll", () => {
  //   const y = window.scrollY;

  //   if (y < showUntil) {
  //     nav.classList.remove("nav-hide");
  //     lastY = y;
  //     return;
  //   }

  //   if (y > lastY) nav.classList.add("nav-hide");
  //   else nav.classList.remove("nav-hide");

  //   lastY = y;
  // });

  // ---------------------- Hero Section ----------------------
  const toggle = document.getElementById("toggle");
  const slider = document.getElementById("slider");
  let active = false;
  toggle?.addEventListener("click", () => {
    active = !active;
    slider.style.transform = active ? "translateX(100%)" : "translateX(0)";
  });

  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobile-nav");
  hamburger?.addEventListener("click", () => {
    if (mobileNav.style.maxHeight && mobileNav.style.maxHeight !== "0px") {
      mobileNav.style.maxHeight = "0";
      mobileNav.style.paddingTop = "0";
      mobileNav.style.paddingBottom = "0";
    } else {
      mobileNav.style.maxHeight = mobileNav.scrollHeight + "px";
    }
  });

  let current = 0;
  const slides = document.querySelectorAll(".slide");
  function animateSlide(slide) {
    slide.querySelectorAll(".content-1, .content-2, .content-3, .content-4")
      .forEach(el => {
        el.style.animation = "none";
        void el.offsetWidth;
        el.style.animation = "";
      });
  }
  function showSlide(i) {
    slides.forEach((s, x) => {
      s.classList.toggle("active", x === i);
      if (x === i) animateSlide(s);
    });
  }
  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 7000);

  // ---------------------- About Section ----------------------
  const features = [
    "Comprehensive Eye Exams",
    "Experienced Eye Care Professionals",
    "Advanced Diagnostic Technology",
    "Wide Selection of Eyewear"
  ];
  const listContainer = document.getElementById("featuresList");
  if(listContainer){
    listContainer.innerHTML = features.map(f => `<li class="relative pl-6 before:content-['✓'] before:absolute before:-left-1 before:-top-1 before:text-3xl before:text-blue-500">${f}</li>`).join("");
  }

  // ---------------------- Line Section (Marquee) ----------------------
  const items = ["DIAGNOSTICS","TREATMENT","WELLNESS","LABORATORY","THERAPIES","SPECIALITIES","CONSULTATION"];
  const marquee = document.getElementById("marquee");
  if(marquee){
    const createItem = label => `
      <span class="flex items-center space-x-2">
        <svg class="me-6 rotate-icon text-gray-400" xmlns="http://www.w3.org/2000/svg" width="42" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="2" x2="12" y2="22"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
          <line x1="4.93" y1="19.07" x2="19.07" y2="4.93"/>
        </svg>
        <span>${label}</span>
      </span>
    `;
    marquee.innerHTML = [...items, ...items].map(createItem).join("");
  }

  // ---------------------- Service Section ----------------------
  const cards = [
    { title:"Health Checkup", desc:"Regular eye exams using advanced diagnostic tools to ensure clear and healthy vision.", img:"https://mednix.themeht.com/wp-content/uploads/2025/10/eyecare10-600x500.jpg", icon:"fa-regular fa-calendar-minus" },
    { title:"Retina Evaluation", desc:"Early detection and treatment for retinal conditions to preserve sight and eye health.", img:"https://mednix.themeht.com/wp-content/uploads/2025/10/eyecare4-600x500.jpg", icon:"fa-regular fa-eye" },
    { title:"Contact Lens Fitting", desc:"Personalized lens selection and fitting for clear vision all day.", img:"https://mednix.themeht.com/wp-content/uploads/2025/10/eyecare7-600x500.jpg", icon:"fa-regular fa-circle" },
    { title:"Vision Therapy", desc:"Customized programs to strengthen eye coordination and improve visual performance.", img:"https://mednix.themeht.com/wp-content/uploads/2025/10/eyecare9-600x500.jpg", icon:"fa-regular fa-lightbulb" },
    { title:"Optical Solutions", desc:"Wide range of eyewear options for style, comfort, and precision vision.", img:"https://mednix.themeht.com/wp-content/uploads/2025/10/eyecare8-600x500.jpg", icon:"fa-regular fa-glasses" },
  ];
  const container = document.getElementById("cardContainer");
  if(container){
    container.innerHTML = cards.map(c => `
      <div class="swiper-slide bg-white rounded-3xl overflow-hidden relative cursor-pointer">
        <div class="relative group">
          <div class="overflow-hidden">
            <img src="${c.img}" class="w-full transition-transform duration-500 group-hover:scale-110" alt="${c.title}"/>
          </div>
          <div class="absolute top-64 md:top-56 2xl:top-80 left-5 z-20 bg-blue-600 px-5 py-4 rounded-2xl shadow-md transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <i class="${c.icon} text-3xl text-white"></i>
          </div>
        </div>
        <div class="relative px-6 py-8 pt-16 text-left">
          <h3 class="text-3xl font-light mb-2">${c.title}</h3>
          <p class="text-gray-600 mb-3 leading-relaxed py-2">${c.desc}</p>
          <a href="#" class="text-black group/link inline-flex items-center gap-2 transition-all duration-300 hover:text-blue-600">
            Explore Service
            <span class="transition-transform duration-300 group-hover/link:translate-x-2"><i class="fa-solid fa-arrow-right-long"></i></span>
          </a>
        </div>
      </div>
    `).join("");
  }

  new Swiper(".swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    speed: 1200,
    autoplay: { delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true },
    pagination: { el: ".swiper-pagination", clickable: true },
    breakpoints: { 0:{ slidesPerView:1 }, 640:{ slidesPerView:2 }, 1024:{ slidesPerView:4 } }
  });

  // ---------------------- Team Section ----------------------
  const teamMembersData = Array.from(document.querySelectorAll('.team-member')).map(member => ({
    name: member.dataset.name,
    role: member.dataset.role,
    img: member.dataset.img,
    el: member
  }));

  teamMembersData.forEach(({name, role, img, el}) => {
    el.innerHTML = `
      <div class="relative group cursor-pointer">
        <div class="overflow-hidden rounded-3xl">
          <img src="${img}" class="w-full group-hover:scale-110 transition-transform duration-500" alt="">
        </div>
        <div class="absolute p-3 pb-0 rounded-t-full bg-gray-50 bottom-20 right-12">
          <div class="w-11 h-11 rounded-full bg-blue-950 flex items-center justify-center hover:bg-blue-700 transition cursor-pointer group-hover:bg-blue-600">
            <svg class="text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="6" cy="12" r="2"/>
              <circle cx="18" cy="6" r="2"/>
              <circle cx="18" cy="18" r="2"/>
              <line x1="7.5" y1="12" x2="16" y2="7"/>
              <line x1="7.5" y1="12" x2="16" y2="17"/>
            </svg>
          </div>
        </div>
        <div class="absolute opacity-0 translate-y-4 bottom-40 right-14 inline-flex flex-col items-center bg-blue-600 rounded-full px-2 py-2 space-y-2 group-hover:opacity-100 transition duration-500 ease-in-out group-hover:translate-y-0">
          <div class="w-9 h-9 bg-white rounded-full flex items-center justify-center text-black hover:text-blue-600 transition cursor-pointer">
            <i class="fa-brands fa-facebook-f"></i>
          </div>
          <div class="w-9 h-9 bg-white rounded-full flex items-center justify-center text-black hover:text-blue-600 transition cursor-pointer">
            <i class="fa-brands fa-twitter"></i>
          </div>
          <div class="w-9 h-9 bg-white rounded-full flex items-center justify-center text-black hover:text-blue-600 transition cursor-pointer">
            <i class="fa-brands fa-whatsapp"></i>
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-light mt-4 mb-1 hover:text-blue-600 transition cursor-pointer">${name}</h3>
          <p class="text-lg font-light text-gray-700">${role}</p>
        </div>
      </div>
    `;
  });

    // ---------------------- Testimonials Section ----------------------
  const reviews = [
    {n:"Neha P.", img:11, r:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla.", stars:"★★★★★"},
    {n:"Rakesh G.", img:12, r:"Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien faucibus.", stars:"★★★★☆"},
    {n:"Anjali V.", img:13, r:"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.", stars:"★★★★★"},
    {n:"Farhan A.", img:14, r:"Consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim.", stars:"★★★★☆"},
    {n:"Drishti R.", img:15, r:"Gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc.", stars:"★★★★★"},
    {n:"Kunal S.", img:16, r:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam, quis nostrud exercitation.", stars:"★★★★☆"},
    {n:"Priya T.", img:17, r:"Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet.", stars:"★★★★★"},
    {n:"Sagar D.", img:18, r:"Amet porttitor eget dolor morbi non arcu risus quis varius quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse.", stars:"★★★★★"}
  ];

  function card(p) {
    return `
      <article class="flex-shrink-0 w-[8%] md:w-full max-w-[400px] bg-white cursor-pointer rounded-2xl px-4 py-2 md:py-5 shadow-lg shadow-gray-300/50 border-b-2 border-transparent group hover:border-blue-600 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
        <div class='flex items-center gap-3 py-3'>
          <img src='https://i.pravatar.cc/80?img=${p.img}' class='w-14 h-14 md:w-20 md:h-20 rounded-full'>
          <div class='text-lg md:text-2xl text-blue-950 group-hover:text-blue-600'>${p.n}</div>
        </div>
        <p class='mt-3 py-2 md:text-lg font-light text-gray-500'>“${p.r}”</p>
        <div class='mt-3 py-2 text-2xl text-yellow-500'>${p.stars}</div>
      </article>
    `;
  }

  function loadRow(el, items) {
    const dup = [...items];
    el.innerHTML = items.map(card).join('') + dup.map(card).join('');
  }

  // Insert rows into your HTML
  const row1 = document.getElementById('row1');
  const row2 = document.getElementById('row2');
  if(row1 && row2){
    loadRow(row1, reviews.slice(0,4));
    loadRow(row2, reviews.slice(4,8));

    function addHoverPause(rowId) {
      const row = document.getElementById(rowId);
      row.querySelectorAll('article').forEach(card => {
        card.addEventListener('mouseenter', () => row.style.animationPlayState = 'paused');
        card.addEventListener('mouseleave', () => row.style.animationPlayState = '');
      });
    }

    addHoverPause('row1');
    addHoverPause('row2');
  }


    // ---------------------- Contact Form & WhatsApp ----------------------
  const form = document.getElementById('contactForm');
  const whatsappBtn = document.getElementById('whatsappBtn');
  const clinicPhone = "8976747475";

  form?.addEventListener('submit', async e => {
    e.preventDefault();
    const data = ['first_name','last_name','email','user_phone','message'].reduce((acc,id) => {
      acc[id] = document.getElementById(id).value.trim();
      return acc;
    }, {});
    if (!data.first_name || !data.email || !data.message) return alert("Please fill all required fields.");
    try {
      const res = await fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error('Network error');
      alert('Message sent!');
      form.reset();
    } catch (err) {
      alert('Oops, something went wrong.');
      console.error(err);
    }
  });

  whatsappBtn?.addEventListener('click', () => {
    const [first, last, email, phone, message] = ['first_name','last_name','email','user_phone','message']
      .map(id => document.getElementById(id).value.trim());
    const fields = [(first || last) && `Name: ${first} ${last}`, email && `Email: ${email}`, phone && `Phone: +91 ${phone}`].filter(Boolean);
    const text = fields.length ? [...fields, `%0AMessage:%0A${message}`].join("%0A") : message;
    window.open(`https://wa.me/${clinicPhone}?text=${text}`, "whatsappWindow");
  });


  
});
