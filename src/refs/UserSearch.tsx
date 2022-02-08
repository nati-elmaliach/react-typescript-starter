import { useEffect } from 'react';
import { useState, useRef } from 'react';

const users = [
  { name: 'nati', age: 20 },
  { name: 'noa', age: 50 },
  { name: 'alex', age: 20 },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input
        ref={inputRef}
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Search User</button>
      <div>
        {user?.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
