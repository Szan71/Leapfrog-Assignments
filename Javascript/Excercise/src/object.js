// Define an object containing information about yourself. The object needs to include 'name', 'address', 'emails', 'interests' and 'education'. The 'education' key needs to be an array of objects containing keys 'name' and 'enrolledDate'.


const obj = {
    name: 'Sujan Khadka',
    address: 'Lokanthali, Bhaktapur',
    email: 'thenamessuzan@gmail.com',
    interests: 'Music, Coding, Gardening',
    education: [{
            name: 'Nepal Police School',
            enrolledDate: '2065-01-18'
        },
        {
            name: 'DAV College',
            enrolledDate: '2071-04-18'
        },
        {
            name: 'Trinity International College',
            enrolledDate: '2074-07-17'
        }
    ]
}

console.log(obj);


// Using the object defined previously iterate over the 'education' key and print a list of output in the console as follows:
// Name: ABC School of Schoolery, Date: 2000
// Name: BCD School of Trickery, Date: 2006.

const edu = obj.education;

edu.forEach((value) => {
    console.log('Name: ', value.name, ', Date:', value.enrolledDate);
})