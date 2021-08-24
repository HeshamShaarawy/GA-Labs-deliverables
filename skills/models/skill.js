const skills = [
    {id: 1010 , skill: "HTML/CSS/Javascript", comments: "can create webpages, blogs and different projects" },
    {id: 1011 , skill: "Jquery", comments: "familiar with Jquery" },
    {id: 1012 , skill: "Node.JS Express", comments: "Able to build a server" },
    {id: 1013 , skill: "MongoDB", comments: "understand and deal with nonSQL DB" },
    {id: 1014 , skill: "Python", comments: " sample comment" },
    {id: 1015 , skill: "SQL", comments: " sample comment" }
]

function getAll(){
    return skills;
}

function getOne(id) {
    return skills.find(skill => skill.id == parseInt(id));
}

function update(id, skill) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skill.id = parseInt(id);
    skills.splice(idx, 1, skill);
}

function create(skill){
    skill.id = Date.now()%1000000;
    skills.push(skill);
}

function deleteOne(id){
    const idx= skills.findIndex(skill => skill.id == parseInt(id));
    skills.splice(idx, 1)
}

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
}