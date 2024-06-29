// userInfo.js

function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => ({
        id: index + 1,
        originalName: name,
        modifiedName: modifiedNames[index]
    }));
}

// Example usage:
// const names = ['Alice', 'Bob', 'Charlie'];
// const modifiedNames = ['ALICE', 'bob', 'CHARLIE'];
// console.log(createUserProfiles(names, modifiedNames));
// [
//     { id: 1, originalName: 'Alice', modifiedName: 'ALICE' },
//     { id: 2, originalName: 'Bob', modifiedName: 'bob' },
//     { id: 3, originalName: 'Charlie', modifiedName: 'CHARLIE' }
// ]
