const spacing = 10;
const width = 700;
const height = 700;
const sq_size = (width - 6 * spacing) / 5;

const names_1 = ['Sheep', 'Pig', 'Rabbit', 'Horse', 'Cow', 'Unicorn', 'Chicken'];
const names_2 = ['Kangaroo', 'Platypus', 'Crocodile', 'Koala', 'Cockatoo', 'Tiddalik', 'Echidna'];
const names_3 = ['Zebra', 'Hippo', 'Giraffe', 'Lion', 'Elephant', 'Gryphon', 'Rhinoceros'];
const names_4 = ['Bear', 'Skunk', 'Beaver', 'Moose', 'Fox', 'Sasquatch', 'Otter'];
const names_5 = ['Penguin', 'Seal', 'Muskox', 'Polar Bear', 'Walrus', 'Yeti', 'Snowy Owl'];
const names_6 = ['Monkey', 'Toucan', 'Gorilla', 'Panda', 'Tiger', 'Phoenix', 'Lemur'];
const names_7 = ['Diplodocus', 'Stegosaurus', 'Raptor', 'T-Rex', 'Triceratops', 'Dragon', 'Ankylosaurus'];
const names_8 = ['Wooly Rhinoceros', 'Giant Sloth', 'Dire Wolf', 'Sabertooth Tiger', 'Wooly Mammoth', 'Akhlut', 'Yukon Camel'];
const names_9 = ['Raccoon', 'Pigeon', 'Rat', 'Squirrel', 'Opossum', 'Sewer Turtle', 'Chipmunk'];
const names_10 = ['Goat', 'Cougar', 'Elk', 'Eagle', 'Coyote', 'Aatxe', 'Pika'];
const names_11 = ['Moonkey', 'Lunar Tick', 'Tribble', 'Moonicorn', 'Luna Moth', 'Jade Rabbit', 'Babmoon'];
const names_12 = ['Rock', 'Marsmot', 'Marsmoset', 'Rover', 'Martian', 'Marsmallow', 'Marsten'];
const animal_names = [names_1, names_2, names_3, names_4, names_5, names_6, names_7, names_8, names_9, names_10, names_11, names_12];
const areas = ['Farm', 'Outback', 'Savanna', 'Northern', 'Polar', 'Jungle', 'Jurassic', 'Ice Age', 'City', 'Mountain', 'Moon', 'Mars'];

const animal_patterns = [
    [ // farm
        [[0, 0], [1, 0], [2, 0], [3, 0]],       // Sheep
        [[0, 0], [1, 0], [0, 1], [1, 1]],       // Pig
        [[0, 0], [0, 1], [0, 2], [0, 3]],       // Rabbit
        [[0, 0], [0, 1], [0, 2]],               // Horse
        [[0, 0], [1, 0], [2, 0]],               // Cow
        [[0, 0], [1, 1], [2, 1]],               // Unicorn
        [[2, 0], [1, 1], [0, 2]]                // Chicken
    ], [ // outback
        [[0, 0], [1, 1], [2, 2], [3, 3]],       // Kangaroo
        [[0, 0], [1, 0], [1, 1], [2, 1]],       // Platypus
        [[0, 0], [1, 0], [2, 0], [3, 0]],       // Crocodile
        [[0, 0], [1, 0], [1, 1]],               // Koala
        [[0, 0], [1, 1], [1, 2]],               // Cockatoo
        [[1, 0], [0, 1], [2, 1]],               // Tiddalik
        [[0, 1], [1, 1], [2, 0]]                // Echidna
    ], [ // savannah
        [[1, 0], [0, 1], [2, 1], [1, 2]],       // Zebra
        [[0, 0], [2, 0], [0, 2], [2, 2]],       // Hippo
        [[0, 0], [0, 1], [0, 2], [0, 3]],       // Giraffe
        [[0, 0], [1, 0], [2, 0]],               // Lion
        [[0, 0], [1, 0], [0, 1]],               // Elephant
        [[0, 0], [2, 0], [1, 1]],               // Gryphon
        [[0, 1], [1, 0], [1, 2]]                // Rhinoceros
    ],[ // northern
        [[0, 0], [1, 0], [1, 1], [1, 2]],       // Bear
        [[1, 0], [2, 0], [0, 1], [1, 1]],       // Skunk
        [[2, 0], [0, 1], [1, 1], [2, 2]],       // Beaver
        [[0, 0], [2, 0], [1, 1]],               // Moose
        [[0, 0], [1, 0], [2, 1]],               // Fox
        [[0, 0], [0, 1]],                       // Sasquatch
        [[0, 0], [0, 1], [1, 1]]                // Otter
    ],[ // polar
        [[1, 0], [1, 1], [0, 2], [2, 2]],       // Penguin
        [[0, 0], [1, 1], [3, 1], [2, 2]],       // Seal
        [[0, 0], [1, 0], [0, 1], [2, 1]],       // Muskox
        [[0, 0], [2, 0], [2, 1]],               // Polar Bear
        [[0, 0], [1, 1], [2, 1]],               // Walrus
        [[0, 0], [0, 2]],                       // Yeti
        [[0, 0], [1, 0], [1, 1]]                // Snowy Owl
    ],[ // jungle
        [[0, 0], [2, 0], [1, 1], [3, 1]],       // Monkey
        [[1, 0], [0, 1], [1, 2], [1, 3]],       // Toucan
        [[0, 0], [2, 0], [0, 1], [2, 1]],       // Gorilla
        [[2, 0], [0, 1], [2, 2]],               // Panda
        [[0, 0], [2, 0], [3, 0]],               // Tiger
        [[0, 0], [2, 2]],                       // Phoenix
        [[0, 0], [1, 1], [0, 2]]                // Lemur
    ],[ // jurassic
        [[0, 0], [1, 1], [2, 1], [1, 2]],       // Diplodocus
        [[1, 0], [2, 0], [0, 1], [3, 1]],       // Stegosaurus
        [[0, 0], [1, 0], [1, 1], [2, 2]],       // Raptor
        [[0, 0], [0, 2], [1, 2]],               // T-Rex
        [[0, 0], [2, 1], [0, 2]],               // Triceratops
        [[0, 0], [2, 1]],                       // Dragon
        [[0, 1], [2, 0], [2, 1]]                // Ankylosaurus
    ],[ // ice age
        [[2, 0], [0, 1], [3, 1], [1, 2]],       // Wooly Rhinoceros
        [[0, 0], [2, 1], [0, 2], [2, 2]],       // Giant Sloth
        [[1, 0], [0, 1], [3, 1], [1, 2]],       // Dire Wolf
        [[0, 0], [2, 1], [1, 2]],               // Sabertooth Tiger
        [[1, 0], [0, 1], [2, 2]],               // Wooly Mammoth
        [[2, 0], [0, 1], [2, 2]],               // Akhlut
        [[2, 0], [0, 1], [3, 2]]                // Yukon Camel
    ],[ // city
        [[0, 0], [2, 0], [0, 1], [3, 1]],       // Raccoon
        [[0, 0], [1, 1], [1, 2], [2, 2]],       // Pigeon
        [[0, 0], [1, 0], [1, 1], [3, 1]],       // Rat
        [[2, 0], [0, 1], [1, 2]],               // Squirrel
        [[0, 0], [0, 1], [2, 1]],               // Opossum
        [[0, 0], [1, 0]],                       // Sewer Turtle
        [[1, 0], [0, 1], [3, 1]]                // Chipmunk
    ],[ // mountain
        [[0, 0], [0, 1], [1, 1], [2, 1]],       // Goat
        [[0, 0], [1, 1], [0, 2], [2, 2]],       // Cougar
        [[0, 0], [2, 0], [1, 1], [2, 1]],       // Elk
        [[0, 0], [0, 1], [1, 2]],               // Eagle
        [[0, 0], [1, 0], [2, 1]],               // Coyote
        [[2, 0], [0, 1]],                       // Aatxe
        [[0, 0], [2, 0], [2, 1]]                // Pika
    ],[ // moon
        [[0, 0], [0, 1], [2, 1], [2, 2]],       // Moonkey
        [[1, 0], [1, 2], [0, 3], [2, 3]],       // Lunar Tick
        [[1, 0], [0, 1], [1, 1], [2, 1]],       // Tribble
        [[0, 0], [0, 1], [1, 1]],               // Moonicorn
        [[0, 0], [2, 0], [1, 2]],               // Luna Moth
        [[0, 0], [1, 2]],                       // Jade Rabbit
        [[1, 0], [2, 1], [0, 2]]                // Babmoon
    ],[ // mars
        [[0, 0], [1, 0], [0, 1], [1, 1]],       // Rock
        [[1, 0], [1, 1], [0, 2], [1, 2]],       // Marsmot
        [[0, 0], [2, 0], [2, 1], [1, 2]],       // Marsmoset
        [[1, 0], [0, 1], [2, 1]],               // Rover
        [[0, 0], [2, 0], [1, 1]],               // Martian
        [[0, 0], [0, 3]],                       // Marsmallow
        [[0, 0], [2, 0], [3, 1]]                // Marsten
    ]
];

let grid = [];
let grid_state = [];
let grid_probs = [];

let animal_div;
let animal_domrefs = [];
let area_index = 0;

let animal_indices_sel = [];
let animal_sel_valids = [];
let computed = false;
let highest_animal_probs = [];
let highest_prob = -1;

function resetGrid() {
    for (let i = 0; i < 5; i++) {
        grid[i] = [[], [], [], [], []];
        grid_state[i] = [0, 0, 0, 0, 0];
        grid_probs[i] = [[], [], [], [], []];
    }
    computed = false;
}

function reset() {
    resetGrid();

    animal_domrefs.forEach((domref) => domref.remove());
    animal_domrefs = [];

    for (let i = 0; i < animal_names[area_index].length; i++) {
        animal = animal_names[area_index][i];
        var domref = createCheckbox(animal, false);
        domref.changed(checkboxEvent)
        animal_div.child(domref);
        animal_domrefs.push(domref);
    }

    animal_indices_sel = [];
    animal_sel_valids = [];
    highest_animal_probs = [];
    highest_prob = -1;
}

function checkboxEvent() {
    resetGrid();

    animal_indices_sel = []
    for (let i = 0; i < animal_domrefs.length; i++) {
        if (animal_domrefs[i].checked()) {
            animal_indices_sel.push(i);
        }
    }

    compute();
}

function selectArea() {
    area_index = areas.indexOf(this.value());
    console.log(area_index);

    reset();
}

function computeProbs(cur_grid_state, tmp_grid_state) {
    animal_sel_valids = [];
    highest_animal_probs = [];
    highest_prob = -1;

    // iterate over the selected animals supposedly present in the grid
    for (let ai = 0; ai < animal_indices_sel.length; ai++) {
        // reset highest probability
        highest_animal_probs[ai] = -1;
        // get the pattern for this animal
        let animal_index = animal_indices_sel[ai];
        let animal_pattern = animal_patterns[area_index][animal_index];
        let valid_starts = 0;

        // reset probability
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                grid[j][i][ai] = 0;
            }
        }

        // check if this animal needs to overlap certain squares
        let must_overlap = false;
        let n_overlaps = 0
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                // grid_state uses 0, 1 as ??? and None states, respectively, so offset by 2
                let m = cur_grid_state[j][i];
                let n = tmp_grid_state[j][i];
                if (m - 2 == ai || n - 2 == ai) {
                    must_overlap = true;
                    n_overlaps++;
                }
            }
        }

        // test each square if it can be a starting square
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                let okay = true;
                // count overlapping squares to make sure we overlap all squares
                let overlaps = 0;
                // iterate over the offsets in the pattern
                for (let k = 0; k < animal_pattern.length; k++) {
                    let xoff = animal_pattern[k][0], yoff = animal_pattern[k][1];
                    let nx = i + xoff, ny = j + yoff;
                    if (nx >= 5 || ny >= 5) {
                        okay = false;
                        break;
                    }
                    let cur_state = cur_grid_state[ny][nx];
                    let tmp_state = tmp_grid_state[ny][nx];
                    let cur_wrong_overlap = (cur_state != 0 && cur_state - 2 != ai);
                    let tmp_wrong_overlap = (tmp_state != 0 && tmp_state - 2 != ai);
                    if (cur_wrong_overlap || tmp_wrong_overlap) {
                        okay = false;
                        break;
                    }
                    if (cur_state - 2 == ai || tmp_state - 2 == ai) {
                        overlaps++;
                    }
                }

                if (okay && (!must_overlap || (must_overlap && overlaps == n_overlaps))) {
                    valid_starts++;
                    for (let k = 0; k < animal_pattern.length; k++) {
                        let xoff = animal_pattern[k][0], yoff = animal_pattern[k][1];
                        let nx = i + xoff, ny = j + yoff;
                        grid[ny][nx][ai] = (grid[ny][nx][ai] || 0) + 1
                    }
                }
            }
        }
        animal_sel_valids[ai] = valid_starts;
    }

    // iterate over each animal to see if we have probabilities that are 100%
    let changed = false;
    for (let ai = 0; ai < animal_indices_sel.length; ai++) {
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                // check if this grid has 100% probs
                if (grid[j][i][ai] == animal_sel_valids[ai]) {
                    // if so, ensure that cur_grid and tmp_grid is 0 (to avoid repeating)
                    if (cur_grid_state[j][i] == 0 && tmp_grid_state[j][i] == 0) {
                        // set tmp_grid_state to this exact animal
                        tmp_grid_state[j][i] = ai + 2;
                        changed = true;
                    }
                }
            }
        }
    }
    if (changed) computeProbs(cur_grid_state, tmp_grid_state);
}

function compute() {
    let tmp_grid = [];
    // reset tmp_grid
    for (let i = 0; i < 5; i++) {
        tmp_grid[i] = [0, 0, 0, 0, 0];
    }
    // call recursive function
    computeProbs(grid_state, tmp_grid);
    // compute global probs
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (grid_state[j][i] == 0) {
                let total_prob = 0;
                for (let k = 0; k < animal_indices_sel.length; k++) {
                    probability = Math.round((grid[j][i][k] || 0) / animal_sel_valids[k] * 100);
                    probability = probability || 0;
                    grid_probs[j][i][k] = probability;

                    if (probability < 100) {
                        total_prob += probability;
                    }

                    if (probability < 100) {
                        if (highest_animal_probs[k] == -1 || probability > highest_animal_probs[k]) {
                            highest_animal_probs[k] = probability;
                        }
                    }
                }

                if (highest_prob == -1 || total_prob > highest_prob) {
                    highest_prob = total_prob;
                }
            }
        }
    }
    computed = true;
}

function setup() {
    createCanvas(width, height);

    animal_div = select('.animals')

    resetGrid();

    let reset_btn = createButton('Reset');
    reset_btn.mousePressed(reset);
    select('.reset_btn').child(reset_btn);

    let area_sel_div = select('.area_select');
    let sel = createSelect();
    areas.forEach((area_name) => {
        sel.option(area_name);
    });
    sel.changed(selectArea);
    area_sel_div.child(sel);

    reset();
}

function draw() {
    background(255);

    let offset = spacing;

    rectMode(CORNER);
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (grid_state[j][i] == 0) {
                fill(255);
            } else if (grid_state[j][i] == 1) {
                fill('#db6c4b');
            } else {
                fill('#6ecc70');
            }
            square(i * (spacing + sq_size) + offset, j * (spacing + sq_size) + offset, sq_size);
        }
    }
    fill(255);

    // write grid
    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    fill(0);
    offset = spacing + sq_size / 2;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            textSize(12);
            if (grid_state[j][i] == 0) {
                text('???', i * (spacing + sq_size) + offset, j * (spacing + sq_size) + offset - 2 * spacing);
                if (computed) {
                    textSize(9);
                    for (let k = 0; k < animal_indices_sel.length; k++) {
                        if (grid_probs[j][i][k] == highest_animal_probs[k] && grid_probs[j][i][k] > 0) {
                            textSize(10);
                            textStyle(BOLD);
                            fill(255, 0, 0);
                        }
                        text(animal_names[area_index][animal_indices_sel[k]] + ': ' + grid_probs[j][i][k] + '%', i * (spacing + sq_size) + offset, j * (spacing + sq_size) + offset + k * spacing);
                        textStyle(NORMAL);
                        fill(0, 0, 0);
                    }

                    textSize(12);
                }
            } else if (grid_state[j][i] == 1) {
                text('None', i * (spacing + sq_size) + offset, j * (spacing + sq_size) + offset - 2 * spacing);
            } else {
                let k = grid_state[j][i];
                text(animal_names[area_index][animal_indices_sel[k - 2]], i * (spacing + sq_size) + offset, j * (spacing + sq_size) + offset - 2 * spacing);
            }
        }
    }

    // special markings
    // mark squares that have 100% probability
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (grid_state[j][i] == 0) {
                let total_prob = 0;
                for (let k = 0; k < animal_indices_sel.length; k++) {
                    if (grid_probs[j][i][k] == 100) {
                        fill(0, 255, 0, 40);
                        square(i * (spacing + sq_size) + offset, j * (spacing + sq_size) + offset, sq_size);
                        total_prob = -1;
                    } else if (grid_probs[j][i][k] == highest_animal_probs[k] && grid_probs[j][i][k] > 0) {
                        fill(0, 0, 255, 40);
                        square(i * (spacing + sq_size) + offset, j * (spacing + sq_size) + offset, sq_size);
                    }
                    
                    if (total_prob >= 0 && grid_probs[j][i][k] < 100) {
                        total_prob += grid_probs[j][i][k];
                    }
                }

                if (total_prob == highest_prob && total_prob > 0) {
                    fill(255, 0, 0, 255);
                    circle(i * (spacing + sq_size) + offset, j * (spacing + sq_size) + offset - 4.5 * spacing, spacing);
                }
            }
        }
    }
}

function mouseClicked() {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            bbox_x = i * (spacing + sq_size) + spacing;
            bbox_y = j * (spacing + sq_size) + spacing;
            if (mouseX >= bbox_x && mouseX <= bbox_x + sq_size) {
                if (mouseY >= bbox_y && mouseY <= bbox_y + sq_size) {
                    grid_state[j][i] = (grid_state[j][i] + 1) % (animal_indices_sel.length + 2);
                }
            }
        }
    }
    compute();
}