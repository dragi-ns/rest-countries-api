import { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  StyledSearchInputContainer,
  StyledSearchInput,
  StyledSearchInputClear,
} from '../styles/StyledSearchInput';
import { ReactComponent as Close } from '../assets/close.svg';

export default function SearchInput() {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [inputValue, setInputValue] = useState('');
  const timeoutId = useRef(null);

  useEffect(() => {
    const currentSearchValue = searchParams.get('search')?.trim() ?? '';
    if (currentSearchValue !== inputValue) {
      setInputValue(currentSearchValue);
    }
  }, [searchParams]);

  const handleValueChange = (event) => {
    let newValue = event.target.value.trimStart();
    setInputValue(newValue);

    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      newValue = newValue.trimEnd();
      if (!newValue) {
        setSearchParams({});
      } else {
        setSearchParams({ search: newValue });
      }
    }, 500);
  };

  return (
    <StyledSearchInputContainer>
      <StyledSearchInput
        type="text"
        placeholder="Search for a country..."
        value={inputValue}
        onChange={handleValueChange}
      />
      {inputValue && (
        <StyledSearchInputClear onClick={() => setSearchParams({})}>
          <Close />
        </StyledSearchInputClear>
      )}
    </StyledSearchInputContainer>
  );
}
