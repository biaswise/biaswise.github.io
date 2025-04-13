window.lesson_empathy_gap = {
    lessonNumber: "01",
    lessonTitle: "Empathy Gap",
    totalParts: 4,
    parts: [
        {
            id: "part1",
            title: "Part 1: The Power of Now",
            subtitle: "When Your Present Self Betrays Your Future Self",
            partNumber: 1,
            prevButton: { text: "← Back", disabled: true, url: "#" },
            nextButton: { text: "Next Part →", disabled: false, url: "?lesson=empathy-gap&part=part2" },
            pages: [
                {
                    pageNumber: 1,
                    content: `
                        <section class="lesson-section">
                            <p>Imagine Sarah, a dedicated professional who always keeps healthy snacks at her desk. One morning, after a satisfying breakfast, she confidently plans her day. "I'll have my apple at 3 PM," she thinks, certain that future-Sarah will appreciate this healthy choice. But when 3 PM arrives, Sarah is hungry and stressed from back-to-back meetings. The apple seems unsatisfying, and she finds herself walking to the vending machine for a chocolate bar instead.</p>
                            <p>This story leads us to our central question: Why do we so often make plans that we later abandon? The answer lies in what's called the empathy gap—our remarkable inability to understand how differently we might feel in another emotional or physical state.</p>
                        </section>
                    `
                },
                {
                    pageNumber: 2,
                    content: `
                        <section class="lesson-section">
                            <h3>The Empathy Gap</h3>
                            <p>Our brains operate differently under various physiological and emotional states, affecting not just our decisions but our very ability to predict our future behavior. Think of it like trying to pack for a trip to Antarctica while sitting in your living room—you might intellectually know it'll be cold, but your current comfortable state makes it nearly impossible to truly appreciate just how cold you'll feel.</p>
                            <p>Our present state acts like a pair of invisible glasses, coloring how we see everything—including our future selves. When we're in what researchers call a "cold" state (calm, rational, well-fed), we struggle to anticipate how we'll behave in "hot" states (emotional, hungry, tired).</p>
                            <p>The challenge goes both ways. We tend to believe our current mental state—whether calm or emotional—will persist longer than it actually does. When we're thinking clearly, we overestimate our future rationality. When we're emotional, we can't imagine returning to a cooler, more reasoned perspective. This blindness to the temporary nature of our mental states makes us believe that we will have a higher degree of control over our own behavior than we actually do, creating a significant disconnect between our intentions and our future actions.</p>
                        </section>

                        <div class="lesson-exercise">
                            <h3>Note</h3>
                            <p>While the empathy gap also affects how we understand others, this lesson focuses specifically on the empathy gap toward ourselves. Before we can understand others effectively, we must first recognize how this bias operates in our own decision-making.</p>
                        </div>
                    `
                }
            ],
        },
        {
            id: "part2",
            title: "Part 2: Understanding Your Empathy Gap",
            partNumber: 2,
            prevButton: { text: "← Part 1", disabled: false, url: "?lesson=empathy-gap&part=part1&page=2" },
            nextButton: { text: "Part 3 →", disabled: false, url: "?lesson=empathy-gap&part=part3" },
            pages: [
                {
                    pageNumber: 1,
                    content: `
                        <section class="lesson-section">
                            <p>Before we dive deeper, let's personalize this lesson to make it more relevant to your own experiences. The empathy gap affects us all, but it often shows up most clearly in specific areas of our lives.</p>
                            
                            <div class="lesson-question" id="empathy-gap-question">
                                <p><strong>Which of these areas do you find most challenging to maintain consistently, despite your best intentions?</strong></p>
                                <form class="single-choice-question">
                                    <div class="option">
                                        <input type="radio" id="diet" name="challenge-area" value="diet" data-target="diet-content">
                                        <label for="diet">Following a healthy diet consistently</label>
                                    </div>
                                    <div class="option">
                                        <input type="radio" id="exercise" name="challenge-area" value="exercise" data-target="exercise-content">
                                        <label for="exercise">Exercising regularly</label>
                                    </div>
                                    <div class="option">
                                        <input type="radio" id="projects" name="challenge-area" value="projects" data-target="projects-content">
                                        <label for="projects">Completing side projects or personal creative work</label>
                                    </div>
                                    <div class="option">
                                        <input type="radio" id="saving" name="challenge-area" value="saving" data-target="saving-content">
                                        <label for="saving">Saving money instead of impulse spending</label>
                                    </div>
                                    <div class="option">
                                        <input type="radio" id="sleep" name="challenge-area" value="sleep" data-target="sleep-content">
                                        <label for="sleep">Sticking to a bedtime routine for better sleep</label>
                                    </div>
                                </form>
                                <p></p>
                                <p>Choose the option that resonates most with your experience—the area where you often make plans with good intentions but struggle to follow through when the moment arrives.</p>
                            </div>
                        </section>
                    `
                },
                {
                    pageNumber: 2,
                    content: `
                       <section class="lesson-section">
                            <div id="diet-content" class="dynamic-content" data-option="diet" data-group="empathy-gap-question">
                                <h3>Following a healthy diet consistently</h3>
                                <p>Think about walking through a grocery store on a full stomach. The fresh produce section beckons, and you confidently fill your cart with vegetables for the week ahead. Your mind conjures images of colorful salads and nutrient-packed meals. But when Thursday evening arrives and you're exhausted from work, those same vegetables seem far less appealing than ordering takeout. What happened between your optimistic grocery shopping and that tired Thursday evening?</p>
                                <p>The empathy gap explains this disconnect perfectly. When you're well-fed and energized (a "cold" state), your brain simply cannot fully access how you'll feel when hungry and tired (a "hot" state). This isn't a failure of willpower—it's a fundamental limitation in how our brains process future emotional states.</p>
                                <p>Research consistently shows that people shopping while hungry buy significantly more high-calorie foods than those shopping after a meal. This isn't because they lack nutritional knowledge, but because their current physiological state blinds them to how differently they'll feel later. The well-fed planner can't truly empathize with the future hungry self who will face those vegetables with depleted decision-making energy..</p>
                            </div>
                            
                            <div id="exercise-content" class="dynamic-content" data-option="exercise" data-group="empathy-gap-question">
                                <h3>Exercising regularly</h3>
                                <p>Placeholder text for regular exercise content.</p>
                            </div>
                            
                            <div id="projects-content" class="dynamic-content" data-option="projects" data-group="empathy-gap-question">
                                <h3>Completing side projects or personal creative work</h3>
                                <p>Placeholder text for side projects content.</p>
                            </div>
                            
                            <div id="saving-content" class="dynamic-content" data-option="saving" data-group="empathy-gap-question">
                                <h3>Saving money instead of impulse spending</h3>
                                <p>Placeholder text for saving money content.</p>
                            </div>
                            
                            <div id="sleep-content" class="dynamic-content" data-option="sleep" data-group="empathy-gap-question">
                                <h3>Sticking to a bedtime routine for better sleep</h3>
                                <p>Placeholder text for sleep routine content.</p>
                            </div>
                        </section>
                    `
                }
            ],
        },
        {
            id: "part3",
            title: "Case Studies",
            subtitle: "Real-World Examples of the Empathy Gap",
            partNumber: 3,
            prevButton: { text: "← Back", disabled: false, url: "?lesson=empathy-gap&part=part2" },
            nextButton: { text: "Part 4 →", disabled: false, url: "?lesson=empathy-gap&part=part4" },
            content: `
                <div class="lesson-intro">
                    <p>Some placeholder text.</p>
                </div>
            `
        },
        {
            id: "part4",
            title: "Summary & Conclusion",
            subtitle: "Mastering the Empathy Gap in Daily Life",
            partNumber: 4,
            prevButton: { text: "← Back", disabled: false, url: "?lesson=empathy-gap&part=part3" },
            nextButton: { text: "Finish", disabled: false, url: "index.html#courses" },
            content: `
                <div class="lesson-intro">
                    <p>Some placeholder text.</p>
                </div>
            `
        }
    ]
}; 