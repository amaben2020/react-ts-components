import clsx from "clsx";
import Select, {
  components,
  DropdownIndicatorProps,
  Props,
} from "react-select";

const menuStyles = "border-2 border-gray-200 bg-white rounded-lg text-start  mt-3 py-3";
const optionStyles = {
  base: " text-start p-2 cursor-pointer",
  focus: "bg-gray-100 active:bg-gray-200 text-start cursor-pointer",
  selected: "text-gray-500 text-start",

};
const controlStyles = {
  base: "border border-gray-200 bg-gray-200 rounded-lg p-6 my-6 text-start cursor-pointer",
  focus: "border-primary-600 ring-1 ring-primary-500 text-start",
  nonFocus: "border-gray-300 hover:border-gray-400 text-start",
};
const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
    </components.DropdownIndicator>
  );
};

export const Search = ({
  value,
  ...props
}: Props) => {
 
 
  const dataOptions = props.data.map(item => ({
    options: [{label: item.skill, value: item.id }]
  }))

  console.log(dataOptions);
 
  return (
    <Select
      components={{DropdownIndicator}}
      unstyled

    // previous way of styling select components, used to override base styles
      styles={{
        input: (base) => ({
          ...base,
          "input:focus": {
            boxShadow: "none",  
          },
        
        }),
      }}

      onChange={(v) => {
        const res = { skill: v.label, id: v.value }
        props.handleAddSkill(res)
      } }
      
      classNames={{
        control: ({ isFocused }) =>
        clsx(
          isFocused ? controlStyles.focus : controlStyles.nonFocus,
          controlStyles.base,
        ),
      
         menu: () => menuStyles,
      
    
        option: ({ isFocused, isSelected }) =>
        clsx(
          isFocused && optionStyles.focus,
          isSelected && optionStyles.selected,
          optionStyles.base,
          "p-6"
        ),
      }}
      value={value}
      options={dataOptions}
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      {...props}
    />
  );
};