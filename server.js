const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Sample data for team members
const teamMembers = [
    {
        id: 1,
        name: "John Smith",
        role: "Public Speaker",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        id: 2,
        name: "Andrea Brown",
        role: "Faculty & Peer",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        id: 3,
        name: "Marwan Ahmed",
        role: "Head of Faculty & Peers",
        image: "https://randomuser.me/api/portraits/men/54.jpg"
    }
];

// Sample data for tutorials
const tutorials = [
    {
        id: 1,
        title: "Complete Speech Structure Mastery",
        description: "Learn the foundation of powerful presentations - from captivating openings to memorable conclusions",
        duration: "45 min course",
        level: "Beginner",
        image: "https://www.eventi.polimi.it/wp-content/uploads/2024/07/AdobeStock_283017482_800x600.jpg"
    },
    {
        id: 2,
        title: "Voice Projection & Modulation",
        description: "Master breathing techniques and vocal variety",
        duration: "20 min course",
        level: "Intermediate",
        image: "https://miro.medium.com/v2/1*v4Tq51C48FwTJ51wdDXK4g.jpeg"
    },
    {
        id: 3,
        title: "Overcoming Stage Fright",
        description: "Proven strategies to build confidence and calm nerves",
        duration: "15 min course",
        level: "All Levels",
        image: "https://images.stockcake.com/public/2/f/9/2f90dcf6-c181-4537-85e1-6c5c6378fe40_large/confident-speaker-performing-stockcake.jpg"
    }
];

// API route to get team members
app.get('/api/team', (req, res) => {
    res.json(teamMembers);
});

// API route to get tutorials
app.get('/api/tutorials', (req, res) => {
    res.json(tutorials);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
