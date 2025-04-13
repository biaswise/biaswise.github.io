/**
 * Lesson Interactions - Handles interactive elements in lessons
 */

// Handle any single-choice questions with dynamic content
function initializeSingleChoiceQuestions() {
    // Find all single-choice questions on the page
    const questionForms = document.querySelectorAll('.single-choice-question');
    
    questionForms.forEach(form => {
        // Each form will have a unique ID or data attribute to identify it
        const questionId = form.closest('.lesson-question')?.id || 'generic-question';
        const radioButtons = form.querySelectorAll('input[type="radio"]');
        
        if (!radioButtons.length) return; // Skip if no radio buttons
        
        // Storage key based on question ID
        const storageKey = `question-selection-${questionId}`;
        
        // Store user selection in session storage to persist across page navigation
        function saveSelection(value) {
            sessionStorage.setItem(storageKey, value);
        }
        
        // Get saved selection from session storage
        function getSavedSelection() {
            return sessionStorage.getItem(storageKey);
        }
        
        // Add event listeners to radio buttons
        radioButtons.forEach(radio => {
            radio.addEventListener('change', function() {
                // Save the selection
                saveSelection(this.value);
                
                // Get target content ID from data attribute
                const targetId = this.getAttribute('data-target');
                if (targetId) {
                    showDynamicContent(targetId);
                }
            });
        });
        
        // Check if there's a saved selection
        const savedSelection = getSavedSelection();
        if (savedSelection) {
            // Try to select the radio button with the saved value
            const radioToSelect = form.querySelector(`input[value="${savedSelection}"]`);
            if (radioToSelect) {
                radioToSelect.checked = true;
                
                // Get target content ID from data attribute
                const targetId = radioToSelect.getAttribute('data-target');
                if (targetId) {
                    showDynamicContent(targetId);
                }
            }
        }
    });
}

// Handle showing/hiding dynamic content
function showDynamicContent(targetId) {
    // Find all dynamic content related to the same question group
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;
    
    // Find all sibling dynamic content
    const contentGroup = targetElement.getAttribute('data-group') || 'default-group';
    const relatedContents = document.querySelectorAll(`.dynamic-content[data-group="${contentGroup}"]`);
    
    // Hide all related content
    relatedContents.forEach(content => {
        content.style.display = 'none';
    });
    
    // Show the target content
    targetElement.style.display = 'block';
}

// Initialize all dynamic content sections
function initializeDynamicContent() {
    // Find all dynamic content sections
    const dynamicContents = document.querySelectorAll('.dynamic-content');
    
    // Group dynamic contents by their groups
    const contentGroups = {};
    
    dynamicContents.forEach(content => {
        const group = content.getAttribute('data-group') || 'default-group';
        if (!contentGroups[group]) {
            contentGroups[group] = [];
        }
        contentGroups[group].push(content);
    });
    
    // For each group, handle initial display
    Object.keys(contentGroups).forEach(group => {
        const contents = contentGroups[group];
        
        // Hide all initially
        contents.forEach(content => {
            content.style.display = 'none';
        });
        
        // Get the option that should be displayed
        // First look for an option that matches a saved selection
        let displayContent = null;
        
        for (const content of contents) {
            const option = content.getAttribute('data-option');
            if (option) {
                // Find if we have a form with this option selected
                const selectedRadio = document.querySelector(`input[value="${option}"]:checked`);
                if (selectedRadio) {
                    displayContent = content;
                    break;
                }
                
                // Check session storage for this group
                const storageKey = `question-selection-${group}`;
                const savedSelection = sessionStorage.getItem(storageKey);
                if (savedSelection === option) {
                    displayContent = content;
                    break;
                }
            }
        }
        
        // If no selected content found, show the first one
        if (!displayContent && contents.length > 0) {
            displayContent = contents[0];
        }
        
        // Show the chosen content
        if (displayContent) {
            displayContent.style.display = 'block';
        }
    });
}

// Initialize all lesson interactions
function initializeLessonInteractions() {
    initializeSingleChoiceQuestions();
    initializeDynamicContent();
}

// Attach to the DOM content loaded event
document.addEventListener('DOMContentLoaded', function() {
    // Need to run after lesson content is rendered
    setTimeout(initializeLessonInteractions, 100);
});

// Also run when the lesson content might have changed
document.addEventListener('lessonContentRendered', initializeLessonInteractions); 