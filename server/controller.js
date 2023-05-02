
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];


      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["We first make our habits, and then our habits make us.", "No one can walk backwards into the future.", "Congratulations! You are on your way.", "Your mind is your greatest asset.", "Your ideals are well within your reach."];
        
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);


    },

    getHappyfact: (req, res) => {
        const Happyfacts = ["Samsung tests their phones' toughness with a butt-shaped robot.", "Otters hold hands when they float.", "Sperm whales have BFFs.", "Vikings used to give kittens as wedding presents.", "The center of the Milky Way apparently smells like rum."];
      
        let randomIndex = Math.floor(Math.random() * Happyfacts.length);
        let randomHappyfacts = Happyfacts[randomIndex];
      
        res.status(200).send(randomHappyfacts);
    },
    getGoodnews: (req, res) => {
         const Goodnews =["U.S. adult smoking rate hits all-time low", "High school students raise $260,000 so custodian can retire", "Evelyn is 6 months old today!","Sweden’s First EV-Charging Road Will Power Electric Vehicles as They Drive", "A warthog, a hyena and a porcupine walked into a hole and decided to live together."]
        
        let randomIndex = Math.floor(Math.random() * Goodnews.length);
        let randomGoodnews = Goodnews[randomIndex];
      
        res.status(200).send(randomGoodnews);
    },
    
    getCodingrocks: (req, res) => {
        const Codingrocks =["The eCommerce industry is growing and you get to be a part of it!", "You get to learn how to solve problems of all kinds", "You learn to adapt and work hard everyday", "You get to meet new and awesome people!", "You get to be part of a booming industry with tons of opportunities!"]
        
        let randomIndex = Math.floor(Math.random() * Codingrocks.length);
        let randomCodingrocks = Codingrocks[randomIndex];
      
        res.status(200).send(randomCodingrocks);
    }
}   
