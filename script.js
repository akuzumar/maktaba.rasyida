/**
 * MAKTABAH RASYIDA - PERPUSTAKAAN DIGITAL FUTURISTIK
 * JavaScript Modern dengan Logika Pintar
 * Senior Full-Stack Web Developer & UI/UX Designer
 */

// Data Dummy untuk Website
const bookData = {
    trending: [
        {
            id: 1,
            title: "Revolusi Digital dalam Pendidikan",
            author: "Dr. Ahmad Rasyid",
            category: "Artikel Teknologi",
            description: "Transformasi pendidikan di era digital dengan pendekatan inovatif dan solusi teknologi terkini.",
            image: "trending1.png",
            rating: 4.8,
            downloads: 12500,
            year: 2023,
            trendingScore: 95
        },
        {
            id: 2,
            title: "Perjalanan Spiritual di Tanah Suci",
            author: "Siti Khadijah",
            category: "Novel Islami",
            description: "Kisah perjalanan spiritual seorang wanita dalam menemukan makna hidup sejati melalui ibadah haji.",
            image: "https://images.unsplash.com/photo-1544716278-e513176f20b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            rating: 4.9,
            downloads: 8900,
            year: 2022,
            trendingScore: 92
        },
        {
            id: 3,
            title: "Analisis Big Data untuk Bisnis",
            author: "Prof. Bambang Wijaya",
            category: "Skripsi Teknik",
            description: "Implementasi analisis big data dalam pengambilan keputusan strategis perusahaan modern.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            rating: 4.7,
            downloads: 15600,
            year: 2023,
            trendingScore: 88
        },
        {
            id: 4,
            title: "Legenda Rakyat Nusantara",
            author: "Tim Peneliti Budaya",
            category: "Cerita Rakyat",
            description: "Kumpulan cerita rakyat dari berbagai daerah di Indonesia dengan nilai moral dan budaya.",
            image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            rating: 4.6,
            downloads: 7200,
            year: 2021,
            trendingScore: 85
        },
        {
            id: 5,
            title: "Kesehatan Mental di Era Digital",
            author: "Dr. Maya Sari",
            category: "Artikel Kesehatan",
            description: "Pengaruh teknologi digital terhadap kesehatan mental dan strategi penanganannya.",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            rating: 4.8,
            downloads: 10300,
            year: 2023,
            trendingScore: 90
        }
    ],
    
    recommendations: [
        {
            id: 6,
            title: "Sustainable Development Goals",
            author: "Tim Peneliti PBB",
            category: "Jurnal Internasional",
            description: "Analisis komprehensif tentang implementasi SDGs di negara berkembang.",
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            rating: 4.9,
            downloads: 5600,
            pages: 120
        },
        {
            id: 7,
            title: "Machine Learning Fundamentals",
            author: "Dr. Robert Chen",
            category: "Buku Teknik",
            description: "Pengantar machine learning untuk pemula dengan studi kasus praktis.",
            image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            rating: 4.7,
            downloads: 8900,
            pages: 250
        },
        {
            id: 8,
            title: "Sejarah Peradaban Islam",
            author: "Prof. Abdul Hamid",
            category: "Buku Sejarah",
            description: "Perkembangan peradaban Islam dari masa ke masa dengan analisis mendalam.",
            image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            rating: 4.8,
            downloads: 6700,
            pages: 320
        },
        {
            id: 9,
            title: "Kisah Nabi Muhammad SAW",
            author: "Ustadz Ahmad Syafii",
            category: "Koleksi Islami",
            description: "Biografi lengkap Nabi Muhammad SAW dengan pendekatan sastra yang menarik.",
            image: "kisah-nabi.jpeg",
            rating: 4.9,
            downloads: 12400,
            pages: 180
        }
    ],
    
    searchData: [
        { id: 1, title: "Revolusi Digital dalam Pendidikan", category: "Artikel", author: "Dr. Ahmad Rasyid", type: "artikel" },
        { id: 2, title: "Perjalanan Spiritual di Tanah Suci", category: "Novel", author: "Siti Khadijah", type: "novel" },
        { id: 3, title: "Analisis Big Data untuk Bisnis", category: "Skripsi", author: "Prof. Bambang Wijaya", type: "skripsi" },
        { id: 4, title: "Legenda Rakyat Nusantara", category: "Cerita Rakyat", author: "Tim Peneliti Budaya", type: "cerita" },
        { id: 5, title: "Kesehatan Mental di Era Digital", category: "Artikel", author: "Dr. Maya Sari", type: "artikel" },
        { id: 10, title: "Pendidikan Karakter Anak Usia Dini", category: "Artikel", author: "Dr. Siti Aisyah", type: "artikel" },
        { id: 11, title: "Kisah Cinta di Andalusia", category: "Novel", author: "Fatimah Az Zahra", type: "novel" },
        { id: 12, title: "Teknologi Blockchain", category: "Tesis", author: "Ir. Budi Santoso", type: "tesis" },
        { id: 13, title: "Filsafat Pendidikan Islam", category: "Disertasi", author: "Prof. Dr. H. Muhammad", type: "disertasi" },
        { id: 14, title: "Cerita Rakyat Jawa", category: "Cerita Rakyat", author: "Ki Ageng Suryo", type: "cerita" }
    ]
};

// State Management
const appState = {
    lastVisitedPage: localStorage.getItem('lastVisitedPage') || 'home',
    isAdShown: localStorage.getItem('isAdShown') === 'true',
    darkMode: true,
    searchQuery: '',
    currentCarouselIndex: 0,
    isWhatsappPopupOpen: false
};

// DOM Elements
const DOM = {
    // Popups
    adPopup: document.getElementById('adPopup'),
    closeAdBtn: document.getElementById('closeAdBtn'),
    
    // Spotlight Search
    spotlightBtn: document.getElementById('spotlightBtn'),
    spotlightOverlay: document.getElementById('spotlightOverlay'),
    spotlightInput: document.getElementById('spotlightInput'),
    closeSpotlight: document.getElementById('closeSpotlight'),
    searchResults: document.getElementById('searchResults'),
    searchSuggestions: document.getElementById('searchSuggestions'),
    
    // WhatsApp
    whatsappFloat: document.getElementById('whatsappFloat'),
    whatsappPopup: document.getElementById('whatsappPopup'),
    closeWhatsapp: document.getElementById('closeWhatsapp'),
    
    // Navbar
    navbar: document.getElementById('navbar'),
    homeLogo: document.getElementById('homeLogo'),
    
    // Loading
    loadingScreen: document.getElementById('loadingScreen'),
    
    // Carousel
    trendingCarousel: document.getElementById('trendingCarousel'),
    carouselPrev: document.getElementById('carouselPrev'),
    carouselNext: document.getElementById('carouselNext'),
    
    // Statistics
    totalBooks: document.getElementById('totalBooks'),
    totalUsers: document.getElementById('totalUsers'),
    totalDownloads: document.getElementById('totalDownloads'),
    
    // Recommendations
    recommendationsGrid: document.querySelector('.recommendations-grid')
};

// Inisialisasi Aplikasi
class MaktabahApp {
    constructor() {
        this.init();
    }
    
    init() {
        // Inisialisasi semua modul
        this.initEventListeners();
        this.initCustomCursor();
        this.initLoadingScreen();
        this.generateTrendingBooks();
        this.generateRecommendations();
        this.updateStatistics();
        this.initNavbarScroll();
        this.initCarousel();
        
        // Cek waktu untuk dark mode otomatis
        this.checkTimeForDarkMode();
        
        // Simpan state aplikasi
        this.saveAppState();
        
        console.log('Maktabah Rasyida - Aplikasi diinisialisasi dengan sukses');
    }
    
    // Event Listeners
    initEventListeners() {
        // Popup Iklan
        DOM.closeAdBtn.addEventListener('click', () => this.closeAdPopup());
        
        // Home Logo - Tampilkan iklan saat diklik
        DOM.homeLogo.addEventListener('click', (e) => {
            e.preventDefault();
            this.showAdPopup();
        });
        
        // Spotlight Search
        DOM.spotlightBtn.addEventListener('click', () => this.showSpotlight());
        DOM.closeSpotlight.addEventListener('click', () => this.hideSpotlight());
        DOM.spotlightInput.addEventListener('input', (e) => this.handleSearchInput(e));
        
        // Klik di luar spotlight untuk menutup
        DOM.spotlightOverlay.addEventListener('click', (e) => {
            if (e.target === DOM.spotlightOverlay) {
                this.hideSpotlight();
            }
        });
        
        // WhatsApp
        DOM.whatsappFloat.addEventListener('click', () => this.toggleWhatsappPopup());
        DOM.closeWhatsapp.addEventListener('click', () => this.hideWhatsappPopup());
        
        // Klik di luar WhatsApp popup untuk menutup
        document.addEventListener('click', (e) => {
            if (!DOM.whatsappPopup.contains(e.target) && !DOM.whatsappFloat.contains(e.target)) {
                this.hideWhatsappPopup();
            }
        });
        
        // Navbar Dropdown Hover
        this.initNavbarDropdowns();
        
        // Scroll untuk reveal animation
        this.initScrollReveal();
    }
    
    // Custom Cursor
    initCustomCursor() {
        const cursor = document.querySelector('.cursor');
        const cursorFollower = document.querySelector('.cursor-follower');
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            setTimeout(() => {
                cursorFollower.style.left = e.clientX + 'px';
                cursorFollower.style.top = e.clientY + 'px';
            }, 100);
        });
        
        // Ubah cursor saat hover elemen interaktif
        const interactiveElements = document.querySelectorAll('button, a, .book-card, .category-card, .action-btn');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursor.style.backgroundColor = 'var(--accent-color)';
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
                cursor.style.backgroundColor = 'var(--accent-color)';
            });
        });
    }
    
    // Loading Screen
    initLoadingScreen() {
        // Simulasi loading
        setTimeout(() => {
            DOM.loadingScreen.style.opacity = '0';
            DOM.loadingScreen.style.visibility = 'hidden';
            
            // Tampilkan popup iklan setelah loading selesai
            if (!appState.isAdShown) {
                setTimeout(() => this.showAdPopup(), 500);
            }
        }, 2000);
    }
    
    // Popup Iklan
    showAdPopup() {
        DOM.adPopup.style.display = 'flex';
        appState.isAdShown = true;
        localStorage.setItem('isAdShown', 'true');
    }
    
    closeAdPopup() {
        DOM.adPopup.style.display = 'none';
    }
    
    // Spotlight Search
    showSpotlight() {
        DOM.spotlightOverlay.classList.add('active');
        DOM.spotlightInput.focus();
    }
    
    hideSpotlight() {
        DOM.spotlightOverlay.classList.remove('active');
        DOM.spotlightInput.value = '';
        DOM.searchResults.innerHTML = '';
    }
    
    handleSearchInput(e) {
        const query = e.target.value.toLowerCase().trim();
        appState.searchQuery = query;
        
        if (query.length === 0) {
            DOM.searchResults.innerHTML = '';
            return;
        }
        
        // Filter data berdasarkan query
        const results = bookData.searchData.filter(item => 
            item.title.toLowerCase().includes(query) || 
            item.author.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query)
        );
        
        this.displaySearchResults(results, query);
    }
    
    displaySearchResults(results, query) {
        if (results.length === 0) {
            DOM.searchResults.innerHTML = `
                <div class="search-result-item">
                    <div class="search-result-title">Tidak ditemukan hasil untuk "${query}"</div>
                    <div class="search-result-category">Coba kata kunci lain</div>
                </div>
            `;
            return;
        }
        
        const resultsHTML = results.map(item => {
            // Highlight keyword dalam hasil
            const highlightedTitle = this.highlightText(item.title, query);
            const highlightedAuthor = this.highlightText(item.author, query);
            
            return `
                <div class="search-result-item" data-id="${item.id}">
                    <div class="search-result-title">${highlightedTitle}</div>
                    <div class="search-result-category">${item.category}</div>
                    <div class="search-result-author">${highlightedAuthor}</div>
                </div>
            `;
        }).join('');
        
        DOM.searchResults.innerHTML = resultsHTML;
        
        // Tambahkan event listener untuk hasil pencarian
        document.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const id = e.currentTarget.dataset.id;
                this.handleSearchResultClick(id);
            });
        });
    }
    
    highlightText(text, query) {
        if (!query) return text;
        
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<span class="highlight">$1</span>');
    }
    
    handleSearchResultClick(id) {
        console.log(`Item dengan ID ${id} diklik`);
        this.hideSpotlight();
        // Di sini bisa diarahkan ke halaman detail buku
    }
    
    // WhatsApp Popup
    toggleWhatsappPopup() {
        if (DOM.whatsappPopup.classList.contains('active')) {
            this.hideWhatsappPopup();
        } else {
            this.showWhatsappPopup();
        }
    }
    
    showWhatsappPopup() {
        DOM.whatsappPopup.classList.add('active');
        appState.isWhatsappPopupOpen = true;
    }
    
    hideWhatsappPopup() {
        DOM.whatsappPopup.classList.remove('active');
        appState.isWhatsappPopupOpen = false;
    }
    
    // Generate Trending Books
    generateTrendingBooks() {
        const books = bookData.trending;
        
        const booksHTML = books.map(book => `
            <div class="book-card" data-id="${book.id}">
                <img src="${book.image}" alt="${book.title}" class="book-image">
                <div class="book-content">
                    <div class="book-header">
                        <h3 class="book-title">${book.title}</h3>
                        <div class="trending-badge">
                            <i class="fas fa-fire"></i> TRENDING
                        </div>
                    </div>
                    <div class="book-author">${book.author}</div>
                    <p class="book-description">${book.description}</p>
                    <div class="book-footer">
                        <span class="book-category">${book.category}</span>
                        <div class="book-actions">
                            <button class="action-btn" title="Baca">
                                <i class="fas fa-book-open"></i>
                            </button>
                            <button class="action-btn" title="Download">
                                <i class="fas fa-download"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
        
        DOM.trendingCarousel.innerHTML = booksHTML;
        
        // Tambahkan event listener untuk buku
        this.initBookCardInteractions();
    }
    
    // Generate Recommendations
    generateRecommendations() {
        const recommendations = bookData.recommendations;
        
        const recommendationsHTML = recommendations.map(book => `
            <div class="recommendation-card" data-id="${book.id}">
                <img src="${book.image}" alt="${book.title}" class="recommendation-image">
                <div class="recommendation-content">
                    <div class="recommendation-header">
                        <h3 class="recommendation-title">${book.title}</h3>
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <span>${book.rating}</span>
                        </div>
                    </div>
                    <div class="recommendation-author">${book.author}</div>
                    <p class="recommendation-excerpt">${book.description}</p>
                    <div class="recommendation-footer">
                        <span class="recommendation-category">${book.category}</span>
                        <div class="recommendation-stats">
                            <i class="fas fa-download"></i>
                            <span>${book.downloads.toLocaleString()}</span>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
        
        DOM.recommendationsGrid.innerHTML = recommendationsHTML;
    }
    
    // Update Statistics
    updateStatistics() {
        // Animasi counter
        this.animateCounter(DOM.totalBooks, 50000, 2000);
        this.animateCounter(DOM.totalUsers, 25000, 2000);
        this.animateCounter(DOM.totalDownloads, 1200000, 2000);
    }
    
    animateCounter(element, target, duration) {
        let start = 0;
        const increment = target / (duration / 16); // 60fps
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target.toLocaleString() + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start).toLocaleString() + '+';
            }
        }, 16);
    }
    
    // Navbar Scroll Effect
    initNavbarScroll() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                DOM.navbar.classList.add('scrolled');
            } else {
                DOM.navbar.classList.remove('scrolled');
            }
        });
    }
    
    // Navbar Dropdowns
    initNavbarDropdowns() {
        const navItems = document.querySelectorAll('.nav-item');
        
        navItems.forEach(item => {
            const dropdown = item.querySelector('.dropdown-menu');
            
            item.addEventListener('mouseenter', () => {
                dropdown.style.opacity = '1';
                dropdown.style.visibility = 'visible';
                dropdown.style.transform = 'translateY(0)';
            });
            
            item.addEventListener('mouseleave', () => {
                dropdown.style.opacity = '0';
                dropdown.style.visibility = 'hidden';
                dropdown.style.transform = 'translateY(-10px)';
            });
        });
    }
    
    // Carousel Functionality
    initCarousel() {
        const carousel = DOM.trendingCarousel;
        const cardWidth = 300; // Lebar card + gap
        const totalCards = bookData.trending.length;
        
        DOM.carouselPrev.addEventListener('click', () => {
            if (appState.currentCarouselIndex > 0) {
                appState.currentCarouselIndex--;
                carousel.scrollLeft = appState.currentCarouselIndex * cardWidth;
            }
        });
        
        DOM.carouselNext.addEventListener('click', () => {
            if (appState.currentCarouselIndex < totalCards - 1) {
                appState.currentCarouselIndex++;
                carousel.scrollLeft = appState.currentCarouselIndex * cardWidth;
            }
        });
        
        // Touch/swipe support untuk mobile
        let startX;
        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        carousel.addEventListener('touchmove', (e) => {
            if (!startX) return;
            
            const x = e.touches[0].clientX;
            const walk = startX - x;
            
            if (Math.abs(walk) > 50) { // Threshold untuk swipe
                if (walk > 0 && appState.currentCarouselIndex < totalCards - 1) {
                    // Swipe kiri
                    appState.currentCarouselIndex++;
                } else if (walk < 0 && appState.currentCarouselIndex > 0) {
                    // Swipe kanan
                    appState.currentCarouselIndex--;
                }
                
                carousel.scrollLeft = appState.currentCarouselIndex * cardWidth;
                startX = null;
            }
        });
    }
    
    // Book Card Interactions
    initBookCardInteractions() {
        const bookCards = document.querySelectorAll('.book-card');
        
        bookCards.forEach(card => {
            // Hover effect dengan tilt 3D
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateY = (x - centerX) / 25;
                const rotateX = (centerY - y) / 25;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
            });
            
            // Click event
            card.addEventListener('click', (e) => {
                const id = card.dataset.id;
                console.log(`Buku dengan ID ${id} diklik`);
                // Di sini bisa diarahkan ke halaman detail buku
            });
        });
    }
    
    // Scroll Reveal Animation
    initScrollReveal() {
        const sections = document.querySelectorAll('.section');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });
        
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });
    }
    
    // Dark Mode Auto (Berdasarkan Waktu)
    checkTimeForDarkMode() {
        const hour = new Date().getHours();
        // Jika jam 18:00 - 06:00 (malam), pastikan dark mode aktif
        if (hour >= 18 || hour <= 6) {
            document.body.classList.add('dark-mode');
            appState.darkMode = true;
        }
    }
    
    // Save App State
    saveAppState() {
        localStorage.setItem('lastVisitedPage', appState.lastVisitedPage);
        localStorage.setItem('isAdShown', appState.isAdShown.toString());
        
        // Simpan waktu kunjungan terakhir
        localStorage.setItem('lastVisit', new Date().toISOString());
    }
    
    // Load App State
    loadAppState() {
        const savedState = localStorage.getItem('maktabahState');
        if (savedState) {
            Object.assign(appState, JSON.parse(savedState));
        }
    }
}

// Inisialisasi aplikasi saat DOM siap
document.addEventListener('DOMContentLoaded', () => {
    const app = new MaktabahApp();
    
    // Tambahkan class untuk animasi saat halaman siap
    document.body.classList.add('loaded');
    
    // Animasi tambahan untuk elemen spesifik
    setTimeout(() => {
        document.querySelectorAll('.category-card').forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });
    }, 1000);
});

// Fungsi utilitas tambahan
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export untuk penggunaan modular (jika diperlukan)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MaktabahApp, bookData, appState };
}