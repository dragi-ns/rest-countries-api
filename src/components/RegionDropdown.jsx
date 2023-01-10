import { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  StyledRegionDropdown,
  StyledRegionDropdownTrigger,
  StyledRegionDropdownContent,
  StyledRegionDropdownItem,
} from '../styles/StyledRegionDropdown';
import { ReactComponent as ArrowDown } from '../assets/chevron-down.svg';

export default function RegionDropdown() {
  const [showContent, setShowContent] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({});
  const regions = useRef([
    'all',
    'africa',
    'america',
    'asia',
    'europe',
    'oceania',
  ]);
  const selectedRegion = useRef(regions.current[0]);

  useEffect(() => {
    const newRegion = searchParams.get('region')?.trim().toLowerCase() ?? 'all';
    if (newRegion !== selectedRegion.current) {
      selectedRegion.current = newRegion;
    }
  }, [searchParams]);

  const handleDropdownItemSelect = (region) => {
    setShowContent(false);
    setSearchParams(region !== 'all' ? { region } : {});
  };

  return (
    <StyledRegionDropdown>
      <StyledRegionDropdownTrigger
        onClick={() => setShowContent((prev) => !prev)}>
        Filter by Region
        <ArrowDown />
      </StyledRegionDropdownTrigger>
      {showContent && (
        <StyledRegionDropdownContent>
          {regions.current.map((region, index) => (
            <StyledRegionDropdownItem
              selected={selectedRegion.current === region}
              key={index}
              onClick={() => handleDropdownItemSelect(region)}>
              {toTitleCase(region)}
            </StyledRegionDropdownItem>
          ))}
        </StyledRegionDropdownContent>
      )}
    </StyledRegionDropdown>
  );
}

const toTitleCase = (word) => {
  return word ? `${word[0].toUpperCase()}${word.slice(1)}` : word;
};
