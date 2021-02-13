import { dbService } from 'fbase';
import React, { useEffect, useState } from "react";

export default function Home({ userObj }) {
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState([]);

  // get message
  // const getNweets = async () => {
  //   const dbNweets = await dbService.collection("nweets").get();
  //   dbNweets.forEach(document => {
  //     const nweetObject = {
  //       ...document.data(),
  //       id: document.id,
  //     }
  //     setNweets(prev => [nweetObject, ...prev]);
  //   });
  // }

  useEffect(() => {
    // getNweets();
    dbService.collection("nweets").onSnapshot(snapshot => {
      const nweetArray = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }))
      setNweets(nweetArray);
    })
  }, []);

  // create message
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection("nweets").add({
      text: nweet,
      createdAt: Date.now(),
      creatorId: userObj.uid
    })
    setNweet("");
  };

  const onChange = (event) => {
    const { target: { value } } = event;
    setNweet(value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={nweet} type="text" placeholder="what's on your mind?" maxLength={120} onChange={onChange} />
        <input type="submit" value="Nweet" />
      </form>
      <ul>
        {nweets.map(nweet => (
          <li key={nweet.id}>
            <h2>{nweet.text}</h2>
          </li>
        ))}
      </ul>
    </div>
  )
} 