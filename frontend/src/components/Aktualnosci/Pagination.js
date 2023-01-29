import Pagination from 'react-bootstrap/Pagination';

function Paginat({ postsPerPage, totalPosts, paginate, active }) {
  const PageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    PageNumbers.push(i);
  }
  return (
    <Pagination>
      <Pagination.Prev
        onClick={() => {
          if (active > 1) {
            paginate(active - 1);
          }
        }}
      />
      {PageNumbers.map(number => (
        <Pagination.Item key={number}
          onClick={() => { paginate(number) }}
          active={number === active}
        >
          {number}
        </Pagination.Item>
      ))}
      <Pagination.Next
        onClick={() => {
          if (active < 5) {
            paginate(active + 1);
          }
        }}
      />

    </Pagination>
  );
}

export default Paginat;