import { items } from './data';

export default function Page() {
  return (
    <div>
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            {item.title}
          </li>
        ))}
      </ol>
    </div>
  );
} 