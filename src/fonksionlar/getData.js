async function getData(setPosts, setLoading, setError) {
  setLoading(true);
  try {
    const responsePosts = await fetch("https://jsonplaceholder.typicode.com/posts");
    const postsData = await responsePosts.json();

    const responseUsers = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersData = await responseUsers.json();

    
    const postsWithUser = postsData.map(post => {
      const user = usersData.find(u => u.id === post.userId);
      return {
        ...post,
        username: user ? user.username : "Bilinmiyor"
      };
    });

    setPosts(postsWithUser);
  } catch (error) {
    setError("Veri çekme hatası");
  } finally {
    setLoading(false);
  }
}

export default getData;