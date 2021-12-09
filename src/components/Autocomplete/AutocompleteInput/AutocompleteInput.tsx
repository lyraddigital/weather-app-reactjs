import style from './AutocompleteInput.module.scss';

interface AutocompleteInputProps {
  inputProps: any;
  isLoading: boolean;
}

export const AutocompleteInput = ({
  inputProps,
  isLoading,
}: AutocompleteInputProps): JSX.Element => {
  return (
    <>
      <input
        type="text"
        {...inputProps({
          placeholder: 'Search Places ...',
          className: style.autoCompleteInput,
        })}
      />
      <div>{isLoading ? <div>...loading</div> : null}</div>
    </>
  );
};
