import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    useEffect(()=>{
        const url = `http://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res=> res.json())
        .then(data => setFriend(data));
    }, [])
    return (
        <div>
            <p>{friend.name} : {friendId} </p>
            <h3>Name: {friend.name}</h3>
            <p>Email: {friend.email}</p>
            <p>Website; {friend.website}</p>
            <p>Phone: {friend.phone}</p>

        </div>
    );
};

export default FriendDetail;