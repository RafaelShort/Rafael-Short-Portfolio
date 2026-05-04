const CV_PATH     = 'assets/Rafael_Short_CV.pdf';
const CV_FILENAME = 'Rafael_Short_CV.pdf';

const phrases = [
    'AI Developer @ Ford',
    'M.Sc. em Deep Learning',
    'Engenheiro Eletricista',
    'Mobile Developer',
    'Pesquisador em IA'
];

function toggleMenu() {
    document.getElementById('navbar').classList.toggle('active');
}

document.querySelectorAll('#menu li a').forEach(function(link) {
    link.addEventListener('click', function() {
        document.getElementById('navbar').classList.remove('active');
    });
});

window.addEventListener('scroll', function() {
    const btn = document.getElementById('scrollTopBtn');
    btn.classList.toggle('show', window.scrollY > 400);
    highlightNav();
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function highlightNav() {
    const sections = document.querySelectorAll('section[id]');
    const links    = document.querySelectorAll('#menu li a');
    const pos      = window.scrollY + 80;
    sections.forEach(function(section) {
        if (pos >= section.offsetTop && pos < section.offsetTop + section.offsetHeight) {
            links.forEach(function(link) {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + section.id) {
                    link.classList.add('active');
                }
            });
        }
    });
}

let pIdx = 0, cIdx = 0, deleting = false;
let typingTimer = null;
const typedEl = document.getElementById('typed-text');

function typeLoop() {
    const phrase = phrases[pIdx];
    if (deleting) {
        typedEl.textContent = phrase.slice(0, cIdx - 1);
        cIdx--;
    } else {
        typedEl.textContent = phrase.slice(0, cIdx + 1);
        cIdx++;
    }
    let delay = deleting ? 45 : 95;
    if (!deleting && cIdx === phrase.length) {
        delay    = 2200;
        deleting = true;
    } else if (deleting && cIdx === 0) {
        deleting = false;
        pIdx     = (pIdx + 1) % phrases.length;
        delay    = 350;
    }
    typingTimer = setTimeout(typeLoop, delay);
}

const filterBtns   = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.pcard');

filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        filterBtns.forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        let visibleIndex = 0;
        projectCards.forEach(function(card) {
            const cats = (card.dataset.category || '').split(' ');
            const show = filter === 'all' || cats.includes(filter);
            if (show) {
                card.classList.remove('hidden');
                card.style.animationDelay = (visibleIndex * 0.06) + 's';
                card.style.animation      = 'none';
                void card.offsetWidth;
                card.style.animation = 'cardAppear 0.4s ease both';
                visibleIndex++;
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

const revealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(function() {
                entry.target.classList.add('visible');
            }, delay);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.tl-item').forEach(function(el, i) {
    el.dataset.delay = i * 80;
    revealObserver.observe(el);
});

document.querySelectorAll('.pcard, .award-card, .contato-card').forEach(function(el, i) {
    el.dataset.delay = i * 60;
    revealObserver.observe(el);
});

const skillsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.bar-fill').forEach(function(bar) {
                bar.style.width = bar.style.getPropertyValue('--w') ||
                    getComputedStyle(bar).getPropertyValue('--w').trim();
            });
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const skillsSection = document.getElementById('skills');
if (skillsSection) skillsObserver.observe(skillsSection);

const animStyle = document.createElement('style');
animStyle.textContent = '@keyframes cardAppear { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }';
document.head.appendChild(animStyle);

function downloadCV(event) {
    if (event) event.preventDefault();
    const link = document.createElement('a');
    link.href     = CV_PATH;
    link.download = CV_FILENAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(typeLoop, 700);

    document.querySelectorAll('.cv-download').forEach(function(el) {
        el.addEventListener('click', downloadCV);
    });
});
