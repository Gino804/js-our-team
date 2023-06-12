console.log('JS OK');

const members = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
]

console.table(members);

const row = document.querySelector('.row');
let text = '';

for(i = 0; i < members.length; i++)
{
    text += `
    <div class="col">
    <div class="card">
    <img src='img/${members[i].image}'>
    <h4>${members[i].name}</h4>
    <p>Ruolo: ${members[i].role}</p>
    </div>
    </div>`;
}

row.innerHTML = text;