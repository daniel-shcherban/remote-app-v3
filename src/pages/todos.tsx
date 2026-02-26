import { useQuery } from "@tanstack/react-query";

const BASE = "https://jsonplaceholder.typicode.com";

interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

async function fetchTodos(): Promise<Todo[]> {
  const res = await fetch(`${BASE}/todos?_limit=10`);
  if (!res.ok) throw new Error("Failed to fetch todos");
  return res.json();
}

async function fetchPosts(): Promise<Post[]> {
  const res = await fetch(`${BASE}/posts?_limit=5`);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export default function Todos() {
  const todos = useQuery({ queryKey: ["todos"], queryFn: fetchTodos });
  const posts = useQuery({ queryKey: ["posts"], queryFn: fetchPosts });

  return (
    <div>
      <h1>Todos</h1>
      {todos.isLoading && <p>Loading todos...</p>}
      {todos.isError && <p>Failed to load todos.</p>}
      <ul>
        {todos.data?.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.title}
          </li>
        ))}
      </ul>

      <h2>Posts</h2>
      {posts.isLoading && <p>Loading posts...</p>}
      {posts.isError && <p>Failed to load posts.</p>}
      <ul>
        {posts.data?.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
