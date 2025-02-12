// Q1) Create an array of states in india.
// Remove all the names starting with vowels from the list. Use array.filter


const states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];

const filteredStates = states.filter(state => {
  const firstLetter = state[0]; // Get the first letter
  return !["A", "E", "I", "O", "U"].includes(firstLetter.toUpperCase());
});

console.log(filteredStates);
