const functions = require("./functions"); //e5

// import functions from './functions' //y this doesnt wrk

const initDatabase = () => console.log("Databse Intialized...");
const closeDatabase = () => console.log("Databse Closed...");

beforeEach(() => initDatabase()); //how to run something before a function using beforeEach()
afterEach(() => closeDatabase()); //how to run something after a function using afterEach()
// //Note: each "test()" is a function
// //similarly, we can use beforeAll() & afterAll()
// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// // moreover we can specify which functions to run for certain functions(in this case, tests) only:

const nameCheck = () => console.log("checking names..");
describe("Checking names", () => {
  beforeEach(() => nameCheck());

  test("User is Jeff", () => {
    const user = "Jeff";
    expect(user).toBe("Jeff");
  });

  test("User is Karen", () => {
    const user = "Karen";
    expect(user).toBe("Karen");
  });
});

test("Adds 2 & 2 to give 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 & 2 to NOT give 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// check for truty & falsy values
//toBeNull matches only null
//toBeUndefined matches only undefined
//toBeDefined is the opposite of toBeUndefined
//toBeTruthy matches anything than an if statement treats as true
//toBeFalsy matches anything that an if statement treats as false

test("should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

// toBe is used for primitive types
// cannot use toBe for comparing objects, use toEqual

test("John Jersey should be returned", () => {
  expect(functions.createUser()).toEqual({
    firstName: "John",
    LastName: "Jersey",
  });
});

//Less than, greater than ..etc.
test("should be under 1600", () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

//Regex
test('There"s no I in team', () => {
  expect("teami").not.toMatch(/I/);
});
// test('There"s no I in team', () => {
//     expect('teami').not.toMatch(/I/i);
// });

//Arrays
test("Admin should be in usernames", () => {
  usernames = ["jon", "caren", "admin"];
  expect(usernames).toContain("admin");
});

//async data
test("user fetched name should be Leanne Graham", () => {
  expect.assertions(1); //expected 1 promise from async function
  //return statement is needed or else test will be over b4 promise completes
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});

//Asybc await
test("user fetched name should be Leanne Graham", async () => {
  expect.assertions(1); //expected 1 promise from async function
  //return statement is needed or else test will be over b4 promise completes
  const data = await functions.fetchUser().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});
