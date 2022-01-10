
interface HeaderProps {
  category: string;
}

export function Header(props:HeaderProps) { 
  return ( 
    <header>
      <span className="category">Categoria:<span> {props.category}</span></span>
    </header>
  );
};