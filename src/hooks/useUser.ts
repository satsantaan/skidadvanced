export function useUser() {
    const registerUser = async (email: string, password: string, name: string, role: string) => {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name, role })
      });
      return res.json();
    };
  
    return { registerUser };
  }
  