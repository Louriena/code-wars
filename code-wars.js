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