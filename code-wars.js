//----------------------------------------Task 1 ----------------------------------------------------
function nbYear(p0, percent, aug, p) {
  let total_years = 0;
  let people = p0; 
  percent = percent / 100; 

  while (people < p) {
    total_years++;
    people = Math.floor(people + (people * percent) + aug); 
  }

  return total_years; 
}

//----------------------------------------Task 2 ----------------------------------------------------

function findOutlier(integers){
  let even = [];
  let odd = [];

  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      even.push(integers[i]);
    } else {
      odd.push(integers[i]);
    }
  }
  
  if (even.length === 1) {
    return even[0];
  } else {
    return odd[0];
  }
}

//----------------------------------------Task 3 ----------------------------------------------------

function separateLiquids(glass) {
  if (!glass || glass.length === 0) { // Обработка пустого или некорректного ввода
    return [];
  }

  const density = { 
    'H': 1.36,
    'W': 1.00,
    'A': 0.87,
    'O': 0.80
  };

  let liquids = []; 

  for (let i = 0; i < glass.length; i++) { 
    for (let j = 0; j < glass[i].length; j++) { 
      liquids.push(glass[i][j]); 
    }
  }

  liquids.sort((a, b) => density[a] - density[b]); 

  let result = []; 
  let k = 0; 

  for (let i = 0; i < glass.length; i++) {
    let row = [];
    for (let j = 0; j < glass[0].length; j++) { 
      row.push(liquids[k]); 
      k++;
    }
    result.push(row); 
  }

  return result;
}