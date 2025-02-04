const entries = [
    {
        id: 1,
        title: "The Great Banana Debate",
        date: "2025-01-10",
        content:
            "It started as a simple discussion at lunch: 'What’s the perfect banana?' Suddenly, battle lines were drawn. Team Green argued for firm texture and longevity. Team Yellow countered with peak sweetness and ease of peeling. Then, the wildcards appeared—Team Brown, defending the ultimate banana bread ingredient. The chaos escalated when someone suggested freezing bananas for smoothies. Friendships were tested, alliances formed, and in the end, we all agreed on one thing: Chimpanzees would be deeply disappointed in our choices.",
        imgUrl: "https://images.unsplash.com/photo-1602482434469-675f8a693636?q=80&w=1964&auto=format&fit=crop",
        tags: ["bananas", "food", "controversy"],
        rating: 7,
    },
    {
        id: 2,
        title: "Coding Bug or Feature?",
        date: "2025-01-11",
        content:
            "There are two types of bugs: the ones you can find in five minutes and the ones that make you question your entire career. Today, I had the latter. My app was throwing an error that made no sense. I stared at the screen for an eternity, googled 17 different Stack Overflow threads, and even questioned my life choices. Then, like a divine revelation, I realized: I had misspelled 'function'. After fixing it, I sat in silence, contemplating whether I should tell anyone or just act like it never happened.",
        imgUrl: "https://images.unsplash.com/photo-1662116137276-2d7efc87d901?q=80&w=2070&auto=format&fit=crop",
        tags: ["coding", "debugging", "satire"],
        rating: 6,
    },
    {
        id: 3,
        title: "404: Sleep Not Found",
        date: "2025-01-13",
        content:
            "I was determined to fix my sleep schedule. In bed by 10 PM, phone on silent, all distractions eliminated. But as soon as I turned off the lights, my brain decided it was time to remember every embarrassing moment from childhood. By 12 AM, I had relived my worst social interactions. By 1 AM, I had mentally rewritten arguments I lost years ago. By 2 AM, I was calculating how little sleep I could survive on. The final verdict: my sleep schedule remains as broken as my willpower.",
        imgUrl: "https://images.unsplash.com/photo-1429117237875-aa29229d99f0?q=80&w=2070&auto=format&fit=crop",
        tags: ["sleep", "procrastination", "relatable"],
        rating: 4,
    },
    {
        id: 4,
        title: "The Infinite Loop of Procrastination",
        date: "2025-01-16",
        content:
            "Step 1: Open laptop with the intention of starting work. Step 2: Get distracted by an email. Step 3: Open a new tab to Google something irrelevant. Step 4: Somehow end up on Wikipedia reading about the history of breadmaking. Step 5: Realize it's been two hours. Step 6: Panic. Step 7: Start working, but only for 10 minutes before checking social media 'for just a second'. Step 8: Repeat this cycle until bedtime. Step 9: Wonder why nothing ever gets done.",
        imgUrl: "",
        tags: ["procrastination", "work", "satire"],
        rating: 5,
    },
    {
        id: 5,
        title: "Chasing the Runner's High",
        date: "2025-01-18",
        content:
            "Today's run started out like every other: legs felt heavy, motivation was low, and I seriously questioned why I do this to myself. By kilometer two, I started negotiating with my brain—'Just make it to 5K and then we can walk.' But by kilometer five, something magical happened. My breathing evened out, my legs felt lighter, and for a brief moment, I wasn't thinking about distance, pace, or anything at all. Was this the fabled runner’s high? Or just the caffeine from my pre-run coffee finally kicking in? Either way, I’ll be chasing that feeling again soon.",
        imgUrl: "https://images.unsplash.com/photo-1553969546-6f7388a7e07c?q=80&w=1976&auto=format&fit=crop",
        tags: ["running", "fitness", "endorphins"],
        rating: 9,
    },
    {
        id: 6,
        title: "React-ing to React",
        date: "2025-01-19",
        content:
            "Started learning React today. The tutorial said it was easy. 10 minutes in, I was drowning in hooks, state, and props. 30 minutes in, I questioned whether I even knew JavaScript at all. An hour later, I had somehow broken my entire app by changing one tiny thing. The worst part? I have no idea how to fix it. The best part? Nobody else does either, they just pretend.",
        imgUrl: "https://images.unsplash.com/photo-1565239500265-bd02167453ae?q=80&w=2070&auto=format&fit=crop",
        tags: ["React", "coding", "confusion"],
        rating: 5,
    },
    {
        id: 7,
        title: "The Mystery of the Vanishing Banana",
        date: "2025-01-20",
        content:
            "I bought bananas yesterday. Today, they were gone. Did I eat them and forget? Did someone steal them? Did they achieve sentience and walk away? I checked every possible location, even the fridge (just in case past-me made a questionable decision). No sign of them. Conclusion: Either I have a banana thief in my home, or my memory is worse than I thought. Both options are concerning.",
        imgUrl: "",
        tags: ["bananas", "mystery", "confusion"],
        rating: 6,
    },
    {
        id: 8,
        title: "The Internet Rabbit Hole",
        date: "2025-01-21",
        content:
            "It started innocently—I just wanted to check the weather. Then I clicked on a news article. Then a related video. Then a Wikipedia link. Two hours later, I was reading about medieval siege warfare and questioning why my brain finds this information more important than my actual work.",
        imgUrl: "https://images.unsplash.com/photo-1515964428478-4419ea9ea1b2?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["internet", "procrastination", "distractions"],
        rating: 5,
    },
    {
        id: 9,
        title: "The Art of Grocery Store Speedruns",
        date: "2025-01-22",
        content:
            "Grocery shopping is a game. The rules: Enter, get everything on your list, avoid impulse purchases, and get out as fast as possible. The obstacles: Crowded aisles, slow walkers, and an existential crisis in the cereal section. Today, I set a new personal best—15 minutes flat, no unnecessary snacks. But was it truly a victory? I forgot the milk.",
        imgUrl: "",
        tags: ["shopping", "speedrun", "fail"],
        rating: 7,
    },
    {
        id: 10,
        title: "Banana Bread: The Redemption Arc",
        date: "2025-01-23",
        content:
            "The bananas I bought last week are now a tragic shade of brown. Too soft to eat, too perfect to waste. There is only one solution: Banana bread. I followed a recipe, added chocolate chips (because why not), and waited. The result? Absolute perfection. The moral of the story? All bad bananas deserve a second chance.",
        imgUrl: "https://images.unsplash.com/photo-1632931057819-4eefffa8e007?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["bananas", "baking", "redemption"],
        rating: 8,
    },
];
