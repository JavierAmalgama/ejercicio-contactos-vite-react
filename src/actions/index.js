const USERS = 'http://react-vite.local/wp-json/wp/v2/users';

export async function getContacts() {
    let contacts = await fetch(USERS)
        .then(res => res.json())
    
    return contacts;
}

export async function getSingleUser(user_id) {
    let user = await fetch(`${USERS}/${user_id}`)
        .then(res => res.json());
    
    return user;
}