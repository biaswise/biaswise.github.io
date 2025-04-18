// Lesson registry - maps lesson IDs to their data files
const lessonRegistry = {
    'empathy-gap': 'lessons/empathy-gap.js'
};

// JavaScript files for interactions
const interactionScripts = [
    'lessons/lesson-interactions.js'
];

// Get URL parameters to determine which lesson and part to load
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        lessonId: params.get('lesson') || 'empathy-gap', // Default to first lesson
        partId: params.get('part') || 'part1',           // Default to first part
        pageNumber: parseInt(params.get('page')) || 1    // Default to first page
    };
}

// Load lesson content dynamically
async function loadLessonContent() {
    const { lessonId, partId, pageNumber } = getUrlParams();
    
    try {
        // Dynamically import the lesson data
        await loadScript(lessonRegistry[lessonId]);
        
        // Load interaction scripts
        await Promise.all(interactionScripts.map(script => loadScript(script)));
        
        // After script loads, the lesson data should be available
        // The variable name is constructed based on the lesson ID
        const lessonData = window[`lesson_${lessonId.replace(/-/g, '_')}`];
        
        if (!lessonData) {
            throw new Error(`Lesson data for ${lessonId} not found`);
        }
        
        // Find the requested part
        const part = lessonData.parts.find(p => p.id === partId);
        
        if (!part) {
            throw new Error(`Part ${partId} not found in lesson ${lessonId}`);
        }
        
        // Update the page with the lesson content
        renderLessonContent(lessonData, part, pageNumber);
        
        // Dispatch event to notify that lesson content has been rendered
        document.dispatchEvent(new CustomEvent('lessonContentRendered'));
        
    } catch (error) {
        console.error('Error loading lesson content:', error);
        document.getElementById('lesson-content').innerHTML = `
            <div class="lesson-error">
                <h2>Error Loading Lesson</h2>
                <p>Sorry, we couldn't load the requested lesson content. Please try again later.</p>
                <p>Error: ${error.message}</p>
            </div>
        `;
    }
}

// Helper function to dynamically load a script
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// Render lesson content to the page
function renderLessonContent(lessonData, part, pageNumber) {
    // Update lesson metadata
    document.title = `BiasWise - ${lessonData.lessonTitle}: ${part.title}`;
    document.getElementById('lesson-number').textContent = lessonData.lessonNumber;
    document.getElementById('lesson-title').textContent = lessonData.lessonTitle;
    document.getElementById('lesson-part').textContent = `Part ${part.partNumber} of ${lessonData.totalParts}`;
    
    // Calculate total pages and current page across all parts
    let totalPages = 0;
    let currentPageOverall = 0;
    
    for (let i = 0; i < lessonData.parts.length; i++) {
        const currentPart = lessonData.parts[i];
        // If the part has pages, count them
        const partPageCount = currentPart.pages ? currentPart.pages.length : 1;
        totalPages += partPageCount;
        
        // Count pages before current part
        if (i < part.partNumber - 1) {
            currentPageOverall += partPageCount;
        }
    }
    
    // Add current page number within current part
    currentPageOverall += pageNumber;
    
    // Update progress bar based on pages instead of parts
    const progressPercent = (currentPageOverall / totalPages) * 100;
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = `${progressPercent}%`;
    
    // Insert the main content
    const contentElement = document.getElementById('lesson-content');
    
    // Handle pages if they exist, otherwise use the traditional content
    let content = part.content;
    let prevButtonData = part.prevButton;
    let nextButtonData = part.nextButton;
    
    if (part.pages && part.pages.length > 0) {
        // Find the requested page
        const page = part.pages.find(p => p.pageNumber === pageNumber) || part.pages[0];
        content = page.content;
        
        // Set up navigation buttons for pages
        if (pageNumber > 1) {
            // Not the first page, so we can go back to the previous page
            prevButtonData = { 
                text: "← Previous Page", 
                disabled: false, 
                url: `?lesson=${getUrlParams().lessonId}&part=${part.id}&page=${pageNumber - 1}` 
            };
        }
        
        if (pageNumber < part.pages.length) {
            // Not the last page in the part, go to next page
            nextButtonData = { 
                text: "Next Page →", 
                disabled: false, 
                url: `?lesson=${getUrlParams().lessonId}&part=${part.id}&page=${pageNumber + 1}` 
            };
        } else {
            // On the last page, go to next part
            nextButtonData = { 
                text: "Next Part →", 
                disabled: false, 
                url: `?lesson=${getUrlParams().lessonId}&part=part${part.partNumber + 1}` 
            };
        }

        if (part.partNumber === lessonData.totalParts) {
            nextButtonData = {
                text: "Finish",
                disabled: false,
                url: "index.html"
            };
        }
    }
    
    // Only display title and subtitle on the first page
    const titleHTML = pageNumber === 1 ? 
        `<h2>${part.title}</h2>
        <h3 class="lesson-subtitle">${part.subtitle}</h3>` : '';
    
    contentElement.innerHTML = `
        ${titleHTML}
        ${content}
    `;
    
    // Set up navigation buttons
    const prevButton = document.getElementById('prev-button');
    prevButton.textContent = prevButtonData.text;
    prevButton.href = prevButtonData.url;
    if (prevButtonData.disabled) {
        prevButton.classList.add('disabled');
    } else {
        prevButton.classList.remove('disabled');
    }
    
    const nextButton = document.getElementById('next-button');
    nextButton.textContent = nextButtonData.text;
    nextButton.href = nextButtonData.url;
    if (nextButtonData.disabled) {
        nextButton.classList.add('disabled');
    } else {
        nextButton.classList.remove('disabled');
    }
}

// Initialize the page when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Load lesson content
    loadLessonContent();
    
    // Mobile menu functionality
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            mainNav.classList.toggle('open');
            mobileMenuButton.classList.toggle('open');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.main-nav') && 
                !event.target.closest('.mobile-menu-button') &&
                mainNav.classList.contains('open')) {
                mainNav.classList.remove('open');
                mobileMenuButton.classList.remove('open');
            }
        });
        
        // Close menu when pressing escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && mainNav.classList.contains('open')) {
                mainNav.classList.remove('open');
                mobileMenuButton.classList.remove('open');
            }
        });
    }
}); 