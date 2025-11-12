const { Given, When, Then } = require('@cucumber/cucumber');
const { assert } = require('chai');
const { request } = require('@playwright/test');

let apiContext;
let response;
let userId;
let createdUser;

const baseUrl = 'https://gorest.co.in/public/v2/';
const token = "0d6dd3f6d133dc0a21522f2c7dbbba46b7c75a74723394ffe086d8ce335f6257";

Given('the user have a valid GoRest access token', async function () {
  apiContext = await request.newContext({
    baseURL: baseUrl,
    extraHTTPHeaders: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
});

When(
  'the user create a new user. User input name : {string}, gender : {string}, email:{string}',
  async function (name, gender, email) {
    const userData = {
      id : 1001,
      name : name,
      gender: gender.toLowerCase(),
      email: `${Date.now()}_${email}`,
      status: 'active'
    };

    response = await apiContext.post("users", { data: userData });
    assert.equal(response.status(), 201);
    createdUser = await response.json();
    userId = createdUser.id;
  }
);


Then('the user should be created successfully', async function () {
  assert.property(createdUser, 'id');
  assert.equal(createdUser.name, createdUser.name);
});

When('the user get the user details', async function () {
  response = await apiContext.get(`users/${userId}`);
  assert.equal(response.status(), 200);
});

Then('the user details should match the created user', async function () {
  const userDetails = await response.json();
  assert.equal(userDetails.email, createdUser.email);
  assert.equal(userDetails.name, createdUser.name);
});

When('the user update the user names : {string}', async function (name) {
  const updatedData = { name: name };
  response = await apiContext.put(`users/${userId}`, { data: updatedData });
  assert.equal(response.status(), 200);
  createdUser = await response.json();
});

Then('the user details should be updated successfully', async function () {
  const updatedUser = await response.json();
  assert.equal(updatedUser.name, "Ikhsan");
});
