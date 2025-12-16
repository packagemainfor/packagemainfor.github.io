// Data Store
const data = {
    introduction: {
        title: "Welcome to Recall Theory",
        content: `
        <p style="font-size: 2.5em;">
    Go to <b>Technique Library</b> for actual application. 
</p>
            <p>This site exists for one simple reason: learning shouldn’t feel harder than it needs to be.</p>

<p>I built Recall Theory as a <strong>free, accessible resource</strong> to help people learn more effectively by understanding how memory actually works. Instead of relying on brute-force repetition or vague study advice, this project focuses on practical, evidence-backed ways to improve memorization and long-term retention.</p>

<p>Here you’ll find explanations of memory techniques, learning strategies, and tools - which I hope will help you personally.</p>

<p><strong>If learning has ever felt frustrating or inefficient, this is meant to help.</strong></p>
<p style="font-size: 0.85em; opacity: 0.7;">
    Questions, suggestions, or corrections? You can reach me at 
    <a href="mailto:tim@plox.space">tim@plox.space</a>.
</p>

        `
    },
    tools: [
        {
            name: "Anki",
            image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Anki-icon.svg",
            link: "https://apps.ankiweb.net/",
            description: [
                "Algorithmic spaced repetition scheduling based on the forgetting curve to maximize long-term retention",
                "Highly customizable card types, including basic, reversed, cloze deletion, image occlusion, and fully custom HTML/CSS templates",
                "Support for rich media: images, audio, video, LaTeX math, code blocks, and syntax highlighting",
                "Local-first data storage with optional cloud sync across desktop and mobile devices",
                "Advanced statistics and review analytics (retention rates, ease, interval growth, review time)",
                "Large ecosystem of community add-ons enabling features like FSRS scheduling, enhanced graphs, automation, and UI improvements",
                "Tagging, deck hierarchies, filtered decks, and custom study sessions for targeted review",
                "Open-source and extensible, allowing full control over data and long-term scalability for professional use"
            ]
        },
        {
            name: "Obsidian",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/10/2023_Obsidian_logo.svg",
            link: "https://obsidian.md/",
            description: [
                "Local-first knowledge base built on plain-text Markdown files for full data ownership and longevity",
                "Bidirectional links and backlinks that enable non-linear thinking and idea discovery",
                "Graph view visualization showing relationships between notes at multiple scales",
                "Highly extensible plugin ecosystem supporting Zettelkasten workflows, daily notes, task management, and spaced repetition integration",
                "Markdown-based formatting with support for embeds, callouts, math, diagrams, and code blocks",
                "Powerful search, filtering, and tagging for navigating large knowledge bases",
                "Custom themes and CSS snippets for full interface personalization",
                "Offline-first operation with optional sync solutions, making it resilient and future-proof"
            ]
        },
        {
            name: "NotebookLM",
            image: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/notebooklm.png",
            link: "https://notebooklm.google.com/",
            description: [
                "Upload multiple sources including PDFs, Google Docs, web URLs, YouTube videos, and audio files",
                "Chat interface that answers questions with citations linking directly to source material",
                "Audio Overviews that generate podcast-style discussions between two AI hosts about your documents",
                "Interactive Audio mode where you can join the conversation and ask questions in real-time",
                "Video Overviews that create visual explanations in multiple artistic styles for visual learning",
                "Flashcards, quizzes, and study guides for active learning and retention",
                "Interactive Mind Maps showing connections and relationships between concepts",
                "Auto-generate briefing documents, summaries, FAQs, timelines, and blog posts from sources",
                "Slide Deck generation that transforms sources into full presentations",
                "Infographic creation for visual summaries of uploaded content",
                "Customizable AI personas and response styles to adapt tone and behavior",
                "Goal-setting for notebooks to tailor responses to specific needs or use cases",
                "Large context window for analyzing extensive document collections simultaneously",
                "Cross-document synthesis for finding patterns and connections across multiple sources",
                "All responses grounded in your sources with citations to prevent hallucinations",
                "Shareable notebooks with collaboration features and usage analytics",
                "Privacy-focused with data not used for AI model training",
                "Multimodal understanding of text, images, and graphs within documents"
            ]
        }


    ],
    theory: [
        {
            title: "Synaptic Plasticity & LTP",
            summary: "Memory is not static; it is the physical restructuring of the brain.",
            details: `
                <p><strong>Long-Term Potentiation (LTP)</strong> is the persistent strengthening of synapses based on recent patterns of activity. It is input-specific: it does not strengthen the entire neuron, but only the specific synapses that were active.</p>
                <p><strong>Associativity:</strong> If a weak input (a new, fragile memory) is stimulated simultaneously with a strong input (a well-established memory), the weak input acquires strength. This cellular phenomenon underpins the cognitive strategy of <em>elaboration</em>—linking new information to existing knowledge.</p>
            `
        },
        {
            title: "Systems Consolidation",
            summary: "Moving memories from temporary to permanent storage.",
            details: `
                <p>The hippocampus acts as a temporary buffer for new information. <strong>Systems consolidation</strong> is the process of transferring these memories to the neocortex for permanent storage.</p>
                <p>This happens primarily during <strong>Slow Wave Sleep (SWS)</strong>, where the hippocampus replays neural firing patterns 20x faster than real-time to 'teach' the cortex. Disruption of this replay (e.g., sleep deprivation) arrests consolidation and leads to memory decay.</p>
            `
        },
        {
            title: "The Forgetting Curve",
            summary: "Without review, the majority of learned information is lost within 24 hours.",
            details: "However, each subsequent review alters the slope of the curve, slowing the rate of decay. This acts as the mathematical basis for Spaced Repetition."
        },
        {
            title: "Active Recall & Testing Effect",
            summary: "The act of retrieval itself strengthens memory.",
            details: `
                <p>Passive review (re-reading) is inefficient. <strong>Active Recall</strong> (deliberately retrieving information without aid) is highly potent.</p>
                <p><strong>The Testing Effect:</strong> Each time a memory is retrieved, it becomes liable and is reconsolidated, often with greater strength and additional retrieval routes. Errors trigger dopamine release upon correction, reinforcing the correct path.</p>
            `
        },
        {
            title: "Dual Coding Theory",
            summary: "Combining verbal and visual processing doubles retention odds.",
            details: "Proposed by Allan Paivio, this suggests the brain has separate channels for verbal and visual information. Encoding a concept with both text and imagery creates two independent memory traces. If one decays, the other remains."
        },
        {
            title: "Expertise Reversal Effect",
            summary: "Instructional methods must adapt to the learner's level.",
            details: `
                <p><strong>Novices</strong> benefit from worked examples and explicit guidance (scaffolding). <strong>Experts</strong> find this redundant and distracting (extraneous cognitive load), performing better with open-ended problem solving.</p>
                <p><em>Implication:</em> As you master a topic, switch from guided tutorials to independent practice and self-testing.</p>
            `
        },
        {
            title: "Interleaving & Instructional Design",
            summary: "Struggle that forces discrimination builds durable skill.",
            details: `
        <p><strong>Interleaving</strong> mixes related problem types rather than practicing them in blocks. This forces learners to identify underlying structures and improves transfer.</p>
        <p>Learning effectiveness depends on expertise level. <strong>Novices</strong> benefit from worked examples and high scaffolding, while <strong>experts</strong> perform better with reduced guidance—an effect known as <em>expertise reversal</em>.</p>
    `
        }, {
            title: "Physiological Modulators of Memory",
            summary: "Biology sets the ceiling for cognition.",
            details: `
        <p><strong>Sleep</strong>, <strong>aerobic exercise</strong>, and <strong>rest</strong> directly influence plasticity and consolidation. Exercise performed after learning enhances long-term retention, while intense multitasking during encoding can impair it.</p>
        <p><strong>Non-Sleep Deep Rest (NSDR)</strong> sessions shortly after learning can accelerate consolidation. Neurochemicals such as dopamine and BDNF modulate learning efficiency, linking motivation, movement, and memory.</p>
    `
        }, {
            title: "Limitations & Non-Transfer Effects",
            summary: "Not all training generalizes.",
            details: `
        <p>Some popular techniques show limited real-world transfer. For example, <strong>dual n-back</strong> improves performance on the trained task but does not reliably increase general intelligence.</p>
        <p>Speed-reading, hypnopaedic learning, and similar methods lack strong evidence for deep encoding. Emotional arousal follows a <em>Goldilocks principle</em>: moderate levels enhance memory, while extreme stress disrupts consolidation.</p>
    `
        }, {
            title: "Auditory vs Visual Information Processing",
            summary: "The brain encodes sound and sight differently, each with distinct strengths and limits.",
            details: `
        <p><strong>Visual information</strong> is processed in parallel and excels at spatial relationships, structure, and pattern recognition. Because large portions of the cortex are devoted to vision, visual material tends to be encoded more richly and remembered longer—especially when it is spatially organized or image-based.</p>

        <p><strong>Auditory information</strong> is processed sequentially over time. Speech and sound unfold linearly, which makes them well-suited for narratives, explanations, and emotional nuance, but more vulnerable to loss if attention lapses even briefly.</p>

        <p><strong>Persistence advantage:</strong> Visual memories often benefit from greater durability due to spatial anchoring and imagery, while auditory memories rely more heavily on rehearsal and repetition to maintain strength.</p>

        <p><strong>Dual Coding:</strong> When auditory explanations are paired with visual representations, retention improves significantly. The information is stored across partially independent neural systems, increasing the probability of successful retrieval.</p>

        <p><strong>Cognitive load considerations:</strong> Poorly designed visuals can overwhelm working memory, just as dense or rapid speech can exceed auditory processing capacity. Optimal learning distributes information across modalities without redundancy.</p>

        <p><strong>Practical implication:</strong> Use visuals for structure, relationships, and memory anchors; use audio for sequence, causality, and emphasis. Combining both—rather than favoring one exclusively—produces the most robust learning.</p>
    `
        },

        {
            title: "Cognitive Load Theory",
            summary: "Memory has a limited bottleneck. Manage the load.",
            details: `
        <ul>
            <li><strong>Intrinsic Load:</strong> The inherent difficulty of the material (manageable).</li>
            <li><strong>Extraneous Load:</strong> Unnecessary distractions or poor formatting (eliminate this).</li>
            <li><strong>Germane Load:</strong> The effort required for true learning and schema formation (maximize this).</li>
        </ul>
    `
        },
        {
            title: "Mind map",
            summary: `<a href="https://cdn.discordapp.com/attachments/999779723452370975/1450176446042734754/NotebookLM_Mind_Map_1.png?ex=6941958f&is=6940440f&hm=cd3a115cb66e54b68ff41fd8b8d5f61e4aa95f7c546ade56db25df40a5d6106d&" target="_blank">Visual overview of the memory technique hierarchy.</a>`,
            link: "https://cdn.discordapp.com/attachments/999779723452370975/1450176446042734754/NotebookLM_Mind_Map_1.png?ex=6941958f&is=6940440f&hm=cd3a115cb66e54b68ff41fd8b8d5f61e4aa95f7c546ade56db25df40a5d6106d&",
            target: "_blank"
        },
        {
            title: "Distilled Notes",
            summary: `<a href="https://cdn.discordapp.com/attachments/999779723452370975/1450180609682182254/message.txt?ex=69419970&is=694047f0&hm=bf460d09328c0454f2c525edff42bbd9e7dce5f0c41de646290e52a4aa59be89&" target="_blank">The concentrated core information from the research text.</a>`,
            link: "https://cdn.discordapp.com/attachments/999779723452370975/1450180609682182254/message.txt?ex=69419970&is=694047f0&hm=bf460d09328c0454f2c525edff42bbd9e7dce5f0c41de646290e52a4aa59be89&",
            target: "_blank"
        },
        {
            title: "Gemini Research",
            summary: `<a href="https://gemini.google.com/share/d8dabecb9b33" target="_blank">The full conversational log and raw data extraction.</a>`,
            link: "https://gemini.google.com/share/d8dabecb9b33",
            target: "_blank"
        }

    ],
    techniqueLibrary: [

        {
            name: "Associative Anchoring (Elaboration)",
            summary: "Leveraging synaptic plasticity by pairing a weak input (new memory) with a strong input (established memory).",
            application: "Explicitly link new, fragile concepts to well-established knowledge you already possess. This allows the 'weak' new signal to acquire strength from the 'strong' existing pathway.",
            rank: 8
        },
        {
            name: "Sleep Consolidation Protocol",
            summary: "Protecting the 'offline' states required for systems consolidation and neural replay.",
            application: "Prioritize slow-wave sleep immediately following heavy learning. Do not forcibly wake during cycles, as this arrests the consolidation process where the hippocampus 'teaches' the cortex at 20x speed.",
            rank: 9
        },
        {
            name: "The Testing Effect",
            summary: "Using testing as a learning event, not just an assessment.",
            application: "Engage in retrieval practice frequently. Each retrieval reconsolidates the memory, often adding new retrieval routes and strengthening the trace more than re-studying would.",
            rank: 9
        },
        {
            name: "Fluency Illusion Avoidance",
            summary: "Overcoming the false sense of mastery that comes from passive review.",
            application: "Recognize that ease of reading (fluency) does not equal memory retention. If material feels 'easy' to read, assume you are falling for the illusion and switch to Active Recall to test true retention.",
            rank: 6
        },
        {
            name: "Synaptic Precision Review",
            summary: "Targeting specific inputs to strengthen specific synapses (LTP is input-specific).",
            application: "Avoid vague, passive reviews which fail to trigger specific synapses. Instead, focus on exact, granular details during review to strengthen the specific memory trace.",
            rank: 7
        },
        {
            name: "Sobriety Encoding",
            summary: "Avoidance of alcohol to prevent the inhibition of Long-Term Potentiation (LTP).",
            application: "Abstain from alcohol during and after learning phases. Alcohol physically prevents the induction of LTP, making it impossible for the brain to encode short-term data into long-term storage.",
            rank: 4
        },


        {
            name: "Nicotine Utilization (Caution)",
            summary: "Using nicotine to potentially improve alertness and working memory.",
            application: "May be used to improve alertness and reduce brain inflammation, though risks of addiction must be weighed. (Note: Listed as a biological factor affecting memory).",
            rank: 6
        },
        {
            name: "Stimulant Modulation",
            summary: "Managing stimulant intake to avoid over-learning and neurotoxicity while still receiving the benefits.",
            application: "Use stimulants cautiously for focus, but be aware that aggressive use (amphetamines) can cause 'over-learning' of wrong cues, neurotoxicity, and impaired cognitive flexibility.",
            rank: 7
        }, {
            name: "Method of Loci (Memory Palace)",
            summary: "The gold standard of mnemonic systems. Associate items with physical locations.",
            application: "Create a vivid visual journey through a familiar place. Place images of items at specific 'loci'. walk the path to recall. Combine with the Von Restorff effect (make images bizarre) for better retention.",
            rank: 10
        },
        {
            name: "Spaced Repetition (SRS)",
            summary: "Reviewing material at increasing intervals just before you forget it.",
            application: "Use algorithms like FSRS (Free Spaced Repetition Scheduler) or SM-2 (Anki). FSRS adapts to your specific forgetting curve and is ~25% more efficient than older static algorithms.",
            rank: 10
        },
        {
            name: "Interleaving",
            summary: "Mixing related but distinct topics during study sessions.",
            application: "Instead of 'blocked practice' (AAABBB), use 'interleaved practice' (ABCABC). It forces the brain to constantly reload problem parameters and identify the correct strategy, known as 'discriminative contrast'.",
            rank: 9
        },
        {
            name: "The Major System",
            summary: "A phonetic code converting numbers (0-9) into consonant sounds.",
            application: "Used to encode numbers into words and images. 0=s/z, 1=t/d, 2=n, 3=m, 4=r, 5=L, 6=j/sh, 7=k/g, 8=f/v, 9=p/b. Example: 32 = M-N = Moon.",
            rank: 7
        },
        {
            name: "PAO System (Person-Action-Object)",
            summary: "High-density data compression for numbers.",
            application: "Assign a Person, Action, and Object to every number 00-99. To memorize 6 digits (e.g., 15-32-71), combine P(15)-A(32)-O(71) into one scene: Einstein (15) Throwing (32) a Diamond (71).",
            rank: 7
        },
        {
            name: "Elaborative Interrogation",
            summary: "Asking 'Why?' and 'How?' to integrate new facts.",
            application: "Don't just accept a fact. Generate an explanation for why it is true. This links new info to your existing semantic network.",
            rank: 9
        },
        {
            name: "Zettelkasten (Smart Notes)",
            summary: "A system for connecting thoughts, not just storing them.",
            application: "Create 'atomic' notes—one idea per note, self-contained. Link notes together to create a web of knowledge. Focus on connection over categorization.",
            rank: 7
        },
        {
            name: "Incremental Reading",
            summary: "Applying spaced repetition to the reading process.",
            application: "Load articles into a priority queue. Read in short bursts, extract key points, and letting the system reschedule the rest. Turns passive reading into active processing.",
            rank: 7
        },
        {
            name: "TMR (Targeted Memory Reactivation)",
            summary: "Cueing memories during sleep.",
            application: "Associate a sound/smell with learning while awake. Replay that cue quietly during Slow Wave Sleep to trigger neural replay and strengthen consolidation. Highly experimental but promising.",
            rank: 8
        }, {
            name: "The Generation Effect",
            summary: "Information is better remembered if it is generated from your own mind rather than simply read.",
            application: "When reviewing, do not read the solution first. Force yourself to generate an answer, even if it's a guess. The cognitive effort of generation creates a 'hook' for the correct answer to attach to.",
            rank: 9
        },
        {
            name: "Learn by Teaching (The Protégé Effect)",
            summary: "The psychological phenomenon where expecting to teach information results in significantly higher retention and deeper processing than studying for a test.",
            application: "Prepare the material as if you must lecture on it tomorrow. Actually teach it to a peer, a camera, or an empty room. The social pressure and need to structure information linearly for an audience forces you to identify and repair your own knowledge gaps immediately.",
            rank: 10
        },
        {
            name: "Free Recall",
            summary: "Writing down everything you know about a topic without cues or prompts.",
            application: "Immediately after a lecture or reading a chapter, take a blank sheet of paper and write down everything you can remember. Do not look at notes. This reveals your true knowledge gaps instantly.",
            rank: 8
        },
        {
            name: "Dual Coding",
            summary: "Combining verbal and visual representations increases the chance of retrieval.",
            application: "Do not just write text notes. Create a diagram, chart, or symbol next to the text. This stores the information in two separate brain regions (visual and verbal), doubling the potential retrieval pathways.\n And importantly, hear what you're reading!",
            rank: 9
        },
        {
            name: "Von Restorff Effect (Isolation Effect)",
            summary: "Items that stand out or are bizarre are more likely to be remembered than blended items.",
            application: "When visualizing concepts (especially in a Memory Palace), make the imagery violent, sexual, or absurdly large. The brain prioritizes 'novelty' and 'threat' signals over mundane data.",
            rank: 7
        },
        {
            name: "Cloze Deletion",
            summary: "Removing specific keywords to force context-based retrieval.",
            application: "Create flashcards where key concepts are omitted (e.g., 'The ____ is the powerhouse of the cell'). This is faster than Q&A and forces you to process the context of the sentence.",
            rank: 8
        },
        {
            name: "Distillation (The Feynman Technique)",
            summary: "Deep processing through radical simplification.",
            application: "Explain the concept as if teaching it to a 5-year-old. Avoid jargon completely. If you cannot simplify it, you do not understand it. This forces you to reconstruct the idea from first principles.",
            rank: 9
        },
        {
            name: "Non-Sleep Deep Rest (NSDR)",
            summary: "A protocol to accelerate neuroplasticity and recovery without requiring full sleep.",
            application: "Perform a 10-20 minute 'Yoga Nidra' or deep relaxation script immediately after an intense learning bout. This engages the parasympathetic nervous system and facilitates rapid consolidation of the just-learned material.",
            rank: 8
        },
        {
            name: "Ultralearning (Metalearning, Directness, Drill)",
            summary: "A self-directed framework for aggressive skill acquisition.",
            application: "1. Metalearning: Map out 'how' to learn the subject first as this is vastly differing. 2. Directness: Do the thing you want to learn (don't study grammar; speak the language). 3. Drill: Isolate your weakest link and practice it.",
            rank: 9
        },
        {
            name: "Investing in Loss",
            summary: "Sacrificing short-term ego/performance for long-term growth.",
            application: "Intentionally put yourself in difficult situations where you will fail (e.g., speaking a language before you are ready). The emotional sting of failure creates a high-priority memory event for the correction.",
            rank: 8
        },
        {
            name: "Challenge-Skill Balance (Flow State)",
            summary: "Operating at the edge of ability (approx. 4% beyond current skill) to maintain high attention.",
            application: "Constantly adjust the difficulty. If you are bored, increase the speed or complexity. If you are anxious, lower it slightly. You must stay in the 'struggle' zone to trigger acetylcholine release for focus.",
            rank: 7
        },
        {
            name: "Feedback Loops",
            summary: "Shortening the time between action and correction prevents encoding errors.",
            application: "Dopamine is released upon error correction. Do not wait days for a grade. Use answer keys, code compilers, or AI tutors to get immediate feedback on your performance. The faster the correction, the less likely you are to memorize the mistake.",
            rank: 9
        },
        {
            name: "Rubber Duck Debugging",
            summary: "Verbalizing a problem line-by-line forces linear processing.",
            application: "Explain your code or logic flaw out loud to an inanimate object (a rubber duck). Speaking engages different brain areas than thinking, often forcing you to slow down and spot the error you previously skimmed over.",
            rank: 8
        },
        {
            name: "Prompt Engineering for Learning",
            summary: "Leveraging AI to simulate tutors, generate examples, or critique understanding.",
            application: "Use LLMs to create 'Socratic Dialogues'. Ask the AI: 'Quiz me on X,' 'Give me a counter-argument to my thesis,' or 'Generate a real-world analogy for this abstract concept.'",
            rank: 7
        },
        {
            name: "Leveraging Emotion",
            summary: "Amygdala activation modulates hippocampal storage, making emotional memories 'sticky'.",
            application: "Artificially induce curiosity, shock, or excitement before learning. Connect the dry material to something you genuinely care about or fear losing. 'Boring' is the enemy of memory.",
            rank: 8
        }
    ],
    lifestyle: [
        {
            title: "Sleep & NSDR",
            tags: ["Critical", "Restoration"],
            content: "<strong>Sleep</strong> is non-negotiable. SWS consolidates facts; REM consolidates skills. <br><strong>NSDR (Non-Sleep Deep Rest)</strong>: A 10-20 min conscious relaxation session after learning can accelerate neuroplasticity and restore dopamine levels."
        },
        {
            title: "Aerobic Exercise",
            tags: ["Growth", "Timing"],
            content: "Moderate to high-intensity aerobic exercise <strong>after</strong> encoding (within 4 hours) spikes BDNF (Brain-Derived Neurotrophic Factor), supporting neuron growth and survival. <br><em>Note: Exercise during encoding can cause interference.</em>"
        },
        {
            title: "Nutrition & Nootropics",
            tags: ["Fuel", "Supplements"],
            content: `
                <ul class="styled-list">
                    <li><strong>Diet:</strong> Polyphenols (berries) and Omega-3s are essential. High saturated fats/sugars trigger neuroinflammation.</li>
                    <li><strong>Bacopa Monnieri:</strong> Improves retention after 6-12 weeks.</li>
                    <li><strong>Lion's Mane:</strong> Potential neuroprotection and focus.</li>
                    <li><strong>Creatine:</strong> Reduces mental fatigue and improves working memory.</li>
                    <li><strong>Caffeine + L-Theanine:</strong> Synergistic 'calm focus'.</li>
                </ul>
            `
        },
        {
            title: "Stress & Emotion",
            tags: ["Hormones", "Chemistry"],
            content: "Moderate emotion mimics a 'flashbulb' effect, highlighting memories. However, chronic stress (cortisol) and trauma allow neurotoxins to damage the hippocampus. <strong>'Goldilocks Zone':</strong> Enough stress to care, not enough to panic."
        },
    ],
    controversial: [
        {
            name: "Speed Reading / PhotoReading",
            verdict: "Mostly Myth",
            content: "Reading beyond processing speed (~400-500 wpm) forces skimming. Sub-vocalization is necessary for comprehension of complex material. 'PhotoReading' typically fails controlled tests."
        },
        {
            name: "Dual N-Back",
            verdict: "Task Specific",
            content: "Improves ability to play Dual N-Back, but shows little transfer to general fluid intelligence (IQ) or academic performance."
        },
        {
            name: "Image Streaming",
            verdict: "Anecdotal",
            content: "Describing mental images aloud to improve visualization. Proponents claim it bridges brain hemispheres; rigorous empirical validation is lacking compared to SRS."
        }
    ],


    "sources": [
        {
            "image": "https://www.google.com/s2/favicons?domain=pmc.ncbi.nlm.nih.gov&sz=64",
            "link": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4278520/",
            "domain": "pmc.ncbi.nlm.nih.gov",
            "title": "Evidence-Based Strategies to Improve Memory and Learning - PMC - NIH"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=academicaffairs.arizona.edu&sz=64",
            "link": "https://academicaffairs.arizona.edu/l2l-strategy-interleaving",
            "domain": "academicaffairs.arizona.edu",
            "title": "L2L Strategy - Interleaving - Academic Affairs - The University of Arizona"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=jneurosci.org&sz=64",
            "link": "https://www.jneurosci.org/content/36/15/4231",
            "domain": "jneurosci.org",
            "title": "Synaptic Mechanisms of Memory Consolidation during Sleep Slow Oscillations"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=ncbi.nlm.nih.gov&sz=64",
            "link": "https://www.ncbi.nlm.nih.gov/books/NBK10878/",
            "domain": "ncbi.nlm.nih.gov",
            "title": "Long-Term Synaptic Potentiation - Neuroscience - NCBI Bookshelf"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=youtube.com&sz=64",
            "link": "https://www.youtube.com/watch?v=vso9jgfpI_c",
            "domain": "youtube.com",
            "title": "Neuroscience - Long-Term Potentiation - YouTube"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=journals.physiology.org&sz=64",
            "link": "https://journals.physiology.org/doi/abs/10.1152/physrev.00014.2003",
            "domain": "journals.physiology.org",
            "title": "Long-Term Potentiation and Memory - American Physiological Society Journal"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=ncbi.nlm.nih.gov&sz=64",
            "link": "https://www.ncbi.nlm.nih.gov/books/NBK3912/",
            "domain": "ncbi.nlm.nih.gov",
            "title": "Long-Term Potentiation and Depression as Putative Mechanisms for Memory Formation"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=pmc.ncbi.nlm.nih.gov&sz=64",
            "link": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4526749/",
            "domain": "pmc.ncbi.nlm.nih.gov",
            "title": "Memory Consolidation - PMC - NIH"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=themusiciansbrain.com&sz=64",
            "link": "https://www.themusiciansbrain.com/learning-and-memory-the-role-of-sleep-exercise-and-nutrition/",
            "domain": "themusiciansbrain.com",
            "title": "Learning and memory: the role of sleep, exercise, and nutrition - Lois Svard"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=pmc.ncbi.nlm.nih.gov&sz=64",
            "link": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4008828/",
            "domain": "pmc.ncbi.nlm.nih.gov",
            "title": "Exercise, Nutrition and the Brain - PMC - PubMed Central - NIH"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=pmc.ncbi.nlm.nih.gov&sz=64",
            "link": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4942640/",
            "domain": "pmc.ncbi.nlm.nih.gov",
            "title": "The Effects of Acute Physical Exercise on Memory, Peripheral BDNF, and Cortisol in Young Adults - PubMed Central"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=pmc.ncbi.nlm.nih.gov&sz=64",
            "link": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8584999/",
            "domain": "pmc.ncbi.nlm.nih.gov",
            "title": "Acute and Chronic Exercise Effects on Human Memory: What We Know and Where to Go from Here - PubMed Central"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=learningscientists.org&sz=64",
            "link": "https://www.learningscientists.org/blog/2016/8/18-1",
            "domain": "learningscientists.org",
            "title": "Six Strategies for Effective Learning - The Learning Scientists"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=biorxiv.org&sz=64",
            "link": "https://www.biorxiv.org/content/10.1101/085589v2.full-text",
            "domain": "biorxiv.org",
            "title": "A potential mechanism for the first-person inner sensation of memory provides evidence for a relationship between learning and LTP induction | bioRxiv"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=uweb.cas.usf.edu&sz=64",
            "link": "http://uweb.cas.usf.edu/~drohrer/pdfs/Interleaved_Mathematics_Practice_Guide.pdf",
            "domain": "uweb.cas.usf.edu",
            "title": "Interleaved Mathematics Practice"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=pmc.ncbi.nlm.nih.gov&sz=64",
            "link": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6946583/",
            "domain": "pmc.ncbi.nlm.nih.gov",
            "title": "Applying Cognitive Learning Strategies to Enhance Learning and Retention in Clinical Teaching Settings - PMC - NIH"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=dansilvestre.com&sz=64",
            "link": "https://dansilvestre.com/summaries/ultralearning/",
            "domain": "dansilvestre.com",
            "title": "Ultralearning by Scott H. Young: Summary and Notes - Dan Silvestre"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=pmc.ncbi.nlm.nih.gov&sz=64",
            "link": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5126970/",
            "domain": "pmc.ncbi.nlm.nih.gov",
            "title": "The right time to learn: mechanisms and optimization of spaced learning - PMC - NIH"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=brainscape.com&sz=64",
            "link": "https://www.brainscape.com/academy/comparing-spaced-repetition-algorithms/",
            "domain": "brainscape.com",
            "title": "Comparing Spaced Repetition Algorithms | Brainscape Academy"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=reddit.com&sz=64",
            "link": "https://www.reddit.com/r/medicalschoolanki/comments/190muwg/fsrs_or_sm2_understanding_anki_for_better_prep/",
            "domain": "reddit.com",
            "title": "FSRS or SM-2? Understanding Anki for better prep : r/medicalschoolanki - Reddit"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=forums.ankiweb.net&sz=64",
            "link": "https://forums.ankiweb.net/t/has-anyone-done-a-live-comparison-of-fsrs-and-sm2-as-implemented-in-anki-it-looks-like-no-so-can-anyone-help-me-set-it-up/34996",
            "domain": "forums.ankiweb.net",
            "title": "Has anyone done a live comparison of FSRS and SM2 as implemented in Anki? (It looks like no, so can anyone help me set it up?) - Anki Forums"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=retrievalpractice.org&sz=64",
            "link": "https://www.retrievalpractice.org/strategies/2017/interleaving",
            "domain": "retrievalpractice.org",
            "title": "Download our Interleaving Practice Guide!"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=uwlax.edu&sz=64",
            "link": "https://www.uwlax.edu/catl/guides/teaching-improvement-guide/how-can-i-improve/interleaved-practice/",
            "domain": "uwlax.edu",
            "title": "Interleaved practice - CATL Teaching Improvement Guide | UW-La Crosse"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=drc.uic.edu&sz=64",
            "link": "https://drc.uic.edu/wp-content/uploads/sites/17/2020/06/Samples-of-Memory-Aids.pdf",
            "domain": "drc.uic.edu",
            "title": "Samples-of-Memory-Aids.pdf"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=magneticmemorymethod.com&sz=64",
            "link": "https://www.magneticmemorymethod.com/pao-system/",
            "domain": "magneticmemorymethod.com",
            "title": "PAO System: How to Use This Powerful Technique - Magnetic Memory Method"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=en.wikipedia.org&sz=64",
            "link": "https://en.wikipedia.org/wiki/Art_of_memory",
            "domain": "en.wikipedia.org",
            "title": "Art of memory - Wikipedia"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=rosseducation.edu&sz=64",
            "link": "https://rosseducation.edu/new-students/memorization-techniques.php",
            "domain": "rosseducation.edu",
            "title": "Memorization Techniques - Ross Medical Education Center"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=psychcentral.com&sz=64",
            "link": "https://psychcentral.com/lib/memory-and-mnemonic-devices",
            "domain": "psychcentral.com",
            "title": "Mnemonic Devices: Types, Examples, and Benefits | Psych Central"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=pmc.ncbi.nlm.nih.gov&sz=64",
            "link": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5439266/",
            "domain": "pmc.ncbi.nlm.nih.gov",
            "title": "Mnemonic training reshapes brain networks to support superior memory - PMC - NIH"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=youtube.com&sz=64",
            "link": "https://www.youtube.com/watch?v=hSl9iK1xFzI",
            "domain": "youtube.com",
            "title": "Major System, Dominic System, and PAO System for Beginners - YouTube"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=youtube.com&sz=64",
            "link": "https://www.youtube.com/watch?v=pXaIskXCNsM",
            "domain": "youtube.com",
            "title": "Learn Memory Techniques with Chris M Nemo: Ben Pridmore System - YouTube"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=reddit.com&sz=64",
            "link": "https://www.reddit.com/r/Mnemonics/comments/8yx4d4/major_system_cards_pao/",
            "domain": "reddit.com",
            "title": "Major System -> Cards -> PAO? : r/Mnemonics - Reddit"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=magneticmemorymethod.com&sz=64",
            "link": "https://www.magneticmemorymethod.com/giordano-bruno/",
            "domain": "magneticmemorymethod.com",
            "title": "Giordano Bruno: 6 Of His Best Mnemonic Strategies For Learning"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=arnemancy.com&sz=64",
            "link": "https://arnemancy.com/articles/art-of-memory/giordano-brunos-art-of-memory/",
            "domain": "arnemancy.com",
            "title": "Giordano Bruno's Art of Memory - Arnemancy"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=ctl.wustl.edu&sz=64",
            "link": "https://ctl.wustl.edu/learningcenter/articles/sticky-notes-for-your-brain-the-art-of-zettelkasten-by-tanisha-paul/",
            "domain": "ctl.wustl.edu",
            "title": "Sticky Notes for Your Brain: The Art of Zettelkasten by Tanisha Paul \u2013 The Learning Center"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=zettelkasten.de&sz=64",
            "link": "https://zettelkasten.de/introduction/",
            "domain": "zettelkasten.de",
            "title": "Introduction to the Zettelkasten Method"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=zettelkasten.de&sz=64",
            "link": "https://zettelkasten.de/overview/",
            "domain": "zettelkasten.de",
            "title": "Getting Started \u2022 Zettelkasten Method"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=magneticmemorymethod.com&sz=64",
            "link": "https://www.magneticmemorymethod.com/zettelkasten/",
            "domain": "magneticmemorymethod.com",
            "title": "The Zettelkasten Method Unleashed: Enjoy Better Note-Taking Fast"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=super-memory.com&sz=64",
            "link": "https://super-memory.com/help/read.htm",
            "domain": "super-memory.com",
            "title": "SuperMemo: Incremental reading - Super Memory"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=masterhowtolearn.com&sz=64",
            "link": "https://www.masterhowtolearn.com/2019-08-06-supermemos-incremental-reading-explained/",
            "domain": "masterhowtolearn.com",
            "title": "SuperMemo's Incremental Reading: Explained - Master How To Learn"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=supermemo.wiki&sz=64",
            "link": "https://www.supermemo.wiki/en/learning/incremental-reading",
            "domain": "supermemo.wiki",
            "title": "Incremental Reading | SuperMemo.wiki"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=masterhowtolearn.wordpress.com&sz=64",
            "link": "https://masterhowtolearn.wordpress.com/2019/08/06/supermemos-incremental-reading-explained/",
            "domain": "masterhowtolearn.wordpress.com",
            "title": "SuperMemo's Incremental Reading: Explained - Master How To Learn"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=brainfacts.org&sz=64",
            "link": "https://www.brainfacts.org/for-educators/teaching-techniques/2025/brain-health-how-physical-activity-sleep-and-nutrition-impact-brain-development-072125",
            "domain": "brainfacts.org",
            "title": "It's SPECtacular (Ep. 4) \u2014 How Physical Activity, Sleep, and Nutrition Impact Brain Development - BrainFacts"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=hubermanlab.com&sz=64",
            "link": "https://www.hubermanlab.com/topics/nsdr-meditation-and-breathwork#:~:text=NSDR%20and%20yoga%20nidra%2C%20also,ability%20to%20learn%20and%20remember.",
            "domain": "hubermanlab.com",
            "title": ""
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=hubermanlab.com&sz=64",
            "link": "https://www.hubermanlab.com/nsdr",
            "domain": "hubermanlab.com",
            "title": "Non-Sleep Deep Rest (NSDR) - Huberman Lab"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=medium.com&sz=64",
            "link": "https://medium.com/@rogusblogus/nsdr-the-science-backed-practice-for-deep-rest-more-energy-33133729d37d",
            "domain": "medium.com",
            "title": "NSDR | The Science-Backed Practice for Deep Rest & More Energy | by Rogus - Medium"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=frontiersin.org&sz=64",
            "link": "https://www.frontiersin.org/journals/cognition/articles/10.3389/fcogn.2024.1367569/full",
            "domain": "frontiersin.org",
            "title": "The effects of acute exercise on long-term episodic memory: a systematic review and meta-analysis - Frontiers"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=pmc.ncbi.nlm.nih.gov&sz=64",
            "link": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3910002/",
            "domain": "pmc.ncbi.nlm.nih.gov",
            "title": "Exercise enhances memory consolidation in the aging brain - PMC - NIH"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=pubmed.ncbi.nlm.nih.gov&sz=64",
            "link": "https://pubmed.ncbi.nlm.nih.gov/12093601/",
            "domain": "pubmed.ncbi.nlm.nih.gov",
            "title": "Chronic effects of Brahmi (Bacopa monnieri) on human memory - PubMed"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=mdpi.com&sz=64",
            "link": "https://www.mdpi.com/2076-3921/13/4/393",
            "domain": "mdpi.com",
            "title": "Investigating the Neuroprotective and Cognitive-Enhancing Effects of Bacopa monnieri: A Systematic Review Focused on Inflammation, Oxidative Stress, Mitochondrial Dysfunction, and Apoptosis - MDPI"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=clinicaltrials.gov&sz=64",
            "link": "https://clinicaltrials.gov/study/NCT06870136",
            "domain": "clinicaltrials.gov",
            "title": "Study Evaluating the Quality and Effects of Lion's Mane Product on Cognitive Health"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=forbes.com&sz=64",
            "link": "https://www.forbes.com/health/supplements/health-benefits-of-lions-mane/",
            "domain": "forbes.com",
            "title": "4 Health Benefits of Lion's Mane Mushrooms - Forbes"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=sleepfoundation.org&sz=64",
            "link": "https://www.sleepfoundation.org/physical-health/diet-exercise-sleep",
            "domain": "sleepfoundation.org",
            "title": "The Connection Between Diet, Exercise, and Sleep - Sleep Foundation"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=theguardian.com&sz=64",
            "link": "https://www.theguardian.com/australia-news/2024/feb/04/nootropics-science-brain-power-cognitive-performance-executive-function-does-it-work",
            "domain": "theguardian.com",
            "title": "Big brain boost? What science says about the power of nootropics to enhance our minds"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=pmc.ncbi.nlm.nih.gov&sz=64",
            "link": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12466949/",
            "domain": "pmc.ncbi.nlm.nih.gov",
            "title": "Focus on Cognitive Enhancement: A Narrative Overview of Nootropics and \u201cSmart Drug\u201d Use and Misuse - PubMed Central"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=tobysinclair.com&sz=64",
            "link": "https://www.tobysinclair.com/post/book-summary-ultralearning-by-scott-young",
            "domain": "tobysinclair.com",
            "title": "Ultralearning Summary by Scott Young | Bonus Infographic"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=makingsmallercircles.com&sz=64",
            "link": "https://makingsmallercircles.com/book-notes/learn-faster-and-better-with-these-9-principles-from-ultralearning/",
            "domain": "makingsmallercircles.com",
            "title": "Ultralearning: 9 Principles to Learn Faster and Better - Making Smaller Circles"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=alexchen373.medium.com&sz=64",
            "link": "https://alexchen373.medium.com/the-art-of-learning-summary-and-application-6430139d678d",
            "domain": "alexchen373.medium.com",
            "title": "The Art of Learning \u2014 Summary and Application | by Alex Chen - Medium"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=theartoflearningproject.org&sz=64",
            "link": "https://theartoflearningproject.org/2021/09/the-distillation-of-josh-waitzkin/",
            "domain": "theartoflearningproject.org",
            "title": "The Distillation of Josh Waitzkin - The Art of Learning Project"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=flowresearchcollective.com&sz=64",
            "link": "https://www.flowresearchcollective.com/blog/flow-triggers",
            "domain": "flowresearchcollective.com",
            "title": "What are Flow Triggers? 22 Examples to Unlock Flow State - Flow Research Collective"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=magneticmemorymethod.com&sz=64",
            "link": "https://www.magneticmemorymethod.com/image-streaming/",
            "domain": "magneticmemorymethod.com",
            "title": "How To Use Image Streaming To Improve Your Memory"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=sourcesofinsight.com&sz=64",
            "link": "https://sourcesofinsight.com/image-streaming/",
            "domain": "sourcesofinsight.com",
            "title": "Image Streaming: Think Faster, More Visually, and More Fluidly - Sources of Insight"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=en.wikipedia.org&sz=64",
            "link": "https://en.wikipedia.org/wiki/Speed_reading",
            "domain": "en.wikipedia.org",
            "title": "Speed reading - Wikipedia"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=tim.blog&sz=64",
            "link": "https://tim.blog/2009/07/30/speed-reading-and-accelerated-learning/",
            "domain": "tim.blog",
            "title": "Scientific Speed Reading: How to Read 300% Faster in 20 Minutes - The Blog of Author Tim Ferriss"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=thespeedreadingblog.com&sz=64",
            "link": "https://thespeedreadingblog.com/post/caution",
            "domain": "thespeedreadingblog.com",
            "title": "Caution - The Speed Reading Blog"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=ntrs.nasa.gov&sz=64",
            "link": "https://ntrs.nasa.gov/api/citations/20000011599/downloads/20000011599.pdf",
            "domain": "ntrs.nasa.gov",
            "title": ".4...9 PRELIMINARY ANALYSIS OF PHOTOREADING By FINAL REPORT"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=pubmed.ncbi.nlm.nih.gov&sz=64",
            "link": "https://pubmed.ncbi.nlm.nih.gov/41008358/",
            "domain": "pubmed.ncbi.nlm.nih.gov",
            "title": "Boosting Working Memory in ADHD: Adaptive Dual N-Back Training Enhances WAIS-IV Performance, but Yields Mixed Corsi Outcomes - PubMed"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=reddit.com&sz=64",
            "link": "https://www.reddit.com/r/cogsci/comments/12a7b5i/dual_nback_replication_studies_show_little_to_no/",
            "domain": "reddit.com",
            "title": "Dual N-Back Replication Studies Show Little to No Impact on Fluid Intelligence - Reddit"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=ubisglobal.com&sz=64",
            "link": "https://ubisglobal.com/blog/get-a-rubber-duck-how-to-make-your-study-time-more-effective/",
            "domain": "ubisglobal.com",
            "title": "Rubber Duck Debugging Method: How to Make Your Study Time More Effective"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=en.wikipedia.org&sz=64",
            "link": "https://en.wikipedia.org/wiki/Rubber_duck_debugging",
            "domain": "en.wikipedia.org",
            "title": "Rubber duck debugging - Wikipedia"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=blog.alexanderfyoung.com&sz=64",
            "link": "https://blog.alexanderfyoung.com/become-a-speed-learner-with-chatgpt/",
            "domain": "blog.alexanderfyoung.com",
            "title": "Become A Top 1% Learner With ChatGPT Prompts - Alexander Young"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=transcript.study&sz=64",
            "link": "https://transcript.study/blog/best-ai-flashcard-generator",
            "domain": "transcript.study",
            "title": "5 Best AI Flashcard Generators in 2025 - Transcript Study"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=remnote.com&sz=64",
            "link": "https://www.remnote.com/",
            "domain": "remnote.com",
            "title": "RemNote"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=en.wikipedia.org&sz=64",
            "link": "https://en.wikipedia.org/wiki/Von_Restorff_effect",
            "domain": "en.wikipedia.org",
            "title": "Von Restorff effect - Wikipedia"
        },
        {
            "image": "https://health.clevelandclinic.org/_next/static/media/logo-ccf.1e52a22b.svg?w=256&q=75",
            "link": "https://health.clevelandclinic.org/tired-after-eating",
            "domain": "health.clevelandclinic.org",
            "title": "Tired After Eating? Here’s Why"
        },
        {
            "image": "https://www.cdc.gov/TemplatePackage/5.0/img/logo/logo-notext.svg",
            "link": "https://www.cdc.gov/cannabis/health-effects/brain-health.html",
            "domain": "cdc.gov",
            "title": "Cannabis and Brain Health"
        },
        {
            "image": "https://www.google.com/s2/favicons?domain=pubmed.ncbi.nlm.nih.gov&sz=64",
            "link": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3377362/",
            "domain": "pmc.ncbi.nlm.nih.gov",
            "title": "Positive and Negative Effects of Alcohol and Nicotine and Their Interactions: A Mechanistic Review"
        },
        {
            "image": "https://neurolaunch.com/wp-content/uploads/2025/02/neurolaunch-logo.png.webp",
            "link": "https://neurolaunch.com/long-term-effects-of-adderall-in-adults/",
            "domain": "neurolaunch.com",
            "title": "The Long-Term Effects of Adderall in Adults: What You Need to Know"
        }
    ]
};

// DOM Elements
const contentDiv = document.getElementById('content');
const navLinks = document.querySelectorAll('.nav-links li');
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn.querySelector('.icon');
const themeText = themeToggleBtn.querySelector('.text');

// Helper Functions
function getRankColor(rank) {
    if (rank >= 8) return '#10b981'; // Emerald 500
    if (rank >= 6) return '#f59e0b'; // Amber 500
    return '#ef4444'; // Red 500
}

function createExpandableCard(title, content, extraHeader = '') {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="card-header">
            <span class="card-title">${title}</span>
            ${extraHeader}
        </div>
        <div class="card-content">
            ${content}
        </div>
    `;

    card.addEventListener('click', () => {
        card.classList.toggle('expanded');
    });

    return card;
}

// Render Functions
function renderIntroduction() {
    return `
        <div>
            <h2>${data.introduction.title}</h2>
            ${data.introduction.content}
        </div>
    `;
}


function renderTheory() {
    const container = document.createElement('div');
    container.className = 'section-container';

    data.theory.forEach(item => {
        const content = `
            <p class="summary-text">${item.summary}</p>
            <div class="details-text">${item.details || ''}</div>
        `;
        const card = createExpandableCard(item.title, content);
        container.appendChild(card);
    });

    const wrapper = document.createElement('div');
    wrapper.innerHTML = '<h2>Theory and Science</h2>';
    wrapper.appendChild(container);
    return wrapper;
}

function renderTechniqueLibrary() {
    const container = document.createElement('div');
    container.className = 'section-container';

    // Sort by rank descending
    const sortedTechniques = [...data.techniqueLibrary].sort((a, b) => b.rank - a.rank);

    sortedTechniques.forEach(item => {
        const rankBadge = `<span class="rank-badge" style="background-color: ${getRankColor(item.rank)}">Rank: ${item.rank}/10</span>`;
        const content = `
            <p><strong>Concept:</strong> ${item.summary}</p>
            <p><strong>Application:</strong> ${item.application}</p>
        `;
        const card = createExpandableCard(item.name, content, rankBadge);
        container.appendChild(card);
    });

    const wrapper = document.createElement('div');
    wrapper.innerHTML = '<h2>Technique Library</h2>';
    wrapper.appendChild(container);
    return wrapper;
}

function renderLifestyle() {
    const container = document.createElement('div');
    container.className = 'section-container';

    data.lifestyle.forEach(item => {
        let tagsHtml = '';
        if (item.tags) {
            tagsHtml = item.tags.map(tag => `<span class="tag-badge">${tag}</span>`).join('');
        }

        const card = createExpandableCard(item.title, item.content, `<div class="tags-container">${tagsHtml}</div>`);
        container.appendChild(card);
    });

    const wrapper = document.createElement('div');
    wrapper.innerHTML = '<h2>Lifestyle</h2>';
    wrapper.appendChild(container);
    return wrapper;
}

function renderControversial() {
    const container = document.createElement('div');
    container.className = 'section-container';

    data.controversial.forEach(item => {
        const verdictBadge = `<span class="verdict-badge ${item.verdict === 'Mostly Myth' ? 'verdict-myth' : 'verdict-caution'}">${item.verdict}</span>`;
        const card = createExpandableCard(item.name, item.content, verdictBadge);
        container.appendChild(card);
    });

    const wrapper = document.createElement('div');
    wrapper.innerHTML = '<h2>Controversial / Debunked</h2>';
    wrapper.appendChild(container);
    return wrapper;
}


function renderTools() {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
        <h2>Recommended Tools</h2>
        <div class="tools-grid">
            ${data.tools.map(tool => `
                <a href="${tool.link}" target="_blank" class="tool-card">
                    <div class="tool-header-row">
                        <img src="${tool.image}" alt="${tool.name}" class="tool-icon" onerror="this.style.display='none'">
                        <h3 class="tool-title">${tool.name}</h3>
                    </div>
                    ${Array.isArray(tool.description)
            ? `<ul class="tool-description-list">${tool.description.map(d => `<li>${d}</li>`).join('')}</ul>`
            : `<p class="tool-description">${tool.description}</p>`
        }
                </a>
            `).join('')}
        </div>
    `;
    return wrapper;
}

function renderSources() {
    return `
        <div>
            <h2>Sources & Further Reading</h2>
            <div class="sources-grid">
                ${data.sources.map(source => `
                    <a href="${source.link}" target="_blank" class="source-card">
                        <div class="source-icon-container">
                            <img src="${source.image}" alt="${source.title}" class="source-icon">
                        </div>
                        <div class="source-info">
                            <span class="source-title">${source.title}</span>
                            <span class="source-domain">${source.domain}</span>
                        </div>
                        <div class="source-arrow">→</div>
                    </a>
                `).join('')}
            </div>
        </div>
    `;
}

// Navigation Logic with Transitions
async function handleNavigation(target) {
    // 1. Fade Out
    if (contentDiv.children.length > 0) {
        contentDiv.classList.remove('fade-in');
        contentDiv.classList.add('fade-out');

        // Wait for animation to finish (300ms matches CSS)
        await new Promise(resolve => setTimeout(resolve, 300));
    }

    // 2. Update Active State
    navLinks.forEach(link => {
        if (link.dataset.target === target) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 3. Render New Content
    contentDiv.innerHTML = '';
    contentDiv.classList.remove('fade-out');

    let contentElement;
    switch (target) {
        case 'introduction':
            contentDiv.innerHTML = renderIntroduction();
            break;
        case 'theory':
            contentElement = renderTheory();
            contentDiv.appendChild(contentElement);
            break;
        case 'technique-library':
            contentElement = renderTechniqueLibrary();
            contentDiv.appendChild(contentElement);
            break;
        case 'tools':
            contentElement = renderTools();
            contentDiv.appendChild(contentElement);
            break;
        case 'lifestyle':
            contentElement = renderLifestyle();
            contentDiv.appendChild(contentElement);
            break;
        case 'controversial':
            contentElement = renderControversial();
            contentDiv.appendChild(contentElement);
            break;
        case 'sources':
            contentDiv.innerHTML = renderSources();
            break;
        default:
            contentDiv.innerHTML = renderIntroduction();
    }

    // 4. Fade In
    // Force reflow to restart animation
    void contentDiv.offsetWidth;
    contentDiv.classList.add('fade-in');
}

// Theme Logic
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');

    // Update UI
    themeIcon.textContent = isLight ? '☀️' : '🌙';
    themeText.textContent = isLight ? 'Light Mode' : 'Dark Mode';

    // Save preference
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

// Initialize Theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    toggleTheme(); // Switch to light since default is dark
}

// Event Listeners
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const target = link.dataset.target;
        // Prevent clicking the same tab twice
        if (!link.classList.contains('active')) {
            handleNavigation(target);
        }
    });
});

themeToggleBtn.addEventListener('click', toggleTheme);

// Mobile Navigation Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const sidebar = document.querySelector('.sidebar');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent immediate closing
        sidebar.classList.toggle('active');
        document.body.classList.toggle('sidebar-open');
    });
}

// Close sidebar when clicking outside
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 &&
        document.body.classList.contains('sidebar-open') &&
        !sidebar.contains(e.target) &&
        e.target !== mobileMenuBtn) {

        sidebar.classList.remove('active');
        document.body.classList.remove('sidebar-open');
    }
});

// Close sidebar after navigation (on mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('active');
            document.body.classList.remove('sidebar-open');
        }
    });
});

// Initial Render
handleNavigation('introduction');

