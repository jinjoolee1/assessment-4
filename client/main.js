const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)


const fortuneBtn = document.getElementById ("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune")
        .then(res => { 
            const data = res.data;
            alert(data);
        });
};
fortuneBtn.addEventListener('click', getFortune)

const happyfactBtn = document.getElementById("happyfactButton")

const getHappyfact = () => {
    axios.get("http://localhost:4000/api/Happyfact")
        .then(res => { 
            const data = res.data;
            alert(data);
        });
};
happyfactBtn.addEventListener('click', getHappyfact)

const goodnewstBtn = document.getElementById("goodnewsButton")

const getGoodnews = () => {
    axios.get("http://localhost:4000/api/Goodnews")
        .then(res => { 
            const data = res.data;
            alert(data);
        });
};
goodnewstBtn.addEventListener('click', getGoodnews)

const codingrocksBtn = document.getElementById("codingrocksButton")

const getCodingrocks = () => {
    axios.get("http://localhost:4000/api/codingrocks")
        .then(res => { 
            const data = res.data;
            alert(data);
        });
};
codingrocksBtn.addEventListener('click', getCodingrocks)