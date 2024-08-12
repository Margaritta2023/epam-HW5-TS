// Exercise 4: Asynchronous Functions and Promises
// Task: Write an asynchronous function that fetches data from a
// mock API and returns the data. Use Promise and async/await.

interface User {
    id: number;
    name: string;
    email: string;
}


async function fetchUserData(): Promise<User> {
    try {

        const response = await fetch('https://mocki.io/v1/ae01596f-8035-43bf-b6b7-fd927c9a3165');
        //Created a mock api to match the User interface  on https://mocki.io/fake-json-api
        const data: User = await response.json();
        return data;
    } catch (error) {
        console.error('Error', error.message);
        throw error; 
    }
}

async function showUserData() {
    try {
        const user = await fetchUserData();
        console.log('User', user);
    } catch (error) {
        console.error('Error occured:', error.message);
    }
}

showUserData();
