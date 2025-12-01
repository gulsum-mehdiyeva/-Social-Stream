import styled from 'styled-components';
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;
export default function Main({ posts, text }) {
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <GridContainer>
      {filteredPosts.map(post => (
        <Card key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </Card>
      ))}
    </GridContainer>
  );
}
