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
            title: "Practical Applications",
            subtitle: "Applying Empathy Gap Knowledge in Real Life",
            partNumber: 2,
            prevButton: { text: "← Part 1", disabled: false, url: "?lesson=empathy-gap&part=part1&page=2" },
            nextButton: { text: "Part 3 →", disabled: false, url: "?lesson=empathy-gap&part=part3" },
            content: `
                <div class="lesson-intro">
                    <p> Some placeholder text.</p>
                </div>
            `
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