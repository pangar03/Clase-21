const render = () => {
    // ============================= CLASE ===============================
    // const persona = {
    //     nombre: 'Jonatan',
    //     edad: 27,
    //     esMayorDeEdad: true,
    // };

    // console.log(persona);
    // console.log(persona.nombre, persona.edad, persona.esMayorDeEdad);

    // persona.edad = 30;
    // console.log(persona.nombre, persona.edad, persona.esMayorDeEdad);

    // persona.nombreMascota = 'Toby';
    // console.log(persona);

    // const personaDos = {
    //     edad: 17,
    //     esMayorDeEdad: false,
    //     nombre: 'Ana',
    //     nombreMascota: 'Firulais',
    // };

    // console.log(personaDos);

    // const familia = [
    //     persona, 
    //     personaDos,
    //     {
    //         nombre: 'pedro',
    //         edad: 45,
    //         esMayorDeEdad: true,
    //         nombreMascota: 'Luna',
    //     }
    // ];
    // console.log(familia);
    
    // familia[2].nombre = 'Pablo';
    // for (miembro of familia) {
    //     console.log(miembro.nombre);
    // }

    // ============================= TALLER ===============================
    const digimones = [
        {
            name: "Koromon",
            img: "https://digimon.shadowsmith.com/img/koromon.jpg",
            level: "In Training"
        },
        {
            name: "Tsunomon",
            img: "https://digimon.shadowsmith.com/img/tsunomon.jpg",
            level: "In Training"
        },
        {
            name: "Yokomon",
            img: "https://digimon.shadowsmith.com/img/yokomon.jpg",
            level: "In Training"
        },
        {
            name: "Motimon",
            img: "https://digimon.shadowsmith.com/img/motimon.jpg",
            level: "In Training"
        },
        {
            name: "Patamon",
            img: "https://digimon.shadowsmith.com/img/patamon.jpg",
            level: "Rookie"
        },
        {
            name: "Kuwagamon",
            img: "https://digimon.shadowsmith.com/img/kuwagamon.jpg",
            level: "Champion"
        },
        {
            name: "Greymon",
            img: "https://digimon.shadowsmith.com/img/greymon.jpg",
            level: "Champion"
        },
        {
            name: "Tanemon",
            img: "https://digimon.shadowsmith.com/img/tanemon.jpg",
            level: "In Training"
        }
    ];

    const digimonSort = (digimons) => {
        let digimonInTraining = [];
        let digimonRookie = [];
        let digimonChampion = [];

        for (digimon of digimons) {
            if (digimon.level === 'In Training') {
                digimonInTraining.push(digimon);
            } else if (digimon.level === 'Rookie') {
                digimonRookie.push(digimon);
            } else {
                digimonChampion.push(digimon);
            }
        }

        return {
            inTraining: digimonInTraining.length,
            rookie: digimonRookie.length,
            champion: digimonChampion.length,
        };
    };

    const digimonCount = digimonSort(digimones);
    
    const container = document.querySelector('.container');

    const inTraining = document.createElement('p');
    inTraining.innerHTML = `Existen ${digimonCount.inTraining} digimones de nivel In Training`;
    
    const rookie = document.createElement('p');
    rookie.innerHTML = `Existen ${digimonCount.rookie} digimones de nivel In Training`;
    
    const champion = document.createElement('p');
    champion.innerHTML = `Existen ${digimonCount.champion} digimones de nivel In Training`;

    container.appendChild(inTraining);
    container.appendChild(rookie);
    container.appendChild(champion);
};

document.addEventListener('DOMContentLoaded', render);