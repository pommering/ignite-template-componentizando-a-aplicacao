import { useEffect, useState } from 'react';
import { Button } from '../components/Button';
import { api } from '../services/api';

import { GenreResponseProps } from '../@types/genre'

interface SideBarProps {
  handleClickButton: (id:number) => void;
  selectedGenreId: number;
}

export function SideBar(props:SideBarProps) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  return (
  <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => props.handleClickButton(genre.id)}
          selected={props.selectedGenreId === genre.id}
        />
      ))}
    </div>
  </nav>
  )
}