
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

        compliments.push(getCompliment);

        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];


      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["We first make our habits, and then our habits make us.", "No one can walk backwards into the future.", "Congratulations! You are on your way.", "Your mind is your greatest asset.", "Your ideals are well within your reach."]
        fortunes.push(getFortune);
    }
}