/**
 * Copyright (C) 2026 Adham Cherkaoui Eddeqaqi (0dh4m). All rights reserved.
 * Proprietary and confidential. Unauthorized copying or distribution is strictly prohibited.
 * Author: Adham Cherkaoui Eddeqaqi (0dh4m) <0dh4mm@gmail.com>
 * GitHub: https://github.com/0dh4m
 */

/**
 * ====================================================================
 * منصة راديو المغرب - Radio Maroc Platform
 * البث المباشر لأقوى وأشهر قنوات ومحطات الراديو المغربية 🇲🇦
 * نظام الصفحات المنفصلة (SPA View Routing) + تحكم كامل في الصوت
 * ====================================================================
 */

// قائمة قنوات ومحطات الراديو المغربية المتنوعة والشغالة 100%
const MOROCCO_RADIO_STATIONS = [
    {
        id: 'hit-radio',
        name: 'Hit Radio',
        nameAr: 'هيت راديو',
        stream: 'https://hitradio-maroc.ice.infomaniak.ch/hitradio-maroc-128.mp3',
        freq: '99.8 FM',
        city: 'الرباط',
        category: 'music',
        categoryName: 'موسيقى وترفيه',
        coverClass: 'cover-hit',
        icon: 'fas fa-music',
        desc: 'الإذاعة الموسيقية والشبابية الأولى في المغرب لأفضل وأحدث الأغاني العالمية والمغربية.',
        listeners: '3,840'
    },
    {
        id: 'radio-mars',
        name: 'Radio Mars',
        nameAr: 'راديو مارس',
        stream: 'https://radiomars.ice.infomaniak.ch/radiomars-128.mp3',
        freq: '91.2 FM',
        city: 'الدار البيضاء',
        category: 'sports',
        categoryName: 'رياضة ومباريات',
        coverClass: 'cover-mars',
        icon: 'fas fa-futbol',
        desc: 'إذاعة الرياضة الأولى بالمغرب: متابعة مباشرة للبطولة الاحترافية والمنتخب الوطني وأخبار الملاعب.',
        listeners: '4,520'
    },
    {
        id: 'med-radio',
        name: 'Med Radio',
        nameAr: 'ميد راديو',
        stream: 'http://medradio.ice.infomaniak.ch/medradio-128.mp3',
        freq: '88.2 FM',
        city: 'الدار البيضاء',
        category: 'news',
        categoryName: 'أخبار وحوارات',
        coverClass: 'cover-medi1',
        icon: 'fas fa-newspaper',
        desc: 'الإذاعة القريبة منكم: برامج حوارية واجتماعية يومية وتغطية شاملة لمستجدات المجتمع المغربي.',
        listeners: '3,910'
    },
    {
        id: 'radio-aswat',
        name: 'Radio Aswat',
        nameAr: 'إذاعة أصوات',
        stream: 'http://broadcast.ice.infomaniak.ch/aswat-high.mp3?.mp3',
        freq: '104.3 FM',
        city: 'الدار البيضاء',
        category: 'news',
        categoryName: 'أخبار وحوارات',
        coverClass: 'cover-aswat',
        icon: 'fas fa-comments',
        desc: 'إذاعة الحوار والقرب والأسرة المغربية: نقاشات حية وبرامج استشارية وتواصل مستمر مع المستمعين.',
        listeners: '3,150'
    },
    {
        id: 'radio-quran-tarateel',
        name: 'Radio Quran Tarateel',
        nameAr: 'إذاعة القرآن الكريم - تراتيل',
        stream: 'https://Qurango.net/radio/tarateel',
        backupStream: 'https://backup.qurango.net/radio/maher',
        freq: '102.5 FM',
        city: 'الرباط',
        category: 'quran',
        categoryName: 'القرآن الكريم',
        coverClass: 'cover-quran',
        icon: 'fas fa-book-quran',
        desc: 'بث متواصل لتلاوات خاشعة وتراتيل ندية من القرآن الكريم بأصوات كبار قراء العالم الإسلامي.',
        listeners: '6,450'
    },
    {
        id: 'al-quran-maroc',
        name: 'Al Quran Maroc (Warsh)',
        nameAr: 'إذاعة القرآن الكريم برواية ورش',
        stream: 'https://n0a.radiojar.com/0tpy1h0kxtzuv?rj-ttl=5&rj-tok=AAABhdgGORQA-2acfyF3_4WY2g',
        freq: 'Web FM',
        city: 'الرباط',
        category: 'quran',
        categoryName: 'القرآن الكريم',
        coverClass: 'cover-quran',
        icon: 'fas fa-kaaba',
        desc: 'المصحف المرتل كاملاً برواية ورش عن نافع بأصوات أشهر القراء المغاربة العذبة.',
        listeners: '4,100'
    },
    {
        id: 'abdulbasit-radio',
        name: 'Abdulbasit Radio',
        nameAr: 'إذاعة الشيخ عبد الباسط',
        stream: 'https://radio.mp3islam.com/listen/abdulbasit/radio.mp3',
        freq: '98.0 FM',
        city: 'الدار البيضاء',
        category: 'quran',
        categoryName: 'القرآن الكريم',
        coverClass: 'cover-quran',
        icon: 'fas fa-hands-praying',
        desc: 'روائع التلاوات الخاشعة والنادرة للقارئ الشيخ عبد الباسط عبد الصمد رحمه الله.',
        listeners: '5,280'
    },
    {
        id: 'atlantic-radio',
        name: 'Atlantic Radio',
        nameAr: 'أطلانتيك راديو',
        stream: 'https://atlanticradio.ice.infomaniak.ch/atlanticradio-128.mp3',
        freq: '94.3 FM',
        city: 'الدار البيضاء',
        category: 'news',
        categoryName: 'أخبار وحوارات',
        coverClass: 'cover-aswat',
        icon: 'fas fa-chart-line',
        desc: 'الإذاعة الاقتصادية والإخبارية المغربية الأولى: تحليلات السوق، النقاش السياسي، وموسيقى كلاسيكية راقية.',
        listeners: '2,640'
    },
    {
        id: 'mfm-radio',
        name: 'MFM Radio Maroc',
        nameAr: 'إم إف إم راديو',
        stream: 'https://stream.zeno.fm/t3q5s1b56heuv',
        freq: '103.5 FM',
        city: 'الدار البيضاء',
        category: 'news',
        categoryName: 'أخبار وحوارات',
        coverClass: 'cover-national',
        icon: 'fas fa-wheat-awn',
        desc: 'إذاعة الفلاح والأسرة والمجتمع المغربي: برامج شعبية وقضايا اجتماعية واستشارات حية.',
        listeners: '3,480'
    },
    {
        id: 'cap-radio',
        name: 'Cap Radio',
        nameAr: 'كاب راديو',
        stream: 'https://stream.zeno.fm/4vhyupw26heuv',
        freq: '105.4 FM',
        city: 'طنجة',
        category: 'culture',
        categoryName: 'ثقافة وتراث جهوي',
        coverClass: 'cover-mars',
        icon: 'fas fa-water',
        desc: 'صوت شمال المغرب والبحر الأبيض المتوسط من طنجة العالية: إعلام القرب وأخبار الشمال والريف.',
        listeners: '2,200'
    },
    {
        id: 'medina-fm',
        name: 'Medina FM',
        nameAr: 'مدينة إف إم',
        stream: 'https://medinafm.ice.infomaniak.ch/medinafm-64.mp3',
        freq: '100.7 FM',
        city: 'فاس',
        category: 'culture',
        categoryName: 'ثقافة وتراث جهوي',
        coverClass: 'cover-national',
        icon: 'fas fa-landmark-dome',
        desc: 'إذاعة التنمية والقرب من العاصمة العلمية فاس ومكناس: نبض جهة فاس مكناس وروح التراث الأصيل.',
        listeners: '2,750'
    },
    {
        id: 'medina-andalou',
        name: 'Medina Andalou',
        nameAr: 'مدينة أندلسي',
        stream: 'https://medinaandalou.ice.infomaniak.ch/medinaandalou-128.mp3',
        freq: 'Web FM',
        city: 'فاس',
        category: 'culture',
        categoryName: 'ثقافة وتراث جهوي',
        coverClass: 'cover-medi1',
        icon: 'fas fa-guitar',
        desc: 'طرب الآلة والموسيقى الأندلسية المغربية العريقة، الملحون ونوبات الغرناطي والشكوري الخالدة.',
        listeners: '1,490'
    },
    {
        id: 'medina-nachat',
        name: 'Medina Nachat',
        nameAr: 'مدينة نشاط',
        stream: 'https://medinanachat.ice.infomaniak.ch/medinanachat-128.mp3',
        freq: 'Web FM',
        city: 'الدار البيضاء',
        category: 'music',
        categoryName: 'موسيقى وترفيه',
        coverClass: 'cover-hit',
        icon: 'fas fa-compact-disc',
        desc: 'بث حي لأجمل المنوعات والإيقاعات المغربية الشعبية الحيوية على مدار 24 ساعة.',
        listeners: '2,310'
    },
    {
        id: 'medina-amazigh',
        name: 'Medina Amazigh',
        nameAr: 'مدينة أمازيغ',
        stream: 'https://medinaamazigh.ice.infomaniak.ch/medinaamazigh-128.mp3',
        freq: 'Web FM',
        city: 'أكادير',
        category: 'culture',
        categoryName: 'ثقافة وتراث جهوي',
        coverClass: 'cover-amazigh',
        icon: 'fas fa-mountain-sun',
        desc: 'إيقاعات الفن الأمازيغي الأصيل من سوس والأطلس والريف: أحواش، رويس وأغاني أمازيغية عريقة.',
        listeners: '1,780'
    },
    {
        id: 'yabiladi-chaabi',
        name: 'Yabiladi Chaabi',
        nameAr: 'يا بلادي شعبي',
        stream: 'https://radio.yabiladi.com:8102/;stream.mp3',
        freq: 'Web FM',
        city: 'الدار البيضاء',
        category: 'music',
        categoryName: 'موسيقى وترفيه',
        coverClass: 'cover-mars',
        icon: 'fas fa-drum',
        desc: 'روائع الأغنية الشعبية المغربية الكلاسيكية والحديثة لمغاربة العالم والوطن.',
        listeners: '2,420'
    },
    {
        id: 'yabiladi-radio',
        name: 'Yabiladi Radio',
        nameAr: 'يا بلادي راديو',
        stream: 'https://radio.yabiladi.com:8002/;stream.mp3',
        freq: 'Web FM',
        city: 'الدار البيضاء',
        category: 'music',
        categoryName: 'موسيقى وترفيه',
        coverClass: 'cover-hit',
        icon: 'fas fa-globe',
        desc: 'إذاعة مغاربة العالم: باقة متنوعة تجمع الموسيقى المغربية العصرية، الراي والمنوعات الشبابية.',
        listeners: '2,110'
    },
    {
        id: 'yabiladi-amazigh',
        name: 'Yabiladi Azawan',
        nameAr: 'يا بلادي أزوان أمازيغ',
        stream: 'https://radio.yabiladi.com:9002/;stream.mp3',
        freq: 'Web FM',
        city: 'الرباط',
        category: 'culture',
        categoryName: 'ثقافة وتراث جهوي',
        coverClass: 'cover-amazigh',
        icon: 'fas fa-campground',
        desc: 'سفر موسيقي عبر ربوع المغرب الأمازيغي من تاشلحيت وتمازيغت وتاريفيت.',
        listeners: '1,350'
    },
    {
        id: 'skyrock-casa',
        name: 'Skyrock Casablanca',
        nameAr: 'سكاي روك كازا',
        stream: 'https://icecast.skyrock.net/s/casa_aac_64k',
        freq: '102.1 FM',
        city: 'الدار البيضاء',
        category: 'music',
        categoryName: 'موسيقى وترفيه',
        coverClass: 'cover-hit',
        icon: 'fas fa-headphones-simple',
        desc: 'الراب، الهيب هوب والموسيقى الحضرية الإيقاعية الأكثر طلباً من شباب العاصمة الاقتصادية.',
        listeners: '2,950'
    },
    {
        id: 'radio-plus',
        name: 'Radio Plus',
        nameAr: 'راديو بلوس',
        stream: 'https://stream.radio.co/s8cc7a5da4/listen',
        freq: '94.8 FM',
        city: 'أكادير',
        category: 'news',
        categoryName: 'أخبار وحوارات',
        coverClass: 'cover-aswat',
        icon: 'fas fa-bullhorn',
        desc: 'إذاعة جهوية شاملة تضيء على أحداث سوس ماسة ومراكش: ترفيه، أخبار وتواصل يومي.',
        listeners: '1,560'
    },
    {
        id: 'radio-azawan',
        name: 'Radio Azawan',
        nameAr: 'راديو أزوان',
        stream: 'https://az-maroc.ice.infomaniak.ch/az-maroc-128.mp3',
        freq: '102.5 FM',
        city: 'العيون',
        category: 'culture',
        categoryName: 'ثقافة وتراث جهوي',
        coverClass: 'cover-national',
        icon: 'fas fa-compass',
        desc: 'أصداء الصحراء المغربية وسوس: موسيقى حسانية وأمازيغية وتراث وثقافة الجنوب المغربي الأصيل.',
        listeners: '1,430'
    },
    {
        id: 'marrakech-plus',
        name: 'Marrakech Plus',
        nameAr: 'مراكش بلوس',
        stream: 'https://cast5.my-control-panel.com/proxy/marrakec/stream',
        freq: 'Web FM',
        city: 'مراكش',
        category: 'music',
        categoryName: 'موسيقى وترفيه',
        coverClass: 'cover-hit',
        icon: 'fas fa-sun',
        desc: 'إيقاعات وأجواء البهجة من المدينة الحمراء مراكش: منوعات شرقية ومغربية مرحة.',
        listeners: '1,980'
    },
    {
        id: 'zine-bladi',
        name: 'Zine Bladi',
        nameAr: 'زين بلادي',
        stream: 'https://asmaki.ma:8000/radio.mp3',
        freq: 'Web FM',
        city: 'الرباط',
        category: 'culture',
        categoryName: 'ثقافة وتراث جهوي',
        coverClass: 'cover-medi1',
        icon: 'fas fa-heart',
        desc: 'محطة مخصصة لروائع الفن والموسيقى المغربية الخالدة عبر مختلف الأجيال.',
        listeners: '1,090'
    },
    {
        id: 'radio-manarat',
        name: 'Radio Manarat',
        nameAr: 'راديو منارات',
        stream: 'https://listen.radioking.com/radio/252934/stream/297385',
        freq: 'Web FM',
        city: 'الرباط',
        category: 'culture',
        categoryName: 'ثقافة وتراث جهوي',
        coverClass: 'cover-aswat',
        icon: 'fas fa-lightbulb',
        desc: 'فضاء للحوار الفكري، الأدب، والفنون المغربية المعاصرة مع نخبة من المثقفين والمبدعين.',
        listeners: '860'
    },
    {
        id: 'radio-star-maroc',
        name: 'Radio Star Maroc',
        nameAr: 'ستار المغرب',
        stream: 'https://a2.asurahosting.com:6100/radio.mp3',
        freq: 'Web FM',
        city: 'الدار البيضاء',
        category: 'music',
        categoryName: 'موسيقى وترفيه',
        coverClass: 'cover-mars',
        icon: 'fas fa-star',
        desc: 'أحدث المنوعات والإصدارات الفنية لنجوم الأغنية المغربية والعربية.',
        listeners: '1,320'
    }
];

// حالة التطبيق العامة (Application State)
const AppState = {
    currentStation: null,
    isPlaying: false,
    audio: new Audio(),
    activeCategory: 'all',
    activeCity: 'all',
    searchQuery: '',
    volume: 1.0,
    prevVolume: 1.0,
    isMuted: false,
    reconnectTimer: null,
    toastTimer: null,
    currentPage: 'home',
    favorites: loadFavoritesFromStorage()
};

// تهيئة التطبيق عند اكتمال تحميل DOM
document.addEventListener('DOMContentLoaded', () => {
    initAudioEngine();
    updateFavoritesBadges();
    initRouting();
    renderStations();
    initNavbarScroll();
    initKeyboardShortcuts();
});

/* ====================================================================
   1. نظام التنقل بين الصفحات المنفصلة (SPA View Routing)
   يحافظ على البث الصوتي شغالاً باستمرار بدون أي انقطاع
   ==================================================================== */
function initRouting() {
    // الاستماع لتغير الـ hash في الرابط
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.replace('#', '') || 'home';
        navigateToPage(hash);
    });

    // التنقل للصفحة المحددة في الرابط عند أول فتح
    const initialHash = window.location.hash.replace('#', '') || 'home';
    navigateToPage(initialHash);
}

function navigateToPage(pageId, event) {
    if (event) event.preventDefault();

    const validPages = ['home', 'featured', 'categories', 'stations', 'favorites'];
    if (!validPages.includes(pageId)) {
        pageId = 'home';
    }

    AppState.currentPage = pageId;

    // إخفاء كافة الصفحات
    document.querySelectorAll('.page-view').forEach(view => {
        view.classList.remove('active');
    });

    // إظهار الصفحة المستهدفة
    const targetView = document.getElementById(`view-${pageId}`);
    if (targetView) {
        targetView.classList.add('active');
    }

    // تحديث الرابط النشط في النافبار
    document.querySelectorAll('#mainNav .nav-link').forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href') || '';
        if (href === `#${pageId}`) {
            link.classList.add('active');
        }
    });

    // إغلاق قائمة الهواتف إن كانت مفتوحة
    const navCollapse = document.getElementById('navContent');
    if (navCollapse && navCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
        if (bsCollapse) bsCollapse.hide();
    }

    // تحديث الـ hash في المتصفح
    if (window.location.hash !== `#${pageId}`) {
        if (history.pushState) {
            history.pushState(null, null, `#${pageId}`);
        } else {
            window.location.hash = `#${pageId}`;
        }
    }

    // الصعود لأعلى الصفحة بسلاسة
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // إجراءات خاصة بصفحة المفضلة
    if (pageId === 'favorites') {
        renderFavoritesPage();
    }
}

// بحث سريع من صفحة الرئيسية والانتقال لصفحة الإذاعات
function executeHomeSearch(query) {
    if (!query) query = '';
    AppState.searchQuery = query;
    navigateToPage('stations');

    const stationsSearchInput = document.getElementById('stationSearchInput');
    if (stationsSearchInput) {
        stationsSearchInput.value = query;
    }
    const btnClear = document.getElementById('btnClearSearch');
    if (btnClear) {
        btnClear.style.display = query.trim().length > 0 ? 'inline-block' : 'none';
    }

    renderStations();
}

// اختيار مدينة من الرئيسية والانتقال لصفحة الإذاعات
function searchByCityAndNavigate(city) {
    AppState.activeCity = city;
    navigateToPage('stations');

    document.querySelectorAll('#cityFilterContainer .btn-city-pill').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.trim() === city);
    });

    updateActiveFilterLabel();
    renderStations();
}

// اختيار تصنيف من صفحة التصنيفات والانتقال لصفحة الإذاعات
function browseCategoryAndNavigate(category) {
    AppState.activeCategory = category;
    navigateToPage('stations');
    filterStations(category);
}

/* ====================================================================
   2. نظام المفضلة الذكي (Favorites System)
   ==================================================================== */
function loadFavoritesFromStorage() {
    try {
        const stored = localStorage.getItem('radio_maroc_favorites');
        return stored ? JSON.parse(stored) : [];
    } catch (e) {
        return [];
    }
}

function saveFavoritesToStorage() {
    try {
        localStorage.setItem('radio_maroc_favorites', JSON.stringify(AppState.favorites));
    } catch (e) {
        console.warn('Failed to save favorites to localStorage:', e);
    }
}

function toggleFavorite(stationId, event) {
    if (event) event.stopPropagation();

    const idx = AppState.favorites.indexOf(stationId);
    let added = false;
    if (idx > -1) {
        AppState.favorites.splice(idx, 1);
        added = false;
    } else {
        AppState.favorites.push(stationId);
        added = true;
    }
    saveFavoritesToStorage();
    updateFavoritesBadges();

    // تحديث كروت المحطات
    document.querySelectorAll(`.station-favorite-btn[data-id="${stationId}"]`).forEach(btn => {
        const isFav = AppState.favorites.includes(stationId);
        btn.classList.toggle('favorited', isFav);
        const icon = btn.querySelector('i');
        if (icon) {
            icon.className = isFav ? 'fas fa-heart text-danger' : 'far fa-heart';
        }
    });

    // تحديث زر المفضلة بالمشغل
    if (AppState.currentStation && AppState.currentStation.id === stationId) {
        updatePlayerFavoriteState();
    }

    // إشعار سريع للمستخدم
    const station = MOROCCO_RADIO_STATIONS.find(s => s.id === stationId);
    const stationTitle = station ? station.nameAr : '';
    showToast(added ? `❤️ تمت إضافة "${stationTitle}" إلى المفضلة` : `💔 تمت إزالة "${stationTitle}" من المفضلة`);

    // إذا كنا في صفحة المفضلة، تحديث العرض فوراً
    if (AppState.currentPage === 'favorites') {
        renderFavoritesPage();
    }
}

function toggleCurrentFavorite() {
    if (!AppState.currentStation) return;
    toggleFavorite(AppState.currentStation.id);
}

function updateFavoritesBadges() {
    const count = AppState.favorites.length;
    const navFavBadge = document.getElementById('navFavBadge');
    if (navFavBadge) {
        navFavBadge.textContent = count;
        navFavBadge.style.display = count > 0 ? 'inline-block' : 'none';
    }
}

function updatePlayerFavoriteState() {
    const btn = document.getElementById('btnPlayerFavorite');
    const icon = document.getElementById('playerFavIcon');
    if (!btn || !icon || !AppState.currentStation) return;

    const isFav = AppState.favorites.includes(AppState.currentStation.id);
    icon.className = isFav ? 'fas fa-heart text-danger' : 'far fa-heart';
}

function renderFavoritesPage() {
    const grid = document.getElementById('favoritesGrid');
    const emptyState = document.getElementById('emptyFavoritesState');
    if (!grid) return;

    const favStations = MOROCCO_RADIO_STATIONS.filter(st => AppState.favorites.includes(st.id));

    if (favStations.length === 0) {
        grid.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
        return;
    }

    if (emptyState) emptyState.style.display = 'none';

    grid.innerHTML = favStations.map(st => createStationCardHTML(st)).join('');
}

/* ====================================================================
   3. محرك البث الصوتي المباشر (HTML5 Audio Engine)
   ==================================================================== */
function initAudioEngine() {
    const audio = AppState.audio;
    audio.preload = 'none';

    audio.addEventListener('playing', () => {
        AppState.isPlaying = true;
        updatePlayingUI(true);
    });

    audio.addEventListener('pause', () => {
        AppState.isPlaying = false;
        updatePlayingUI(false);
    });

    audio.addEventListener('waiting', () => {
        const playerLiveBadge = document.getElementById('playerLiveBadge');
        if (playerLiveBadge) {
            playerLiveBadge.innerHTML = '<i class="fas fa-spinner fa-spin me-1"></i> تحميل...';
            playerLiveBadge.className = 'badge bg-warning text-dark rounded-pill px-2 py-1 small';
        }
    });

    audio.addEventListener('error', (err) => {
        console.warn('Audio stream error, attempting auto-reconnect...', err);
        const playerLiveBadge = document.getElementById('playerLiveBadge');
        if (playerLiveBadge) {
            playerLiveBadge.innerHTML = '<i class="fas fa-sync fa-spin me-1"></i> جاري استعادة البث...';
            playerLiveBadge.className = 'badge bg-warning text-dark rounded-pill px-2 py-1 small';
        }

        // محاولة إعادة الاتصال التلقائي بعد ثانيتين
        clearTimeout(AppState.reconnectTimer);
        AppState.reconnectTimer = setTimeout(() => {
            if (AppState.currentStation && AppState.isPlaying) {
                const streamUrl = AppState.currentStation.backupStream || AppState.currentStation.stream;
                const timestampedUrl = streamUrl + (streamUrl.includes('?') ? '&' : '?') + 'nocache=' + Date.now();
                audio.src = timestampedUrl;
                audio.play().catch(e => console.warn('Retry play error:', e));
            }
        }, 1800);
    });
}

/* ====================================================================
   4. تشغيل والتحكم في المحطات الإذاعية (Station Controls & Surfing)
   ==================================================================== */
function playStation(stationId) {
    const station = MOROCCO_RADIO_STATIONS.find(s => s.id === stationId);
    if (!station) return;

    // في حال الضغط على نفس المحطة الجارية، التبديل بين التشغيل والإيقاف
    if (AppState.currentStation && AppState.currentStation.id === station.id) {
        togglePlayPause();
        return;
    }

    AppState.currentStation = station;
    const audio = AppState.audio;

    // تحديث مسار الصوت والبدء الفوري
    audio.src = station.stream;
    audio.muted = AppState.isMuted;
    audio.volume = AppState.isMuted ? 0 : AppState.volume;
    
    // إظهار مشغل الراديو السفلي
    const miniPlayer = document.getElementById('miniPlayer');
    if (miniPlayer) {
        miniPlayer.style.display = 'block';
        document.body.classList.add('has-player');
    }

    // تحديث بيانات المشغل الفوري
    updatePlayerStationInfo(station);
    updatePlayerFavoriteState();

    // تشغيل الصوت
    audio.play().catch(err => {
        console.warn('Audio playback error (user interaction needed or stream delay):', err);
    });

    // تحديث الراديو التوضيحي بالهيدر
    updateHeroDial(station);

    // تحديث كروت المحطات (إضاءة الكرت المشتغل)
    updateStationCardsActiveState();

    showToast(`🔊 جاري تشغيل: ${station.nameAr}`);
}

function playNextStation() {
    if (!AppState.currentStation) {
        playStation(MOROCCO_RADIO_STATIONS[0].id);
        return;
    }
    const currentIndex = MOROCCO_RADIO_STATIONS.findIndex(s => s.id === AppState.currentStation.id);
    const nextIndex = (currentIndex + 1) % MOROCCO_RADIO_STATIONS.length;
    playStation(MOROCCO_RADIO_STATIONS[nextIndex].id);
}

function playPrevStation() {
    if (!AppState.currentStation) {
        playStation(MOROCCO_RADIO_STATIONS[0].id);
        return;
    }
    const currentIndex = MOROCCO_RADIO_STATIONS.findIndex(s => s.id === AppState.currentStation.id);
    const prevIndex = (currentIndex - 1 + MOROCCO_RADIO_STATIONS.length) % MOROCCO_RADIO_STATIONS.length;
    playStation(MOROCCO_RADIO_STATIONS[prevIndex].id);
}

function togglePlayPause() {
    if (!AppState.currentStation) {
        playStation(MOROCCO_RADIO_STATIONS[0].id);
        return;
    }

    const audio = AppState.audio;
    if (AppState.isPlaying) {
        audio.pause();
        showToast('⏸️ تم إيقاف البث مؤقتاً');
    } else {
        audio.play().catch(e => console.warn('Play error:', e));
        showToast(`▶️ استئناف: ${AppState.currentStation.nameAr}`);
    }
}

function updatePlayingUI(isPlaying) {
    // 1. زر المشغل السفلي
    const mainPlayIcon = document.getElementById('mainPlayIcon');
    if (mainPlayIcon) {
        mainPlayIcon.className = isPlaying ? 'fas fa-pause' : 'fas fa-play';
    }

    // 2. إكولايزر المشغل السفلي
    const playerEqualizer = document.getElementById('playerEqualizer');
    if (playerEqualizer) {
        if (isPlaying) playerEqualizer.classList.add('active');
        else playerEqualizer.classList.remove('active');
    }

    // 3. شارة البث المباشر بالمشغل
    const playerLiveBadge = document.getElementById('playerLiveBadge');
    if (playerLiveBadge) {
        if (isPlaying) {
            playerLiveBadge.innerHTML = '<i class="fas fa-circle fa-beat me-1" style="font-size:0.5rem;"></i> مباشر';
            playerLiveBadge.className = 'badge bg-danger rounded-pill px-2 py-1 small';
        } else {
            playerLiveBadge.innerHTML = '<i class="fas fa-pause me-1"></i> متوقف';
            playerLiveBadge.className = 'badge bg-secondary rounded-pill px-2 py-1 small';
        }
    }

    // 4. مؤشر النافبار
    const navLiveStatus = document.getElementById('navLiveStatus');
    if (navLiveStatus) {
        navLiveStatus.textContent = isPlaying 
            ? `بث حي: ${AppState.currentStation ? AppState.currentStation.nameAr : ''} 🔊`
            : 'البث المباشر جاهز';
    }

    // 5. تحديث أزرار الكروت بالشبكة
    updateStationCardsActiveState();
}

function updatePlayerStationInfo(station) {
    const playerTitle = document.getElementById('playerTitle');
    const playerFreq = document.getElementById('playerFreq');
    const playerSub = document.getElementById('playerSub');

    if (playerTitle) playerTitle.textContent = `${station.nameAr} (${station.name})`;
    if (playerFreq) playerFreq.textContent = station.freq;
    if (playerSub) playerSub.innerHTML = `<i class="fas fa-location-dot me-1 text-danger"></i> <span class="text-white">${station.city}</span> • <span class="text-accent">${station.categoryName}</span>`;
}

function updateHeroDial(station) {
    const heroDialFreq = document.getElementById('heroDialFreq');
    const heroDialName = document.getElementById('heroDialName');
    if (heroDialFreq) heroDialFreq.textContent = station.freq;
    if (heroDialName) heroDialName.textContent = station.name;
}

function updateStationCardsActiveState() {
    document.querySelectorAll('.station-card').forEach(card => {
        const id = card.getAttribute('data-id');
        const playBtn = card.querySelector('.station-play-btn i');
        const eqBars = card.querySelector('.card-eq-bars');

        if (AppState.currentStation && id === AppState.currentStation.id) {
            card.classList.add('playing');
            if (playBtn) playBtn.className = AppState.isPlaying ? 'fas fa-pause' : 'fas fa-play';
            if (eqBars) eqBars.style.display = AppState.isPlaying ? 'flex' : 'none';
        } else {
            card.classList.remove('playing');
            if (playBtn) playBtn.className = 'fas fa-play';
            if (eqBars) eqBars.style.display = 'none';
        }
    });

    // تحديث كروت الأكثر استماعاً
    document.querySelectorAll('.featured-card').forEach(card => {
        const onclickAttr = card.getAttribute('onclick') || '';
        const isMatch = AppState.currentStation && onclickAttr.includes(AppState.currentStation.id);
        card.classList.toggle('playing', isMatch && AppState.isPlaying);
    });
}

function closeMiniPlayer() {
    if (AppState.isPlaying) {
        AppState.audio.pause();
    }
    const miniPlayer = document.getElementById('miniPlayer');
    if (miniPlayer) miniPlayer.style.display = 'none';
    document.body.classList.remove('has-player');
}

/* ====================================================================
   5. التحكم في الصوت والكتم (Volume & Mute Controls - Fixed 100%)
   ==================================================================== */
function updatePlayerVolume(val) {
    const volume = Math.max(0, Math.min(1, val / 100));
    AppState.volume = volume;
    AppState.isMuted = (volume === 0);

    AppState.audio.muted = AppState.isMuted;
    AppState.audio.volume = AppState.isMuted ? 0 : volume;

    const volumePercent = document.getElementById('volumePercent');
    if (volumePercent) volumePercent.textContent = `${Math.round(volume * 100)}%`;

    updateVolumeIcon(volume, AppState.isMuted);
}

function toggleMute() {
    const audio = AppState.audio;
    if (!audio) return;

    AppState.isMuted = !AppState.isMuted;

    if (AppState.isMuted) {
        // كتم الصوت
        AppState.prevVolume = (AppState.volume > 0) ? AppState.volume : 1.0;
        audio.muted = true;
        audio.volume = 0;
    } else {
        // إلغاء كتم الصوت
        AppState.volume = (AppState.prevVolume > 0) ? AppState.prevVolume : 1.0;
        audio.muted = false;
        audio.volume = AppState.volume;
    }

    const volumeSlider = document.getElementById('playerVolumeSlider');
    const volumePercent = document.getElementById('volumePercent');

    const displayVol = AppState.isMuted ? 0 : Math.round(AppState.volume * 100);
    if (volumeSlider) volumeSlider.value = displayVol;
    if (volumePercent) volumePercent.textContent = `${displayVol}%`;

    updateVolumeIcon(audio.volume, AppState.isMuted);
    showToast(AppState.isMuted ? '🔇 تم كتم الصوت' : '🔊 تم تفعيل الصوت');
}

function updateVolumeIcon(volume, isMuted) {
    const icon = document.getElementById('volumeIcon');
    if (!icon) return;

    if (isMuted || volume === 0) {
        icon.className = 'fas fa-volume-xmark fs-5 text-danger';
    } else if (volume < 0.5) {
        icon.className = 'fas fa-volume-low fs-5 text-warning';
    } else {
        icon.className = 'fas fa-volume-high fs-5 text-warning';
    }
}

/* ====================================================================
   6. عرض وتصفية قنوات الراديو (High Contrast Stations Grid)
   ==================================================================== */
function renderStations() {
    const container = document.getElementById('stationsGrid');
    const noResults = document.getElementById('noResultsState');
    const counter = document.getElementById('stationsCounter');
    if (!container) return;

    // تصفية المحطات حسب التصنيف، المدينة، والبحث
    const filtered = MOROCCO_RADIO_STATIONS.filter(st => {
        const matchesCategory = (AppState.activeCategory === 'all' || st.category === AppState.activeCategory);
        const matchesCity = (AppState.activeCity === 'all' || st.city === AppState.activeCity);
        
        let matchesQuery = true;
        if (AppState.searchQuery) {
            const q = AppState.searchQuery.toLowerCase().trim();
            matchesQuery = (
                st.name.toLowerCase().includes(q) ||
                st.nameAr.includes(q) ||
                st.city.includes(q) ||
                st.categoryName.includes(q) ||
                st.desc.includes(q) ||
                st.freq.toLowerCase().includes(q)
            );
        }

        return matchesCategory && matchesCity && matchesQuery;
    });

    if (counter) counter.textContent = filtered.length;

    if (filtered.length === 0) {
        container.innerHTML = '';
        if (noResults) noResults.style.display = 'block';
        return;
    }

    if (noResults) noResults.style.display = 'none';

    container.innerHTML = filtered.map(st => createStationCardHTML(st)).join('');
}

function createStationCardHTML(st) {
    const isCurrent = AppState.currentStation && AppState.currentStation.id === st.id;
    const isCurrentPlaying = isCurrent && AppState.isPlaying;
    const isFav = AppState.favorites.includes(st.id);

    return `
        <div class="col-lg-3 col-md-4 col-sm-6 station-item">
            <div class="station-card ${isCurrent ? 'playing' : ''}" data-id="${st.id}" onclick="playStation('${st.id}')">
                <!-- Station Cover Header -->
                <div class="station-cover ${st.coverClass}">
                    <i class="${st.icon}"></i>
                    
                    <!-- Play/Pause Button Overlay -->
                    <div class="station-play-btn" title="تشغيل / إيقاف">
                        <i class="${isCurrentPlaying ? 'fas fa-pause' : 'fas fa-play'}"></i>
                    </div>

                    <!-- Favorite Heart Button -->
                    <button class="station-favorite-btn ${isFav ? 'favorited' : ''}" data-id="${st.id}" onclick="toggleFavorite('${st.id}', event)" title="${isFav ? 'إزالة من المفضلة' : 'إضافة إلى المفضلة'}">
                        <i class="${isFav ? 'fas fa-heart text-danger' : 'far fa-heart'}"></i>
                    </button>

                    <!-- City Badge -->
                    <span class="station-city-badge">
                        <i class="fas fa-location-dot me-1 text-danger"></i>${escapeHTML(st.city)}
                    </span>

                    <!-- Frequency Badge -->
                    <span class="station-freq-badge">${escapeHTML(st.freq)}</span>
                    
                    <!-- Mini animated equalizer inside card when playing -->
                    <div class="card-eq-bars" style="display: ${isCurrentPlaying ? 'flex' : 'none'};">
                        <span></span><span></span><span></span><span></span>
                    </div>
                </div>

                <!-- Station Info Body with High-Contrast Typography -->
                <div class="station-info">
                    <div class="d-flex align-items-center justify-content-between mb-1">
                        <h5 class="station-name-ar mb-0">${escapeHTML(st.nameAr)}</h5>
                        <span class="station-category-tag">${escapeHTML(st.categoryName)}</span>
                    </div>
                    <span class="station-name-latin mb-2">${escapeHTML(st.name)} • ${escapeHTML(st.freq)}</span>
                    <p class="station-desc-text mb-3">${escapeHTML(st.desc)}</p>
                    
                    <!-- Station Card Footer -->
                    <div class="d-flex align-items-center justify-content-between pt-2 border-top border-secondary border-opacity-20">
                        <span class="text-silver small">
                            <i class="fas fa-headphones text-danger me-1"></i> ${st.listeners} مستمع
                        </span>
                        <span class="fw-bold small">
                            ${isCurrentPlaying 
                                ? '<span class="text-success"><i class="fas fa-volume-high fa-beat me-1"></i> جارٍ الاستماع</span>' 
                                : '<span class="text-accent">استمع الآن <i class="fas fa-arrow-left ms-1"></i></span>'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// فلترة حسب التصنيف
function filterStations(category, btnElement) {
    AppState.activeCategory = category;

    // تحديث الأزرار النشطة
    document.querySelectorAll('#categoryFilterBar .btn-filter').forEach(btn => {
        btn.classList.remove('active');
    });
    if (btnElement) {
        btnElement.classList.add('active');
    } else {
        const found = document.querySelector(`#categoryFilterBar button[onclick*="'${category}'"]`);
        if (found) found.classList.add('active');
    }

    updateActiveFilterLabel();
    renderStations();
}

// فلترة سريعة حسب المدينة
function filterByCity(city, btnElement) {
    AppState.activeCity = city;

    document.querySelectorAll('#cityFilterContainer .btn-city-pill').forEach(btn => {
        btn.classList.remove('active');
    });
    if (btnElement) {
        btnElement.classList.add('active');
    }

    updateActiveFilterLabel();
    renderStations();
}

// البحث في القنوات
function handleSearch(query) {
    AppState.searchQuery = query;
    const btnClear = document.getElementById('btnClearSearch');
    if (btnClear) {
        btnClear.style.display = query.trim().length > 0 ? 'inline-block' : 'none';
    }
    renderStations();
}

function clearSearch() {
    const input = document.getElementById('stationSearchInput');
    if (input) input.value = '';
    AppState.searchQuery = '';
    const btnClear = document.getElementById('btnClearSearch');
    if (btnClear) btnClear.style.display = 'none';
    renderStations();
}

function resetFilters() {
    clearSearch();
    AppState.activeCategory = 'all';
    AppState.activeCity = 'all';

    document.querySelectorAll('#categoryFilterBar .btn-filter').forEach((btn, idx) => {
        if (idx === 0) btn.classList.add('active');
        else btn.classList.remove('active');
    });

    document.querySelectorAll('#cityFilterContainer .btn-city-pill').forEach((btn, idx) => {
        if (idx === 0) btn.classList.add('active');
        else btn.classList.remove('active');
    });

    updateActiveFilterLabel();
    renderStations();
}

function updateActiveFilterLabel() {
    const label = document.getElementById('activeFilterLabel');
    if (!label) return;

    let text = '';
    if (AppState.activeCategory !== 'all') {
        const catMap = {
            'quran': 'إذاعات القرآن الكريم',
            'news': 'إذاعات الأخبار والحوارات',
            'music': 'إذاعات الشباب والموسيقى',
            'sports': 'إذاعات الرياضة والمباريات',
            'culture': 'إذاعات التراث والجهات'
        };
        text += catMap[AppState.activeCategory] || AppState.activeCategory;
    }

    if (AppState.activeCity !== 'all') {
        text += (text ? ' • ' : '') + `مدينة ${AppState.activeCity}`;
    }

    label.textContent = text || 'جميع التصنيفات والمدن';
}

/* ====================================================================
   7. اختصارات لوحة المفاتيح وسلوك الصفحة (مع دعم AZERTY و العربية لكتم M)
   ==================================================================== */
function initKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
        // تجاهل الاختصارات إذا كان المستخدم يكتب داخل حقل إدخال
        if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable)) {
            return;
        }

        const key = (e.key || '').toLowerCase();
        const code = e.code || '';

        // كتم / تشغيل الصوت: يدعم حرف M بالإنجليزية، كود KeyM، وحرف 'ة' على لوحة المفاتيح العربية، و AZERTY
        const isMuteKey = (key === 'm' || key === 'ة' || code === 'KeyM' || (code === 'Semicolon' && key === 'm'));
        if (isMuteKey) {
            e.preventDefault();
            toggleMute();
            return;
        }

        // مسطرة المسافة Space: تشغيل / إيقاف مؤقت
        if (code === 'Space' || key === ' ') {
            e.preventDefault();
            togglePlayPause();
            return;
        }

        // السهم الأيسر: المحطة التالية
        if (code === 'ArrowLeft' || key === 'arrowleft') {
            e.preventDefault();
            playNextStation();
            return;
        }

        // السهم الأيمن: المحطة السابقة
        if (code === 'ArrowRight' || key === 'arrowright') {
            e.preventDefault();
            playPrevStation();
            return;
        }
    });
}

function initNavbarScroll() {
    const nav = document.getElementById('mainNav');
    if (!nav) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
}

/* ====================================================================
   8. إشعار سريع للمستخدم (Toast Notification)
   ==================================================================== */
function showToast(message) {
    const toast = document.getElementById('toastNotification');
    const msgElem = document.getElementById('toastMessage');
    if (!toast || !msgElem) return;

    msgElem.textContent = message;
    toast.classList.add('show');

    clearTimeout(AppState.toastTimer);
    AppState.toastTimer = setTimeout(() => {
        toast.classList.remove('show');
    }, 2200);
}

function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}

// تصدير الدوال للنطاق العام للاستخدام في الـ HTML
window.navigateToPage = navigateToPage;
window.executeHomeSearch = executeHomeSearch;
window.searchByCityAndNavigate = searchByCityAndNavigate;
window.browseCategoryAndNavigate = browseCategoryAndNavigate;
window.playStation = playStation;
window.playNextStation = playNextStation;
window.playPrevStation = playPrevStation;
window.togglePlayPause = togglePlayPause;
window.updatePlayerVolume = updatePlayerVolume;
window.toggleMute = toggleMute;
window.closeMiniPlayer = closeMiniPlayer;
window.filterStations = filterStations;
window.filterByCity = filterByCity;
window.toggleFavorite = toggleFavorite;
window.toggleCurrentFavorite = toggleCurrentFavorite;
window.handleSearch = handleSearch;
window.clearSearch = clearSearch;
window.resetFilters = resetFilters;
window.showToast = showToast;
