/* ==========================================================================
   NexaCode Hub - Application Script Orchestrator
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    /* --- CMS Core Data Stores --- */
    const ROADMAP_DATA = [
        {
            title: "Learn Core Systems",
            tag: "MILESTONE 01 - COMPUTER ARCHITECTURE & CORE JS",
            skills: [
                "Understand runtime engines (V8, SpiderMonkey) and call stacks.",
                "Master memory allocation, garbage collection, and heap layouts.",
                "Determine algorithmic efficiency using Big O notation.",
                "Structure applications using raw pointer matrices, trees, and maps."
            ],
            techs: ["V8 Engine Runtime", "ESNext Javascript Specifications", "Memory Profiles"],
            duration: "2 Weeks (30 hrs/week)",
            outcome: "Solid understanding of software runtime limits, enabling high-performance script architecture."
        },
        {
            title: "Simulate Real Practice",
            tag: "MILESTONE 02 - PROFESSIONAL WORKSPACE SIMULATION",
            skills: [
                "Operate Git pipelines (interactive rebases, cherry-picks, merge resolutions).",
                "Construct unit and integration testing pipelines.",
                "Enforce code styles using custom lint, formatting scripts.",
                "Collaborate concurrently within unified team repositories."
            ],
            techs: ["Git VCS", "Jest Assertions", "ESLint / Prettier", "GitHub Actions CI"],
            duration: "2 Weeks (35 hrs/week)",
            outcome: "Collaborate inside clean workflows mimicking professional big-tech developer teams."
        },
        {
            title: "Build Real Products",
            tag: "MILESTONE 03 - FULLSTACK SOFTWARE ARCHITECTURE",
            skills: [
                "Compose database patterns, index keys, and query optimization structures.",
                "Architect secure APIs with authorization logic (JWT, OAuth2).",
                "Structure client state engines and cache pools.",
                "Build pixel-perfect, keyboard accessible frontend interfaces."
            ],
            techs: ["NodeJS", "PostgreSQL / Prisma", "Redis Cache", "React / Next.js"],
            duration: "4 Weeks (40 hrs/week)",
            outcome: "Deploy fully operational databases, backend endpoints, and premium user layouts."
        },
        {
            title: "Receive Rigorous Code Reviews",
            tag: "MILESTONE 04 - THE REFACTOR & AUDIT CYCLE",
            skills: [
                "Reduce complex nested loops into optimal map structures.",
                "Profile memory leaks and resolve layout reflow cycles.",
                "Sanitize routes against SQL injections, XSS, and CSRF vulnerabilities.",
                "Formulate self-documenting code naming clean architectures."
            ],
            techs: ["Chrome DevTools", "Performance Profilers", "Security Auditing Utilities"],
            duration: "2 Weeks (30 hrs/week)",
            outcome: "Understand refactoring loops. Evolve from writing working code to elite engineering code."
        },
        {
            title: "Deploy & Scale Systems",
            tag: "MILESTONE 05 - INFRASTRUCTURE & VIRTUALIZATION",
            skills: [
                "Deploy services inside isolated container systems.",
                "Configure edge caching layers and global Content Delivery Networks.",
                "Scale compute layers dynamically using serverless cloud workers.",
                "Initialize monitoring systems and alert logs."
            ],
            techs: ["Docker Containers", "Redis Clusters", "AWS Lambda / Cloudflare Workers", "Sentry Logs"],
            duration: "3 Weeks (35 hrs/week)",
            outcome: "Deliver applications to production networks, sustaining query loads without downtime."
        },
        {
            title: "Launch Your Career",
            tag: "MILESTONE 06 - TECHNICAL PLACEMENTS & PLACEMENT",
            skills: [
                "Structure technical resumes using performance metrics.",
                "Design systems verbally in whiteboarding simulations.",
                "Solve data structure drills under pressure.",
                "Negotiate startup option packages and base salaries."
            ],
            techs: ["System Design Canvas", "Algorithms Matrix", "Mock Interviews"],
            duration: "3 Weeks (25 hrs/week)",
            outcome: "Graduate into direct placement interviews at leading startups and technology companies."
        }
    ];

    const CODE_REVIEWS_DATA = {
        naming: {
            original: `// Student Version
function d(x, y) {
    let r = [];
    for(let i=0; i<x.length; i++) {
        let f = false;
        for(let j=0; j<y.length; j++) {
            if(x[i].id === y[j].id) {
                f = true;
            }
        }
        if(!f) {
            r.push(x[i]);
        }
    }
    return r;
}`,
            optimized: `/**
 * Returns elements present in source array but missing in compare array.
 * Optimized from O(N*M) time complexity to O(N+M) using Hash Set lookup.
 * @param {Array<Object>} sourceArray
 * @param {Array<Object>} compareArray
 * @returns {Array<Object>}
 */
function getDifferenceById(sourceArray, compareArray) {
    const compareIds = new Set(compareArray.map(item => item.id));
    return sourceArray.filter(item => !compareIds.has(item.id));
}`,
            feedback: "Variable naming changed to descriptive titles. Replaced nested loop search with Set lookup, reducing time complexity from quadratic O(N*M) to linear O(N+M)."
        },
        performance: {
            original: `// Student Version
function processData(arr) {
    let output = [];
    arr.forEach(val => {
        let doubled = val * 2;
        if (doubled > 10) {
            output.push(doubled);
        }
    });
    return output;
}`,
            optimized: `/**
 * Maps and filters array elements in a single pass.
 * Prevents redundant allocation cycles.
 * @param {Array<number>} numbers
 * @returns {Array<number>}
 */
function processData(numbers) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        const doubled = numbers[i] * 2;
        if (doubled > 10) {
            result.push(doubled);
        }
    }
    return result;
}`,
            feedback: "Replacing chained functions or callbacks inside heavy loops with a single-pass flat iteration yields up to 40% performance gains in execution-sensitive environments."
        },
        async: {
            original: `// Student Version
async function fetchAllData() {
    let users = await fetchUsers();
    let posts = await fetchPosts();
    let groups = await fetchGroups();
    return { users, posts, groups };
}`,
            optimized: `/**
 * Fetches assets concurrently using Promise.all
 * Triggers fetch tasks in parallel to bypass blocking waterfall.
 */
async function fetchAllDataConcurrently() {
    const [users, posts, groups] = await Promise.all([
        fetchUsers(),
        fetchPosts(),
        fetchGroups()
    ]);
    return { users, posts, groups };
}`,
            feedback: "Await statements written consecutively create sequential performance blocking waterfalls. Concurrent orchestration via Promise.all slices network load wait durations significantly."
        }
    };

    /* --- System State Settings --- */
    const isMobile = window.innerWidth <= 1024;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* --- Custom Cursor Physics --- */
    const cursorDot = document.getElementById('cursorDot');
    const cursorCircle = document.getElementById('cursorCircle');
    let mouseX = 0, mouseY = 0;
    let circleX = 0, circleY = 0;

    if (!isMobile) {
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.left = mouseX + 'px';
            cursorDot.style.top = mouseY + 'px';
        });

        // Lerping loop for cursor lagging circle
        const tickCursor = () => {
            const ease = 0.15;
            circleX += (mouseX - circleX) * ease;
            circleY += (mouseY - circleY) * ease;
            cursorCircle.style.left = circleX + 'px';
            cursorCircle.style.top = circleY + 'px';
            requestAnimationFrame(tickCursor);
        };
        requestAnimationFrame(tickCursor);

        // Bind hover actions
        const updateHoverState = () => {
            const hoverables = document.querySelectorAll('.hoverable, a, button, select, textarea, input');
            hoverables.forEach(elem => {
                elem.addEventListener('mouseenter', () => document.body.classList.add('cursor-hovering'));
                elem.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hovering'));
            });
        };
        updateHoverState();

        // Re-bind hoverables if DOM updates
        const observer = new MutationObserver(updateHoverState);
        observer.observe(document.body, { childList: true, subtree: true });
    }

    /* --- Boot Loader Sequence --- */
    const terminalLoader = document.getElementById('terminalLoader');
    const loaderOutput = document.getElementById('loaderOutput');

    const loaderLines = [
        { text: "$ boot NexaCode Hub", type: "system" },
        { text: "Initializing Developer Environment...", type: "normal" },
        { text: "Loading mentors...", type: "normal" },
        { text: "Loading roadmap...", type: "normal" },
        { text: "Loading projects...", type: "normal" },
        { text: "Loading opportunities...", type: "normal" },
        { text: "Progress:", type: "bar" },
        { text: "Welcome Developer.", type: "accent" }
    ];

    let currentLineIdx = 0;

    const printNextLine = () => {
        if (currentLineIdx >= loaderLines.length) {
            setTimeout(() => {
                terminalLoader.classList.add('fade-out');
                // Trigger hero typing after terminal loader vanishes
                setTimeout(startHeroTyping, 500);
            }, 800);
            return;
        }

        const line = loaderLines[currentLineIdx];
        const lineElem = document.createElement('div');
        lineElem.className = 'loader-line';

        if (line.type === "system") {
            lineElem.classList.add('system-line');
            lineElem.textContent = line.text;
            loaderOutput.appendChild(lineElem);
            currentLineIdx++;
            setTimeout(printNextLine, 300);
        } else if (line.type === "accent") {
            lineElem.classList.add('accent-line');
            lineElem.textContent = line.text;
            loaderOutput.appendChild(lineElem);
            currentLineIdx++;
            setTimeout(printNextLine, 400);
        } else if (line.type === "bar") {
            lineElem.classList.add('bar-line');
            lineElem.textContent = "████████████████ 100%";
            loaderOutput.appendChild(lineElem);
            currentLineIdx++;
            setTimeout(printNextLine, 500);
        } else {
            lineElem.textContent = `> ${line.text}`;
            loaderOutput.appendChild(lineElem);
            currentLineIdx++;
            setTimeout(printNextLine, 250);
        }

        loaderOutput.scrollTop = loaderOutput.scrollHeight;
    };

    // Auto-run terminal loader on entrance
    printNextLine();

    /* --- High Performance Background Canvas Net --- */
    const bgCanvas = document.getElementById('constellationCanvas');
    const bgCtx = bgCanvas.getContext('2d');
    let particles = [];
    const maxParticles = isMobile ? 30 : 75;
    const connectionDist = 120;

    const resizeBgCanvas = () => {
        bgCanvas.width = window.innerWidth;
        bgCanvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeBgCanvas);
    resizeBgCanvas();

    class Particle {
        constructor() {
            this.x = Math.random() * bgCanvas.width;
            this.y = Math.random() * bgCanvas.height;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.radius = Math.random() * 1.5 + 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Boundary collision
            if (this.x < 0 || this.x > bgCanvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > bgCanvas.height) this.vy *= -1;

            // Gravity pull toward cursor
            if (!isMobile && mouseX > 0 && mouseY > 0) {
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 180) {
                    this.x += dx * 0.008;
                    this.y += dy * 0.008;
                }
            }
        }

        draw() {
            bgCtx.beginPath();
            bgCtx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            bgCtx.fillStyle = '#38bdf8';
            bgCtx.fill();
        }
    }

    // Populate particles
    for (let i = 0; i < maxParticles; i++) {
        particles.push(new Particle());
    }

    const animateBackground = () => {
        if (prefersReducedMotion) return;
        bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            const p1 = particles[i];
            p1.update();
            p1.draw();

            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < connectionDist) {
                    const alpha = (1 - dist / connectionDist) * 0.12;
                    bgCtx.beginPath();
                    bgCtx.moveTo(p1.x, p1.y);
                    bgCtx.lineTo(p2.x, p2.y);
                    bgCtx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
                    bgCtx.lineWidth = 0.8;
                    bgCtx.stroke();
                }
            }
        }
        requestAnimationFrame(animateBackground);
    };

    if (!prefersReducedMotion) {
        requestAnimationFrame(animateBackground);
    }

    /* --- Simulated Hero Code Editor --- */
    const codeEditorContent = document.getElementById('codeEditorContent');
    const heroCode = `const cadet = {
  name: "You",
  skills: ["HTML", "CSS", "JS"],
  status: "Ready to accelerate",
  portfolio: []
};

// 1-on-1 daily reviews
async function nexaBootcamp() {
  while (cadet.skills.length < 15) {
    const skill = await attendSprint();
    cadet.skills.push(skill);
    await refactorAndBuild(cadet.portfolio);
  }
  cadet.status = "Production Engineer";
  console.log("Ready to scale!");
}

nexaBootcamp();`;

    let charIdx = 0;
    const startHeroTyping = () => {
        if (charIdx < heroCode.length) {
            const char = heroCode.charAt(charIdx);
            
            // Basic syntax color injection helper (regex replacement fallback to flat printing)
            codeEditorContent.textContent += char;
            charIdx++;
            setTimeout(startHeroTyping, 12);
        } else {
            // Apply syntax highlight
            highlightHeroCode();
        }
    };

    const highlightHeroCode = () => {
        let code = codeEditorContent.textContent;
        // Simple token matching replacements for beauty
        code = code.replace(/(const|let|function|async|await|while|return)/g, '<span class="token keyword">$1</span>');
        code = code.replace(/(nexaBootcamp|attendSprint|refactorAndBuild|console\.log)/g, '<span class="token function">$1</span>');
        code = code.replace(/("[^"]*")/g, '<span class="token string">$1</span>');
        code = code.replace(/(\/\/.*)/g, '<span class="token comment">$1</span>');
        code = code.replace(/(\b\d+\b)/g, '<span class="token number">$1</span>');
        codeEditorContent.innerHTML = code;
    };

    /* --- Interactive Sandbox Playground Challenge --- */
    const playgroundCode = document.getElementById('playgroundCode');
    const runTestBtn = document.getElementById('runTestBtn');
    const resetChallenge = document.getElementById('resetChallenge');
    const consoleOutput = document.getElementById('consoleOutput');
    const challengeStatus = document.getElementById('challengeStatus');

    const defaultSandboxCode = `// Nexa Sandbox Editor
// Challenge: Implement findPeak(arr)
// Write your code below and click "Run Sandbox Tests"

function findPeak(arr) {
    if (arr.length === 0) return -1;
    
    for (let i = 0; i < arr.length; i++) {
        const left = i === 0 ? -Infinity : arr[i - 1];
        const right = i === arr.length - 1 ? -Infinity : arr[i + 1];
        
        if (arr[i] >= left && arr[i] >= right) {
            return i;
        }
    }
    return 0;
}`;

    playgroundCode.value = defaultSandboxCode;

    resetChallenge.addEventListener('click', () => {
        playgroundCode.value = defaultSandboxCode;
        consoleOutput.innerHTML = '<div class="console-line system">// Console reset. Press "Run Sandbox Tests" to compile.</div>';
        challengeStatus.innerHTML = `
            <span class="status-indicator"></span>
            <span class="status-text">Awaiting solution...</span>
        `;
        challengeStatus.querySelector('.status-indicator').classList.remove('success');
    });

    const playSuccessTone = () => {
        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            
            osc.type = 'sine';
            // Play a cute developer startup double-beep
            osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
            gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
            osc.start();
            
            setTimeout(() => {
                osc.frequency.setValueAtTime(880, audioCtx.currentTime); // A5
            }, 100);
            
            setTimeout(() => {
                osc.stop();
                audioCtx.close();
            }, 300);
        } catch (e) {
            // Audio context disabled
        }
    };

    runTestBtn.addEventListener('click', () => {
        const code = playgroundCode.value;
        consoleOutput.innerHTML = '<div class="console-line system">> Compiling sandbox_solution.js...</div>';

        // Custom Analytics trigger mock
        trackAnalyticsEvent('Sandbox_Run_Clicked');

        setTimeout(() => {
            try {
                // Safe Function compilation wrapper
                const compiledFunc = new Function(`${code}; return findPeak;`)();
                
                if (typeof compiledFunc !== 'function') {
                    throw new Error("Function findPeak is not defined or is not a valid function.");
                }

                // Run Test Cases
                const testCases = [
                    { input: [1, 2, 3, 1], expected: [2], label: "findPeak([1, 2, 3, 1])" },
                    { input: [1, 2, 1, 3, 5, 6, 4], expected: [5, 1], label: "findPeak([1, 2, 1, 3, 5, 6, 4])" },
                    { input: [5, 4, 3, 2, 1], expected: [0], label: "findPeak([5, 4, 3, 2, 1])" }
                ];

                let allPassed = true;
                const logBuffer = [];

                testCases.forEach((tc, idx) => {
                    const result = compiledFunc(tc.input);
                    const passed = tc.expected.includes(result);

                    if (passed) {
                        logBuffer.push(`<div class="console-line success">✓ Test ${idx + 1} passed: ${tc.label} => Output ${result}</div>`);
                    } else {
                        allPassed = false;
                        logBuffer.push(`<div class="console-line error">✗ Test ${idx + 1} failed: ${tc.label} expected Peak Index in [${tc.expected.join(',')}], but got ${result}</div>`);
                    }
                });

                if (allPassed) {
                    logBuffer.push('<div class="console-line success">✓ Success: All compilation tests verified! You have bypassed Phase 1 review.</div>');
                    challengeStatus.innerHTML = `
                        <span class="status-indicator success"></span>
                        <span class="status-text" style="color: #34d399;">ALL TESTS PASSED</span>
                    `;
                    playSuccessTone();
                    trackAnalyticsEvent('Sandbox_Challenge_Completed');
                } else {
                    logBuffer.push('<div class="console-line error">✗ Sandbox assessment failed. Please inspect logic index constraints.</div>');
                    challengeStatus.innerHTML = `
                        <span class="status-indicator" style="background-color:#f87171;"></span>
                        <span class="status-text" style="color: #f87171;">TEST FAILURES ENCOUNTERED</span>
                    `;
                }

                consoleOutput.innerHTML += logBuffer.join('');
            } catch (err) {
                consoleOutput.innerHTML += `<div class="console-line error">Compilation Error: ${err.message}</div>`;
                challengeStatus.innerHTML = `
                    <span class="status-indicator" style="background-color:#f87171;"></span>
                    <span class="status-text" style="color: #f87171;">COMPILATION ERROR</span>
                `;
            }
            consoleOutput.scrollTop = consoleOutput.scrollHeight;
        }, 600);
    });

    /* --- Interactive Roadmap Milestone Actions --- */
    const roadmapNodes = document.querySelectorAll('.journey-node-row');
    const roadmapDetailOverlay = document.getElementById('roadmapDetailOverlay');
    const roadmapDetailClose = document.getElementById('roadmapDetailClose');
    const roadmapDetailContent = document.getElementById('roadmapDetailContent');

    // Scroll line filler calculation
    const roadmapLineFill = document.getElementById('roadmapLineFill');
    const journeySection = document.getElementById('journey');

    const updateRoadmapFill = () => {
        if (!journeySection) return;
        const rect = journeySection.getBoundingClientRect();
        const winHeight = window.innerHeight;
        
        // Compute active node states based on scroll intersection positions
        const progressStart = rect.top + window.scrollY;
        const progressEnd = rect.bottom + window.scrollY - winHeight * 0.4;
        const currentScroll = window.scrollY;

        let fillPct = 0;
        if (currentScroll > progressStart) {
            fillPct = ((currentScroll - progressStart) / (progressEnd - progressStart)) * 100;
        }
        fillPct = Math.max(0, Math.min(100, fillPct));
        roadmapLineFill.style.height = `${fillPct}%`;

        // Highlight passed nodes
        roadmapNodes.forEach(node => {
            const nodeIdx = parseInt(node.getAttribute('data-node'));
            const nodeRect = node.getBoundingClientRect();
            if (nodeRect.top < winHeight * 0.6) {
                node.classList.add('active');
            } else {
                node.classList.remove('active');
            }
        });
    };

    window.addEventListener('scroll', updateRoadmapFill);
    updateRoadmapFill();

    // Node click triggers overlay dialog details
    roadmapNodes.forEach(node => {
        const nodeContent = node.querySelector('.node-content');
        nodeContent.addEventListener('click', () => {
            const idx = parseInt(node.getAttribute('data-node'));
            const details = ROADMAP_DATA[idx];

            trackAnalyticsEvent('Roadmap_Node_Clicked', { node: details.title });

            roadmapDetailContent.innerHTML = `
                <div class="detail-content-wrapper">
                    <span class="detail-tag">${details.tag}</span>
                    <h3>${details.title}</h3>
                    
                    <div class="detail-section">
                        <h4>Skills Mastered</h4>
                        <ul>
                            ${details.skills.map(s => `<li>${s}</li>`).join('')}
                        </ul>
                    </div>

                    <div class="detail-section">
                        <h4>Technologies Involved</h4>
                        <div class="terminal-response stack-techs" style="margin-top: 10px; display: flex; flex-wrap: wrap; gap: 8px;">
                            ${details.techs.map(t => `<span style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); padding: 2px 8px; border-radius: 4px; font-size: 0.75rem;">${t}</span>`).join('')}
                        </div>
                    </div>

                    <div class="detail-section" style="margin-top: 20px;">
                        <h4>Expectation Outcomes</h4>
                        <p>${details.outcome}</p>
                    </div>

                    <div class="detail-section" style="display: flex; gap: 20px; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 15px; margin-top: 20px;">
                        <div>
                            <strong style="font-size:0.75rem; color: rgba(255,255,255,0.4);">ESTIMATED TIME</strong>
                            <p style="font-size:0.85rem; font-weight: 500; color: var(--accent-cyan);">${details.duration}</p>
                        </div>
                    </div>
                </div>
            `;
            roadmapDetailOverlay.classList.add('active');
        });
    });

    roadmapDetailClose.addEventListener('click', () => {
        roadmapDetailOverlay.classList.remove('active');
    });

    roadmapDetailOverlay.addEventListener('click', (e) => {
        if (e.target === roadmapDetailOverlay) {
            roadmapDetailOverlay.classList.remove('active');
        }
    });

    /* --- Interactive Split Screen Code Reviews --- */
    const crTabs = document.querySelectorAll('.cr-tab');
    const originalCodeContainer = document.getElementById('originalCodeContainer');
    const optimizedCodeContainer = document.getElementById('optimizedCodeContainer');
    const reviewerFeedbackText = document.getElementById('reviewerFeedbackText');

    const updateCodeReviewPanel = (category) => {
        const review = CODE_REVIEWS_DATA[category];
        originalCodeContainer.textContent = review.original;
        optimizedCodeContainer.textContent = review.optimized;
        reviewerFeedbackText.textContent = review.feedback;
    };

    crTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            crTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const cat = tab.getAttribute('data-challenge');
            updateCodeReviewPanel(cat);
            trackAnalyticsEvent('Code_Review_Tab_Switched', { category: cat });
        });
    });

    // Populate initial panel
    updateCodeReviewPanel('naming');

    /* --- Interactive Community Map Network Canvas --- */
    const commCanvas = document.getElementById('communityMapCanvas');
    const commCtx = commCanvas.getContext('2d');
    const networkCard = document.getElementById('networkCard');
    let commNodes = [];
    const commNodesCount = isMobile ? 12 : 24;

    const resizeCommCanvas = () => {
        if (!commCanvas) return;
        commCanvas.width = commCanvas.parentElement.clientWidth;
        commCanvas.height = commCanvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', resizeCommCanvas);
    resizeCommCanvas();

    const mockNames = [
        { name: "Sasha K.", role: "Fullstack Mentor (Ex-Stripe Architect)", code: "SK" },
        { name: "Tyler C.", role: "Cadet UI Engineer (Placed Vercel)", code: "TC" },
        { name: "Marcus A.", role: "Backend Architect (Ex-Netflix Lead)", code: "MA" },
        { name: "Krista L.", role: "System Engineer (Placed Linear)", code: "KL" },
        { name: "Elena V.", role: "Senior Backend Mentor (Ex-Stripe Staff)", code: "EV" },
        { name: "Mohamed E.", role: "Founder & CEO (STEM Innovator)", code: "ME" },
        { name: "Dev Sarah", role: "Junior Core Architect", code: "DS" },
        { name: "Mateo J.", role: "Cadet Developer", code: "MJ" }
    ];

    class CommNode {
        constructor() {
            this.x = Math.random() * (commCanvas.width - 100) + 50;
            this.y = Math.random() * (commCanvas.height - 100) + 50;
            this.vx = (Math.random() - 0.5) * 0.25;
            this.vy = (Math.random() - 0.5) * 0.25;
            this.radius = 18;
            
            // Randomly assign a profile card details
            this.profile = mockNames[Math.floor(Math.random() * mockNames.length)];
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < this.radius || this.x > commCanvas.width - this.radius) this.vx *= -1;
            if (this.y < this.radius || this.y > commCanvas.height - this.radius) this.vy *= -1;
        }

        draw() {
            // Draw outer neon glow ring
            commCtx.beginPath();
            commCtx.arc(this.x, this.y, this.radius + 3, 0, Math.PI * 2);
            commCtx.strokeStyle = 'rgba(56, 189, 248, 0.15)';
            commCtx.lineWidth = 1;
            commCtx.stroke();

            // Draw inner node
            commCtx.beginPath();
            commCtx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            commCtx.fillStyle = '#0f172a';
            commCtx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
            commCtx.lineWidth = 1.5;
            commCtx.fill();
            commCtx.stroke();

            // Draw letter initials
            commCtx.fillStyle = '#f8fafc';
            commCtx.font = '500 11px Inter';
            commCtx.textAlign = 'center';
            commCtx.textBaseline = 'middle';
            commCtx.fillText(this.profile.code, this.x, this.y);
        }
    }

    // Initialize community graph coordinates
    for (let i = 0; i < commNodesCount; i++) {
        commNodes.push(new CommNode());
    }

    const animateCommunityMap = () => {
        if (!commCanvas) return;
        commCtx.clearRect(0, 0, commCanvas.width, commCanvas.height);

        // Web connections lines
        for (let i = 0; i < commNodes.length; i++) {
            const n1 = commNodes[i];
            n1.update();

            for (let j = i + 1; j < commNodes.length; j++) {
                const n2 = commNodes[j];
                const dx = n1.x - n2.x;
                const dy = n1.y - n2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 160) {
                    const alpha = (1 - dist / 160) * 0.15;
                    commCtx.beginPath();
                    commCtx.moveTo(n1.x, n1.y);
                    commCtx.lineTo(n2.x, n2.y);
                    commCtx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
                    commCtx.stroke();
                }
            }
            n1.draw();
        }
        requestAnimationFrame(animateCommunityMap);
    };

    if (!prefersReducedMotion) {
        requestAnimationFrame(animateCommunityMap);
    }

    // Node hovering overlays card details
    commCanvas.addEventListener('mousemove', (e) => {
        const bounds = commCanvas.getBoundingClientRect();
        const mX = e.clientX - bounds.left;
        const mY = e.clientY - bounds.top;

        let activeNode = null;
        for (let i = 0; i < commNodes.length; i++) {
            const node = commNodes[i];
            const dx = mX - node.x;
            const dy = mY - node.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < node.radius + 5) {
                activeNode = node;
                break;
            }
        }

        if (activeNode) {
            networkCard.querySelector('.network-avatar').textContent = activeNode.profile.code;
            networkCard.querySelector('.network-name').textContent = activeNode.profile.name;
            networkCard.querySelector('.network-track').textContent = activeNode.profile.role;
            networkCard.classList.add('active');
            
            // Reposition card
            const cardWidth = networkCard.clientWidth;
            const cardHeight = networkCard.clientHeight;
            networkCard.style.left = Math.min(commCanvas.width - cardWidth - 10, Math.max(10, activeNode.x - cardWidth / 2)) + 'px';
            networkCard.style.top = Math.min(commCanvas.height - cardHeight - 10, Math.max(10, activeNode.y - cardHeight - 15)) + 'px';
        } else {
            networkCard.classList.remove('active');
        }
    });

    /* --- Success Transformations Stories Carousel --- */
    const slides = document.querySelectorAll('.story-slide');
    const carouselPrev = document.getElementById('carouselPrev');
    const carouselNext = document.getElementById('carouselNext');
    const carouselDotsContainer = document.getElementById('carouselDots');
    let currentSlideIdx = 0;

    // Build dots indicators
    slides.forEach((_, idx) => {
        const dot = document.createElement('div');
        dot.className = `carousel-dot hoverable ${idx === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => {
            goToSlide(idx);
        });
        carouselDotsContainer.appendChild(dot);
    });

    const updateCarouselDots = () => {
        const dots = document.querySelectorAll('.carousel-dot');
        dots.forEach((d, idx) => {
            if (idx === currentSlideIdx) d.classList.add('active');
            else d.classList.remove('active');
        });
    };

    const goToSlide = (idx) => {
        slides[currentSlideIdx].classList.remove('active');
        currentSlideIdx = idx;
        if (currentSlideIdx >= slides.length) currentSlideIdx = 0;
        if (currentSlideIdx < 0) currentSlideIdx = slides.length - 1;
        slides[currentSlideIdx].classList.add('active');
        updateCarouselDots();
    };

    carouselNext.addEventListener('click', () => {
        goToSlide(currentSlideIdx + 1);
        trackAnalyticsEvent('Testimonial_Slide_Next');
    });

    carouselPrev.addEventListener('click', () => {
        goToSlide(currentSlideIdx - 1);
        trackAnalyticsEvent('Testimonial_Slide_Prev');
    });

    /* --- Multi-step Wizard Application Form --- */
    const wizardForm = document.getElementById('applicationForm');
    const wizardSteps = document.querySelectorAll('.wizard-step');
    const stepIndicators = document.querySelectorAll('.step-lbl');
    const formProgress = document.getElementById('formProgress');
    
    const prevStepBtn = document.getElementById('prevStepBtn');
    const nextStepBtn = document.getElementById('nextStepBtn');
    const submitFormBtn = document.getElementById('submitFormBtn');
    const formSuccessOverlay = document.getElementById('formSuccessOverlay');
    const reviewBox = document.getElementById('reviewBox');
    
    let currentStep = 1;
    const maxSteps = 6;

    const validateStep = (step) => {
        const stepContainer = document.querySelector(`.wizard-step[data-step="${step}"]`);
        const inputs = stepContainer.querySelectorAll('[required]');
        let isValid = true;

        inputs.forEach(input => {
            const formGroup = input.closest('.form-group');
            if (input.type === 'email') {
                const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!re.test(input.value.trim())) {
                    isValid = false;
                    formGroup.classList.add('invalid');
                } else {
                    formGroup.classList.remove('invalid');
                }
            } else if (!input.value.trim()) {
                isValid = false;
                formGroup.classList.add('invalid');
            } else {
                formGroup.classList.remove('invalid');
            }
        });

        return isValid;
    };

    const populateReviewStep = () => {
        const name = document.getElementById('fullName').value;
        const email = document.getElementById('emailAddr').value;
        const levelSelect = document.getElementById('codingLevel');
        const level = levelSelect.options[levelSelect.selectedIndex]?.text || '';
        const trackSelect = document.getElementById('targetTrack');
        const track = trackSelect.options[trackSelect.selectedIndex]?.text || '';
        const goal = document.getElementById('careerTarget').value;
        const commitmentSelect = document.getElementById('commitmentType');
        const commitment = commitmentSelect.options[commitmentSelect.selectedIndex]?.text || '';
        
        reviewBox.innerHTML = `
            <div class="review-line">
                <span class="review-label">Full Name:</span>
                <span class="review-val">${name}</span>
            </div>
            <div class="review-line">
                <span class="review-label">Email Coordinate:</span>
                <span class="review-val">${email}</span>
            </div>
            <div class="review-line">
                <span class="review-label">Coding Experience:</span>
                <span class="review-val">${level}</span>
            </div>
            <div class="review-line">
                <span class="review-label">Selected Track:</span>
                <span class="review-val">${track}</span>
            </div>
            <div class="review-line">
                <span class="review-label">Commitment Level:</span>
                <span class="review-val">${commitment}</span>
            </div>
            <div class="review-line" style="flex-direction: column; gap: 4px; border:none; padding:0;">
                <span class="review-label">Target Career Metric:</span>
                <span class="review-val" style="margin-top:4px; line-height:1.4;">${goal}</span>
            </div>
        `;
    };

    const updateWizardUI = () => {
        // Toggle steps
        wizardSteps.forEach(step => {
            step.classList.remove('active');
            if (parseInt(step.getAttribute('data-step')) === currentStep) {
                step.classList.add('active');
            }
        });

        // Toggle indicators
        stepIndicators.forEach((lbl, idx) => {
            if (idx + 1 === currentStep) lbl.classList.add('active');
            else lbl.classList.remove('active');
        });

        // Progress bar percentage fill
        const progressPct = ((currentStep) / maxSteps) * 100;
        formProgress.style.width = `${progressPct}%`;

        // Toggle navigation buttons visibility
        if (currentStep === 1) {
            prevStepBtn.style.display = 'none';
        } else {
            prevStepBtn.style.display = 'inline-flex';
        }

        if (currentStep === maxSteps) {
            nextStepBtn.style.display = 'none';
            submitFormBtn.style.display = 'inline-flex';
            populateReviewStep();
        } else {
            nextStepBtn.style.display = 'inline-flex';
            submitFormBtn.style.display = 'none';
        }
    };

    nextStepBtn.addEventListener('click', () => {
        if (validateStep(currentStep)) {
            currentStep++;
            updateWizardUI();
            trackAnalyticsEvent('Application_Form_Next_Step', { step: currentStep });
        }
    });

    prevStepBtn.addEventListener('click', () => {
        currentStep--;
        updateWizardUI();
    });

    // Form submission
    wizardForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Final sanity check
        if (validateStep(maxSteps)) {
            // Trigger visual loader animation
            submitFormBtn.disabled = true;
            submitFormBtn.textContent = "Transmitting metrics...";
            
            trackAnalyticsEvent('Application_Form_Submitted');

            setTimeout(() => {
                formSuccessOverlay.classList.add('active');
                playSuccessTone();
            }, 1200);
        }
    });

    /* --- FAQ Accordions Toggle --- */
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all
            faqItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq-answer').style.maxHeight = null;
            });

            if (!isActive) {
                item.classList.add('active');
                const answer = item.querySelector('.faq-answer');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                trackAnalyticsEvent('FAQ_Accordion_Opened', { question: question.textContent.trim() });
            }
        });
    });

    /* --- Command Palette Controller (Ctrl + K) --- */
    const commandPalette = document.getElementById('commandPalette');
    const paletteTrigger = document.getElementById('paletteTrigger');
    const commandInput = document.getElementById('commandInput');
    const commandResults = document.getElementById('commandResults');

    const sectionsList = [
        { label: "Sandbox Coding Editor", command: "sandbox", url: "#playground" },
        { label: "Developer Streaks Dashboard", command: "dashboard", url: "#dashboard" },
        { label: "Journey Milestones Progression", command: "journey", url: "#journey" },
        { label: "Engineering Tracks Curriculum", command: "tracks", url: "#programs" },
        { label: "Code Review Comparison Standards", command: "reviews", url: "#reviews" },
        { label: "Developer Constellation Network", command: "community", url: "#community" },
        { label: "Our Story chapters", command: "story", url: "#story" },
        { label: "Application form Registration", command: "apply", url: "#apply" },
        { label: "FAQ accordion list", command: "faq", url: "#faq" }
    ];

    let selectedPaletteItemIdx = 0;

    const toggleCommandPalette = () => {
        const isActive = commandPalette.classList.contains('active');
        if (isActive) {
            commandPalette.classList.remove('active');
            commandInput.value = '';
        } else {
            commandPalette.classList.add('active');
            commandInput.focus();
            renderPaletteResults(sectionsList);
        }
    };

    paletteTrigger.addEventListener('click', toggleCommandPalette);

    document.addEventListener('keydown', (e) => {
        // Ctrl + K triggers modal opening
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            toggleCommandPalette();
        }

        // Close on escape
        if (e.key === 'Escape' && commandPalette.classList.contains('active')) {
            toggleCommandPalette();
        }
    });

    const renderPaletteResults = (items) => {
        commandResults.innerHTML = '';
        if (items.length === 0) {
            commandResults.innerHTML = '<div class="palette-item">No command parameters index matched...</div>';
            return;
        }

        items.forEach((item, idx) => {
            const elem = document.createElement('div');
            elem.className = `palette-item hoverable ${idx === selectedPaletteItemIdx ? 'selected' : ''}`;
            elem.innerHTML = `
                <span>${item.label}</span>
                <span class="category">${item.command}</span>
            `;
            elem.addEventListener('click', () => {
                executePaletteCommand(item);
            });
            commandResults.appendChild(elem);
        });
    };

    const executePaletteCommand = (item) => {
        toggleCommandPalette();
        const targetSection = document.querySelector(item.url);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            trackAnalyticsEvent('Palette_Command_Executed', { command: item.command });
        }
    };

    // Filter results on input keyup
    commandInput.addEventListener('input', () => {
        const val = commandInput.value.toLowerCase().trim();
        const filtered = sectionsList.filter(item => 
            item.label.toLowerCase().includes(val) || 
            item.command.toLowerCase().includes(val)
        );
        selectedPaletteItemIdx = 0;
        renderPaletteResults(filtered);
    });

    // Keyboard navigation within Palette
    commandInput.addEventListener('keydown', (e) => {
        const items = commandResults.querySelectorAll('.palette-item');
        if (items.length === 0) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedPaletteItemIdx = (selectedPaletteItemIdx + 1) % items.length;
            refreshSelectedPaletteItem(items);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedPaletteItemIdx = (selectedPaletteItemIdx - 1 + items.length) % items.length;
            refreshSelectedPaletteItem(items);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            const selectedItem = items[selectedPaletteItemIdx];
            const cmd = selectedItem.querySelector('.category').textContent;
            const target = sectionsList.find(i => i.command === cmd);
            if (target) executePaletteCommand(target);
        }
    });

    const refreshSelectedPaletteItem = (elements) => {
        elements.forEach((el, idx) => {
            if (idx === selectedPaletteItemIdx) el.classList.add('selected');
            else el.classList.remove('selected');
        });
    };

    /* --- Sticky Bottom Live Terminal Shell Console --- */
    const terminalDock = document.getElementById('terminalDock');
    const dockToggleBtn = document.getElementById('dockToggleBtn');
    const dockInput = document.getElementById('dockInput');
    const dockLines = document.getElementById('dockLines');
    const dockHeader = document.getElementById('dockHeader');

    // Toggle minimized status on click
    dockToggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        terminalDock.classList.toggle('minimized');
    });

    dockHeader.addEventListener('click', () => {
        terminalDock.classList.toggle('minimized');
    });

    const printDockLog = (txt, type = '') => {
        const line = document.createElement('div');
        line.className = 'dock-line';
        if (type === 'response') {
            line.innerHTML = `<span class="response">${txt}</span>`;
        } else {
            line.textContent = txt;
        }
        dockLines.appendChild(line);
        dockLines.scrollTop = dockLines.scrollHeight;
    };

    dockInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const inputVal = dockInput.value.trim().toLowerCase();
            dockInput.value = '';

            if (!inputVal) return;

            printDockLog(`nexa$ ${inputVal}`);
            trackAnalyticsEvent('Terminal_Command_Run', { command: inputVal });

            setTimeout(() => {
                switch(inputVal) {
                    case 'help':
                        printDockLog('Available terminal targets: sandbox, dashboard, roadmap, tracks, reviews, community, founders, apply, clear', 'response');
                        break;
                    case 'clear':
                        dockLines.innerHTML = '';
                        break;
                    case 'sandbox':
                        document.getElementById('playground').scrollIntoView({ behavior: 'smooth' });
                        printDockLog('Navigating shell viewport to Sandbox...', 'response');
                        break;
                    case 'dashboard':
                        document.getElementById('dashboard').scrollIntoView({ behavior: 'smooth' });
                        printDockLog('Navigating shell viewport to cadet dashboard...', 'response');
                        break;
                    case 'roadmap':
                        document.getElementById('journey').scrollIntoView({ behavior: 'smooth' });
                        printDockLog('Navigating shell viewport to journey blueprint...', 'response');
                        break;
                    case 'tracks':
                        document.getElementById('programs').scrollIntoView({ behavior: 'smooth' });
                        printDockLog('Navigating shell viewport to programs overview...', 'response');
                        break;
                    case 'reviews':
                        document.getElementById('reviews').scrollIntoView({ behavior: 'smooth' });
                        printDockLog('Navigating shell viewport to code review comparison...', 'response');
                        break;
                    case 'community':
                        document.getElementById('community').scrollIntoView({ behavior: 'smooth' });
                        printDockLog('Navigating shell viewport to developer web matrix...', 'response');
                        break;
                    case 'founders':
                        document.getElementById('founders').scrollIntoView({ behavior: 'smooth' });
                        printDockLog('Navigating shell viewport to executive founders quotes...', 'response');
                        break;
                    case 'apply':
                        document.getElementById('apply').scrollIntoView({ behavior: 'smooth' });
                        printDockLog('Opening target application registration portal...', 'response');
                        break;
                    default:
                        printDockLog(`Shell: command target '${inputVal}' not found. Type 'help' for configurations.`, 'error');
                }
            }, 200);
        }
    });

    /* --- Scroll Reveal Intersection Observers --- */
    const reveals = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(elem => {
        revealObserver.observe(elem);
    });

    /* --- Mobile Menu Overlay toggles --- */
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    menuToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    /* --- Mouse Card Tilt 3D Micro-interactions --- */
    const tiltCards = document.querySelectorAll('.card-tilt');

    if (!isMobile && !prefersReducedMotion) {
        tiltCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const width = rect.width;
                const height = rect.height;
                
                // Tilt rotation limits: +/- 8 degrees
                const rotateX = ((y / height) - 0.5) * -16;
                const rotateY = ((x / width) - 0.5) * 16;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
            });
        });
    }

    /* --- Primary Magnetic Button Pull --- */
    const magneticBtns = document.querySelectorAll('.btn-magnetic');

    if (!isMobile && !prefersReducedMotion) {
        magneticBtns.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - (rect.width / 2);
                const y = e.clientY - rect.top - (rect.height / 2);
                
                // Move button 35% toward cursor
                btn.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px)`;
            });

            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translate(0px, 0px)';
            });
        });
    }

    /* --- Production-ready Google Analytics Simulation --- */
    function trackAnalyticsEvent(eventName, eventParams = {}) {
        const time = new Date().toISOString();
        // Log telemetry metrics directly to virtual tracking buffers
        console.log(`[Telemetry Event] ${eventName} logged at ${time}`, eventParams);
        
        // Hook for actual Google Analytics, Segment, Mixpanel SDK configurations:
        if (window.gtag) {
            window.gtag('event', eventName, eventParams);
        }
    }

});
