const spacing = 10;
const width = 700;
const height = 700;
const sq_size = (width - 6 * spacing) / 5;

const names_1 = ['Sheep', 'Pig', 'Rabbit', 'Horse', 'Cow', 'Unicorn'];
const names_2 = ['Kangaroo', 'Platypus', 'Crocodile', 'Koala', 'Cockatoo', 'Tiddalik'];
const names_3 = ['Zebra', 'Hippo', 'Giraffe', 'Lion', 'Elephant', 'Gryphon'];
const names_4 = ['Bear', 'Skunk', 'Beaver', 'Moose', 'Fox', 'Sasquatch'];
const names_5 = ['Penguin', 'Seal', 'Muskox', 'Polar Bear', 'Walrus', 'Yeti'];
const names_6 = ['Monkey', 'Toucan', 'Gorilla', 'Panda', 'Tiger', 'Phoenix'];
const names_7 = ['Diplodocus', 'Stegosaurus', 'Raptor', 'T-Rex', 'Triceratops', 'Dragon'];
const names_8 = ['Wooly Rhinoceros', 'Giant Sloth', 'Dire Wolf', 'Sabertooth Tiger', 'Wooly Mammoth', 'Akhlut'];
const names_9 = ['Raccoon', 'Pigeon', 'Rat', 'Squirrel', 'Opossum', 'Sewer Turtle'];
const names_10 = ['Goat', 'Cougar', 'Elk', 'Eagle', 'Coyote', 'Aatxe'];
const names_11 = ['Moonicorn', 'Lunar Tick', 'Moonkey', 'Luna Moth', 'Tribble', 'Jade Rabbit'];
const names_12 = ['Rock', 'Marsmot', 'Marsmoset', 'Rover', 'Martian', 'Marsmallow'];
const animal_names = [names_1, names_2, names_3, names_4, names_5, names_6, names_7, names_8, names_9, names_10, names_11, names_12];
const areas = ['Farm', 'Outback', 'Savanna', 'Northern', 'Polar', 'Jungle', 'Jurassic', 'Ice Age', 'City', 'Mountain', 'Moon', 'Mars'];

const animal_patterns = [
    [
        [[0, 0], [1, 0], [2, 0], [3, 0]],
        [[0, 0], [1, 0], [0, 1], [1, 1]],
        [[0, 0], [0, 1], [0, 2], [0, 3]],
        [[0, 0], [0, 1], [0, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 0], [1, 1], [2, 1]]
    ],[
        [[0, 0], [1, 1], [2, 2], [3, 3]],
        [[0, 0], [1, 0], [1, 1], [2, 1]],
        [[0, 0], [1, 0], [2, 0], [3, 0]],
        [[0, 0], [1, 0], [1, 1]],
        [[0, 0], [1, 1], [1, 2]],
        [[1, 0], [0, 1], [2, 1]]
    ],[
        [[1, 0], [0, 1], [2, 1], [1, 2]],
        [[0, 0], [2, 0], [0, 2], [2, 2]],
        [[0, 0], [0, 1], [0, 2], [0, 3]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 0], [1, 0], [0, 1]],
        [[0, 0], [2, 0], [1, 1]]
    ],[
        [[0, 0], [1, 0], [1, 1], [1, 2]],
        [[1, 0], [2, 0], [0, 1], [1, 1]],
        [[2, 0], [0, 1], [1, 1], [2, 2]],
        [[0, 0], [2, 0], [1, 1]],
        [[0, 0], [1, 0], [2, 1]],
        [[0, 0], [0, 1]]
    ],[
        [[1, 0], [1, 1], [0, 2], [2, 2]],
        [[0, 0], [1, 1], [3, 1], [2, 2]],
        [[0, 0], [1, 0], [0, 1], [2, 1]],
        [[0, 0], [2, 0], [2, 1]],
        [[0, 0], [1, 1], [2, 1]],
        [[0, 0], [0, 3]]
    ],[
        [[0, 0], [2, 0], [1, 1], [3, 1]],
        [[1, 0], [0, 1], [1, 2], [1, 3]],
        [[0, 0], [2, 0], [0, 1], [2, 1]],
        [[2, 0], [0, 1], [2, 2]],
        [[0, 0], [2, 0], [3, 0]],
        [[0, 0], [2, 2]]
    ],[
        [[0, 0], [1, 1], [2, 1], [1, 2]],
        [[1, 0], [2, 0], [0, 1], [3, 1]],
        [[0, 0], [1, 0], [1, 1], [2, 2]],
        [[0, 0], [0, 3], [1, 3]],
        [[0, 0], [2, 1], [0, 2]],
        [[0, 0], [2, 1]]
    ],[
        [[2, 0], [0, 1], [3, 1], [1, 2]],
        [[0, 0], [2, 1], [0, 2], [2, 2]],
        [[1, 0], [0, 1], [3, 1], [1, 2]],
        [[0, 0], [2, 1], [1, 2]],
        [[1, 0], [0, 1], [2, 2]],
        [[2, 0], [0, 1], [2, 2]]
    ],[
        [[0, 0], [2, 0], [0, 1], [3, 1]],
        [[0, 0], [1, 1], [1, 2], [2, 2]],
        [[0, 0], [1, 0], [1, 1], [3, 1]],
        [[2, 0], [0, 1], [1, 2]],
        [[0, 0], [0, 1], [2, 1]],
        [[0, 0], [1, 0]]
    ],[
        [[0, 0], [0, 1], [1, 1], [2, 1]],
        [[0, 0], [1, 1], [0, 2], [2, 2]],
        [[0, 0], [2, 0], [1, 1], [2, 1]],
        [[0, 0], [0, 1], [1, 2]],
        [[0, 0], [1, 0], [2, 1]],
        [[2, 0], [0, 1]]
    ],[
        [[0, 0], [0, 1], [1, 1]],
        [[1, 0], [1, 2], [0, 3], [2, 3]],
        [[0, 0], [0, 1], [2, 1], [2, 2]],
        [[0, 0], [2, 0], [1, 3]],
        [[1, 0], [0, 1], [1, 1], [2, 1]],
        [[0, 0], [1, 2]]
    ],[
        [[0, 0], [1, 0], [0, 1], [1, 1]],
        [[1, 0], [1, 1], [0, 2], [1, 2]],
        [[0, 0], [2, 0], [2, 1], [1, 2]],
        [[1, 0], [0, 1], [2, 1]],
        [[0, 0], [2, 0], [1, 1]],
        [[0, 0], [0, 3]]
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

    computeProbabilities();
}

function selectArea() {
    area_index = areas.indexOf(this.value());
    console.log(area_index);

    reset();
}

function computeProbabilities() {
    animal_sel_valids = [];
    highest_animal_probs = [];
    highest_prob = -1;

    let anim_100 = [];

    while (true) {
        let new100 = false;

        for (let ai = 0; ai < animal_indices_sel.length; ai++) {
            if (!anim_100.includes(ai)) {
                    
                highest_animal_probs[ai] = -1;
                // get the corresponding pattern
                let animal_index = animal_indices_sel[ai];
                let animal_pattern = animal_patterns[area_index][animal_index];
                let valid_starts = 0;
                // reset the probability computations for this animal
                for (let i = 0; i < 5; i++) {
                    for (let j = 0; j < 5; j++) {
                        grid[j][i][ai] = 0;
                    }
                }

                // check if the grid_state contains any squares already
                let must_overlap = false;
                let n_overlaps = 0
                for (let i = 0; i < 5; i++) {
                    for (let j = 0; j < 5; j++) {
                        let k = grid_state[j][i];
                        if (k - 2 == ai) {
                            must_overlap = true;
                            n_overlaps++;
                        }
                    }
                }

                // compute possible squares that a pattern can be
                for (let i = 0; i < 5; i++) {
                    for (let j = 0; j < 5; j++) {
                        let okay = true;
                        let overlaps = 0;
                        for (let k = 0; k < animal_pattern.length; k++) {   
                            let xoff = animal_pattern[k][0], yoff = animal_pattern[k][1];
                            let nx = i + xoff, ny = j + yoff;
                            if (nx >= 5 || ny >= 5 || (grid_state[ny][nx] != 0 && grid_state[ny][nx] - 2 != ai)) {
                                okay = false;
                                break;
                            }
                            for (let l = 0; l < anim_100.length; l++) {
                                if (grid[ny][nx][anim_100[l]] == animal_sel_valids[l]) {
                                    okay = false;
                                    break;
                                }
                            }
                            if (!okay) break;
                            if (grid_state[ny][nx] - 2 == ai) {
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

                // check if this results in a 100% chance
                for (let i = 0; i < 5; i++) {
                    for (let j = 0; j < 5; j++) {
                        if (grid[j][i][ai] == valid_starts) {
                            new100 = true;
                            anim_100.push(ai);
                            console.log('yes');
                        }
                    }
                }
            }
        }

        if (!new100) break;
    }


    // find those with the highest probabilities
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
                        text(animal_names[area_index][animal_indices_sel[k]] + ': ' + grid_probs[j][i][k] + '%', i * (spacing + sq_size) + offset, j * (spacing + sq_size) + offset + k * spacing);
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
    computeProbabilities();
}