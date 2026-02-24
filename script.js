const books = {
    alice: {
        title: "Alice's Adventures in Wonderland",
        author: "Lewis Carroll",
        pages: [
            "Chapter I: Down the Rabbit-Hole\n\nAlice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, 'and what is the use of a book,' thought Alice 'without pictures or conversation?'\n\nSo she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.\n\nThere was nothing so very remarkable in that; nor did Alice think it so very much out of the way to hear the Rabbit say to itself, 'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually took a watch out of its waistcoat-pocket, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she ran across the field after the White Rabbit, never considering how in the world she was to get in again.",
            "She soon came to an open place, with a table set out under a tree: on one side sat the Caterpillar, and on the other two or three other creatures. Alice recognised the Dormouse immediately, though she had never seen him in the waking world.\n\n\"Come, there's plenty of room!\" said the March Hare poured some very hot tea over its nose.\n\nThe conversation at the tea table continued in this strange manner for some time, with the Hatter asking riddles that had no answers, and Alice becoming more and more bewildered and annoyed. She found the whole business most unsatisfactory, and at last, pushing back her chair and walking off, she said to herself: \"I've had quite enough of this nonsense!\"\n\nAs she walked away from the tea table, she could hear the March Hare and the Hatter arguing about what day it was, while the Dormouse continued to sleep peacefully through all the noise.",
            "Alice found herself in a rose garden where three gardeners were painting white roses red. The Queen was approaching, and there was a great deal of confusion and bustle.\n\n\"Off with their heads!\" the Queen shouted at the gardeners. Alice, not understanding the reason for such cruelty, spoke up in protest.\n\nThe Queen turned her attention to Alice. \"Who are you?\" she demanded.\n\n\"I'm Alice, Your Majesty,\" replied Alice politely, though she was secretly very frightened.\n\nThe Queen glared at her menacingly. \"Do you play croquet?\"\n\n\"Yes, Your Majesty,\" lied Alice, who had never played croquet in her life, but thought it best to agree with the Queen in the circumstances. Thus began the most bizarre game of croquet Alice had ever witnessed."
        ]
    },
    sherlock: {
        title: "The Adventures of Sherlock Holmes",
        author: "Sir Arthur Conan Doyle",
        pages: [
            "A Scandal in Bohemia\n\nTo Sherlock Holmes she is always the woman. I have seldom heard him mention her under any other name. In his eyes she eclipses and predominates the whole of her sex. It was not that he felt any emotion akin to love for Irene Adler. All emotions, and that one particularly, were abhorrent to his cold, precise but admirably balanced mind.\n\nHe was, I take it, the most perfect reasoning and observing machine that the world has seen, but as a lover he would have placed himself in a false position. He never spoke of the softer passions, save with a gibe and a sneer. They were admirable things for the observer--excellent for drawing the veil from men's motives and actions. But for the trained reasoner to admit such intrusions into his own delicate and finely adjusted temperament was to introduce a distracting factor which might upset the nicely ordered system, the effect of which might be far-reaching and serious.",
            "It was on the 20th of March, 1888, that I found myself in the strange situation of being the only confidant of what might be called the King of Bohemia. I need not say that the facts which concern the event in question have only now been offered to me for narration by the distinguished personage in question.\n\n\"On the third of May, 1888,\" began that gentleman, \"I became the victim of a conspiracy which was cunningly contrived and which was carried out with great art and address,\" and he proceeded to unfold a narrative which I shall now lay before you.",
            "\"I came, then, from Prague to London to do a single act. I came because I felt that there was no man in Europe to whom it was more likely that I could apply than to you, and because I have heard that you have a way of cutting through such knots as this in which I am entangled. This morning I received a note which said that if I did not comply with the demand within the next three days there would be published in the pages of the Morning Chronicle certain paragraphs which would be of delicate interest to me. You understand my position?\""
        ]
    },
    pride: {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        pages: [
            "Chapter I\n\nIt is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife. However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered as the rightful property of some one or other of their daughters.\n\n\"My dear Mr. Bennet,\" said his lady to him one day, \"have you heard that Netherfield Park is let at last?\" Mr. Bennet replied that he had not.\n\n\"But it is,\" returned she; \"for Mrs. Long has just been here, and she told me all about it.\" Mr. Bennet made no answer.\n\n\"Do you not want to know who has taken it?\" cried his wife impatiently.",
            "\"You want to tell me, and I have no objection to hearing it.\"\n\nThis was invitation enough. \"Why, my dear, you must know, Mrs. Long says that Netherfield is taken by a young man of large fortune from the north of England; that he came down on Monday in a chaise and four to see the place, and was so much delighted with it that he fell in with Mr. Morris immediately.—His name is Bingley, and he is to take possession before Michaelmas, and some of the servants are to be in the house by the end of next week.\"\n\n\"What is his name?\" \"Bingley.\"\n\n\"Is he married or single?\" \"Oh! Single, my dear, to be sure! A single man of large fortune; four or five thousand a year. What a fine thing for our girls!\"",
            "Mrs. Bennet was a woman of mean understanding, little information, and uncertain temper. When she was discontented she fancied herself nervous. The business of her life was to get her daughters married; its solace was visiting and news.\n\nMr. Bennet was so odd a mixture of quick parts, sarcastic humour, reserve, and caprice, that the experience of three-and-twenty years had been insufficient to make his wife understand his character. Her mind was less difficult to develop. She was a woman of some good qualities, but she was not very wise."
        ]
    }
};

let currentBook = 'alice';
let scrollPosition = 0; // Stored as percentage (0 to 1)

const bookContent = document.getElementById('book-content');
const pageCount = document.getElementById('page-count');
const bookSelect = document.getElementById('book-select');
const fontSizeInput = document.getElementById('font-size');
const fontSizeValue = document.getElementById('font-size-value');
const lineHeightInput = document.getElementById('line-height');
const lineHeightValue = document.getElementById('line-height-value');
const darkModeToggle = document.getElementById('dark-mode');
const progressFill = document.getElementById('progress-fill');
const fileInput = document.getElementById('file-input');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const searchNextBtn = document.getElementById('search-next');
const searchPrevBtn = document.getElementById('search-prev');

let bookProgress = {};
let searchResults = [];
let currentSearchResultIndex = -1;

function init() {
    setupEventListeners();
    loadSettings();
    loadBook(currentBook);

    // Periodically save progress while scrolling
    let saveTimeout;
    window.addEventListener('scroll', () => {
        updateProgressBar();
        clearTimeout(saveTimeout);
        saveTimeout = setTimeout(saveSettings, 1000);
    });
}

function setupEventListeners() {
    bookSelect.addEventListener('change', (e) => {
        loadBook(e.target.value);
        saveSettings();
    });

    fileInput.addEventListener('change', handleFileUpload);

    fontSizeInput.addEventListener('input', (e) => {
        const size = e.target.value;
        fontSizeValue.textContent = size;
        bookContent.style.fontSize = size + 'px';
        saveSettings();
    });

    lineHeightInput.addEventListener('input', (e) => {
        const height = e.target.value;
        lineHeightValue.textContent = height;
        bookContent.style.lineHeight = height;
        saveSettings();
    });

    darkModeToggle.addEventListener('change', (e) => {
        e.target.checked ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');
        saveSettings();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && document.activeElement === searchInput) {
            performSearch();
        }
    });

    searchBtn.addEventListener('click', performSearch);
    searchNextBtn.addEventListener('click', () => navigateSearchResult(1));
    searchPrevBtn.addEventListener('click', () => navigateSearchResult(-1));
}

function handleFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const fileName = file.name.toLowerCase();
    if (fileName.endsWith('.txt')) {
        readTextFile(file);
    } else if (fileName.endsWith('.pdf')) {
        readPdfFile(file);
    } else if (fileName.endsWith('.epub')) {
        readEpubFile(file);
    }
}

function readTextFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const text = e.target.result;
        loadCustomBook(file.name, text);
    };
    reader.readAsText(file);
}

function readPdfFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        pdfjsLib.getDocument(data).promise.then(pdf => {
            let text = '';
            let pagePromises = [];
            for (let i = 1; i <= pdf.numPages; i++) {
                pagePromises.push(pdf.getPage(i).then(page => page.getTextContent()).then(content => {
                    return content.items.map(item => item.str).join(' ');
                }));
            }
            Promise.all(pagePromises).then(pages => {
                text = pages.join('\n');
                loadCustomBook(file.name, text);
            });
        }).catch(() => alert('Error reading PDF file'));
    };
    reader.readAsArrayBuffer(file);
}

function readEpubFile(file) {
    const reader = new FileReader();
    reader.onload = async (e) => {
        try {
            const data = e.target.result;
            const book = ePub(data);
            await book.ready;

            const spine = book.spine;
            const sectionPromises = [];

            spine.each(section => {
                sectionPromises.push(
                    book.load(section.href).then(doc => {
                        return doc.body.innerText || doc.body.textContent;
                    })
                );
            });

            const sections = await Promise.all(sectionPromises);
            const text = sections.join('\n\n');
            loadCustomBook(file.name, text);
        } catch (err) {
            console.error('EPUB Parsing Error:', err);
            alert('Error reading EPUB file. Please ensure it is a valid, unencrypted .epub file.');
        }
    };
    reader.readAsArrayBuffer(file);
}

function loadCustomBook(title, content) {
    currentBook = 'custom';
    bookProgress[currentBook] = 0;
    books.custom = { title: title.replace(/\.[^/.]+$/, ''), content: content };
    bookSelect.value = 'custom';
    loadBook('custom');
}


function loadBook(bookKey) {
    if (!books[bookKey]) return;
    currentBook = bookKey;

    // Sanitize progress: if it's an old index (>= 1), reset to 0
    let savedProgress = bookProgress[bookKey] || 0;
    scrollPosition = (savedProgress > 1) ? 0 : savedProgress;

    searchResults = [];
    currentSearchResultIndex = -1;
    updateSearchButtons();
    renderBook();
}

function performSearch() {
    const term = searchInput.value.trim().toLowerCase();
    if (!term) {
        searchResults = [];
        currentSearchResultIndex = -1;
        updateSearchButtons();
        renderBook();
        return;
    }

    renderBook(term);

    // Find all highlighted spans
    const highlights = bookContent.querySelectorAll('.highlight');
    if (highlights.length > 0) {
        searchResults = Array.from(highlights);
        currentSearchResultIndex = 0;
        highlights[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
        alert('Term not found in this book.');
        searchResults = [];
    }
    updateSearchButtons();
}

function navigateSearchResult(direction) {
    if (searchResults.length === 0) return;

    currentSearchResultIndex += direction;
    if (currentSearchResultIndex >= searchResults.length) currentSearchResultIndex = 0;
    if (currentSearchResultIndex < 0) currentSearchResultIndex = searchResults.length - 1;

    searchResults[currentSearchResultIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
    updateSearchButtons();
}

function updateSearchButtons() {
    searchNextBtn.disabled = searchResults.length <= 1;
    searchPrevBtn.disabled = searchResults.length <= 1;
}

function renderBook(searchTerm = '') {
    const book = books[currentBook];
    if (!book) return;

    let content = '';
    if (book.pages) {
        content = book.pages.join('\n\n');
    } else {
        content = book.content || 'No content';
    }

    if (searchTerm) {
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        bookContent.innerHTML = content.replace(regex, '<span class="highlight">$1</span>');
    } else {
        bookContent.textContent = content; // Using textContent for better performance and security
        bookContent.style.whiteSpace = 'pre-wrap'; // Ensure line breaks are preserved

        // Restore scroll position after a short delay to allow rendering
        setTimeout(() => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            window.scrollTo(0, scrollPosition * scrollHeight);
        }, 50);
    }

    updatePageCount();
    updateProgressBar();
}

function updatePageCount() {
    pageCount.textContent = `Reading: ${books[currentBook].title}`;
}

function updateProgressBar() {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollHeight <= 0) {
        progressFill.style.width = '0%';
        scrollPosition = 0;
        return;
    }

    const scrolled = window.scrollY;
    const progress = (scrolled / scrollHeight) * 100;
    progressFill.style.width = Math.min(100, Math.max(0, progress)) + '%';
    scrollPosition = scrolled / scrollHeight;
}

function saveSettings() {
    bookProgress[currentBook] = scrollPosition;
    const settings = {
        fontSize: fontSizeInput.value,
        lineHeight: lineHeightInput.value,
        darkMode: darkModeToggle.checked,
        currentBook: currentBook,
        bookProgress: bookProgress
    };
    localStorage.setItem('bookreaderSettings', JSON.stringify(settings));
}

function loadSettings() {
    const saved = localStorage.getItem('bookreaderSettings');
    if (saved) {
        const settings = JSON.parse(saved);
        fontSizeInput.value = settings.fontSize;
        fontSizeValue.textContent = settings.fontSize;
        bookContent.style.fontSize = settings.fontSize + 'px';

        lineHeightInput.value = settings.lineHeight;
        lineHeightValue.textContent = settings.lineHeight;
        bookContent.style.lineHeight = settings.lineHeight;

        if (settings.darkMode) {
            darkModeToggle.checked = true;
            document.body.classList.add('dark-mode');
        }

        bookProgress = settings.bookProgress || {};
        currentBook = settings.currentBook || 'alice';
        scrollPosition = bookProgress[currentBook] || 0;
        bookSelect.value = currentBook;
    }
}

init();
