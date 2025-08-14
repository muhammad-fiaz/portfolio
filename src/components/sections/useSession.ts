import { useEffect, useState } from 'react';

export function useSession() {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    // For demo: get GitHub username from localStorage
    setUser(localStorage.getItem('githubUser'));
  }, []);

  return { user };
}
