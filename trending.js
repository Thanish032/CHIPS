// trending.js (Simulated Data Example)
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const domain = urlParams.get('domain');
    const topicsContainer = document.getElementById('topics');

    const simulatedData = {
        sports: [
            { name: 'Football World Cup', info: 'Teams from around the world compete in the most prestigious football tournament.' },
            { name: 'NBA Finals', info: 'The championship series of the NBA, showcasing the best basketball teams.' },
            { name: 'Olympics', info: 'The international multi-sport event held every four years, featuring diverse sports.' },
            { name: 'Tennis Grand Slam', info: 'The four major tennis tournaments: Australian Open, French Open, Wimbledon, and US Open.' },
            { name: 'FIFA Club World Cup', info: 'A yearly tournament featuring the champion clubs from each of the six continental federations.' }
        ],
        cinema: [
            { name: 'Dune', info: 'A science fiction epic directed by Denis Villeneuve, based on Frank Herbert\'s novel.' },
            { name: 'Spider-Man: No Way Home', info: 'A superhero film where Spider-Man faces multiverse challenges.' },
            { name: 'The Matrix Resurrections', info: 'The fourth installment in the Matrix franchise, exploring new virtual realities.' },
            { name: 'The French Dispatch', info: 'A film by Wes Anderson focusing on journalists at an American newspaper in France.' },
            { name: 'No Time to Die', info: 'James Bond’s latest adventure in the 007 series, featuring high-stakes espionage.' }
        ],
        astronomy: [
            { name: 'James Webb Space Telescope', info: 'A space telescope designed to see the universe\'s earliest galaxies and stars.' },
            { name: 'Mars Rover Missions', info: 'Robotic missions exploring Mars, providing insights into its geology and potential for life.' },
            { name: 'Black Holes', info: 'Regions in space where gravity is so intense that even light cannot escape from them.' },
            { name: 'Exoplanets', info: 'Planets located outside our solar system, orbiting other stars.' },
            { name: 'Galaxies', info: 'Massive systems consisting of stars, stellar remnants, and interstellar matter, forming the universe\'s structure.' }
        ],
        tech: [
            { name: 'Artificial Intelligence', info: 'Technology enabling machines to perform tasks that typically require human intelligence.' },
            { name: 'Blockchain', info: 'A decentralized digital ledger technology that securely records transactions across many computers.' },
            { name: '5G Networks', info: 'The fifth generation of mobile networks offering faster speeds, lower latency, and improved connectivity.' },
            { name: 'Quantum Computing', info: 'Computing using quantum-mechanical phenomena to solve complex problems faster than traditional computers.' },
            { name: 'Cybersecurity', info: 'Protecting systems, networks, and data from digital attacks and unauthorized access.' }
        ],
        art: [
            { name: 'The Starry Night', info: 'Vincent van Gogh\'s iconic painting depicting a swirling night sky over a quiet town.' },
            { name: 'Mona Lisa', info: 'Leonardo da Vinci\'s famous portrait of a woman with an enigmatic smile.' },
            { name: 'The Persistence of Memory', info: 'Salvador Dalí\'s surrealist painting featuring melting clocks in a dreamlike landscape.' },
            { name: 'Girl with a Pearl Earring', info: 'Johannes Vermeer’s portrait known for its captivating depiction of a young girl with a pearl earring.' },
            { name: 'The Scream', info: 'Edvard Munch’s expressionist painting representing existential dread with a figure screaming under a tumultuous sky.' }
        ]
    };

    const trendingTopics = simulatedData[domain] || [];

    if (trendingTopics.length > 0) {
        trendingTopics.forEach(topic => {
            const div = document.createElement('div');
            div.className = 'topic';
            div.innerHTML = `<strong>${topic.name}</strong><p>${topic.info}</p>`;
            topicsContainer.appendChild(div);
        });
    } else {
        topicsContainer.textContent = 'No information available for this domain.';
    }
});
