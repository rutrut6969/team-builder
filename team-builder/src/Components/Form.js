import React, { useState } from 'react';
import { MemForm, NewInput, Card, NewTextArea, CardWrap } from './styledComps';
const initialMembers = [
  //   {
  //     name: 'Jane Doe',
  //     screenName: 'jDoe69',
  //     email: 'jdoe@gmail.com',
  //     password: 'fmadksfjsd',
  //     message: 'This is my message!'
  //   }
];
function Form() {
  const [friends, setFriends] = useState(initialMembers);
  const [members, setMembers] = useState({
    name: '',
    screenName: '',
    email: '',
    password: '',
    message: ''
  });

  const onInputChange = e => {
    const changedInput = e.target.value;
    const inputThatChanged = e.target.name;
    setMembers({
      ...members,
      [inputThatChanged]: changedInput
    });
    // console.log(members);
  };

  const onSubmit = e => {
    e.preventDefault();
    const newMember = {
      name: members.name,
      screenName: members.screenName,
      email: members.email,
      password: members.password,
      message: members.message
    };
    setFriends([...friends, newMember]);

    console.log(newMember);
    console.log(friends);
    console.log(initialMembers);
  };
  return (
    <>
      <MemForm onSubmit={onSubmit}>
        <NewInput
          type='text'
          name='name'
          id='name'
          placeholder='Full Name: '
          onChange={onInputChange}
        />
        <NewInput
          type='text'
          name='screenName'
          id='screenName'
          placeholder='Screen Name: (Optional)'
          onChange={onInputChange}
        />
        <NewInput
          type='text'
          name='email'
          id='email'
          placeholder='E-Mail: '
          onChange={onInputChange}
        />
        <NewInput
          type='password'
          name='password'
          id='password'
          placeholder='Password: '
          onChange={onInputChange}
        />
        <NewTextArea
          type='text'
          name='message'
          id='message'
          placeholder='Message: '
          onChange={onInputChange}
        />
        <button type='submit'>Submit</button>
      </MemForm>
      <CardWrap>
        {friends.map(e => (
          <Card>
            <h2>{e.name}</h2>
            <li>{e.email}</li>
            <li>{e.screenName}</li>
            <li>{e.message}</li>
          </Card>
        ))}
      </CardWrap>
    </>
  );
}
export default Form;
