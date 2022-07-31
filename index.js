const faker = require("faker");
const express = require("express");
const app = express();
const port = 8000;

const userObj = () => (
    {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.LastName(),
        phoneNumber: faker.phone.phoneNumer(),
        email: faker.internet.email(),
        password: faker.internet.password(),
});

const companyObj = () => ({
    _id: faker.datatype.uuid(),
    name: faker.company.comapnyName(),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
    },
});
app.get("/api/users/new", (req, res) => {
    const newUser = generateUserObj();
    res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
    const newCompany = comanyObj();
    res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
    const newUser = userObj();
    const newComany = comanyObj();
    const responseObj = {
        user: newUser,
        company: newCompany,
    };
res.json(responseObj);
});

app.listen(port, () => console.log('express server is running on port ${port}') );