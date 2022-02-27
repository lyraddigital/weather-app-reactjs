import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { ClipLoader } from 'react-spinners';

import style from './AutocompleteInput.module.scss';

interface AutocompleteInputProps {
  inputProps: (props: {
    placeholder: string;
    className: string;
  }) => DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  isLoading: boolean;
}

export const AutocompleteInput = ({
  inputProps,
  isLoading,
}: AutocompleteInputProps): JSX.Element => {
  return (
    <>
      <input
        {...inputProps({
          placeholder: 'Search Places ...',
          className: style.autoCompleteInput,
        })}
      />
      {isLoading ? (
        <div className={style.loadingIcon}>
          <ClipLoader size={24} color="#017" />
        </div>
      ) : null}
    </>
  );
};
