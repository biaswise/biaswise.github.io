// Lesson registry - maps lesson IDs to their data files
const lessonRegistry = {
    'empathy-gap': 'lessons/empathy-gap.js'
};

// Get URL parameters to determine which lesson and part to load
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        lessonId: params.get('lesson') || 'empathy-gap', // Default to first lesson
        partId: params.get('part') || 'part1'           // Default to first part
    };
}

// Load lesson content dynamically
async function loadLessonContent() {
    const { lessonId, partId } = getUrlParams();
    
    try {
        // Dynamically import the lesson data
        await loadScript(lessonRegistry[lessonId]);
        
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
        renderLessonContent(lessonData, part);
        
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
function renderLessonContent(lessonData, part) {
    // Update lesson metadata
    document.title = `BiasWise - ${lessonData.lessonTitle}: ${part.title}`;
    document.getElementById('lesson-number').textContent = lessonData.lessonNumber;
    document.getElementById('lesson-title').textContent = lessonData.lessonTitle;
    document.getElementById('lesson-part').textContent = `Part ${part.partNumber} of ${lessonData.totalParts}`;
    
    // Update progress bar
    const progressPercent = (part.partNumber / lessonData.totalParts) * 100;
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = `${progressPercent}%`;
    
    // Insert the main content
    const contentElement = document.getElementById('lesson-content');
    contentElement.innerHTML = `
        <h1>${part.title}</h1>
        <h2 class="lesson-subtitle">${part.subtitle}</h2>
        ${part.content}
    `;
    
    // Set up navigation buttons
    const prevButton = document.getElementById('prev-button');
    prevButton.textContent = part.prevButton.text;
    prevButton.href = part.prevButton.url;
    if (part.prevButton.disabled) {
        prevButton.classList.add('disabled');
    } else {
        prevButton.classList.remove('disabled');
    }
    
    const nextButton = document.getElementById('next-button');
    nextButton.textContent = part.nextButton.text;
    nextButton.href = part.nextButton.url;
    if (part.nextButton.disabled) {
        nextButton.classList.add('disabled');
    } else {
        nextButton.classList.remove('disabled');
    }
}

// Initialize the page when DOM is ready
document.addEventListener('DOMContentLoaded', loadLessonContent); 