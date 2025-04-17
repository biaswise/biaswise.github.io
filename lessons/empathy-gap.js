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
                                <p>Consider Michael, who every Sunday night plans his workout schedule for the week. With genuine enthusiasm, he blocks time for five early morning gym sessions. By Wednesday, he's only made it once, and by Friday, the gym bag sits untouched in his car. This pattern repeats week after week, leaving Michael frustrated with himself.</p>
                                <p>What Michael experiences isn't a character flaw—it's the empathy gap in action. When planning his workouts on Sunday, he's relaxed, well-rested, and motivated (a "cold" state). In this state, he can't accurately predict how he'll feel at 5:30 AM on Tuesday after a poor night's sleep or how exhausted he'll be after a stressful workday (various "hot" states).</p>
                                <p>Studies have found that people consistently overestimate how much exercise they'll do in the future by an average of 70%. This isn't dishonesty—it's our brain's inability to bridge the empathy gap between our planning self and our future experiencing self. The motivated planner genuinely can't imagine how compelling the snooze button will seem to their tired future self.</p>
                            </div>
                            
                            <div id="projects-content" class="dynamic-content" data-option="projects" data-group="empathy-gap-question">
                                <h3>Completing side projects or personal creative work</h3>
                                <p>Meet Emma, a marketing professional who dreams of writing a novel. Every few months, she creates detailed outlines and writing schedules, calculating how quickly she could finish a draft by writing just one hour each evening. She starts strong but within two weeks, the project stalls. Months later, she repeats the cycle with equal enthusiasm.</p>
                                <p>This pattern perfectly illustrates the empathy gap. When Emma plans her writing schedule, she's likely in a state of creative inspiration and possibility (a "cold" state). In this forward-looking mindset, she can't fully access how she'll feel after a mentally draining workday when Netflix and social media call her name (a "hot" state).   </p>
                                <p>Creative work requires mental energy, focus, and often, pushing through psychological resistance. Studies of creative professionals show that even the most accomplished writers and artists face similar struggles but develop systems that acknowledge and work around the empathy gap rather than assuming future motivation will match current enthusiasm.</p>
                                <p>The planning self, energized by creative vision, simply can't fully anticipate how differently the future self will experience the actual work required to bring that vision to life.</p>
                            </div>
                            
                            <div id="saving-content" class="dynamic-content" data-option="saving" data-group="empathy-gap-question">
                                <h3>Saving money instead of impulse spending</h3>
                                <p>Consider David, who carefully reviews his budget each month and commits to saving 20% of his income. With clear financial goals in mind, he feels confident in his plan. Yet three weeks later, browsing online during a stressful day, he impulsively purchases an expensive gadget he doesn't need, derailing his savings goal once again.</p>
                                <p>The empathy gap explains this financial disconnect perfectly. When David makes his budget, he's in a rational, forward-thinking state (a "cold" state). In this condition, he literally cannot fully access or predict how differently he'll feel when emotionally drained, socially influenced, or seeking comfort (various "hot" states that trigger spending).</p>
                                <p>Research in behavioral economics consistently shows that our financial decisions are heavily influenced by temporary emotional states. One study found that sad participants were willing to pay up to 300% more for the same item compared to those in neutral emotional states. The planning self—thinking clearly about future financial security—cannot truly empathize with the future self seeking immediate emotional relief through spending.</p>
                            </div>
                            
                            <div id="sleep-content" class="dynamic-content" data-option="sleep" data-group="empathy-gap-question">
                                <h3>Sticking to a bedtime routine for better sleep</h3>
                                <p>Imagine Jamie, who repeatedly commits to a consistent 10:30 PM bedtime to improve her sleep quality. Each morning, after another night of staying up too late, she recommits to her routine with genuine determination. Yet that evening, 10:30 PM comes and goes as she continues watching "just one more episode" or scrolling through social media until midnight.</p>
                                <p>This cycle demonstrates the empathy gap perfectly. When Jamie makes her bedtime plans in the morning, she's alert and experiencing the consequences of poor sleep (a "cold" state for this particular decision). However, she cannot fully access or predict how differently she'll feel at night when she's comfortable, engaged in entertaining content, and not experiencing sleepiness yet (a "hot" state).</p>
                                <p>Sleep researchers have documented this phenomenon extensively, finding that our morning self consistently overestimates our evening self's ability to choose long-term benefits (better sleep) over immediate rewards (entertainment). The morning planner, feeling the effects of sleep deprivation, simply cannot fully empathize with the evening self who will face very different motivations and desires.</p>
                            </div>
                        </section>
                    `
                },
                {
                    pageNumber: 3,
                    content: `
                        <section class="lesson-section">
                            <h3>The Empathy Gap in Everyday Life</h3>
                            <p>Before we explore strategies for managing the empathy gap, let's examine how this bias sneaks into various aspects of our daily lives. The more familiar you become with recognizing these patterns, the better equipped you'll be to address them. The following scenarios illustrate how frequently our present self misunderstands our future self across different contexts and situations. As you read these examples, consider which ones resonate with your own experiences—these are the moments where your empathy gap might be most pronounced.</p>
                            
                            <p><strong>The Morning Workout Promise</strong></p>
                            <p>After watching an inspiring fitness transformation video, you set your alarm for 5:30 AM to start a new exercise routine. When the alarm rings the next morning, your warm bed feels impossibly comfortable. "Just this once," you think, hitting snooze. Your motivated evening self couldn't truly understand how your groggy morning self would feel.</p>
                            
                            <p><strong>The Hunger Shopping Trap</strong></p>
                            <p>You decide to grocery shop after work to save time, confident you'll stick to your healthy shopping list. By the time you reach the store, you haven't eaten for hours. Suddenly, the frozen pizza and cookies seem far more appealing than the ingredients for that kale salad. Your well-fed planning self couldn't predict how your hungry shopping self would experience temptation.</p>

                            <p><strong>The Deadline Optimism</strong></p>
                            <p>You're assigned a three-week project and immediately plan to work on it steadily, finishing days before the deadline. Two and a half weeks later, you're pulling an all-nighter to complete it. Your organized, beginning-of-project self couldn't accurately anticipate how future-you would prioritize immediate tasks over long-term deadlines.</p>

                        </section>
                    `
                },  
                {
                    pageNumber: 4,
                    content: `
                        <section class="lesson-section">
                            <p><strong>The Social Media Limit</strong></p>
                            <p>After realizing you've spent too much time on social media, you decide to limit yourself to 30 minutes per day. That evening, feeling bored and slightly lonely, you find yourself scrolling for over two hours. Your determined, goal-setting self couldn't fully access how your lonely, understimulated self would crave connection and distraction.</p>

                            <p><strong>The Vacation Budgeting</strong></p>
                            <p>While planning your vacation, you create a careful daily budget. Once you're actually on vacation, surrounded by unique experiences and local specialties, you spend nearly double what you planned. Your practical, pre-vacation self couldn't truly understand how your experience-seeking vacation self would value immediate enjoyment over future financial stability.</p>

                            <p><strong>The Email Response</strong></p>
                            <p>Reading an upsetting email, you draft an angry response but decide to wait until morning before sending it. The next day, you're grateful for the delay and write something much more measured. Your emotional, reactive self couldn't predict how differently your calm, rested self would perceive the situation.</p>

                            <p><strong>The Habit Tracker</strong></p>
                            <p>After reading about habit formation, you download an app to track eight new daily habits simultaneously. Two weeks later, you've abandoned the app entirely. Your enthusiastic, system-creating self couldn't accurately predict how your busy, routine-following self would experience the cognitive load of tracking multiple new behaviors.</p>

                            <p><strong>The Alcohol Moderator</strong></p>
                            <p>Before heading to a party, you firmly decide to have only two drinks to avoid a hangover. Once there, surrounded by friends and good conversation, you lose count after four. Your sober, planning self couldn't fully access how your slightly intoxicated social self would make decisions about "just one more."</p>
                        </section>
                    `
                }
            ],
        },
        {
            id: "part3",
            title: "Part 3: Bridging the Gap - Practical Strategies",
            subtitle: " ",
            partNumber: 3,
            prevButton: { text: "← Back", disabled: false, url: "?lesson=empathy-gap&part=part2" },
            nextButton: { text: "Part 4 →", disabled: false, url: "?lesson=empathy-gap&part=part4" },
            pages: [
                {
                    pageNumber: 1,
                    content: `
                        <section class="lesson-section">
                            <p>Think of your present and future selves as two separate decision-makers with limited ability to communicate. Your current state creates a distortion field that makes it nearly impossible to accurately predict how your future self will feel and behave. Our goal is to build a reliable connection between these two versions of yourself—one that remains functional across different mental and physical states.</p>
                            <p> It's important to note that with the empathy gap—as with every cognitive bias—the goal isn't to completely overcome it. Instead, success comes from learning to recognize when it's happening, acknowledge its influence, and develop strategies to work with it rather than against it.</p>
                        </section
                    `
                },
                {
                    pageNumber: 2,
                    content: `
                        <section class="lesson-section">
                            <h3>Step 1: Recognize Your Patterns</h3>
                            <p>Whenever you find yourself planning something you've attempted before without success, pause and reflect. Ask yourself: "What makes me think this time will be different?" We often believe our current enthusiasm or determination will be enough, but this is precisely the empathy gap in action.</p>
                            <p>Identify your current state:</p>
                            <ul>
                                <li>Are you well-rested and energized?</li>
                                <li>Have you just eaten?</li>
                                <li>Are you in a positive, optimistic mood?</li>
                                <li>Are you particularly motivated after consuming inspiring content?</li>
                            </ul>
                        </section>
                    `
                },
                {
                    pageNumber: 3,
                    content: `
                        <section class="lesson-section">
                            <h3>Step 2: Practice State Simulation</h3>
                            <p>Consider Mark, a software developer who consistently underestimates how tired he'll be after work when making morning commitments. One day, he tried something different: before accepting an evening meeting, he sat quietly for a moment and vividly imagined himself at 6 PM—mentally walking through his typical end-of-day fatigue, the weight of decisions made throughout the day, and the desire to head home.</p>
                            <p>This simple practice of mental time travel significantly improved his decision-making accuracy.</p>
                            <p><strong>Practice Exercise: "Future State Immersion"</strong></p>
                            <ul>
                                <li>Close your eyes (for real, that helps) and imagine yourself in the future situation or try to remember a similar situation from the past</li>
                                <li>Think about your likely physical state (Will you be tired? Hungry?)</li>
                                <li>Consider your probable emotional state (Will you be stressed? Rushed?)</li>
                                <li>Make your decision from this imagined perspective</li>
                            </ul>
                        </section>
                    `
                },
                {
                    pageNumber: 4,
                    content: `
                        <section class="lesson-section">
                            <h3>Step 3: Create Environmental Supports</h3>
                            <p>Rather than relying solely on willpower, change your environment when in a "cold" state to support your future "hot" state self:</p>
                            <ul>
                                <li>Preparing healthy meals when you're not hungry</li>
                                <li>Setting up automatic savings transfers when you're feeling financially responsible</li>
                                <li>Laying out exercise clothes the night before when you're motivated</li>
                                <li>Using website blockers when you're committed to focus</li>
                                <li>Leaving your phone in another room before bedtime</li>
                            </ul>
                            <p>The key insight: Don't expect your future self to make the right choice in the moment—create conditions where the right choice becomes the easiest one.</p>
                        </section>
                    `
                },
                {
                    pageNumber: 5,
                    content: `
                        <section class="lesson-section">
                            <h3>Sum Up: The Three Questions Protocol</h3>
                            <p>Before making any significant decision or commitment, ask:</p>
                            <ul>
                                <li>"What state am I in right now?" (Calm? Excited? Tired? Hungry?)</li>
                                <li>"How might I feel about this in a different state?" (Use state simulation)</li>
                                <li>"What support can I put in place now to help my future self?"</li>
                            </ul>
                            <p>This simple practice creates a moment of awareness that can significantly reduce the empathy gap's impact on your decisions.</p>
                            <p>Remember: The goal isn't perfection. Even with these strategies, you'll still experience the empathy gap. Success comes from recognizing it more quickly, adjusting your expectations, and designing systems that work with—rather than against—this fundamental aspect of human psychology.</p>
                        </section>
                    `
                }
            ]
        },
        {
            id: "part4",
            title: "Part 4: Making it Real - Personal Application Workshop",
            subtitle: "Mastering the Empathy Gap in Daily Life",
            partNumber: 4,
            prevButton: { text: "← Back", disabled: false, url: "?lesson=empathy-gap&part=part4" },
            nextButton: { text: "Part 5 →", disabled: false, url: "?lesson=empathy-gap&part=part5" },
            pages: [
                {
                    pageNumber: 1,
                    content: `
                        <section class="lesson-section">
                            <p>TODO.</p>   
                        </section>
                    `
                }
            ]
        },
        {
            id: "part5",
            title: "Part 5: Summary - Key Takeaways",
            partNumber: 5,
            prevButton: { text: "← Back", disabled: false, url: "?lesson=empathy-gap&part=part4" },
            nextButton: { text: "Finish", disabled: false, url: "index.html#courses" },
            pages: [
                {
                    pageNumber: 1,
                    content: `
                        <section class="lesson-section">
                            <ul>
                                <li>The Empathy Gap is our inability to accurately predict how we'll feel and behave in future mental or emotional states different from our current one.</li>
                                <li>When in a "cold" state (calm, rational, well-fed), we cannot fully understand or predict our behavior in "hot" states (emotional, hungry, tired)—and vice versa.</li>
                                <li>We consistently overestimate our future self-control and underestimate how powerfully our changing states will influence our decisions and actions.</li>
                                <li>The empathy gap isn't a character flaw—it's a fundamental feature of how our brains work and affects everyone, regardless of willpower or intelligence.</li>
                                <li>Success doesn't come from eliminating the empathy gap but from:
                                    <ul>
                                        <li>Recognizing your personal patterns and vulnerable transitions</li>
                                        <li>Practicing state simulation before making commitments</li>
                                        <li>Creating environmental supports that help your future self follow through</li>
                                        <li>Regularly asking the Three Questions: "What state am I in now?", "How might I feel differently later?", and "What support can I put in place?"</li>
                                    </ul>
                                </li>
                                <li>Remember: The goal isn't perfect prediction but better communication between your planning self and your experiencing self—building a bridge that remains stable across changing states.</li>
                            </ul>
                        </section>
                    `
                }
            ]
        }
    ]
}; 